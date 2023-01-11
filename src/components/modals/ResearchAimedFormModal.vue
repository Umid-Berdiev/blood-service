<script setup lang="ts">
import { formatDate } from '@vueuse/core'
import { includes } from 'lodash'
import moment from 'moment'
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import {
  storeHemotransmissionResearchResults,
  fetchRequestsForHemotransmissiveLaboratory,
} from '/@src/utils/api/laboratories'
import { PatientInterface } from '/@src/utils/interfaces'

interface ResearchAimedFormInterface {
  date_analysis: string
  hbsag?: boolean
  hiv?: boolean
  hemolysis?: boolean
  chilez?: boolean
  antihcv?: boolean
  rw?: boolean
  hbsag_testing_system?: string
  hiv_testing_system?: string
  antihcv_testing_system?: string
  rw_testing_system?: string
}

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
const formFields: ResearchAimedFormInterface = reactive({
  date_analysis: moment().format('YYYY-MM-DD'),
})
const errors = reactive({
  date_analysis: [],
})
const medicalExamination = ref({
  data: {},
  required_fields: [] as string[],
})

// hooks
watchEffect(async () => {
  if (props.patient?.last_visit) {
    const res = await fetchRequestsForHemotransmissiveLaboratory(
      props.patient?.last_visit?.id
    )
    medicalExamination.value = res.result
  }
})

// functions
async function onSubmit() {
  try {
    isLoading.value = true
    await storeHemotransmissionResearchResults(props.patient?.id, formFields)
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
  Object.assign(formFields, {
    date_analysis: moment().format('YYYY-MM-DD'),
  })
}

function clearErrors() {
  Object.assign(errors, {
    date_analysis: [],
  })
}

function clearError(error: string) {
  errors[error] = ''
}
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
                <IMaskDateInput v-model="formFields.date_analysis" />
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
                      v-model="formFields.hbsag"
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
                    <VInput v-model="formFields.hbsag_testing_system" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formFields.hiv"
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
                    <VInput v-model="formFields.hiv_testing_system" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formFields.antihcv"
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
                    <VInput v-model="formFields.antihcv_testing_system" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formFields.rw"
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
                    <VInput v-model="formFields.rw_testing_system" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formFields.hemolysis"
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
                      v-model="formFields.chilez"
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
      <SubmitButton :loading="isLoading" form="hemotransmission_laboratory_form" />
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
