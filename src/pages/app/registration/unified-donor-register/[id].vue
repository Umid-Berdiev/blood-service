<script setup lang="ts">
import { useHead } from '@vueuse/head'

// we import our useApi helper
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useI18n } from 'vue-i18n'
import { PatientInterface, TabHeader } from '/@src/utils/interfaces'
import {
  fetchPatientById,
  updatePatientById,
  patientCategoriesList,
} from '/@src/utils/api/patient'
import { useNotyf } from '/@src/composable/useNotyf'
import moment from 'moment'

const route = useRoute()
const router = useRouter()
const notif = useNotyf()
const { t } = useI18n()
const patientForm: PatientInterface = reactive({
  patient_category_id: null,
  last_name: '',
  first_name: '',
  father_name: '',
  birth_date: new Date(),
  gender: 'male',
  pinfl: '',
  passport_series: '',
  passport_number: '',
  issued_by: '',
  when_issued: new Date(),
  region_id: null,
  district_id: null,
  work_study_place: '',
  email: '',
  phone_number: '',
  phone_home: '',
  phone_work: '',
  address: '',
  avatar: '',
})
const errors = reactive({
  patient_category_id: [],
  last_name: [],
  first_name: [],
  father_name: [],
  birth_date: [],
  gender: [],
  pinfl: [],
  passport_series: [],
  passport_number: [],
  issued_by: [],
  when_issued: [],
  region_id: [],
  district_id: [],
  work_study_place: [],
  email: [],
  phone_number: [],
  phone_home: [],
  phone_work: [],
  address: [],
  avatar: [],
})
const isLoading = ref(false)
const patientID = (route.params?.id as number) || null
const tabs = ref<TabHeader[]>([
  {
    label: t('Patient_details'),
    value: '#details',
    icon: 'feather:info',
    to: `${route.path}#details`,
  },
  {
    label: t('Patient_card'),
    value: '#patient_visit_cards',
    icon: 'feather:file-text',
    to: `${route.path}#patient_visit_cards`,
  },
])
const categoryOptions = ref([])
const selectedTab = ref(route.hash || '#details')
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Patient_info'))

useHead({
  title: computed(() => t('Patient_info')),
})

await fetchPatientInfo()

onMounted(async () => {
  const res = await patientCategoriesList()
  categoryOptions.value = res.result
})

async function fetchPatientInfo() {
  try {
    const res = await fetchPatientById(patientID)
    Object.assign(patientForm, res.result)
    patientForm.pinfl ??= ''
    patientForm.phone_home ??= ''
    patientForm.phone_number ??= ''
    patientForm.phone_work ??= ''
    patientForm.birth_date = patientForm.birth_date
      ? moment(patientForm.birth_date, 'YYYY-MM-DD').format('YYYY-MM-DD')
      : ''
    patientForm.when_issued = patientForm.when_issued
      ? moment(patientForm.when_issued, 'YYYY-MM-DD').format('YYYY-MM-DD')
      : ''
  } catch (error: any) {
    notif.error(error.message)
  }
}

function clearError(error: keyof typeof errors) {
  errors[error] = []
}

async function onSubmit() {
  try {
    isLoading.value = true
    const res = await updatePatientById(patientID, patientForm)
    notif.success(t('Updated_successfully'))

    // router.push(`/app/registration/unified-donor-register/${res.id}`)
  } catch (error: any) {
    if (error.response?.data.errors) Object.assign(errors, error.response?.data.errors)
    else notif.error(t('Something_went_wrong'))
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="patient-detail-wrapper">
    <VTabs :selected="selectedTab" :tabs="tabs">
      <template #tab="{ activeValue }">
        <form v-if="activeValue === '#details'" @submit.prevent="onSubmit">
          <div class="columns mt-5">
            <div class="column">
              <p class="title is-size-5">{{ $t('Passport_info') }}</p>
              <PatientPassportForm
                :patient="patientForm"
                :errors="errors"
                @editing="clearError"
              />
            </div>
            <div class="column">
              <p class="title is-size-5">{{ $t('Personal_Info') }}</p>
              <PatientPersonalInfoForm
                :patient="patientForm"
                :errors="errors"
                @editing="clearError"
              />
              <br />
              <VField :label="$t('Category')" required>
                <VControl>
                  <Multiselect
                    v-model="patientForm.patient_category_id"
                    :options="categoryOptions"
                    :placeholder="$t('Select_category')"
                    label="name"
                    value-prop="id"
                  />
                  <p class="help has-text-danger">{{ errors.patient_category_id[0] }}</p>
                </VControl>
              </VField>
            </div>
            <div class="column">
              <p class="title is-size-5">{{ $t('Address') }}</p>
              <PatientAddressForm
                :patient="patientForm"
                :errors="errors"
                @editing="clearError"
              />
            </div>
          </div>
          <div class="navigation-buttons">
            <div class="buttons is-right">
              <VButton
                type="submit"
                color="primary"
                bold
                :loading="isLoading"
                :disabled="isLoading"
                tabindex="0"
              >
                {{ $t('Save') }}
              </VButton>
            </div>
          </div>
        </form>
        <div v-else-if="activeValue === '#patient_visit_cards'" class="mt-5">
          <PatientVisitCardTable :patient-category-id="patientForm.patient_category_id" />
        </div>
      </template>
    </VTabs>
  </div>
</template>

<style scoped lang="scss">
.fieldset {
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border);
  background: var(--widget-grey-dark-3);

  .fieldset-separator {
    margin: 1.5rem 0;
    border-top: 1px solid var(--border);
  }
}

.is-dark {
  .fieldset {
    background: var(--dark-sidebar-dark-2);
    border-color: var(--dark-sidebar-light-12);
  }

  .fieldset-separator {
    border-color: var(--dark-sidebar-light-12);
  }
}
</style>
