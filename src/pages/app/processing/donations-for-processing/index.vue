<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { useMainStore } from '/@src/stores/main'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { fetchDonationsForProcessing } from '/@src/utils/api/processing'
import { ApiDataInterface, ProductInterface } from '/@src/utils/interfaces'

const router = useRouter()
const notif = useNotyf()
const { t } = useI18n()
const mainStore = useMainStore()
const isLoading = ref(false)
const viewWrapper = useViewWrapper()

viewWrapper.setPageTitle(t('Processing'))
useHead({
  title: `${t('Donations_list_for_processing')} - ${mainStore.app.name}`,
})

const apiData: ApiDataInterface<ProductInterface> = reactive({
  data: [],
  pagination: {
    total: 10,
    count: 10,
    per_page: 10,
    current_page: 1,
    total_pages: 1,
  },
})
const selectedRow = ref<ProductInterface | null>(null)
const isFormModalOpen = ref(false)
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
watch(isFormModalOpen, function (newVal: boolean) {
  if (newVal === false) {
    selectedRow.value = null
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
function openFormModal(item: any) {
  selectedRow.value = item
  isFormModalOpen.value = true
}

async function handleSearch(filterForm: any) {
  try {
    isLoading.value = true
    Object.assign(currentFilterData, filterForm)

    const res = await fetchDonationsForProcessing(filterForm)
    Object.assign(apiData, res.result)
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
              label: $t('Donations_list_for_processing'),
            },
          ]"
        />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <DonationForProcessingFilter
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
                  <th>{{ $t('Donation_code') }}</th>
                  <th>{{ $t('Donation_date') }}</th>
                  <th>{{ $t('Donation_type') }}</th>
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
                    <td>
                      <a
                        href="javascript:;"
                        class="has-text-primary"
                        @click="openFormModal(item)"
                      >
                        {{ item.donation_code }}
                      </a>
                    </td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.donation_type?.name }}</td>
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
    <ProcessingCardModal
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
