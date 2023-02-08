<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { useMainStore } from '/@src/stores/main'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { patientsList } from '/@src/utils/api/patient'
import { ApiDataInterface, PatientInterface } from '/@src/utils/interfaces'

const router = useRouter()
const notif = useNotyf()
const { t } = useI18n()
const mainStore = useMainStore()
const isLoading = ref(false)
const viewWrapper = useViewWrapper()

viewWrapper.setPageTitle(t('Physician-therapist'))
useHead({
  title: `${t('Donors-list-for-examination')} - ${mainStore.app.name}`,
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
  name: {
    label: t('Fullname'),
    // media: true,
    // grow: true,
    // sortable: true,
  },
  birth_date: {
    label: t('Date-of-birth'),
    // sortable: true,
  },
  visit_date: {
    label: t('Visit_date'),
    format: (value: string, row: any) => row.last_visit?.created_at,
    // grow: true,
    // sortable: true,
  },
  visit_type: {
    label: t('Visit_type'),
    format: (value: string, row: any) =>
      row.last_visit?.visit_type && t(row.last_visit?.visit_type),
    // grow: true,
    // sortable: true,
  },
  medical_inspection_date: {
    label: t('Medical_inspection_date'),
    format: (value: string, row: any) =>
      row.last_visit?.directed_by && t(row.last_visit?.directed_by),
    // grow: true,
    // sortable: true,
  },
  medical_inspection_conclusion: {
    label: t('Medical_inspection_conclusion'),
    format: (value: string, row: any) => row.last_visit?.personalized_donation,
    // grow: true,
    // sortable: true,
  },
  donation_code: {
    label: t('Donation_code'),
    format: (value: string, row: any) => row.last_visit?.donation_code,
    // grow: true,
    // sortable: true,
  },
  donation_type: {
    label: t('Donation_type'),
    format: (value: string, row: any) => row.last_visit?.personalized_donation,
    // grow: true,
    // sortable: true,
  },
  blood_component_amount: {
    label: t('Blood_component_amount'),
    format: (value: string, row: any) => row.status?.name,
    // grow: true,
    // sortable: true,
  },
} as const

const errors = reactive({
  start_date: [],
  end_date: [],
  donor_category_id: [],
  visit_type_id: [],
  donation_type_id: [],
})
const currentFilterData = reactive({
  status: 6,
  page: 1,
})

// hooks
watch(
  () => apiData.pagination.current_page,
  async function (newVal) {
    if (newVal) {
      currentFilterData.page = newVal
      await handleSearch(currentFilterData)
    }
  },
  {
    immediate: true,
  }
)

// functions
async function handleSearch(filterForm: any) {
  try {
    Object.assign(currentFilterData, {
      ...currentFilterData,
      ...filterForm,
    })
    isLoading.value = true
    const res = await patientsList(filterForm)
    Object.assign(apiData, res.result)
  } catch (error: any) {
    notif.error(error.message)
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
              label: $t('Physician-therapist'),
            },
            {
              label: $t('Examined-donor-register'),
            },
          ]"
        />
      </div>
    </div>
    <div class="columns mt-1">
      <div class="column">
        <ExaminedDonorsFilterForm
          :is-loading="isLoading"
          :errors="errors"
          @search="handleSearch"
          @clear-form="clearFilterForm"
          @clear-error="clearError"
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
                  <RouterLink
                    class="table_link"
                    :to="`/app/physician-therapist/donors-for-examination/${row.id}`"
                  >
                    {{ row.first_name }} {{ row.last_name }} {{ row.father_name }}
                  </RouterLink>
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
