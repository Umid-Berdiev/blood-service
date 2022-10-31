<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { useMainStore } from '/@src/stores/main'

import { useViewWrapper } from '/@src/stores/viewWrapper'
import { patientsList } from '/@src/utils/api/patient'

const router = useRouter()
const notif = useNotyf()
const { t } = useI18n()
const mainStore = useMainStore()
const viewWrapper = useViewWrapper()

viewWrapper.setPageTitle(t('Users_List'))
useHead({
  title: `${t('Donors-list-for-examination')} - ${mainStore.app.name}`,
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

const selectedId = ref()
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
    // grow: true,
    sortable: true,
  },
  username: {
    label: 'Username',
    // grow: true,
    sortable: true,
  },
  email: {
    label: 'Email',
    // grow: true,
    sortable: true,
  },
  phone: {
    label: 'Phone',
    // grow: true,
    sortable: true,
  },
  website: {
    label: 'Website',
    // grow: true,
    sortable: true,
  },
  // actions: {
  //   label: '',
  //   align: 'end',
  // },
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
const donorStatuses = ref([
  'Направленные на медосмотр',
  'Направленные на первичный скрининг',
  'Скрининг завершен',
  'Направленные на забор образцов',
  'Направленные на лабораторные исследования',
  'Лабораторные исследования завершены',
])
const selectedDonorStatus = ref('')

// await fetchData()

watch(
  () => selectedDonorStatus.value,
  async (newVal) => {
    if (newVal) {
      await fetchData()
    } else apiData.result = []
  }
)

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
    // const res = await fetchList({
    //   page,
    //   per_page: apiData.pagination.per_page,
    // })
    const res = await patientsList({ page })
    apiData.result = await res

    // Object.assign(apiData, res)
  } catch (error: any) {
    notif.error(t(error.response?.data?.error?.message))
  } finally {
    isLoading.value = false
  }
}

function onEdit(rowId: number | null) {
  selectedId.value = rowId
  router.push(`/app/users/${rowId}`)
}

async function onRemove(id: number) {
  selectedId.value = id
  mainStore.$patch({ confirmModalState: true })
}

async function handleRemoveAction() {
  await removeById(selectedId.value)
  fetchData()
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
              label: $t('Physician-therapist'),
              // to: { name: '/app/users/' },
            },
            {
              label: $t('Donors-list-for-examination'),
              to: { name: '/app/physician-therapist/donors-for-examination/' },
            },
          ]"
        />
      </VFlexItem>
      <VFlexItem>
        <VField v-slot="{ id }" class="is-curved-select" style="width: 20rem">
          <VControl>
            <Multiselect
              v-model="selectedDonorStatus"
              :attrs="{ id }"
              :options="donorStatuses"
              :placeholder="$t('Select_donor_status')"
            />
          </VControl>
        </VField>
      </VFlexItem>
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
            <!-- We can place any content inside the default slot-->
            <VFlexTableToolbar>
              <template #left>
                <SearchInput v-model="searchInput" />
              </template>

              <template #right>
                <PerPageSelect v-model="apiData.pagination.per_page" />
              </template>
            </VFlexTableToolbar>

            <!--
              The VFlexTable "apiData" and "columns" props
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
                      <!-- <VPlaceloadAvatar size="medium" /> -->

                      <VPlaceloadText
                        :lines="2"
                        width="100%"
                        last-line-width="20%"
                        class="mx-2"
                      />
                    </VFlexTableCell>
                    <!-- <VFlexTableCell
                      v-for="(column, columnIndex) in columns"
                      :key="columnIndex"
                    >
                      <VPlaceload class="mx-1" />
                    </VFlexTableCell> -->
                    <!-- <VFlexTableCell>
                      <VPlaceload width="60%" class="mx-1" />
                    </VFlexTableCell>
                    <VFlexTableCell :column="{ align: 'end' }">
                      <VPlaceload width="45%" class="mx-1" />
                    </VFlexTableCell> -->
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

              <!-- We can inject content before any rows -->
              <template #body-row-pre="{ row }">
                <template v-if="row.id === incomingCallerId">
                  <VProgress size="tiny" class="m-0 mb-1" />
                </template>
              </template>

              <!-- This is the body cell slot -->
              <template #body-cell="{ row, column, value }">
                <template v-if="column.key === 'name'">
                  <!-- <VAvatar size="medium" :picture="row.avatar" /> -->
                  <RouterLink
                    class="table_link"
                    :to="`/app/physician-therapist/donors-for-examination/${row.id}`"
                  >
                    {{ value }}
                  </RouterLink>
                </template>
                <!-- <template v-if="column.key === 'role'">
                  <div>
                    <span class="dark-text">{{ row.role.name }}</span>
                  </div>
                </template> -->
                <!-- <template v-if="column.key === 'actions'">
                  <EmployeeFlexTableDropdown
                    @edit="onEdit(row.id)"
                    @remove="onRemove(row.id)"
                  />
                </template> -->
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
    <ConfirmActionModal @confirm-action="handleRemoveAction" />
  </div>
</template>

<style scoped lang="scss">
.is-dark {
  .table_link:hover {
    color: darkgray;
  }
}
</style>
