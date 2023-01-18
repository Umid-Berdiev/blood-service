<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { useMainStore } from '/@src/stores/main'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import {
  fetchDonationContainers,
  removeDonationContainer,
} from '/@src/utils/api/donation'
import { ApiDataInterface, DonationContainerInterface } from '/@src/utils/interfaces'

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

const apiData: ApiDataInterface<DonationContainerInterface> = reactive({
  data: [],
  pagination: {
    total: 10,
    count: 10,
    per_page: 10,
    current_page: 1,
    total_pages: 1,
  },
})
const selectedRow = ref<DonationContainerInterface | null>(null)
const isFormModalOpen = ref(false)

await fetchData()

// hooks
watch(isFormModalOpen, function (newVal) {
  if (newVal === false) {
    selectedRow.value = null
  }
})

watch(
  () => apiData.pagination.current_page,
  async function (newVal) {
    if (newVal) {
      await fetchData()
    }
  }
)

// functions
async function fetchData() {
  try {
    isLoading.value = true
    const params = {
      page: apiData.pagination.current_page,
      per_page: apiData.pagination.per_page,
    }
    const res = await fetchDonationContainers(params)
    Object.assign(apiData, res.result)
  } catch (error: any) {
    notif.error(t('Something_went_wrong'))
  } finally {
    isLoading.value = false
  }
}

function openFormModal(item: any) {
  selectedRow.value = item
  isFormModalOpen.value = true
}

function onRemove(id: number) {
  selectedRowId.value = id
  mainStore.$patch({ confirmModalState: true })
}

async function handleRemoveAction() {
  isLoading.value = true
  await removeDonationContainer(selectedRowId.value as number)
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
          @click="openFormModal(null)"
        />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <VCard>
          <div class="table-container">
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
                        {{ item.name }}
                      </a>
                    </td>
                    <td>{{ item.series }}</td>
                    <td>{{ item.hemopreservative }}</td>
                    <td>{{ item.count_hemopreservative }}</td>
                    <td>{{ item.expire_date }}</td>
                    <td>{{ item.expire_days }}</td>
                    <td class="has-text-centered">
                      <a
                        href="javascript:;"
                        class="has-text-danger"
                        @click="onRemove(item.id as number)"
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
