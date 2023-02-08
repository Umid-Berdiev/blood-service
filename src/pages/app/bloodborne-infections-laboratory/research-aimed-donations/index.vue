<script setup lang="ts">
import { formatDate } from '@vueuse/core'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import FilterForm from '/@src/components/pages/research-aimed-donations/FilterForm.vue'
import { useNotyf } from '/@src/composable/useNotyf'
import { useMainStore } from '/@src/stores/main'

import { useViewWrapper } from '/@src/stores/viewWrapper'
import { fetchPatientsListForLaboratories } from '/@src/utils/api/laboratories'
import { ApiDataInterface, PatientInterface } from '/@src/utils/interfaces'

const router = useRouter()
const notif = useNotyf()
const { t } = useI18n()
const mainStore = useMainStore()
const isLoading = ref(false)
const viewWrapper = useViewWrapper()

viewWrapper.setPageTitle(t('Bloodborne-infections-laboratory'))
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

const columns = {
  orderNumber: {
    format: (value: any, row: any, index: number) => `${index + 1}`,
    cellClass: 'is-flex-grow-0',
  },
  donation_code: {
    label: t('Donation_code'),
    format: (value: string, row: any) => row.last_visit?.donation_code,
  },
  blood_sampling_date: {
    label: t('Blood_sampling_date'),
    format: (value: string, row: any) => row.last_visit?.blood_sample?.date,
  },
  name: {
    label: t('Donor_fullname'),
  },
  birth_date: {
    label: t('Date-of-birth'),
  },
  visit_type: {
    label: t('Visit_type'),
    format: (value: string, row: any) =>
      row.last_visit?.visit_type && t(row.last_visit?.visit_type),
  },
  visit_date: {
    label: t('Visit_date'),
    format: (value: string, row: any) => row.last_visit?.created_at,
  },
  donation_type: {
    label: t('Donation_type'),
    format: (value: string, row: any) => row.last_visit?.donation_type?.name,
  },
  visit_stage: {
    label: t('Visit_stage'),
    format: (value: string, row: any) => row.last_visit?.stage?.name,
  },
} as const

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
const isLaboratoryFormModalOpen = ref(false)
const isEmergencyNoticeFormModalOpen = ref(false)

// hooks
watch(
  () => apiData.pagination.current_page,
  async (newVal) => {
    if (newVal) {
      currentFilterData.page = newVal
      await handleSearch(currentFilterData)
    }
  },
  { immediate: true }
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

function clearError(prop: keyof typeof errors) {
  errors[prop] = []
}

async function clearFilterForm() {
  await handleSearch(currentFilterData)
}

function openBloodSamplingFormModal(patient: PatientInterface) {
  clickedRowData.value = patient
  isLaboratoryFormModalOpen.value = true
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
              label: $t('Bloodborne-infections-laboratory'),
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
    <div class="columns">
      <div class="column is-12">
        <VFlexTableWrapper
          :columns="columns"
          :data="apiData.data"
          :limit="apiData.pagination.per_page"
          :total="apiData.pagination.total"
        >
          <!--
            Here we retrieve the internal wrapperState.
            Note that we can not destructure it
          -->
          <template #default>
            <VFlexTable rounded :no-header="!isLoading && apiData.data.length === 0">
              <template #header-column="{ column }">
                <span
                  v-if="column.key === 'orderNumber'"
                  class="is-flex-grow-0"
                  v-text="'#'"
                />
              </template>

              <template #body>
                <!--
                  The loading will be update
                  when the fetchData function is running
                -->
                <div v-if="isLoading" class="flex-list-inner">
                  <div
                    v-for="key in apiData.pagination.per_page"
                    :key="key"
                    class="flex-table-item"
                  >
                    <VFlexTableCell>
                      <VPlaceloadText :lines="2" last-line-width="70%" class="mx-2" />
                    </VFlexTableCell>
                  </div>
                </div>

                <!-- This is the empty state -->
                <NoDataPlaceholder v-if="apiData.data.length === 0" />
              </template>

              <!-- This is the body cell slot -->
              <template #body-cell="{ row, column }">
                <template v-if="column.key === 'name'">
                  <a
                    href="javascript:;"
                    class="has-text-primary"
                    @click="openBloodSamplingFormModal(row)"
                  >
                    {{ row.first_name }} {{ row.last_name }} {{ row.father_name }}
                    <!-- <span class="dark-text">
                    </span> -->
                  </a>
                </template>
              </template>
            </VFlexTable>

            <!--Table Pagination-->
            <VFlexPagination
              v-if="apiData.data.length"
              v-model:current-page="apiData.pagination.current_page"
              class="mt-5"
              :item-per-page="apiData.pagination.per_page"
              :total-items="apiData.pagination.total"
              no-router
            />
          </template>
        </VFlexTableWrapper>
      </div>
    </div>
    <ResearchAimedFormModal
      v-model:is-open="isLaboratoryFormModalOpen"
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
