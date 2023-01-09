<script setup lang="ts">
import { reactive, ref } from 'vue'
import { formatDate } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import moment from 'moment'
import { useNotyf } from '/@src/composable/useNotyf'
import { fetchBloodTypes } from '/@src/utils/api/additional'
import { storePrimaryScreeningResult } from '/@src/utils/api/screening'
import { PatientInterface, PrimaryScreeningFormInterface } from '/@src/utils/interfaces'

interface PrimaryScreeningFormProps {
  isOpen: boolean
  patient: PatientInterface
}

const props = withDefaults(defineProps<PrimaryScreeningFormProps>(), {
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
const preliminaryBloodTypes = ref([])
const optionsHemoglobin = ref([
  { value: 'normal', label: t('Normal') },
  { value: 'below_normal', label: t('Below_normal') },
  { value: 'above_normal', label: t('Above_normal') },
])
const formState: PrimaryScreeningFormInterface = reactive({
  date: moment().format('YYYY-MM-DD'),
  blood_type_id: null,
  type: 'normal',
  value: null,
})
const errors = reactive({
  date: [],
  blood_type_id: [],
  type: [],
  value: [],
})

// hooks
onMounted(async () => {
  const res = await fetchBloodTypes()
  preliminaryBloodTypes.value = res.result
})

watch(
  () => props.patient.last_visit.primary_screening_result,
  (newVal) => {
    if (newVal) {
      Object.assign(formState, newVal)
    }
  }
)

watch(
  () => formState.value,
  (newVal) => {
    let hemVal = 'normal'

    if (newVal) {
      if (props.patient?.gender === 'male') {
        if (newVal < 128) {
          hemVal = 'below_normal'
        } else if (newVal > 160) {
          hemVal = 'above_normal'
        }
      } else if (props.patient?.gender === 'female') {
        if (newVal < 120) {
          hemVal = 'below_normal'
        } else if (newVal > 140) {
          hemVal = 'above_normal'
        }
      } else hemVal = 'normal'
    }

    formState.type = hemVal
  }
)

// functions
async function onSubmit() {
  try {
    isLoading.value = true
    await storePrimaryScreeningResult(props.patient?.last_visit?.id, formState)
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
  Object.assign(formState, {
    date: moment().format('YYYY-MM-DD'),
    blood_type_id: null,
    type: 'normal',
    value: '',
  })
}

function clearErrors() {
  Object.assign(errors, {
    date: [],
    blood_type_id: [],
    type: [],
    value: [],
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
          <h5 class="is-size-5 has-text-weight-medium ml-3">
            {{ $t('Information_about_donor') }} # {{ patient.last_visit?.donation_code }}
          </h5>
        </div>
        <div class="column">
          <h5 class="is-size-5 has-text-weight-medium">
            {{ $t('Visit_date') }}:
            {{ formatDate(new Date(patient.created_at), 'YYYY-MM-DD') }}
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
            <td>{{ patient.gender && $t(patient.gender) }}</td>
          </tr>
          <tr>
            <th>{{ $t('Visit_type') }}</th>
            <td>
              {{ patient.last_visit?.visit_type && $t(patient.last_visit?.visit_type) }}
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
      <form id="primary-screening-form" class="modal-form" @submit.prevent="onSubmit">
        <h5 class="is-size-5 has-text-weight-medium ml-3">
          {{ $t('Primary_screening_results') }}
        </h5>
        <table class="table is-fullwidth">
          <tbody>
            <tr>
              <th>{{ $t('Date_of_an_analysis') }}</th>
              <td>
                <VField required>
                  <VControl>
                    <IMaskDateInput v-model="formState.date" />
                    <p class="help has-text-danger">{{ errors.date[0] }}</p>
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th>{{ $t('Preliminary_blood_type') }}</th>
              <td>
                <VField required>
                  <VControl>
                    <Multiselect
                      v-model="formState.blood_type_id"
                      :options="preliminaryBloodTypes"
                      :placeholder="$t('Select')"
                      value-prop="id"
                    />
                    <p class="help has-text-danger">{{ errors.blood_type_id[0] }}</p>
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th>{{ $t('Hemoglobin') }}</th>
              <td>
                <VField required>
                  <VControl>
                    <VFlex column-gap="1rem" align-items="center">
                      <VFlexItem>
                        <VInput v-model="formState.value" type="number" min="0" />
                      </VFlexItem>
                      <VFlexItem>{{ $t('g/l') }}</VFlexItem>
                      <VFlexItem :flex-grow="1">
                        <VInput
                          :class="[
                            formState.type === 'normal' && 'has-text-primary',
                            (formState.type === 'below_normal' ||
                              formState.type === 'above_normal') &&
                              'has-text-danger',
                          ]"
                          :value="formState.type"
                          disabled
                        />
                      </VFlexItem>
                    </VFlex>
                    <p class="help has-text-danger">{{ errors.value[0] }}</p>
                  </VControl>
                </VField>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </template>
    <template #action>
      <SubmitButton :loading="isLoading" form="primary-screening-form" />
    </template>
  </VModal>
</template>
