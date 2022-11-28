<script setup lang="ts">
import { formatDate } from '@vueuse/core'
import moment from 'moment'
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { storeHemotransmissionResearchResults } from '/@src/utils/api/patient'
import { PatientInterface } from '/@src/utils/interfaces'

interface ResearchAimedFormInterface {
  blood_samples_taken_date: string
  analysis_date: string
  hbsag?: boolean
  oids?: boolean
  hemolis?: boolean
  hiles?: boolean
  antihcv?: boolean
  rw?: boolean
  testing_system_hbsag?: string
  testing_system_oids?: string
  testing_system_antihcv?: string
  testing_system_rw?: string
}

interface FormProps {
  isOpen: boolean
  patient: PatientInterface
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
  blood_samples_taken_date: moment().format('YYYY-MM-DD'),
  analysis_date: moment().format('YYYY-MM-DD'),
})
const errors = reactive({
  blood_samples_taken_date: [],
  analysis_date: [],
  clinical_biochemical_laboratory_date: [],
})

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
    blood_samples_taken_date: moment().format('YYYY-MM-DD'),
    analysis_date: moment().format('YYYY-MM-DD'),
    clinical_biochemical_laboratory_date: moment().format('YYYY-MM-DD'),
  })
}

function clearErrors() {
  Object.assign(errors, {
    blood_samples_taken_date: [],
    analysis_date: [],
    clinical_biochemical_laboratory_date: [],
  })
}

function clearError(error: string) {
  errors[error] = ''
}
</script>

<template>
  <VModal :open="isOpen" size="big" :title="title" actions="right" @close="onClose">
    <template #content>
      <div class="columns">
        <div class="column">
          <h5 class="is-size-5 has-text-weight-medium">
            {{ $t('Donor_code') }}: {{ patient.last_visit?.donation_code }}
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
                <VInput
                  :value="
                    formatDate(new Date(patient.last_visit?.updated_at), 'YYYY-MM-DD')
                  "
                  disabled
                />
              </VControl>
            </VField>
          </VFlexItem>
          <VFlexItem flex-basis="45%">
            <VField horizontal>
              <VLabel class="my-auto mr-3 is-size-6">{{
                $t('Blood_samples_taken_date')
              }}</VLabel>
              <VControl>
                <IMaskDateInput v-model="formFields.blood_samples_taken_date" />
              </VControl>
            </VField>
          </VFlexItem>
          <VFlexItem flex-basis="45%">
            <VField horizontal>
              <VLabel class="my-auto mr-3 is-size-6">{{ $t('Analysis_date') }}</VLabel>
              <VControl>
                <IMaskDateInput v-model="formFields.analysis_date" />
              </VControl>
            </VField>
          </VFlexItem>
          <VFlexItem flex-basis="45%">
            <h5>
              <span class="has-text-weight-bold">{{ $t('Visit_stage') }}</span>
              <span>{{ patient.last_visit?.stage }}</span>
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
                      class="p-2"
                      color="primary"
                      label="HBsAg"
                    />
                  </VControl>
                </VField>
              </td>
              <td>
                <VField horizontal class="is-justify-content-end">
                  <VLabel class="is-size-6 my-auto mr-3"
                    >{{ $t('Testing_system') }} (HBsAg)</VLabel
                  >
                  <VControl>
                    <VInput v-model="formFields.testing_system_hbsag" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formFields.oids"
                      class="p-2"
                      color="primary"
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
                    <VInput v-model="formFields.testing_system_oids" />
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
                      class="has-text-danger p-2"
                      color="danger"
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
                    <VInput v-model="formFields.testing_system_antihcv" />
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
                      class="p-2"
                      color="primary"
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
                    <VInput v-model="formFields.testing_system_rw" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formFields.hemolis"
                      class="p-2"
                      color="primary"
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
                      v-model="formFields.hiles"
                      class="p-2"
                      color="primary"
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
      <SubmitButton :loading="isLoading" form="blood-sampling-form" />
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
