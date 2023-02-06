<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { useMainStore } from '/@src/stores/main'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { ApiDataInterface } from '/@src/utils/interfaces'

interface ProductInterface {
  id?: number
  donation_date: string
  donation_code: string
  component_name: string
  dose: string
  quantity: string
  unsuitability_reasons: string
}
const router = useRouter()
const notif = useNotyf()
const { t } = useI18n()
const mainStore = useMainStore()
const isLoading = ref(false)
const viewWrapper = useViewWrapper()
const selectedRowId = ref<number | null>(null)

viewWrapper.setPageTitle(t('Scrapping'))
useHead({
  title: `${t('Components_to_be_scrapped')} - ${mainStore.app.name}`,
})

const apiData: ApiDataInterface<ProductInterface> = reactive({
  data: [
    {
      id: 11,
      donation_date: '10.12.2022',
      donation_code: '130100123400',
      component_name: 'Эритроцитная масса',
      dose: '0',
      quantity: '300',
      unsuitability_reasons: 'Расхождение группы крови',
    },
    {
      id: 11,
      donation_date: '10.12.2022',
      donation_code: '130100213000',
      component_name: 'Свежезамороженная плазма',
      dose: '0',
      quantity: '270',
      unsuitability_reasons: 'Бруцеллез',
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

// await handleSearch(currentFilterData)

// hooks
watch(isFormModalOpen, function (newVal: boolean) {
  if (newVal === false) {
    Object.assign(selectedRow, {})
  }
})

// functions
async function fetchData() {
  try {
    isLoading.value = true
    // const res = await patientsListForScreening()
    // Object.assign(apiData, res.result)
  } catch (error: any) {
    notif.error(t('Something_went_wrong'))
  } finally {
    isLoading.value = false
  }
}

function openFormModal(item: any) {
  Object.assign(selectedRow, item)
  isFormModalOpen.value = true
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
              label: $t('Scrapping'),
            },
            {
              label: $t('Components_to_be_scrapped'),
            },
          ]"
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
                  <th>{{ $t('Component_name') }}</th>
                  <th>{{ $t('Dose') }}</th>
                  <th>{{ $t('Quantity_ml') }}</th>
                  <th>{{ $t('Unsuitability_reasons') }}</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="isLoading">
                  <tr v-for="key in apiData.pagination.per_page" :key="key">
                    <td colspan="6">
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
                    <td>{{ item.component_name }}</td>
                    <td>{{ item.dose }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>{{ item.unsuitability_reasons }}</td>
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
    <ScrappingFormModal
      v-model:is-open="isFormModalOpen"
      :component="selectedRow"
      @update:list="fetchData"
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
