<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import {
  ApiDataInterface,
  PatientInterface,
  SearchErrorInterface,
} from '/@src/utils/interfaces'
import { useMainStore } from '/@src/stores/main'
import { patientsListRejected } from '/@src/utils/api/patient'

const router = useRouter()
const notif = useNotyf()
const { t } = useI18n()
const mainStore = useMainStore()
const isLoading = ref(false)
const errors: SearchErrorInterface = reactive({
  lastname: '',
  firstname: '',
  middlename: '',
  passpordId: '',
})
const viewWrapper = useViewWrapper()

viewWrapper.setPageTitle(t('Registration'))
useHead({
  title: `${t('Donation-diverted-register')} - ${mainStore.app.name}`,
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

const currentFilterData = reactive({
  page: 1,
})

const columns = {
  '#': {
    format: (value: any, row: any, index: number) => `${index + 1}`,
    cellClass: 'is-flex-grow-0',
  },
  name: {
    label: t('Fullname'),
    format: (value: string, row: any) => `${row.first_name} ${row.last_name}`,
  },
  birth_date: {
    label: t('Date-of-birth'),
  },
  gender: {
    label: t('Gender'),
    format: (value: string) => t(value),
  },
  passport: {
    label: t('Passport_series_number'),
    format: (value: string, row: any) => `${row.passport_series}${row.passport_number}`,
  },
  withdrawal_end_date: {
    label: t('Withdrawal_end_date'),
    format: (value: string, row: any) => row.withdrawal?.end_date,
  },
  withdrawal_reason: {
    label: t('Withdrawal_reason'),
    format: (value: string, row: any) => row.withdrawal?.reason,
  },
  withdrawal_created_by: {
    label: t('Withdrawal_created_by'),
    format: (value: string, row: any) => row.withdrawal?.created_by,
  },
} as const

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
    Object.assign(currentFilterData, filterForm)
    isLoading.value = true
    const res = await patientsListRejected(filterForm)
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

function printList() {
  //
}
</script>

<template>
  <div class="page-content-inner">
    <VFlex justify-content="space-between" flex-wrap="wrap">
      <VFlexItem>
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
              label: $t('Registration'),
            },
            {
              label: $t('Donation-diverted-register'),
            },
          ]"
        />
      </VFlexItem>
      <VFlexItem>
        <VButtons>
          <PrintButton @click.prevent="printList" />
        </VButtons>
      </VFlexItem>
    </VFlex>
    <div class="columns mt-1">
      <div class="column">
        <RegistrationFilterForm
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
            <!--
              The VFlexTable "data" and "columns" props
              will be inherited from parent VFlexTableWrapper
            -->
            <VFlexTable rounded :no-header="!isLoading && apiData.data.length === 0">
              <template #header-column="{ column }">
                <span v-if="column.key === '#'" class="is-flex-grow-0" v-text="'#'" />
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
