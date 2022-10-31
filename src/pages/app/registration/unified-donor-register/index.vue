<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import FilterForm from '/@src/components/pages/registration/FilterForm.vue'
import { ApiDataInterface, SearchErrorInterface } from '/@src/utils/interfaces'
import { patientsList } from '/@src/utils/api/patient'
import { useMainStore } from '/@src/stores/main'

const router = useRouter()
const notif = useNotyf()
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
  title: `${t('Advanced_Search')} - ${mainStore.app.name}`,
})

const dataApi: ApiDataInterface = reactive({
  current_page: 1,
  data: [],
  per_page: 10,
  total: 10,
})

const currentPage = computed({
  get: () => {
    return dataApi.current_page
  },
  set: async (page) => {
    currentFilterData.page = page
    await handleSearch(currentFilterData)
  },
})

const currentFilterData = reactive({
  page: 1,
})

const columns = {
  orderNumber: {
    format: (value: any, row: any, index: number) => `${index + 1}`,
    cellClass: 'is-flex-grow-0',
  },
  category: {
    label: t('Category'),
    // media: true,
    // grow: true,
    sortable: true,
  },
  name: {
    label: t('Fullname'),
    // media: true,
    // grow: true,
    sortable: true,
  },
  gender: {
    label: t('Gender'),
    sortable: true,
  },
  birth_date: {
    label: t('Date-of-birth'),
    sortable: true,
  },
  address: {
    label: t('Address'),
    grow: true,
    sortable: true,
  },
  phone_number: {
    label: t('Phone_number'),
    // grow: true,
    sortable: true,
  },
  isDiverted: {
    label: t('Diverted_from_donation'),
    // grow: true,
    sortable: true,
  },
  actions: {
    label: t('Actions'),
    align: 'center',
  },
} as const

const incomingCallerId = ref<number>()

async function handleSearch(filterForm: any) {
  try {
    Object.assign(currentFilterData, filterForm)
    isLoading.value = true
    const res = await patientsList(filterForm)
    Object.assign(dataApi, res.result)
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
  } finally {
    isLoading.value = false
  }
}

function clearError(prop: string) {
  errors[prop] = ''
}

// async function fetchData(page: number = 1) {
//   try {
//     isLoading.value = true

//     // async fetch data to our server
//     const res = await patientsList({
//       page,
//       per_page: dataApi.pagination.per_page,
//     })

//     Object.assign(dataApi, res)
//   } catch (error: any) {
//     notif.error(t(error.response?.data.error.message))
//   } finally {
//     isLoading.value = false
//   }
// }

async function clearFilterForm() {
  // await fetchData()
  dataApi.data = []
}

function addPatient() {
  router.push('/app/registration/register-donors')
}

function onView(rowId: string | number) {
  router.push(`/app/registration/unified-donor-register/${rowId}#details`)
}

function printList() {
  //
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
              label: $t('Registration'),
              // to: { name: '/app/registration/unified-donor-register/' },
            },
            {
              label: $t('Unified-donor-register'),
              to: { name: '/app/registration/unified-donor-register/' },
            },
          ]"
        />
      </VFlexItem>
      <VFlexItem>
        <VButtons>
          <VButton
            outlined
            rounded
            color="primary"
            icon="feather:plus"
            @click.prevent="addPatient"
          >
            {{ $t('Add') }}
          </VButton>
          <VButton
            outlined
            rounded
            color="light"
            icon="feather:printer"
            @click.prevent="printList"
          >
            {{ $t('Print') }}
          </VButton>
        </VButtons>
      </VFlexItem>
    </VFlex>
    <div class="columns mt-1">
      <div class="column">
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
          :columns="columns"
          :data="dataApi.data"
          :limit="dataApi.per_page"
          :total="dataApi.total"
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
                <PerPageSelect v-model="dataApi.pagination.per_page" />
              </template>
            </VFlexTableToolbar> -->

            <!--
              The VFlexTable "data" and "columns" props
              will be inherited from parent VFlexTableWrapper
            -->
            <VFlexTable rounded :no-header="!isLoading && dataApi.data.length === 0">
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
                  <div v-for="key in dataApi.per_page" :key="key" class="flex-table-item">
                    <VFlexTableCell>
                      <VPlaceloadText :lines="2" last-line-width="70%" class="mx-2" />
                    </VFlexTableCell>
                    <!-- <VFlexTableCell>
                      <VPlaceload class="mx-1" />
                    </VFlexTableCell>
                    <VFlexTableCell>
                      <VPlaceload class="mx-1" />
                    </VFlexTableCell>
                    <VFlexTableCell :column="{ grow: true }">
                      <VPlaceload class="mx-1" />
                    </VFlexTableCell> -->
                  </div>
                </div>

                <!-- This is the empty state -->
                <div v-if="dataApi.data.length === 0" class="flex-list-inner">
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
                  <!-- <VAvatar size="medium" :picture="row.avatar" /> -->
                  <span class="dark-text">{{ row.first_name }} {{ row.last_name }}</span>
                </template>
                <template v-if="column.key === 'gender'">
                  <span class="dark-text">{{ $t(row.gender) }}</span>
                </template>
                <!-- <template v-if="column.key === 'role'">
                  <div>
                    <span class="dark-text">{{ row.role.name }}</span>
                  </div>
                </template> -->
                <template v-if="column.key === 'actions'">
                  <PatientFlexTableDropdown @view="onView(row.id)" />
                </template>
              </template>
            </VFlexTable>

            <!--Table Pagination-->
            <VFlexPagination
              v-if="dataApi.data.length"
              v-model:current-page="currentPage"
              class="mt-5"
              :item-per-page="dataApi.per_page"
              :total-items="dataApi.total"
              no-router
            />
          </template>
        </VFlexTableWrapper>
      </div>
    </div>
  </div>
</template>
