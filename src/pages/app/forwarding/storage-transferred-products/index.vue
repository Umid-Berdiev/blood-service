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

viewWrapper.setPageTitle(t('Forwarding'))
useHead({
  title: `${t('Storage_transferred_products')} - ${mainStore.app.name}`,
})

const apiData: { data: ProductInterface[]; pagination: ApiDataInterface['pagination'] } =
  reactive({
    data: [
      {
        id: 11,
        donation_date: '10.12.2022',
        donation_code: '130100123400',
        blood_type: 'O(I)',
        rh_factor: 'Rh+',
        component_name: 'Эритроцитная масса',
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
const isFormModalOpen = ref(false)
const filterErrors = reactive({
  donation_code: [],
  component_id: [],
})

// await handleSearch(currentFilterData)

// hooks
watch(isFormModalOpen, function (newVal: boolean) {
  if (newVal === false) {
    Object.assign(selectedRow, {})
  }
})

// functions
function openFormModal(item: any) {
  Object.assign(selectedRow, item)
  isFormModalOpen.value = true
}

async function handleSearch(filterForm: any) {
  try {
    isLoading.value = true
    const params = { ...filterForm, page: apiData.pagination.current_page }
    // const res = await patientsListForScreening(params)
    // Object.assign(apiData, res.result)

    // if (isEmpty(res.result.data)) {
    //   notif.warning(t('Data_not_found'))
    // } else notif.success(`${t('Found')}: ${res.result.pagination.total} ${t('records')}`)
  } catch (error: any) {
    Object.assign(filterErrors, error.response?.data?.errors)
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
              label: $t('Forwarding'),
            },
            {
              label: $t('Storage_transferred_products'),
            },
          ]"
        />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <StorageTransferredProductsFilter
          :is-loading="isLoading"
          :errors="filterErrors"
          @search="handleSearch"
          @clear-form="clearFilterForm"
          @clear-error="clearError"
        />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <VCard>
          <div class="table-container">
            <div v-if="apiData.data.length === 0" class="flex-list-inner">
              <VPlaceholderSection
                title="No matches"
                subtitle="There is no data that match your query."
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
            <table v-else class="table is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>{{ $t('Donation_date') }}</th>
                  <th>{{ $t('Donation_code') }}</th>
                  <th>{{ $t('Blood_type') }}</th>
                  <th>{{ $t('Rh_factor') }}</th>
                  <th>{{ $t('Component_name') }}</th>
                  <th>{{ $t('Dose') }}</th>
                  <th>{{ $t('Quantity_ml') }}</th>
                  <th>{{ $t('Come_from') }}</th>
                  <th>{{ $t('Recipient_surname') }}</th>
                  <th>{{ $t('Expiry_date') }}</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="isLoading">
                  <tr v-for="key in apiData.pagination.per_page" :key="key">
                    <td colspan="10">
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
                        @click="openFormModal(item)"
                      >
                        {{ item.donation_code }}
                      </a>
                    </td>
                    <td>{{ item.blood_type }}</td>
                    <td>{{ item.rh_factor }}</td>
                    <td>{{ item.component_name }}</td>
                    <td>{{ item.dose }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>{{ item.come_from }}</td>
                    <td>{{ item.personalized_donation }}</td>
                    <td>{{ item.expiry_date }}</td>
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
    <ProductReleaseFormModal
      v-model:is-open="isFormModalOpen"
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
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
      }
    }
  }
}
</style>
