<script setup lang="ts">
import { formatDate } from '@vueuse/core'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { useMainStore } from '/@src/stores/main'

import { useViewWrapper } from '/@src/stores/viewWrapper'
import { patientsListForCandidate } from '/@src/utils/api/patient'
import { fetchVisitcardStatuses } from '/@src/utils/api/visitcard'
import { ApiDataInterface } from '/@src/utils/interfaces'

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

const apiData: ApiDataInterface = reactive({
  data: [],
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
    // currentFilterData.page = page
    await fetchData(page)
  },
})

// const currentFilterData = reactive({
//   page: 1,
// })

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
    format: (value: string, row: any) =>
      row.last_visit?.created_at &&
      formatDate(new Date(row.last_visit?.created_at), 'YYYY-MM-DD'),
    // sortable: true,
  },
  visit_type: {
    label: t('Visit_type'),
    format: (value: string, row: any) =>
      row.last_visit?.visit_type && t(row.last_visit?.visit_type),
    // grow: true,
    // sortable: true,
  },
  directed_by: {
    label: t('Directed_by'),
    format: (value: string, row: any) =>
      row.last_visit?.directed_by && t(row.last_visit?.directed_by),
    // grow: true,
    // sortable: true,
  },
  personalized_donation: {
    label: t('Personalized_donation'),
    format: (value: string, row: any) => row.last_visit?.personalized_donation,
    // grow: true,
    // sortable: true,
  },
  visit_status: {
    label: t('Visit_status'),
    format: (value: string, row: any) => row.last_visit?.status?.name,
    // grow: true,
    // sortable: true,
  },
  actions: {
    label: t('Actions'),
  },
} as const

const incomingCallerId = ref<number>()
const donorStatuses = ref([{ id: 0, name: t('All') }])
const selectedDonorStatus = ref('')

onMounted(async () => {
  const res = await fetchVisitcardStatuses()
  donorStatuses.value = res.result
})

watch(
  () => selectedDonorStatus.value,
  async (newVal) => {
    await fetchData()
  }
)

// the fetchData function will be called each time one of the parameter changes
async function fetchData(page: number = 1) {
  try {
    isLoading.value = true

    const res = await patientsListForCandidate({
      page,
      status_id: selectedDonorStatus.value,
    })
    Object.assign(apiData, res.result)
  } catch (error: any) {
    notif.error(t(error.response?.data?.errors))
  } finally {
    isLoading.value = false
  }
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
              // to: { name: '/app/users/' },
            },
            {
              label: $t('Donors-list-for-examination'),
              // to: { name: '/app/physician-therapist/donors-for-examination/' },
            },
          ]"
        />
      </div>
      <div class="column is-3">
        <VField v-slot="{ id }" class="is-curved-select">
          <VControl>
            <Multiselect
              v-model="selectedDonorStatus"
              :attrs="{ id }"
              :options="donorStatuses"
              :placeholder="$t('Select_donor_status')"
              label="name"
              value-prop="id"
            />
          </VControl>
        </VField>
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
                  <RouterLink
                    class="table_link"
                    :to="`/app/physician-therapist/donors-for-examination/${row.id}`"
                  >
                    {{ row.first_name }} {{ row.last_name }} {{ row.father_name }}
                    <!-- <span class="dark-text">
                    </span> -->
                  </RouterLink>
                </template>
                <template v-if="column.key === 'actions'">
                  <RouterLink
                    class="has-text-warning"
                    :to="`/app/physician-therapist/donors-for-examination`"
                  >
                    {{ $t('Complete') }}
                    <!-- <span class="dark-text">
                    </span> -->
                  </RouterLink>
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
