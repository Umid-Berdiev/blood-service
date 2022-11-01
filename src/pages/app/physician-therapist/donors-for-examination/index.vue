<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { useMainStore } from '/@src/stores/main'

import { useViewWrapper } from '/@src/stores/viewWrapper'
import { patientsList, fetchDonorStatusesList } from '/@src/utils/api/patient'
import { ApiDataInterface } from '/@src/utils/interfaces'

const router = useRouter()
const notif = useNotyf()
const { t } = useI18n()
const mainStore = useMainStore()
const isLoading = ref(false)
const viewWrapper = useViewWrapper()

viewWrapper.setPageTitle(t('Users_List'))
useHead({
  title: `${t('Donors-list-for-examination')} - ${mainStore.app.name}`,
})

const apiData: ApiDataInterface = reactive({
  current_page: 1,
  data: [],
  per_page: 10,
  total: 10,
})

const currentPage = computed({
  get: () => {
    return apiData.current_page
  },
  set: async (page) => {
    // currentFilterData.page = page
    await fetchData(page)
  },
})

// const currentFilterData = reactive({
//   page: 1,
// })

const columns = {
  orderNumber: {
    format: (value: any, row: any, index: number) => `${index + 1}`,
    cellClass: 'is-flex-grow-0',
  },
  name: {
    label: t('Fullname'),
    // media: true,
    // grow: true,
    sortable: true,
  },
  birth_date: {
    label: t('Date-of-birth'),
    sortable: true,
  },
  visit_date: {
    label: t('Visit_date'),
    sortable: true,
  },
  visit_type: {
    label: t('Visit_type'),
    // grow: true,
    sortable: true,
  },
  directed_by: {
    label: t('Directed_by'),
    // grow: true,
    sortable: true,
  },
  personalized_donation: {
    label: t('Personalized_donation'),
    // grow: true,
    sortable: true,
  },
  visit_status: {
    label: t('Visit_status'),
    // grow: true,
    sortable: true,
  },
} as const

const incomingCallerId = ref<number>()
const donorStatuses = ref([
  // 'Направленные на медосмотр',
  // 'Направленные на первичный скрининг',
  // 'Скрининг завершен',
  // 'Направленные на забор образцов',
  // 'Направленные на лабораторные исследования',
  // 'Лабораторные исследования завершены',
])
const selectedDonorStatus = ref('')

onMounted(async () => {
  const res = await fetchDonorStatusesList()
  donorStatuses.value = res.result
})

watch(
  () => selectedDonorStatus.value,
  async (newVal) => {
    if (newVal) {
      await fetchData()
    } else apiData.data = []
  }
)

// the fetchData function will be called each time one of the parameter changes
async function fetchData(page: number = 1) {
  try {
    isLoading.value = true

    const res = await patientsList({ page })
    Object.assign(apiData, res.result)
  } catch (error: any) {
    notif.error(t(error.response?.data?.errors))
  } finally {
    isLoading.value = false
  }
}

function onView(rowId: string | number) {
  router.push(`/app/registration/unified-donor-register/${rowId}#details`)
}

async function handleRemoveAction() {
  // await removeById(selectedId.value)
  // fetchData()
}
</script>

<template>
  <div class="page-content-inner">
    <VFlex justify-content="space-between" flex-wrap="wrap" class="mb-3">
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
              label="name"
              value-prop="id"
            />
          </VControl>
        </VField>
      </VFlexItem>
    </VFlex>

    <div class="columns">
      <div class="column is-12">
        <VFlexTableWrapper
          :columns="columns"
          :data="apiData.data"
          :limit="apiData.per_page"
          :total="apiData.total"
        >
          <!--
            Here we retrieve the internal wrapperState.
            Note that we can not destructure it
          -->
          <template #default="wrapperState">
            <VFlexTable rounded :no-header="!isLoading && apiData.data.length === 0">
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
                  <div v-for="key in apiData.per_page" :key="key" class="flex-table-item">
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
              <template #body-cell="{ row, column }">
                <template v-if="column.key === 'name'">
                  <RouterLink
                    class="table_link"
                    :to="`/app/physician-therapist/donors-for-examination/${row.id}#details`"
                  >
                    {{ row.first_name }} {{ row.last_name }} {{ row.father_name }}
                    <!-- <span class="dark-text">
                    </span> -->
                  </RouterLink>
                </template>
              </template>
            </VFlexTable>

            <!--Table Pagination-->
            <VFlexPagination
              v-if="apiData.data.length"
              v-model:current-page="currentPage"
              class="mt-5"
              :item-per-page="apiData.per_page"
              :total-items="apiData.total"
              no-router
            />
          </template>
        </VFlexTableWrapper>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.is-dark {
  .table_link {
    color: var(--primary);

    &:hover {
      color: var(--smoke-white);
    }
  }
}
</style>
