<script setup lang="ts">
import moment from 'moment'
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { createWithdrawalForPatient } from '/@src/utils/api/patient'
import { PatientInterface, PrimaryScreeningFormInterface } from '/@src/utils/interfaces'

interface WithdrawalFormProps {
  isOpen: boolean
  patient: PatientInterface
}

const props = withDefaults(defineProps<WithdrawalFormProps>(), {
  isOpen: false,
})

const emits = defineEmits<{
  (e: 'update:isOpen', isOpen: boolean): void
  (e: 'update:list'): void
}>()

const notif = useNotyf()
const { t } = useI18n()
const title = ref(t('Primary_screening_form'))
const isLoading = ref(false)
const formFields: PrimaryScreeningFormInterface = reactive({
  blood_sampling_to: '',
  blood_sampling_date: moment().format('YYYY-MM-DD'),
})
const errors = reactive({
  blood_sampling_to: [],
  blood_sampling_date: [],
})

async function onSubmit() {
  try {
    isLoading.value = true
    await createWithdrawalForPatient(props.patient?.id, formFields)
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
    blood_sampling_to: '',
    blood_sampling_date: moment().format('YYYY-MM-DD'),
  })
}

function clearErrors() {
  Object.assign(errors, {
    blood_sampling_to: [],
    blood_sampling_date: [],
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
            {{ $t('Information_about_donor') }} # {{ patient.id }}
          </h5>
        </div>
        <div class="column">
          <h5 class="is-size-5 has-text-weight-medium">
            {{ $t('Visit_date') }}: {{ patient.created_at }}
          </h5>
        </div>
      </div>
      <table class="table">
        <tbody>
          <tr>
            <th>{{ $t('Last_name') }}</th>
            <td>{{ patient.last_name }}</td>
          </tr>
          <tr>
            <th>{{ $t('First_name') }}</th>
            <td>{{ patient.first_name }}</td>
          </tr>
          <tr>
            <th>{{ $t('Middlename') }}</th>
            <td>{{ patient.father_name }}</td>
          </tr>
          <tr>
            <th>{{ $t('Date-of-birth') }}</th>
            <td>{{ patient.birth_date }}</td>
          </tr>
          <tr>
            <th>{{ $t('Gender') }}</th>
            <td>{{ patient.gender }}</td>
          </tr>
          <tr>
            <th>{{ $t('Visit_type') }}</th>
            <td>{{ patient.visit?.visit_type }}</td>
          </tr>
          <tr>
            <th>{{ $t('Donor_category') }}</th>
            <td>{{ patient.patient_category_id }}</td>
          </tr>
          <tr>
            <th>{{ $t('Passport_series_number') }}</th>
            <td>
              {{ patient.passport_series }}{{ patient.passport_number }},
              {{ patient.issued_by }}, {{ patient.when_issued }}
            </td>
          </tr>
        </tbody>
      </table>
      <form id="primary-screening-form" class="modal-form" @submit.prevent="onSubmit">
        <h5 class="is-size-5 has-text-weight-medium">
          {{ $t('Primary_screening_results') }}
        </h5>
        <table class="table is-fullwidth">
          <tbody>
            <tr>
              <th>{{ $t('Blood_sampling_date') }}</th>
              <td>
                <VField required>
                  <VControl>
                    <IMaskDateInput v-model="formFields.analysis_date" />
                    <p class="help has-text-danger">{{ errors.analysis_date[0] }}</p>
                  </VControl>
                </VField>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>{{ $t('Blood_sample_transfer_to') }}</th>
              <th>{{ $t('Blood_sample_transfer_date') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {{ $t('Bloodborne-infections-laboratory') }}
              </td>
              <td>
                <VField required>
                  <VControl>
                    <IMaskDateInput
                      v-model="formFields.bloodborne_infections_laboratory_date"
                    />
                    <p class="help has-text-danger">
                      {{ errors.bloodborne_infections_laboratory_date[0] }}
                    </p>
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('Clinical-biochemical-laboratory') }}
              </td>
              <td>
                <VField required>
                  <VControl>
                    <IMaskDateInput
                      v-model="formFields.clinical_biochemical_laboratory"
                    />
                    <p class="help has-text-danger">
                      {{ errors.clinical_biochemical_laboratory[0] }}
                    </p>
                  </VControl>
                </VField>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </template>
    <template #action="{ close }">
      <SubmitButton :loading="isLoading" form="primary-screening-form" />
    </template>
  </VModal>
</template>
