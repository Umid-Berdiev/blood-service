<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { useMainStore } from '/@src/stores/main'

import { useViewWrapper } from '/@src/stores/viewWrapper'
import { fetchComponentsForSterility } from '/@src/utils/api/buck-laboratory'
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
    const res = await fetchComponentsForSterility(currentFilterData)
    Object.assign(apiData, res.result)
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
                <NoDataPlaceholder v-if="apiData.data.length === 0" />
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
