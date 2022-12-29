<script setup lang="ts">
import { formatDate } from '@vueuse/core'
import { useHead } from '@vueuse/head'
import { isEmpty } from 'lodash'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { useMainStore } from '/@src/stores/main'

import { useViewWrapper } from '/@src/stores/viewWrapper'
// import { patientsListForScreening } from '/@src/utils/api/patient'
import { ApiDataInterface, PatientInterface } from '/@src/utils/interfaces'

const router = useRouter()
const notif = useNotyf()
const { t } = useI18n()
const mainStore = useMainStore()
const isLoading = ref(false)
const viewWrapper = useViewWrapper()

viewWrapper.setPageTitle(t('Donations'))
useHead({
  title: `${t('Donors-list-for-primary-screening')} - ${mainStore.app.name}`,
})

const apiData: ApiDataInterface = reactive({
  data: [
    {
      id: 11,
      donation_code: 130100111800,
      blood_sampling_date: '22.05.2022',
      first_name: 'Ренат',
      last_name: 'Ахмеджанов',
      father_name: 'Шамильевич',
      birth_date: '24.01.1990',
      last_visit: {
        visit_type: 'Безвозмезные донации',
        created_at: '06.05.2022',
        donation_type: 'Тромбоцитаферез',
        stage: 'Мед. освидетельствование',
      },
      donor_category: 'Донор резерва',
    },
  ],
  pagination: {
    total: 10,
    count: 10,
    per_page: 10,
    current_page: 1,
    total_pages: 1,
  },
})

const currentPage = computed({
  get: () => {
    return apiData.pagination.current_page
  },
  set: async (page) => {
    currentFilterData.page = page
    await handleSearch(currentFilterData)
  },
})

const columns = {
  orderNumber: {
    format: (value: any, row: any, index: number) => `${index + 1}`,
    // cellClass: 'is-flex-grow-0',
  },
  name: {
    label: t('Donor_fullname'),
  },
  birth_date: {
    label: t('Date-of-birth'),
    // sortable: true,
  },
  visit_type: {
    label: t('Visit_type'),
    format: (value: string, row: any) => row.last_visit?.visit_type,
    // grow: true,
    // sortable: true,
  },
  visit_date: {
    label: t('Visit_date'),
    format: (value: string, row: any) => row.last_visit?.created_at,
    // sortable: true,
  },
  donation_type: {
    label: t('Donation_type'),
    format: (value: string, row: any) => row.last_visit?.personalized_donation,
  },
  donation_code: {
    label: t('Donation_number'),
    // format: (value: string, row: any) => row.last_visit?.personalized_donation,
  },
  donor_category: {
    label: t('Donor_category'),
    // format: (value: string, row: any) => row.status?.name,
    // grow: true,
    // sortable: true,
  },
} as const

const errors = reactive({
  donor_category_id: [],
  visit_type: [],
  donation_type_id: [],
  donation_code: [],
})
const currentFilterData = reactive({
  page: 1,
})
const selectedRow: PatientInterface = reactive({})
const isFormModalOpen = ref(false)
const isContainerFormModalOpen = ref(false)

// await handleSearch(currentFilterData)

async function handleSearch(filterForm: any) {
  try {
    Object.assign(currentFilterData, filterForm)
    isLoading.value = true
    const res = await patientsListForScreening(filterForm)
    Object.assign(apiData, res.result)

    if (isEmpty(res.result.data)) {
      notif.warning(t('Data_not_found'))
    } else notif.success(`${t('Found')}: ${res.result.pagination.total} ${t('records')}`)
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
  } finally {
    isLoading.value = false
  }
}

function clearError(prop: string) {
  errors[prop] = ''
}

async function clearFilterForm() {
  // await fetchData()
  apiData.data = []
}

function openFormModal(row: any) {
  isFormModalOpen.value = true
  Object.assign(selectedRow, row)
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
              label: $t('Donations'),
            },
            {
              label: $t('Donors_for_donation'),
            },
          ]"
        />
      </div>
    </div>
    <div class="columns mt-1">
      <div class="column">
        <DonorsListFilterForm
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
                <span v-if="column.key === 'orderNumber'" v-text="$t('Donor_#')" />
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
                <div v-if="apiData.data.length === 0" class="flex-list-inner">
                  <VPlaceholderSection
                    :title="$t('No_data')"
                    :subtitle="$t('There_is_no_data_that_match_your_query')"
                    class="my-6"
                  >
                    <template #image>
                      <img
                        class="light-image"
                        src="/@src/assets/illustrations/placeholders/search-7.svg"
                        alt=""
                      />
                      <img
                        class="dark-image"
                        src="/@src/assets/illustrations/placeholders/search-7-dark.svg"
                        alt=""
                      />
                    </template>
                  </VPlaceholderSection>
                </div>
              </template>

              <!-- This is the body cell slot -->
              <template #body-cell="{ row, column }">
                <template v-if="column.key === 'name'">
                  <a
                    href="javascript:;"
                    class="has-text-primary"
                    @click="openFormModal(row)"
                  >
                    {{ row.first_name }} {{ row.last_name }} {{ row.father_name }}
                  </a>
                </template>
              </template>
            </VFlexTable>

            <!--Table Pagination-->
            <VFlexPagination
              v-if="apiData.data.length"
              v-model:current-page="currentPage"
              class="mt-5"
              :item-per-page="apiData.pagination.per_page"
              :total-items="apiData.pagination.total"
              no-router
            />
          </template>
        </VFlexTableWrapper>
      </div>
    </div>
    <DonationDataEntryFormModal
      v-model:is-open="isFormModalOpen"
      :patient="selectedRow"
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
