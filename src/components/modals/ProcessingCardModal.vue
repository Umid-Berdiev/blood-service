<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { fetchHealthcareFacilities } from '/@src/utils/api/additional'
import { ProductInterface } from '/@src/utils/interfaces'

const props = withDefaults(
  defineProps<{
    product: ProductInterface | null
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
const title = ref(t('Processing_card'))
const formState = reactive({
  divided_into_doses: 1,
  plasma: [
    {
      value: '',
      sent_for_quality_control: false,
    },
    {
      value: '',
      sent_for_quality_control: false,
    },
    {
      value: '',
      sent_for_quality_control: false,
    },
    {
      value: '',
      sent_for_quality_control: false,
    },
  ],
  erythrocyte_mass: {
    value: '',
    sent_for_quality_control: false,
    sent_for_sterility_control: false,
  },
  dose: {
    first: '',
    second: '',
  },
})

const formErrors = reactive({
  plasma: [],
  erythrocyte_mass: [],
  sent_for_quality_control: [],
  divided_into_doses: [],
  sent_for_sterility_control: [],
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
  <VModal :open="isOpen" size="big" :title="title" actions="right" @close="onClose">
    <template #content>
      <template v-if="product">
        <div class="box">
          <table class="table is-fullwidth">
            <tbody>
              <tr>
                <td>
                  <span class="">{{ $t('Donation_type') }}: </span>
                  <span class="has-text-info">{{ product.donation_type?.name }}</span>
                </td>
                <td>
                  <span class="">{{ $t('Donation_code') }}: </span>
                  <span class="has-text-info">{{ product.donation_code }}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="">{{ $t('Donation_date') }}: </span>
                  <span class="has-text-info">{{ product.date }}</span>
                </td>
                <td>
                  <span class="">{{ $t('Visit_type') }}: </span>
                  <span class="has-text-info">{{ $t(product.visit_type) }}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="">{{ $t('Quantity_ml') }}: </span>
                  <span class="has-text-info">{{ product.amount }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr class="is-divider" />
        <div class="box">
          <template v-if="product.donation_type?.id === 3">
            <h5 class="is-size-5">{{ $t('Components_received') }}:</h5>
            <br />
            <table class="table is-fullwidth">
              <tbody>
                <tr>
                  <td class="">
                    <div>
                      <VField horizontal class="is-align-items-center">
                        <h5 class="mr-3">{{ $t('Divided_into_doses') }}</h5>
                        <VControl>
                          <VInput
                            v-model="formState.divided_into_doses"
                            type="number"
                            :min="1"
                            :max="4"
                            :style="{ width: '5rem' }"
                          />
                        </VControl>
                      </VField>
                    </div>
                    <template
                      v-for="(number, numIndex) in formState.divided_into_doses"
                      :key="numIndex"
                    >
                      <VField horizontal class="is-align-items-center">
                        <h5 class="mr-3">
                          {{ $t('Plasma_FFP_ml') }} ({{ number }}-{{ $t('Dose') }})
                        </h5>
                        <VControl raw subcontrol>
                          <VInput v-model="formState.plasma[numIndex].value" />
                        </VControl>
                        <!-- </VField>
                      <VField horizontal class="is-align-items-center"> -->
                        <VControl raw subcontrol>
                          <VCheckbox
                            v-model="formState.plasma[numIndex].sent_for_quality_control"
                            :label="$t('Sample_sent_for_quality_control')"
                          />
                        </VControl>
                        <!-- <VLabel>{{ $t('Sample_sent_for_quality_control') }}</VLabel> -->
                      </VField>
                    </template>
                  </td>
                </tr>
                <tr>
                  <td>
                    <VField horizontal class="is-align-items-center">
                      <h5 class="mr-3">{{ $t('Erythrocyte_mass_ml') }}</h5>
                      <VControl>
                        <VInput v-model="formState.erythrocyte_mass.value" />
                      </VControl>
                      <VControl>
                        <VCheckbox
                          v-model="formState.erythrocyte_mass.sent_for_quality_control"
                          :label="$t('Sample_sent_for_quality_control')"
                        />
                      </VControl>
                      <VControl>
                        <VCheckbox
                          v-model="formState.erythrocyte_mass.sent_for_sterility_control"
                          :label="$t('Sample_sent_for_sterility_control')"
                        />
                      </VControl>
                    </VField>
                  </td>
                </tr>
              </tbody>
            </table>
          </template>
          <template v-if="product.donation_type?.id === 2">
            <VField horizontal class="is-align-items-center">
              <h5 class="mr-3">{{ $t('Dose') }} 1, ml</h5>
              <VControl>
                <VInput v-model="formState.dose.first" />
              </VControl>
            </VField>
            <VField horizontal class="is-align-items-center">
              <h5 class="mr-3">{{ $t('Dose') }} 2, ml</h5>
              <VControl>
                <VInput v-model="formState.dose.second" />
              </VControl>
            </VField>
          </template>
        </div>
      </template>
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
