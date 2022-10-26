<script setup lang="ts">
import { useHead } from '@vueuse/head'

// we import our useApi helper
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useI18n } from 'vue-i18n'
import { PatientInterface, TabHeader } from '/@src/utils/interfaces'
import PatientVisitCardTable from '/@src/components/tables/PatientVisitCardTable.vue'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const patient: PatientInterface = reactive({
  last_name: '',
  first_name: '',
  father_name: '',
  birth_date: new Date(),
  sex: 'male',
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
})
const errors = reactive({
  last_name: '',
  first_name: '',
  father_name: '',
  birth_date: '',
  sex: '',
  passport_series: '',
  passport_number: '',
  issued_by: '',
  when_issued: '',
  region_id: '',
  district_id: '',
  work_study_place: '',
  email: '',
  phone_number: '',
  phone_home: '',
  phone_work: '',
})

const paramsID = (route.params?.id as number) || null
const tabs = ref<TabHeader[]>([
  {
    label: t('Patient_details'),
    value: '#details',
    icon: 'feather:info',
    to: `/app/registration/unified-donor-register/${paramsID}#details`,
  },
  {
    label: t('Patient_card'),
    value: '#patient_visit_cards',
    icon: 'feather:file-text',
    to: `/app/registration/unified-donor-register/${paramsID}#patient_visit_cards`,
  },
])

const selectedTab = ref(route.hash || '#details')
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Patient_info'))

useHead({
  title: computed(() => t('Patient_info')),
})

function clearError(error: string) {
  errors[error] = ''
}
</script>

<template>
  <div class="patient-detail-wrapper">
    <VTabs :selected="selectedTab" :tabs="tabs">
      <template #tab="{ activeValue }">
        <form v-if="activeValue === '#details'" class="columns mt-5">
          <div class="column">
            <PatientPersonalInfoForm
              :patient="patient"
              :errors="errors"
              @editing="clearError"
            />
          </div>
          <div class="column">
            <PatientPassportForm
              :patient="patient"
              :errors="errors"
              @editing="clearError"
            />
          </div>
          <div class="column">
            <PatientAddressForm
              :patient="patient"
              :errors="errors"
              @editing="clearError"
            />
          </div>
        </form>
        <div v-else-if="activeValue === '#patient_visit_cards'" class="mt-5">
          <PatientVisitCardTable />
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
