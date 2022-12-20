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
const title = ref(t('Thawed_rbc_production'))
const formState = reactive({
  laundering_1: '',
  laundering_2: '',
  laundering_3: '',
  spent_weighing_solution: '',
  sample_for_quality_control: '',
})

const formErrors = reactive({
  laundering_1: [],
  laundering_2: [],
  laundering_3: [],
  spent_weighing_solution: [],
  sample_for_quality_control: [],
})
const healthcareFacilitiesList = ref([])

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
  <VModal :open="isOpen" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <div class="box">
        <table class="table is-fullwidth">
          <tbody>
            <tr>
              <td>
                <span class="">{{ $t('Donation_code') }}: </span>
                <span class="has-text-info">{{ product.donation_code }}</span>
              </td>
              <td>
                <span class="">{{ $t('Donation_date') }}: </span>
                <span class="has-text-info">{{ product.donation_date }}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span class=""
                  >{{ $t('Received_cryopreserved_erythrocyte_mass') }}:
                </span>
                <span class="has-text-info">{{ product.quantity }}</span>
              </td>
              <td>
                <p class="has-text-light">
                  <span class="">{{ $t('Blood_type') }}: </span>
                  <span class="has-text-info">{{ product.blood_type }}</span>
                </p>
                <p class="has-text-light">
                  <span class="">{{ $t('Rh_factor') }}: </span>
                  <span class="has-text-info">{{ product.rh_factor }}</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr class="is-divider" />
      <div class="box">
        <table class="table">
          <tbody>
            <tr>
              <td class="">
                <h5>{{ $t('Defrost_and_laundering_date') }}</h5>
              </td>
              <td>
                <VField>
                  <VControl>
                    <VInput v-model="formState.laundering_date" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr class="has-background-info-dark">
              <th class="has-text-dark" colspan="2">
                {{ $t('Salt_solution_consumed_ml') }}
              </th>
            </tr>
            <tr>
              <td class="">
                <h5>1 {{ $t('Laundering') }}</h5>
              </td>
              <td>
                <VField>
                  <VControl>
                    <VInput v-model="formState.laundering_1" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td class="">
                <h5>2 {{ $t('Laundering') }}</h5>
              </td>
              <td>
                <VField>
                  <VControl>
                    <VInput v-model="formState.laundering_2" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td class="">
                <h5>3 {{ $t('Laundering') }}</h5>
              </td>
              <td>
                <VField>
                  <VControl>
                    <VInput v-model="formState.laundering_3" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td class="">
                <h5>{{ $t('Spent_weighing_solution_ml') }}</h5>
              </td>
              <td>
                <VField>
                  <VControl>
                    <VInput v-model="formState.spent_weighing_solution" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <!-- <hr class="is-divider" /> -->
            <tr>
              <td class="">
                <h5>{{ $t('Submit_sample_for_quality_control') }}</h5>
              </td>
              <td>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formState.sample_for_quality_control"
                      color="info"
                    />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td class="">
                <VButton color="info">{{ $t('Printing_label') }}</VButton>
              </td>
              <td></td>
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
        vertical-align: middle;
      }
    }
  }
}
</style>
