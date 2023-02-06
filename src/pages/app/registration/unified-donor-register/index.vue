<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import {
  ApiDataInterface,
  PatientInterface,
  SearchErrorInterface,
} from '/@src/utils/interfaces'
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

viewWrapper.setPageTitle(t('Registration'))
useHead({
  title: `${t('Unified-donor-register')} - ${mainStore.app.name}`,
})

const apiData: ApiDataInterface<PatientInterface> = reactive({
  data: [],
  pagination: {
    total: 10,
    count: 10,
    per_page: 10,
    current_page: 1,
    total_pages: 1,
  },
})

const currentFilterData = reactive({
  page: 1,
})

const columns = {
  '#': {
    format: (value: any, row: any, index: number) => `${index + 1}`,
    cellClass: 'is-flex-grow-0',
  },
  category: {
    label: t('Category'),
    format: (value: any) => value.name,
  },
  name: {
    label: t('Fullname'),
  },
  gender: {
    label: t('Gender'),
    format: (value: string) => t(value),
  },
  birth_date: {
    label: t('Date-of-birth'),
  },
  full_address: {
    label: t('Address'),
  },
  phone_number: {
    label: t('Phone_number'),
  },
  isDiverted: {
    label: t('Diverted_from_donation'),
  },
} as const

// hooks
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
async function handleSearch(filterForm: any) {
  try {
    Object.assign(currentFilterData, filterForm)
    isLoading.value = true
    const res = await patientsList(filterForm)
    Object.assign(apiData, res.result)
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
  } finally {
    isLoading.value = false
  }
}

async function clearFilterForm() {
  await handleSearch(currentFilterData)
}

function addPatient() {
  router.push('/app/registration/register-donors')
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
            },
            {
              label: $t('Unified-donor-register'),
            },
          ]"
        />
      </VFlexItem>
      <VFlexItem>
        <VButtons>
          <AddButton @click.prevent="addPatient" />
          <PrintButton @click.prevent="printList" />
        </VButtons>
      </VFlexItem>
    </VFlex>
    <div class="columns mt-1">
      <div class="column">
        <RegistrationFilterForm
          :is-loading="isLoading"
          @search="handleSearch"
          @clear-form="clearFilterForm"
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
                <NoDataPlaceholder v-if="apiData.data.length === 0" />
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
              v-model:current-page="apiData.pagination.current_page"
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
