<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { isEmpty } from 'lodash'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { useMainStore } from '/@src/stores/main'

import { useViewWrapper } from '/@src/stores/viewWrapper'
import { ApiDataInterface } from '/@src/utils/interfaces'

export interface BuckControlSterilityItemInterface {
  donation_date: string
  donation_code: number
  dose: number
  quantity: number
  component_name: string
  come_from: string
}

const notif = useNotyf()
const { t } = useI18n()
const mainStore = useMainStore()
const isLoading = ref(false)
const viewWrapper = useViewWrapper()

viewWrapper.setPageTitle(t('Buck-laboratory'))
useHead({
  title: `${t('Buck-control-sterility')} - ${mainStore.app.name}`,
})

const apiData: ApiDataInterface<BuckControlSterilityItemInterface> = reactive({
  data: [
    {
      donation_date: '05.06.2022',
      donation_code: '138800115200',
      dose: '0',
      quantity: '250',
      component_name: 'Эритроцитная масса',
      come_from: 'Из отдела переработки',
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
  donation_date: {
    label: t('Donation_date'),
  },
  donation_code: {
    label: t('Donation_code'),
  },
  dose: {
    label: t('Dose'),
  },
  quantity: {
    label: t('Quantity_ml'),
  },
  component_name: {
    label: t('Component_name'),
  },
  come_from: {
    label: t('Come_from'),
  },
} as const

const errors = reactive({
  visit_type_id: [],
  donation_type_id: [],
  donation_code: [],
})
const currentFilterData = reactive({
  page: 1,
})
const clickedRowData: BuckControlSterilityItemInterface = reactive({})
const isFormModalOpen = ref(false)

// await handleSearch(currentFilterData)

// functions
async function handleSearch(filterForm: any) {
  try {
    Object.assign(currentFilterData, filterForm)
    isLoading.value = true
    // const res = await fetch
    // Object.assign(apiData, res.result)

  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
  } finally {
    isLoading.value = false
  }
}

function openBuckControlSterilityFormModal(patient: BuckControlSterilityItemInterface) {
  Object.assign(clickedRowData, patient)
  isFormModalOpen.value = true
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
              label: $t('Buck-laboratory'),
              // to: { name: '/app/users/' },
            },
            {
              label: $t('Buck-control-sterility'),
              // to: { name: '/app/physician-therapist/donors-for-examination/' },
            },
          ]"
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
                <!-- <span
                  v-if="column.key === 'orderNumber'"
                  class="is-flex-grow-0"
                  v-text="'#'"
                /> -->
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
                <template v-if="column.key === 'donation_code'">
                  <a
                    href="javascript:;"
                    class="has-text-primary"
                    @click="openBuckControlSterilityFormModal(row)"
                  >
                    {{ row.donation_code }}
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
    <BuckControlSterilityFormModal
      v-model:is-open="isFormModalOpen"
      :item="clickedRowData"
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
