<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { fetchHealthcareFacilities } from '/@src/utils/api/additional'
import { ProductInterface } from '/@src/utils/interfaces'

const props = withDefaults(
  defineProps<{
    product: ProductInterface
    isOpen: boolean
  }>(),
  {
    isOpen: false,
  }
)

const emits = defineEmits<{
  (e: 'update:isOpen', value: boolean): void
  (e: 'update:status'): void
}>()

const notif = useNotyf()
const { t } = useI18n()
const isLoading = ref(false)
const title = ref(t('Product_release'))
const formState = reactive({
  sent_to_id: null,
  medical_organization_id: null,
  subdivision_id: null,
  issue_date: '',
  basis_id: null,
  received_by: '',
  sent_by: '',
  tsgsen: '',
  transfer_date: '',
  defect_reasons: [],
})

const formErrors = reactive({
  sent_to_id: [],
  medical_organization_id: [],
  subdivision_id: [],
  issue_date: [],
  basis_id: [],
  received_by: [],
  sent_by: [],
  tsgsen: [],
  transfer_date: [],
  defect_reasons: [],
})

const healthcareFacilitiesList = ref([])
const optionsSubdivision = ref([
  { id: 1, name: 'Отдел перепаратов' },
  { id: 2, name: 'Имуннологическое отделение' },
  { id: 3, name: 'Отдел переработки' },
])

const optionsSentTo = ref([
  { id: 1, name: 'На трансфузию' },
  { id: 2, name: 'На переработку' },
  { id: 3, name: 'В ЦГСЭН' },
  { id: 4, name: 'На списание' },
])

const optionsBasis = ref([
  { id: 1, name: 'По требованию' },
  { id: 2, name: 'За наличный расчет' },
  { id: 4, name: 'По справке' },
])

// hooks
onMounted(async () => {
  await fetchHealthcareFacilities().then(
    (res) => (healthcareFacilitiesList.value = res.result)
  )
})

// functions
async function submitForm() {
  try {
    isLoading.value = true

    // formData.laboratory_researches = flatten(
    //   laboratoryResearchFormFields.value.map((block) =>
    //     block.laboratory_researches.filter((field) => field.value).map((item) => item.id)
    //   )
    // )
    // // console.log({ formData })

    // await sendingToLaboratoryResearch(props.visitcard.id, formData)
    notif.success(t('Data_saved_successfully'))
    onClose()
  } catch (error: any) {
    notif.error(error.message)
    Object.assign(formErrors, error.response?.data?.errors)
  } finally {
    isLoading.value = false
  }
}

function onClose() {
  emits('update:isOpen', false)
}
</script>

