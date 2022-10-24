<script setup lang="ts">
import { useHead } from '@vueuse/head'

// we import our useApi helper
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useI18n } from 'vue-i18n'
import { PatientInterface, TabHeader } from '/@src/utils/interfaces'
import PatientVisitCardTable from '/@src/components/tables/PatientVisitCardTable.vue'

const { t } = useI18n()
const patient: PatientInterface = reactive({})
const tabs = ref<TabHeader[]>([
  { label: t('Patient_details'), value: 'details', icon: 'feather:info' },
  {
    label: t('Patient_card'),
    value: 'patient_card',
    icon: 'feather:file-text',
  },
])
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Patient_info'))

useHead({
  title: computed(() => t('Patient_info')),
})
</script>

<template>
  <div class="patient-detail-wrapper">
    <VTabs selected="details" :tabs="tabs">
      <template #tab="{ activeValue }">
        <div v-if="activeValue === 'details'" class="columns mt-5">
          <div class="column">
            <PatientPersonalInfoForm :patient="patient" />
          </div>
          <div class="column">
            <PatientPassportForm :patient="patient" />
          </div>
          <div class="column">
            <PatientAddressForm :patient="patient" />
          </div>
        </div>
        <div v-else-if="activeValue === 'patient_card'" class="mt-5">
          <PatientVisitCardTable />
        </div>
      </template>
    </VTabs>
  </div>
</template>
