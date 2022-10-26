<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { useMainStore } from '/@src/stores/main'

import { useViewWrapper } from '/@src/stores/viewWrapper'
import { fetchList } from '/@src/utils/api/employees'

const router = useRouter()
const notif = useNotyf()
const { t } = useI18n()
const mainStore = useMainStore()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Patient_cards_list'))
useHead({
  title: `${t('Patient_cards')} - ${mainStore.app.name}`,
})

const apiData = reactive({
  pagination: {
    current_page: 1,
    per_page: 10,
    total: 10,
    total_pages: 1,
  },
  result: [],
})

const selectedId = ref<number | null>(null)
const isFormModalOpen = ref(false)
const currentPage = computed({
  get: () => {
    return apiData.pagination.current_page
  },
  set: async (page) => {
    await fetchData(page)
  },
})
const columns = {
  orderNumber: {
    format: (value: any, row: any, index: number) => `${index + 1}`,
    cellClass: 'is-flex-grow-0',
  },
  name: {
    label: 'Fullname',
    media: true,
    grow: true,
    sortable: true,
  },
  email: {
    label: 'Email',
    sortable: true,
  },
  role: {
    label: 'Role',
    sortable: true,
  },
  department: {
    label: 'Department',
    grow: true,
    sortable: true,
  },
  actions: {
    label: '',
    align: 'end',
  },
} as const
const isLoading = ref<boolean>(false)
const searchInput = computed({
  get(): string {
    return ''
  },
  async set(v: string) {
    console.log(v)

    // await onSearch(v)
  },
})
const incomingCallerId = ref<number>()

// await fetchData()

watch(
  () => apiData.pagination.per_page,
  async () => {
    await fetchData()
  }
)

// the fetchData function will be called each time one of the parameter changes
async function fetchData(page: number = 1) {
  try {
    isLoading.value = true

    // async fetch apiData to our server
    const res = await fetchList({
      page,
      per_page: apiData.pagination.per_page,
    })

    Object.assign(apiData, res)
  } catch (error: any) {
    notif.error(t(error.response?.data.error.message))
  } finally {
    isLoading.value = false
  }
}

function onEdit(rowId: number | null) {
  selectedId.value = rowId
  isFormModalOpen.value = true
}

async function onRemove(id: number) {
  selectedId.value = id
  mainStore.$patch({ confirmModalState: true })
}

// async function handleRemoveAction() {
//   await removeById(selectedId.value)
//   fetchData()
// }

function updateList() {
  fetchData()
  notif.success()
  selectedId.value = null
}
</script>

<template>
  <div class="page-content-inner">
    <VFlex>
      <VButton
        color="primary"
        rounded
        outlined
        icon="feather:plus"
        class="ml-auto"
        @click="onEdit(null)"
      >
        {{ $t('Add') }}
      </VButton>
    </VFlex>

    <div class="columns">
      <div class="column is-12">
        <VFlexTableWrapper
          class="mt-4"
          :columns="columns"
          :data="apiData.result"
          :limit="apiData.pagination.per_page"
          :total="apiData.pagination.total"
        >
          <!--
            Here we retrieve the internal wrapperState.
            Note that we can not destructure it
          -->
          <template #default="wrapperState">
            {{ wrapperState }}
            <!-- We can place any content inside the default slot-->
            <!-- <VFlexTableToolbar>
              <template #left>
                <SearchInput v-model="searchInput" />
              </template>

              <template #right>
                <PerPageSelect v-model="data.pagination.per_page" />
              </template>
            </VFlexTableToolbar> -->

            <!--
              The VFlexTable "data" and "columns" props
              will be inherited from parent VFlexTableWrapper
            -->
            <VFlexTable rounded :no-header="!isLoading && apiData.result.length === 0">
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
                    <VFlexTableCell :column="{ grow: true, media: true }">
                      <VPlaceloadAvatar size="medium" />

                      <VPlaceloadText
                        :lines="2"
                        width="60%"
                        last-line-width="20%"
                        class="mx-2"
                      />
                    </VFlexTableCell>
                    <VFlexTableCell>
                      <VPlaceload width="60%" class="mx-1" />
                    </VFlexTableCell>
                    <VFlexTableCell>
                      <VPlaceload width="60%" class="mx-1" />
                    </VFlexTableCell>
                    <VFlexTableCell :column="{ align: 'end' }">
                      <VPlaceload width="45%" class="mx-1" />
                    </VFlexTableCell>
                  </div>
                </div>

                <!-- This is the empty state -->
                <div v-else-if="apiData.result.length === 0" class="flex-list-inner">
                  <VPlaceholderSection
                    title="No matches"
                    subtitle="There is no data that match your query."
                    class="my-6"
                  >
                    <template #image>
                      <img
                        class="light-image"
                        src="/@src/assets/illustrations/placeholders/search-4.svg"
                        alt=""
                      />
                      <img
                        class="dark-image"
                        src="/@src/assets/illustrations/placeholders/search-4-dark.svg"
                        alt=""
                      />
                    </template>
                  </VPlaceholderSection>
                </div>
              </template>

              <!-- We can inject content before any rows -->
              <template #body-row-pre="{ row }">
                <template v-if="row.id === incomingCallerId">
                  <VProgress size="tiny" class="m-0 mb-1" />
                </template>
              </template>

              <!-- This is the body cell slot -->
              <template #body-cell="{ row, column }">
                <template v-if="column.key === 'name'">
                  <VAvatar size="medium" :picture="row.avatar" />
                  <div>
                    <span class="dark-text">{{ row.firstname }} {{ row.lastname }}</span>
                  </div>
                </template>
                <template v-if="column.key === 'role'">
                  <div>
                    <span class="dark-text">{{ row.role.name }}</span>
                  </div>
                </template>
                <template v-if="column.key === 'actions'">
                  <EmployeeFlexTableDropdown
                    @edit="onEdit(row.id)"
                    @remove="onRemove(row.id)"
                  />
                </template>
              </template>
            </VFlexTable>

            <!--Table Pagination-->
            <VFlexPagination
              v-if="apiData.result.length"
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
    <!-- <ConfirmActionModal @confirm-action="handleRemoveAction" /> -->
    <PatientVisitCardFormModal
      v-model="isFormModalOpen"
      :card-id="selectedId"
      @update:list="updateList"
      @close="selectedId = null"
    />
  </div>
</template>