<template>
  <VModal :open="isOpen" size="big" :title="title" actions="right" @close="onClose">
    <template #content>
      <div class="box">
        <table class="table is-fullwidth">
          <tbody>
            <tr>
              <td>
                <span class="">{{ $t('Component_name') }}: </span>
                <span class="has-text-info">{{ product.component_name }}</span>
              </td>
              <td>
                <span class="">{{ $t('Donation_code') }}: </span>
                <span class="has-text-info">{{ product.donation_code }}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span class="">{{ $t('Donation_date') }}: </span>
                <span class="has-text-info">{{ product.donation_date }}</span>
              </td>
              <td>
                <span class="">{{ $t('Expiry_date') }}: </span>
                <span class="has-text-info">{{ product.expiry_date }}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span class="">{{ $t('Quantity_ml') }}: </span>
                <span class="has-text-info">{{ product.quantity }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr class="is-divider" />
      <div class="box">
        <table class="table is-fullwidth">
          <tbody>
            <tr>
              <td>
                <div class="is-flex is-align-items-center">
                  <div class="mr-5">{{ $t('Send_to') }}</div>
                  <VField>
                    <VControl>
                      <Multiselect
                        v-model="formState.sent_to_id"
                        :options="optionsSentTo"
                        :placeholder="$t('Select')"
                        label="name"
                        value-prop="id"
                        :style="{ minWidth: '15rem' }"
                      />
                    </VControl>
                  </VField>
                </div>
                <br />
                <VField v-if="formState.sent_to_id === 1">
                  <VLabel>{{ $t('Healthcare_facilities_list') }}</VLabel>
                  <VControl>
                    <Multiselect
                      v-model="formState.medical_organization_id"
                      :options="healthcareFacilitiesList"
                      :placeholder="$t('Select')"
                      label="name"
                      searchable
                      value-prop="id"
                      :style="{ minWidth: '15rem' }"
                    />
                  </VControl>
                </VField>
                <VField v-if="formState.sent_to_id === 2">
                  <VLabel>{{ $t('Subdivision') }}</VLabel>
                  <VControl>
                    <Multiselect
                      v-model="formState.subdivision_id"
                      :options="optionsSubdivision"
                      :placeholder="$t('Select')"
                      label="name"
                      searchable
                      value-prop="id"
                      :style="{ minWidth: '15rem' }"
                    />
                  </VControl>
                </VField>
                <VField v-if="formState.sent_to_id === 3" :label="$t('TsGSEN')">
                  <!-- <VLabel>{{ $t('TsGSEN') }}</VLabel> -->
                  <VControl>
                    <VInput
                      v-model="formState.tsgsen"
                      :placeholder="$t('Enter_tsgsen_title')"
                    />
                  </VControl>
                </VField>
                <template v-if="formState.sent_to_id === 4">
                  <div class="is-flex is-align-items-center">
                    <div>{{ $t('Transfer_date_for_debiting') }}</div>
                    <VField class="ml-5">
                      <VControl>
                        <IMaskDateInput v-model="formState.transfer_date" />
                      </VControl>
                    </VField>
                  </div>
                  <div class="is-flex is-align-items-center">
                    <div>{{ $t('Defect_reasons') }}</div>
                    <VField class="ml-auto">
                      <VControl raw subcontrol>
                        <VCheckbox
                          v-model="formState.defect_reasons"
                          :label="$t('Shelf_life_expired')"
                          value="shelf_life_expired"
                        />
                      </VControl>
                      <VControl raw subcontrol>
                        <VCheckbox
                          v-model="formState.defect_reasons"
                          :label="$t('Container_damage')"
                          value="container_damage"
                        />
                      </VControl>
                      <VControl raw subcontrol>
                        <VCheckbox
                          v-model="formState.defect_reasons"
                          :label="$t('Other')"
                          value="other"
                        />
                      </VControl>
                    </VField>
                  </div>
                </template>
              </td>
              <td>
                <VField
                  horizontal
                  class="is-align-items-center is-justify-content-space-between"
                >
                  <VLabel>{{ $t('Issue_date') }}</VLabel>
                  <VControl>
                    <IMaskDateInput
                      v-model="formState.issue_date"
                      :style="{ width: '50%' }"
                    />
                  </VControl>
                </VField>
                <VField
                  horizontal
                  class="is-align-items-center is-justify-content-space-between"
                >
                  <VLabel>{{ $t('Basis_for_issuance') }}</VLabel>
                  <VControl>
                    <Multiselect
                      v-model="formState.basis_id"
                      :options="optionsBasis"
                      :placeholder="$t('Select')"
                      label="name"
                      value-prop="id"
                      :style="{ minWidth: '15rem' }"
                    />
                  </VControl>
                </VField>
                <VField
                  horizontal
                  class="is-align-items-center is-justify-content-space-between"
                >
                  <VLabel>{{ $t('Received_by') }}</VLabel>
                  <VControl>
                    <VInput v-model="formState.received_by" type="text" />
                  </VControl>
                </VField>
                <VField
                  horizontal
                  class="is-align-items-center is-justify-content-space-between"
                >
                  <VLabel>{{ $t('Sent_by') }}</VLabel>
                  <VControl>
                    <VInput v-model="formState.sent_by" type="text" />
                  </VControl>
                </VField>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <template #action>
      <SubmitButton type="button" :loading="isLoading" @click="submitForm" />
    </template>
  </VModal>
</template>

<style scoped lang="scss">
.is-dark {
  .box,
  .table {
    background-color: var(--dark-sidebar);
  }
}

.table {
  tbody {
    tr {
      td {
        vertical-align: top;
      }
    }
  }
}
</style>
