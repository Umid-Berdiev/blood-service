<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { useMainStore } from '/@src/stores/main'

import { useViewWrapper } from '/@src/stores/viewWrapper'
import { visitcardsList, removeVisitcardById } from '/@src/utils/api/visitcard'
import { ApiDataInterface, PatientInterface } from '/@src/utils/interfaces'

const props = defineProps<{
  patientCategoryId: number | null
}>()
const route = useRoute()
const router = useRouter()
const notif = useNotyf()
const { t } = useI18n()
const mainStore = useMainStore()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Patient_cards_list'))
useHead({
  title: `${t('Patient_cards')} - ${mainStore.app.name}`,
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

const selectedId = ref<number | null>(null)
const patientID = route.params?.id || null
const isFormModalOpen = ref(false)
const columns = {
  orderNumber: {
    format: (value: any, row: any, index: number) => `${index + 1}`,
    cellClass: 'is-flex-grow-0',
  },
  visit_type: {
    label: t('Visit_type'),
    // grow: true,
    // sortable: true,
  },
  directed_by: {
    label: t('Directed_by'),
    // grow: true,
    // sortable: true,
  },
  medical_organization: {
    label: t('Healthcare_facilities'),
    // sortable: true,
  },
  public_organization: {
    label: t('Public_organizations'),
    // grow: true,
    // sortable: true,
  },
  independently: {
    label: t('Independently'),
    // grow: true,
    // sortable: true,
    align: 'center',
  },
  personalized_donation: {
    label: t('Personalized_donation'),
    // grow: true,
    // sortable: true,
  },
  mobile_team: {
    label: t('Mobile_team'),
    // grow: true,
    // sortable: true,
  },
  status: {
    label: t('Status'),
    format: (value, row) => row.visit_status?.name,
    // grow: true,
    // sortable: true,
  },
  actions: {
    label: t('Actions'),
    align: 'center',
  },
} as const
const isLoading = ref<boolean>(false)

await fetchData()

watch(
  () => apiData.pagination.current_page,
  async (newVal) => {
    await fetchData(newVal)
  }
)

// the fetchData function will be called each time one of the parameter changes
async function fetchData(page: number = 1) {
  try {
    isLoading.value = true

    // async fetch apiData to our server
    const res = await visitcardsList(patientID, {
      page,
    })

    Object.assign(apiData, res.result)
  } catch (error: any) {
    notif.error(t(error.message))
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

async function handleRemoveAction() {
  await removeVisitcardById(patientID, selectedId.value)
  fetchData()
}

function updateList() {
  fetchData()
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
        <VFlexTableWrapper class="mt-4" :columns="columns" :data="apiData.data">
          <template #default>
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
                <NoDataPlaceholder v-else-if="apiData.data.length === 0" />
              </template>

              <!-- This is the body cell slot -->
              <template #body-cell="{ row, column, value }">
                <template v-if="column.key === 'visit_type'">
                  <span class="dark-text">{{ $t(value) }}</span>
                </template>
                <template v-if="column.key === 'directed_by'">
                  <span class="dark-text">{{ $t(value) }}</span>
                </template>
                <template v-if="column.key === 'independently'">
                  <VIcon
                    v-if="row.directed_by === 'independently'"
                    class="has-text-primary"
                    icon="feather:check"
                  />
                  <VIcon v-else class="has-text-danger" icon="feather:minus" />
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
    <ConfirmActionModal @confirm-action="handleRemoveAction" />
    <PatientVisitCardFormModal
      v-model:is-open="isFormModalOpen"
      :card-id="selectedId"
      :patient-category-id="patientCategoryId"
      @update:list="updateList"
      @close="selectedId = null"
    />
  </div>
</template>
