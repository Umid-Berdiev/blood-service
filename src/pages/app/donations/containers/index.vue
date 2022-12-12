<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { useMainStore } from '/@src/stores/main'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { ApiDataInterface } from '/@src/utils/interfaces'

const router = useRouter()
const notif = useNotyf()
const { t } = useI18n()
const mainStore = useMainStore()
const isLoading = ref(false)
const viewWrapper = useViewWrapper()
const selectedRowId = ref<number | null>(null)

viewWrapper.setPageTitle(t('Donations'))
useHead({
  title: `${t('Containers_list')} - ${mainStore.app.name}`,
})

const apiData: ApiDataInterface = reactive({
  data: [
    {
      id: 11,
      title: {
        ru: 'Гемасин 500/400',
        uz: '',
        en: '',
      },
      series: '4700812',
      preservative: 'Глюгицир',
      preservative_volume: '100,00',
      container_expiration_date: '09.2023',
      preservative_shelf_life_days: '50',
    },
    {
      id: 12,
      title: {
        ru: 'Гемасин 400/400',
        uz: '',
        en: '',
      },
      series: '4700916',
      preservative: 'Глюгицир',
      preservative_volume: '63,00',
      container_expiration_date: '12.2023',
      preservative_shelf_life_days: '50',
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
watch(isFormModalOpen, function (newVal) {
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

function onRemove(id: number) {
  selectedRowId.value = id
  mainStore.$patch({ confirmModalState: true })
}

async function handleRemoveAction() {
  // await removeVisitcardById(selectedRowId.value)
  await fetchData()
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
              label: $t('Donations'),
            },
            {
              label: $t('Containers_list'),
            },
          ]"
        />
      </div>
      <div class="column is-narrow ml-auto">
        <VIconButton
          type="button"
          icon="feather:plus"
          color="primary"
          @click="openFormModal"
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
                  <th>{{ $t('Title') }}</th>
                  <th>{{ $t('Series') }}</th>
                  <th>{{ $t('Preservative') }}</th>
                  <th>{{ $t('Preservative_volume') }}</th>
                  <th>{{ $t('Container_expiration_date') }}</th>
                  <th>{{ $t('Preservative_shelf_life_days') }}</th>
                  <th class="has-text-centered">{{ $t('Actions') }}</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="isLoading">
                  <tr v-for="key in apiData.pagination.per_page" :key="key">
                    <td colspan="7">
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
                        {{ item.title.ru }}
                      </a>
                    </td>
                    <td>{{ item.series }}</td>
                    <td>{{ item.preservative }}</td>
                    <td>{{ item.preservative_volume }}</td>
                    <td>{{ item.container_expiration_date }}</td>
                    <td>{{ item.preservative_shelf_life_days }}</td>
                    <td class="has-text-centered">
                      <a
                        href="javascript:;"
                        class="has-text-danger"
                        @click="onRemove(item.id)"
                      >
                        <span class="iconify" data-icon="feather:trash"></span>
                      </a>
                    </td>
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
    <DonationContainerFormModal
      v-model:is-open="isFormModalOpen"
      :container="selectedRow"
      @update:list="fetchData"
    />
    <ConfirmActionModal @confirm-action="handleRemoveAction" />
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
