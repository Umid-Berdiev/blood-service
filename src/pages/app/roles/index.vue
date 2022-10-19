<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'

import { useNotyf } from '/@src/composable/useNotyf'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useMainStore } from '/@src/stores/main'
import { fetchList, removeById, searchList } from '/@src/utils/api/roles'

const notif = useNotyf()
const router = useRouter()
const { t } = useI18n()
const mainStore = useMainStore()
const data = reactive({
  pagination: {
    current_page: 1,
    per_page: 10,
    total: 10,
  },
  result: [],
})
const isFormModalOpen = ref(false)
const selectedId = ref<number | null>(null)
const searchInput = computed({
  get(): string {
    return ''
  },
  async set(v: string) {
    await onSearch(v)
  },
})
const columns = computed(() => ({
  orderNumber: {
    format: (value, row, index) => `${index + 1}`,
    cellClass: 'is-flex-grow-0',
  },
  name: {
    label: t('Name'),
    searchable: true,
    // sortable: true,
  },
  description: {
    label: t('Description'),
    // sortable: true,
  },
  actions: {
    label: t('Actions'),
    align: 'center',
  },
}))
const isLoading = ref<boolean>(false)
const incomingCallerId = ref<number>()
const viewWrapper = useViewWrapper()
const currentPage = computed({
  get: () => {
    return data.pagination.current_page
  },
  set: async (page) => {
    await fetchData(page)
  },
})

viewWrapper.setPageTitle(t('Roles_List'))

useHead({
  title: t('Roles') + ' - Nefrit',
})

await fetchData()

watch(
  () => data.pagination.per_page,
  async () => {
    await fetchData()
  }
)

function onEdit(rowId: number | null = null) {
  console.log({ rowId })

  isFormModalOpen.value = true
  selectedId.value = rowId
}

async function onRemove(id: number) {
  selectedId.value = id
  mainStore.$patch({ confirmModalState: true })
}

function gotoPermissions(id: number) {
  router.push(`/app/roles/${id}/permissions`)
}

async function handleRemoveAction() {
  await removeById(selectedId.value)
  await fetchData()
  successNotify()
}

async function fetchData(page: number = 1) {
  try {
    isLoading.value = true

    // async fetch data to our server
    const res = await fetchList({
      page,
      per_page: data.pagination.per_page,
    })

    Object.assign(data, res)
  } catch (error: any) {
    notif.error(t(error.response?.data.error.message))
  } finally {
    isLoading.value = false
  }
}

async function onSearch(val: string) {
  const res = await searchList(val)
  Object.assign(data, res)
}

function successNotify() {
  notif.success(t('Success'))
}
</script>

<template>
  <div class="applicant-list-wrapper">
    <VFlex justify-content="space-between">
      <VBreadcrumb
        with-icons
        separator="bullet"
        :items="[
          {
            label: 'Vuero',
            hideLabel: true,
            icon: 'feather:home',
            to: { name: '/app' },
          },
          {
            label: $t('Roles'),
            to: { name: '/app/roles/' },
          },
        ]"
      />
      <VButton
        outlined
        rounded
        color="primary"
        icon="feather:plus"
        @click.prevent="onEdit(null)"
      >
        {{ $t('Add') }}
      </VButton>
    </VFlex>

    <div class="columns">
      <div class="column is-12">
        <VFlexTableWrapper
          class="mt-4"
          :columns="columns"
          :data="data.result"
          :limit="data.pagination.per_page"
          :total="data.pagination.total"
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
                <PerPageSelect v-model="data.pagination.per_page" />
              </template>
            </VFlexTableToolbar>

            <!--
              The VFlexTable "data" and "columns" props
              will be inherited from parent VFlexTableWrapper
            -->
            <VFlexTable rounded :no-header="!isLoading && data.result.length === 0">
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
                    v-for="key in data.pagination.per_page"
                    :key="key"
                    class="flex-table-item"
                  >
                    <VFlexTableCell>
                      <VPlaceloadText
                        :lines="2"
                        width="40%"
                        last-line-width="20%"
                        class="mx-2"
                      />
                    </VFlexTableCell>
                    <VFlexTableCell>
                      <VPlaceload class="mx-1" />
                    </VFlexTableCell>
                    <VFlexTableCell :column="{ align: 'center' }">
                      <VPlaceload width="45%" class="mx-1" />
                    </VFlexTableCell>
                  </div>
                </div>

                <!-- This is the empty state -->
                <div v-else-if="data.result.length === 0" class="flex-list-inner">
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
                <template v-if="column.key === 'actions'">
                  <RoleDropdown
                    @edit="onEdit(row.id)"
                    @remove="onRemove(row.id)"
                    @permissions="gotoPermissions(row.id)"
                  />
                </template>
              </template>
            </VFlexTable>

            <!--Table Pagination-->
            <VFlexPagination
              v-model:current-page="currentPage"
              class="mt-5"
              :item-per-page="data.pagination.per_page"
              :total-items="data.pagination.total"
              no-router
            />
          </template>
        </VFlexTableWrapper>
      </div>
    </div>
    <RoleFormModal
      v-model="isFormModalOpen"
      :role-id="selectedId"
      @update:list="
        () => {
          fetchData()
          successNotify()
          selectedId = null
        }
      "
      @close="selectedId = null"
    />
    <ConfirmActionModal @confirm-action="handleRemoveAction" />
  </div>
</template>
