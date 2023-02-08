<script setup lang="ts">
import { formatDate } from '@vueuse/core'
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { storeBloodSampleData } from '/@src/utils/api/blood-sampling'
import { PatientInterface } from '/@src/utils/interfaces'

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

const today = formatDate(new Date(), 'YYYY-MM-DD')
const notif = useNotyf()
const { t } = useI18n()
const title = ref(t('Sampling_data_entry_form'))
const isLoading = ref(false)
const formFields = reactive({
  date: today,
  hemotransmissible_date: today,
  chemical_date: today,
  buck_laboratory_date: today,
  immunological_laboratory_date: today,
})
const errors = reactive({
  date: [],
  hemotransmissible_date: [],
  chemical_date: [],
  buck_laboratory_date: [],
  immunological_laboratory_date: [],
})

async function onSubmit() {
  try {
    isLoading.value = true
    await storeBloodSampleData(props.patient?.last_visit?.id, formFields)
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
    date: today,
    hemotransmissible_date: today,
    chemical_date: today,
    buck_laboratory_date: today,
    immunological_laboratory_date: today,
  })
}

function clearErrors() {
  Object.assign(errors, {
    date: [],
    hemotransmissible_date: [],
    chemical_date: [],
    buck_laboratory_date: [],
    immunological_laboratory_date: [],
  })
}

// function clearError(error: keyof typeof errors) {
//   errors[error] = []
// }
</script>

<template>
  <VModal :open="isOpen" size="big" :title="title" actions="right" @close="onClose">
    <template #content>
      <div class="columns">
        <div class="column">
          <h5 class="is-size-5 has-text-weight-medium">
            {{ $t('Donor_information') }} # {{ patient.id }}
          </h5>
        </div>
        <div class="column">
          <h5 class="is-size-5 has-text-weight-medium">
            {{ $t('Visit_date') }}:
            {{ patient.last_visit?.created_at }}
          </h5>
        </div>
      </div>
      <div class="columns">
        <div class="column">
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
                <td>{{ patient.gender && $t(patient.gender) }}</td>
              </tr>
              <tr>
                <th>{{ $t('Visit_type') }}</th>
                <td>
                  {{
                    patient.last_visit?.visit_type && $t(patient.last_visit?.visit_type)
                  }}
                </td>
              </tr>
              <tr>
                <th>{{ $t('Donation_type') }}</th>
                <td>
                  {{
                    patient.last_visit?.donation_type?.name &&
                    $t(patient.last_visit?.donation_type?.name)
                  }}
                </td>
              </tr>
              <tr>
                <th>{{ $t('Donor_category') }}</th>
                <td>{{ patient.category?.name }}</td>
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
        </div>
      </div>
      <form id="blood-sampling-form" class="modal-form" @submit.prevent="onSubmit">
        <h5 class="is-size-5 has-text-weight-medium">
          {{ $t('Information_about_blood_sampling') }}
        </h5>
        <br />
        <VFlex column-gap="1rem" align-items="center">
          <VFlexItem>
            {{ $t('Blood_sampling_date') }}
          </VFlexItem>
          <VFlexItem>
            <DatePicker v-model="formFields.date" />
            <p class="help has-text-danger">
              {{ errors.date[0] }}
            </p>
          </VFlexItem>
        </VFlex>
        <br />
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th>{{ $t('Blood_sample_transferred_where') }}</th>
              <th>{{ $t('Blood_sample_transferred_when') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {{ $t('Bloodborne-infections-laboratory') }}
              </td>
              <td>
                <DatePicker v-model="formFields.hemotransmissible_date" />
                <p class="help has-text-danger">
                  {{ errors.hemotransmissible_date[0] }}
                </p>
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('Clinical-biochemical-laboratory') }}
              </td>
              <td>
                <DatePicker v-model="formFields.chemical_date" />
                <p class="help has-text-danger">
                  {{ errors.chemical_date[0] }}
                </p>
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('Buck-laboratory') }}
              </td>
              <td>
                <DatePicker v-model="formFields.buck_laboratory_date" />
                <p class="help has-text-danger">
                  {{ errors.buck_laboratory_date[0] }}
                </p>
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('Immunological-Research-Department') }}
              </td>
              <td>
                <DatePicker v-model="formFields.immunological_laboratory_date" />
                <p class="help has-text-danger">
                  {{ errors.immunological_laboratory_date[0] }}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </template>
    <template #action>
      <SubmitButton :loading="isLoading" form="blood-sampling-form" />
    </template>
  </VModal>
</template>
