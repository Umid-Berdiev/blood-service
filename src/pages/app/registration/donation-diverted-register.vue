<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import moment from 'moment'
import { useNotyf } from '/@src/composable/useNotyf'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import FilterForm from '/@src/components/pages/registration/FilterForm.vue'
import sleep from '/@src/utils/sleep'
import { SearchErrorInterface } from '/@src/utils/interfaces'
import { fetchList } from '/@src/utils/api/employees'
import { useMainStore } from '/@src/stores/main'

const router = useRouter()
const notyf = useNotyf()
const { t } = useI18n()
const mainStore = useMainStore()
const isLoading = ref(false)
const errors: SearchErrorInterface = reactive({
  lastname: '',
  firstname: '',
  middlename: '',
  passpordId: '',
})
const viewWrapper = useViewWrapper()

viewWrapper.setPageTitle(t('Advanced_Search'))
useHead({
  title: `${t('Donation-diverted-register')} - ${mainStore.app.name}`,
})

const data = reactive({
  pagination: {
    current_page: 1,
    per_page: 10,
    total: 10,
    total_pages: 1,
  },
  result: [],
})
const currentPage = computed({
  get: () => {
    return data.pagination.current_page
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
  // actions: {
  //   label: '',
  //   align: 'end',
  // },
} as const
const incomingCallerId = ref<number>()

const handleSearch = async (filterForm: any) => {
  try {
    isLoading.value = true
    const res = await fetchList({ page: 1, ...filterForm })
    Object.assign(data, res)
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
  } finally {
    isLoading.value = false
  }
}

function clearError(prop: string) {
  errors[prop] = ''
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

async function clearFilterForm() {
  // await fetchData()
  data.result = []
}

function addPatient() {
  router.push('/app/registration/register-donors')
}
</script>

<template>
  <div class="page-content-inner">
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
          label: $t('Registration'),
          // to: { name: '/app/registration/unified-donor-register/' },
        },
        {
          label: $t('Donation-diverted-register'),
          to: { name: '/app/registration/donation-diverted-register' },
        },
      ]"
    />
    <div class="columns is-justify-content-center">
      <div class="column">
        <TableActionsBlock title="" add-disabled />
        <FilterForm
          :is-loading="isLoading"
          :errors="errors"
          @search="handleSearch"
          @clear-form="clearFilterForm"
          @clear-error="clearError"
        />
      </div>
    </div>
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
                    <VFlexTableCell :column="{ grow: true }">
                      <VPlaceloadText :lines="2" last-line-width="20%" class="mx-2" />
                    </VFlexTableCell>
                    <VFlexTableCell>
                      <VPlaceload class="mx-1" />
                    </VFlexTableCell>
                    <VFlexTableCell>
                      <VPlaceload class="mx-1" />
                    </VFlexTableCell>
                    <VFlexTableCell :column="{ grow: true }">
                      <VPlaceload class="mx-1" />
                    </VFlexTableCell>
                  </div>
                </div>

                <!-- This is the empty state -->
                <div v-if="data.result.length === 0" class="flex-list-inner">
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
              v-if="data.result.length"
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
  </div>
</template>
