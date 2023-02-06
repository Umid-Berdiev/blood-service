<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { useMainStore } from '/@src/stores/main'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { ApiDataInterface, ProductInterface } from '/@src/utils/interfaces'

const router = useRouter()
const notif = useNotyf()
const { t } = useI18n()
const mainStore = useMainStore()
const isLoading = ref(false)
const viewWrapper = useViewWrapper()
const selectedRowId = ref<number | null>(null)

viewWrapper.setPageTitle(t('Processing'))
useHead({
  title: `${t('Recycling-components')} - ${mainStore.app.name}`,
})

const apiData: ApiDataInterface<ProductInterface> = reactive({
  data: [
    {
      id: 11,
      donation_code: '130100123400',
      donation_date: '10.12.2022',
      blood_type: 'O(I)',
      visit_type: 'Безвозмезные донации',
      rh_factor: 'Rh+',
      component_name: 'Эритроцитная масса',
      donation_type: 'Донация цельной крови',
      dose: '0',
      quantity: '340',
      come_from: 'Республиканский центр крови',
      personalized_donation: 'Николай Резанов',
      expiry_date: '01.03.2023',
    },
    {
      id: 17,
      donation_code: '130100456500',
      donation_date: '18.12.2022',
      blood_type: 'O(I)',
      visit_type: 'Платные донации',
      rh_factor: 'Rh+',
      component_name: 'Эритроцитная масса',
      donation_type: 'Тромбоцитаферез',
      dose: '0',
      quantity: '340',
      come_from: 'Республиканский центр крови',
      personalized_donation: 'Николай Резанов',
      expiry_date: '01.03.2023',
    },
    {
      id: 21,
      donation_code: '130100987300',
      donation_date: '18.12.2022',
      blood_type: 'O(I)',
      visit_type: 'Платные донации',
      rh_factor: 'Rh+',
      component_name: 'Эритроцитная масса',
      donation_type: 'Плазмаферез',
      dose: '0',
      quantity: '340',
      come_from: 'Республиканский центр крови',
      personalized_donation: 'Николай Резанов',
      expiry_date: '01.03.2023',
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
const selectedRow = reactive({})
const isFormModal1Open = ref(false)
const isFormModal2Open = ref(false)
const isFormModal3Open = ref(false)
const filterErrors = reactive({
  donation_code: [],
  donation_type_id: [],
})
const currentFilterData = reactive({
  visit_type_id: '',
  donation_type_id: null,
  donation_code: '',
  category_id: '',
  page: 1,
})

// hooks
watch(isFormModal1Open, function (newVal: boolean) {
  if (newVal === false) {
    Object.assign(selectedRow, {})
  }
})

watch(isFormModal2Open, function (newVal: boolean) {
  if (newVal === false) {
    Object.assign(selectedRow, {})
  }
})

watch(isFormModal3Open, function (newVal: boolean) {
  if (newVal === false) {
    Object.assign(selectedRow, {})
  }
})

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
function openFormModal1(item: any) {
  Object.assign(selectedRow, item)
  isFormModal1Open.value = true
}
function openFormModal2(item: any) {
  Object.assign(selectedRow, item)
  isFormModal2Open.value = true
}
function openFormModal3(item: any) {
  Object.assign(selectedRow, item)
  isFormModal3Open.value = true
}

async function handleSearch(filterForm: any) {
  try {
    isLoading.value = true
    Object.assign(currentFilterData, filterForm)

    // const res = await patientsListForScreening(params)
    // Object.assign(apiData, res.result)
  } catch (error: any) {
    Object.assign(filterErrors, error.response?.data?.errors)
  } finally {
    isLoading.value = false
  }
}

async function clearFilterForm() {
  await handleSearch(currentFilterData)
}
</script>

<template>
  <div class="page-content-inner">
    <div class="columns mb-5">
      <div class="column is-narrow">
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
              label: $t('Processing'),
            },
            {
              label: $t('Recycling-components'),
            },
          ]"
        />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <ComponentRecyclingFilter
          :is-loading="isLoading"
          @search="handleSearch"
          @clear-form="clearFilterForm"
        />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <VCard>
          <div class="table-container">
            <NoDataPlaceholder v-if="apiData.data.length === 0" />
            <table v-else class="table is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>{{ $t('Donation_date') }}</th>
                  <th>{{ $t('Donation_code') }}</th>
                  <th>{{ $t('Dose') }}</th>
                  <th>{{ $t('Component_name') }}</th>
                  <th>{{ $t('Quantity_ml') }}</th>
                  <th>{{ $t('Blood_type') }} & {{ $t('Rh_factor') }}</th>
                  <th>{{ $t('Come_from') }}</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="isLoading">
                  <tr v-for="key in apiData.pagination.per_page" :key="key">
                    <td colspan="3">
                      <VPlaceloadText :lines="2" last-line-width="70%" />
                    </td>
                  </tr>
                </template>
                <template v-else>
                  <tr v-for="(item, itemIndex) in apiData.data" :key="itemIndex">
                    <td>{{ item.donation_date }}</td>
                    <td>
                      <a
                        href="javascript:;"
                        class="has-text-primary"
                        @click="
                          () => {
                            if (itemIndex === 0) openFormModal1(item)
                            if (itemIndex === 1) openFormModal2(item)
                            if (itemIndex === 2) openFormModal3(item)
                          }
                        "
                      >
                        {{ item.donation_code }}
                      </a>
                    </td>
                    <td>{{ item.dose }}</td>
                    <td>{{ item.component_name }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>{{ item.blood_type }} {{ item.rh_factor }}</td>
                    <td>{{ item.come_from }}</td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>

          <!--Table Pagination-->
          <VFlexPagination
            v-if="apiData.data.length"
            v-model:current-page="apiData.pagination.current_page"
            class="mt-5"
            :item-per-page="apiData.pagination.per_page"
            :total-items="apiData.pagination.total"
            no-router
          />
        </VCard>
      </div>
    </div>
    <WashedErythrocytesProductionModal
      v-model:is-open="isFormModal1Open"
      :product="selectedRow"
      @update:list="handleSearch"
    />
    <CryopreservedErythrocyteProductionModal
      v-model:is-open="isFormModal2Open"
      :product="selectedRow"
      @update:list="handleSearch"
    />
    <ThawedRbcProductionModal
      v-model:is-open="isFormModal3Open"
      :product="selectedRow"
      @update:list="handleSearch"
    />
  </div>
</template>

<style scoped lang="scss">
.table {
  thead {
    tr {
      th {
        font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu,
          Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, Arial,
          sans-serif;
        color: var(--muted-grey);
        // font-size: 0.8rem;
        font-weight: 600;
        // text-transform: uppercase;
      }
    }
  }
}
</style>
