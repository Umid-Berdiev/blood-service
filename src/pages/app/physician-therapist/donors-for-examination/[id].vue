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
const patientID = (route.params?.id as string) || null
const tabs = ref<TabHeader[]>([
  {
    label: t('Patient_details'),
    value: '#details',
    icon: 'feather:info',
    // to: `${route.path}#details`,
  },
  {
    label: t('Medical_information'),
    value: '#medical_information',
    icon: 'feather:file-text',
    // to: `${route.path}#medical_information`,
  },
])
const categoryOptions = ref([])
const isMedicalQuestionnaireModalOpen = ref(false)
const isPrimaryScreeningResultsModalOpen = ref(false)
const isLaboratoryTestResultsModalOpen = ref(false)
const isMedicalInspectionFormModalOpen = ref(false)
const isWithdrawalModalOpen = ref(false)
const isLaboratoryResearchModalOpen = ref(false)
const isDirectionForDonationModalOpen = ref(false)
const selectedTab = ref('#details')
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Patient_info'))

useHead({
  title: computed(() => t('Patient_info')),
})

await fetchPatientInfo()

// hooks
onMounted(async () => {
  const res = await patientCategoriesList()
  categoryOptions.value = res.result
})

// functions
async function fetchPatientInfo() {
  try {
    const res = await fetchPatientById(patientID)
    Object.assign(patientForm, res.result)
    patientForm.pinfl = patientForm.pinfl ?? ''
    patientForm.phone_home = patientForm.phone_home ?? ''
    patientForm.phone_number = patientForm.phone_number ?? ''
    patientForm.phone_work = patientForm.phone_work ?? ''
  } catch (error: any) {
    notif.error(error.message)
  }
}

function clearError(error: string) {
  errors[error] = ''
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

function openMedicalQuestionnaireModal() {
  isMedicalQuestionnaireModalOpen.value = true
}

function openPrimaryScreeningResultsModal() {
  isPrimaryScreeningResultsModalOpen.value = true
}

function openLaboratoryTestResultsModal() {
  isLaboratoryTestResultsModalOpen.value = true
}

function openMedicalInspectionFormModal() {
  isMedicalInspectionFormModalOpen.value = true
}

function openWithdrawalModal() {
  isWithdrawalModalOpen.value = true
}

function openLaboratoryResearchModal() {
  isLaboratoryResearchModalOpen.value = true
}

function toDonation() {
  isDirectionForDonationModalOpen.value = true
}

function onDirectionForDonationSubmit() {
  //
}
</script>

<template>
  <div class="patient-detail-wrapper">
    <VTabs :selected="selectedTab" :tabs="tabs">
      <template #tab="{ activeValue }">
        <form v-if="activeValue === '#details'" @submit.prevent="onSubmit">
          <div class="columns mt-5">
            <div class="column">
              <p class="is-size-5">{{ $t('Personal_Info') }}</p>
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
                    @change="clearError('patient_category_id')"
                  />
                  <p class="help has-text-danger">{{ errors.patient_category_id[0] }}</p>
                </VControl>
              </VField>
            </div>
            <div class="column">
              <p class="is-size-5">{{ $t('Passport_info') }}</p>
              <PatientPassportForm
                :patient="patientForm"
                :errors="errors"
                @editing="clearError"
              />
            </div>
            <div class="column">
              <p class="is-size-5">{{ $t('Address') }}</p>
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
        <div v-else-if="activeValue === '#medical_information'" class="mt-5">
          <div class="box">
            <VFlex class="mb-3" justify-content="space-between">
              <VFlexItem>
                <p class="is-size-6">
                  {{ $t('Directed_by') }}:
                  {{ patientForm.last_visit?.medical_organization?.name }}
                </p>
              </VFlexItem>
              <VFlexItem>
                <p class="is-size-6">
                  {{ $t('Personalized_donation') }}:
                  {{
                    patientForm.last_visit?.is_personalized_donation
                      ? patientForm.last_visit?.personalized_donation
                      : $t('No')
                  }}
                </p>
              </VFlexItem>
              <VFlexItem>
                <p class="is-size-6">
                  {{ $t('Blood_collect_condition') }}:
                  {{
                    patientForm.last_visit?.is_mobile_team
                      ? $t('Mobile_team')
                      : $t('Stationary')
                  }}
                </p>
              </VFlexItem>
            </VFlex>
            <table class="table is-bordered is-fullwidth">
              <tbody>
                <tr>
                  <td>
                    <a
                      href="javascript:;"
                      class="has-text-primary is-uppercase"
                      @click="openMedicalQuestionnaireModal"
                    >
                      {{ $t('Medical_questionnaire') }}
                    </a>
                  </td>
                </tr>
                <tr v-if="patientForm.last_visit?.primary_screening_result">
                  <td>
                    <a
                      href="javascript:;"
                      class="has-text-primary is-uppercase"
                      @click="openPrimaryScreeningResultsModal"
                    >
                      {{ $t('Primary_screening_results') }}
                    </a>
                  </td>
                </tr>
                <tr v-if="patientForm.last_visit?.visit_status_id >= 3">
                  <td>
                    <a
                      href="javascript:;"
                      class="has-text-primary is-uppercase"
                      @click="openLaboratoryTestResultsModal"
                    >
                      {{ $t('Laboratory_test_results') }}
                    </a>
                  </td>
                </tr>
                <!-- <tr>
                  <td>
                    <a href="javascript:;" class="has-text-primary is-uppercase">
                      {{ $t('Infectious_diseases') }}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="javascript:;" class="has-text-primary is-uppercase">
                      {{ $t('Medical_clearance') }}
                    </a>
                  </td>
                </tr> -->
              </tbody>
            </table>
          </div>
        </div>
      </template>
    </VTabs>
    <MedicalQuestionnaireModal
      v-model:is-open="isMedicalQuestionnaireModalOpen"
      :visitcard="patientForm.last_visit"
      @withdrawal="openWithdrawalModal"
      @laboratory-research="openLaboratoryResearchModal"
    />
    <PrimaryScreeningResultsModal
      v-if="patientForm.last_visit?.visit_status_id === 3"
      v-model:is-open="isPrimaryScreeningResultsModalOpen"
      :visitcard="patientForm.last_visit"
      @withdrawal="openWithdrawalModal"
      @medical-examination="openMedicalInspectionFormModal"
    />
    <LaboratoryTestResultsModal
      v-model:is-open="isLaboratoryTestResultsModalOpen"
      :visitcard="patientForm.last_visit"
      @withdrawal="openWithdrawalModal"
      @medical-examination="openMedicalInspectionFormModal"
    />
    <MedicalInspectionFormModal
      v-model:is-open="isMedicalInspectionFormModalOpen"
      :visitcard="patientForm.last_visit"
      @withdrawal="openWithdrawalModal"
      @donation="toDonation"
    />
    <WithdrawalFormModal
      v-model:is-open="isWithdrawalModalOpen"
      :patient-id="Number(patientID)"
    />
    <LaboratoryResearchModal
      v-model:is-open="isLaboratoryResearchModalOpen"
      :visitcard="patientForm.last_visit"
    />
    <DirectionForDonationModal
      v-model:is-open="isDirectionForDonationModalOpen"
      :visitcard="patientForm.last_visit"
      @submit="onDirectionForDonationSubmit"
    />
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

  .box {
    background: var(--dark-sidebar-dark-2);
  }
}
</style>
