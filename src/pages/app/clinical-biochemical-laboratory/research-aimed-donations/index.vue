<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import FormModal from '/@src/components/pages/clinical-biochemical-laboratory/FormModal.vue'
import { useMainStore } from '/@src/stores/main'

import { useViewWrapper } from '/@src/stores/viewWrapper'
import { fetchPatientsListForLaboratories } from '/@src/utils/api/laboratories'
import { ApiDataInterface, PatientInterface } from '/@src/utils/interfaces'

const { t } = useI18n()
const mainStore = useMainStore()
const isLoading = ref(false)
const viewWrapper = useViewWrapper()

viewWrapper.setPageTitle(t('Clinical-biochemical-laboratory'))
useHead({
  title: `${t('Research-aimed-donations-list')} - ${mainStore.app.name}`,
})

const apiData: ApiDataInterface<PatientInterface> = reactive({
  data: [],
  pagination: {
    total: 10,
    count: 10,
    per_page: 10,
    current_page: 1,
    total_pages: 1,
  },
})

const errors = reactive({
  visit_type_id: [],
  donation_type_id: [],
  donation_code: [],
})
const currentFilterData = reactive({
  visit_type_id: '',
  donation_type_id: null,
  donation_code: '',
  page: 1,
})
const clickedRowData = ref<PatientInterface | null>(null)
const isFormModalOpen = ref(false)
const isEmergencyNoticeFormModalOpen = ref(false)

await handleSearch(currentFilterData)

// hooks
watch(
  () => apiData.pagination.current_page,
  async (newVal) => {
    if (newVal) {
      currentFilterData.page = newVal
      await handleSearch(currentFilterData)
    }
  }
)

// functions
async function handleSearch(filterForm: any) {
  try {
    isLoading.value = true
    Object.assign(currentFilterData, filterForm)

    const res = await fetchPatientsListForLaboratories(filterForm)
    Object.assign(apiData, res.result)
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
  } finally {
    isLoading.value = false
  }
}

async function clearFilterForm() {
  await handleSearch(currentFilterData)
}

function openBloodSamplingFormModal(patient: PatientInterface) {
  clickedRowData.value = patient
  isFormModalOpen.value = true
}

function clearClickedRowData() {
  clickedRowData.value = null
}
</script>

<template>
  <div class="page-content-inner">
    <div class="columns mb-3">
      <div class="column">
        <VBreadcrumb
          with-icons
          separator="bullet"
          :items="[
            {
              label: mainStore.app.name,
              hideLabel: true,
              icon: 'feather:home',
              to: { name: '/app/dashboard' },
            },
            {
              label: $t('Clinical-biochemical-laboratory'),
            },
            {
              label: $t('Research-aimed-donations-list'),
            },
          ]"
        />
      </div>
    </div>
    <div class="columns mt-1">
      <div class="column">
        <FilterForm
          :is-loading="isLoading"
          @search="handleSearch"
          @clear-form="clearFilterForm"
        />
      </div>
    </div>
    <TableForLaboratories
      v-model:current-page="apiData.pagination.current_page"
      :data="apiData"
      :is-loading="isLoading"
      @open-form-modal="openBloodSamplingFormModal"
    />
    <FormModal
      v-model:is-open="isFormModalOpen"
      :patient="clickedRowData"
      @close="clearClickedRowData"
    />
    <EmergencyNoticeFormModal
      v-model:is-open="isEmergencyNoticeFormModalOpen"
      :patient="clickedRowData"
    />
  </div>
</template>

<style scoped lang="scss">
.is-dark {
  .table_link {
    color: var(--primary);

    &:hover {
      color: var(--smoke-white);
    }
  }
}
</style>
