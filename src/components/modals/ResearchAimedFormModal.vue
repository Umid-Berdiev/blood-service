<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import {
  storeHemotransmissionResearchResults,
  fetchRequestsForHemotransmissiveLaboratory,
} from '/@src/utils/api/laboratories'
import { PatientInterface } from '/@src/utils/interfaces'

interface FormProps {
  isOpen: boolean
  patient: PatientInterface | null
}

const props = withDefaults(defineProps<FormProps>(), {
  isOpen: false,
})

const emits = defineEmits<{
  (e: 'update:isOpen', isOpen: boolean): void
  (e: 'update:list'): void
}>()

const notif = useNotyf()
const { t } = useI18n()
const title = ref(t('Hemotransmission_research_results'))
const isLoading = ref(false)
const errors = reactive({
  date_analysis: [],
})
const medicalExamination = reactive({
  data: {
    date_analysis: '',
    hbsag: false,
    hbsag_test_system: '',
    hiv: false,
    hiv_test_system: '',
    antihcv: false,
    antihcv_test_system: '',
    rw: false,
    rw_test_system: '',
    hemolysis: false,
    chilez: false,
  },
  required_fields: [] as string[],
})
const hasHemolisOrHiles = ref(false)

// hooks
watch(
  () => props.patient?.last_visit?.id,
  async (newVal) => {
    if (newVal) {
      const res = await fetchRequestsForHemotransmissiveLaboratory(newVal)
      Object.assign(medicalExamination, res.result)
    }
  }
)

watch(
  [() => medicalExamination.data.hemolysis, () => medicalExamination.data.chilez],
  async (newVal) => {
    console.log({ newVal })

    if (newVal.includes(true)) {
      medicalExamination.data.hbsag = false
      medicalExamination.data.hiv = false
      medicalExamination.data.antihcv = false
      medicalExamination.data.rw = false

      hasHemolisOrHiles.value = true
    } else hasHemolisOrHiles.value = false
  }
)

// functions
async function onSubmit() {
  try {
    isLoading.value = true
    await storeHemotransmissionResearchResults(
      props.patient?.last_visit?.id as number,
      medicalExamination.data
    )
    notif.success(t('Data_saved_successfully'))
    emits('update:list')
    onClose()
  } catch (error: any) {
    if (error.response?.data.error) notif.error(error.response?.data.error)
    else Object.assign(errors, error.response?.data?.errors)
  } finally {
    isLoading.value = false
  }
}

function onClose() {
  clearFields()
  clearErrors()
  emits('update:isOpen', false)
}

function clearFields() {
  medicalExamination.data.date_analysis = ''
}

function clearErrors() {
  Object.assign(errors, {
    date_analysis: [],
  })
}

// function clearError(error: string) {
//   errors[error] = ''
// }
</script>

