<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { ApiDataInterface, SearchErrorInterface } from '/@src/utils/interfaces'
import { patientsList } from '/@src/utils/api/patient'
import { useMainStore } from '/@src/stores/main'
import { isEmpty } from 'lodash'

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

viewWrapper.setPageTitle(t('Registration'))
useHead({
  title: `${t('Unified-donor-register')} - ${mainStore.app.name}`,
})

const apiData: ApiDataInterface = reactive({
  data: [],
  pagination: {
    total: 10,
    count: 10,
    per_page: 10,
    current_page: 1,
    total_pages: 1,
  },
})

const currentPage = computed({
  get: () => {
    return apiData.pagination.current_page
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
  '#': {
    format: (value: any, row: any, index: number) => `${index + 1}`,
    cellClass: 'is-flex-grow-0',
    // renderHeader: () => `<span class="is-flex-grow-0">#</span>`,
  },
  category: {
    label: t('Category'),
    format: (value: any) => value.name,
    // media: true,
    // grow: true,
    // sortable: true,
  },
  name: {
    label: t('Fullname'),
    // format: (value: string, row: any) =>
    //   `${row.first_name} ${row.last_name} ${row.father_name}`,
    // media: true,
    // grow: true,
    // sortable: true,
  },
  gender: {
    label: t('Gender'),
    format: (value: string) => t(value),
    // sortable: true,
  },
  birth_date: {
    label: t('Date-of-birth'),
    // sortable: true,
  },
  full_address: {
    label: t('Address'),
    // grow: true,
    // sortable: true,
  },
  phone_number: {
    label: t('Phone_number'),
    // grow: true,
    // sortable: true,
  },
  isDiverted: {
    label: t('Diverted_from_donation'),
    // grow: true,
    // sortable: true,
  },
  // actions: {
  //   label: t('Actions'),
  //   align: 'center',
  // },
} as const

const incomingCallerId = ref<number>()

async function handleSearch(filterForm: any) {
  try {
    Object.assign(currentFilterData, filterForm)
    isLoading.value = true
    const res = await patientsList(filterForm)
    Object.assign(apiData, res.result)

    if (isEmpty(res.result.data)) {
      notif.warning(t('Data_not_found'))
    } else notif.success(`${t('Found')}: ${res.result.pagination.total} ${t('records')}`)
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
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
            color="info"
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
        <RegistrationFilterForm
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
          :data="apiData.data"
          :limit="apiData.pagination.per_page"
          :total="apiData.pagination.total"
        >
          <!--
            Here we retrieve the internal wrapperState.
            Note that we can not destructure it
          -->
          <template #default>
            <VFlexTable rounded :no-header="!isLoading && apiData.data.length === 0">
              <template #header-column="{ column }">
                <span v-if="column.key === '#'" class="is-flex-grow-0" v-text="'#'" />
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
                    <VFlexTableCell>
                      <VPlaceloadText :lines="2" last-line-width="70%" class="mx-2" />
                    </VFlexTableCell>
                  </div>
                </div>

                <!-- This is the empty state -->
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
                    class="has-text-primary"
                    :to="`${$route.path}/${row.id}#details`"
                  >
                    {{ row.first_name }} {{ row.last_name }} {{ row.father_name }}
                  </RouterLink>
                </template>
              </template>
            </VFlexTable>

            <!--Table Pagination-->
            <VFlexPagination
              v-if="apiData.data.length"
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
  </div>
</template>