<template>
  <VModal
    ref="hemotransmissionLaboratoryForm"
    :open="isOpen"
    size="big"
    :title="title"
    actions="right"
    @close="onClose"
  >
    <template #content>
      <div class="columns">
        <div class="column">
          <h5 class="is-size-5 has-text-weight-medium">
            {{ $t('Donor_code') }}: {{ patient?.last_visit?.donation_code }}
          </h5>
        </div>
      </div>
      <div class="box">
        <VFlex flex-wrap="wrap" row-gap="2rem" justify-content="space-between">
          <VFlexItem flex-basis="45%">
            <VField horizontal>
              <VLabel class="my-auto mr-3 is-size-6">{{
                $t('Blood_sampling_date')
              }}</VLabel>
              <VControl>
                <VInput :value="patient?.last_visit?.blood_sample?.date" disabled />
              </VControl>
            </VField>
          </VFlexItem>
          <VFlexItem flex-basis="45%">
            <VField horizontal>
              <VLabel class="my-auto mr-3 is-size-6">{{
                $t('Blood_samples_taken_date')
              }}</VLabel>
              <VControl>
                <VInput
                  :value="patient?.last_visit?.blood_sample?.hemotransmissible_date"
                  disabled
                />
              </VControl>
            </VField>
          </VFlexItem>
          <VFlexItem flex-basis="45%">
            <VField horizontal>
              <VLabel class="my-auto mr-3 is-size-6">{{ $t('Analysis_date') }}</VLabel>
              <VControl>
                <IMaskDateInput v-model="medicalExamination.data.date_analysis" />
              </VControl>
            </VField>
          </VFlexItem>
          <VFlexItem flex-basis="45%">
            <h5>
              <span class="has-text-weight-bold">{{ $t('Visit_stage') }}</span>
              <span>{{ patient?.last_visit?.stage }}</span>
            </h5>
          </VFlexItem>
        </VFlex>
      </div>
      <br />
      <div class="table-container">
        <table class="table box is-fullwidth">
          <tbody>
            <tr>
              <td>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="medicalExamination.data.hbsag"
                      :class="[
                        medicalExamination.required_fields.includes('hbsag') &&
                          'has-text-danger',
                        'p-2',
                      ]"
                      :color="
                        medicalExamination.required_fields.includes('hbsag')
                          ? 'danger'
                          : 'primary'
                      "
                      :label="$t('HBsAg')"
                      :disabled="hasHemolisOrHiles"
                    />
                  </VControl>
                </VField>
              </td>
              <td>
                <VField horizontal class="is-justify-content-end">
                  <VLabel class="is-size-6 my-auto mr-3"
                    >{{ $t('Testing_system') }} ({{ $t('HBsAg') }})</VLabel
                  >
                  <VControl>
                    <VInput v-model="medicalExamination.data.hbsag_test_system" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="medicalExamination.data.hiv"
                      :class="[
                        medicalExamination.required_fields.includes('hiv') &&
                          'has-text-danger',
                        'p-2',
                      ]"
                      :color="
                        medicalExamination.required_fields.includes('hiv')
                          ? 'danger'
                          : 'primary'
                      "
                      :label="$t('OIDS')"
                      :disabled="hasHemolisOrHiles"
                    />
                  </VControl>
                </VField>
              </td>
              <td>
                <VField horizontal class="is-justify-content-end">
                  <VLabel class="is-size-6 my-auto mr-3"
                    >{{ $t('Testing_system') }} ({{ $t('OIDS') }})</VLabel
                  >
                  <VControl>
                    <VInput v-model="medicalExamination.data.hiv_test_system" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="medicalExamination.data.antihcv"
                      :class="[
                        medicalExamination.required_fields.includes('antihcv') &&
                          'has-text-danger',
                        'p-2',
                      ]"
                      :color="
                        medicalExamination.required_fields.includes('antihcv')
                          ? 'danger'
                          : 'primary'
                      "
                      :label="$t('AntiHCV')"
                      :disabled="hasHemolisOrHiles"
                    />
                  </VControl>
                </VField>
              </td>
              <td>
                <VField horizontal class="is-justify-content-end">
                  <VLabel class="is-size-6 my-auto mr-3"
                    >{{ $t('Testing_system') }} ({{ $t('AntiHCV') }})</VLabel
                  >
                  <VControl>
                    <VInput v-model="medicalExamination.data.antihcv_test_system" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="medicalExamination.data.rw"
                      :class="[
                        medicalExamination.required_fields.includes('rw') &&
                          'has-text-danger',
                        'p-2',
                      ]"
                      :color="
                        medicalExamination.required_fields.includes('rw')
                          ? 'danger'
                          : 'primary'
                      "
                      :label="$t('RW')"
                      :disabled="hasHemolisOrHiles"
                    />
                  </VControl>
                </VField>
              </td>
              <td>
                <VField horizontal class="is-justify-content-end">
                  <VLabel class="is-size-6 my-auto mr-3"
                    >{{ $t('Testing_system') }} ({{ $t('RW') }})</VLabel
                  >
                  <VControl>
                    <VInput v-model="medicalExamination.data.rw_test_system" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="medicalExamination.data.hemolysis"
                      :class="[
                        medicalExamination.required_fields.includes('hemolysis') &&
                          'has-text-danger',
                        'p-2',
                      ]"
                      :color="
                        medicalExamination.required_fields.includes('hemolysis')
                          ? 'danger'
                          : 'primary'
                      "
                      :label="$t('Hemolis')"
                    />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="medicalExamination.data.chilez"
                      :class="[
                        medicalExamination.required_fields.includes('chilez') &&
                          'has-text-danger',
                        'p-2',
                      ]"
                      :color="
                        medicalExamination.required_fields.includes('chilez')
                          ? 'danger'
                          : 'primary'
                      "
                      :label="$t('Hiles')"
                    />
                  </VControl>
                </VField>
              </td>
            </tr>
          </tbody>
        </table>
        <p class="has-text-danger">
          Красным цветом указаны показатели, заданные врачом-терапевтом, как обязательные
          для определения
        </p>
      </div>
    </template>
    <template #action>
      <SubmitButton :loading="isLoading" @click="onSubmit" />
    </template>
  </VModal>
</template>

<style scoped lang="scss">
.is-dark {
  .box {
    background-color: var(--dark-sidebar);
  }
}
</style>
