<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { useMainStore } from '/@src/stores/main'

import { useViewWrapper } from '/@src/stores/viewWrapper'
import { visitcardsList, removeVisitcardById } from '/@src/utils/api/patient'
import { ApiDataInterface } from '/@src/utils/interfaces'

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

const apiData: ApiDataInterface = reactive({
  current_page: 1,
  per_page: 10,
  total: 10,
  data: [],
})

const selectedId = ref<number | null>(null)
const patientID = route.params?.id || null
const isFormModalOpen = ref(false)
const currentPage = computed({
  get: () => {
    return apiData.current_page
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
  },
  is_personalized_donation: {
    label: t('Personalized_donation'),
    // grow: true,
    // sortable: true,
  },
  is_mobile_team: {
    label: t('Mobile_team'),
    // grow: true,
    // sortable: true,
  },
  actions: {
    label: '',
    align: 'end',
  },
} as const
const isLoading = ref<boolean>(false)
const incomingCallerId = ref<number>()

await fetchData()

watch(
  () => apiData.per_page,
  async () => {
    await fetchData()
  }
)

// the fetchData function will be called each time one of the parameter changes
async function fetchData(page: number = 1) {
  try {
    isLoading.value = true

    // async fetch apiData to our server
    const res = await visitcardsList(patientID, {
      page,
      per_page: apiData.per_page,
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
        <VFlexTableWrapper
          class="mt-4"
          :columns="columns"
          :data="apiData.data"
          :limit="apiData.per_page"
          :total="apiData.total"
        >
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
                <div v-else-if="apiData.data.length === 0" class="flex-list-inner">
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
                <template v-if="column.key === 'is_personalized_donation'">
                  <span>{{ row.personalized_donation }}</span>
                </template>
                <template v-if="column.key === 'is_mobile_team'">
                  <span>{{ row.mobile_team }}</span>
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
    <ConfirmActionModal @confirm-action="handleRemoveAction" />
    <PatientVisitCardFormModal
      v-model:is-open="isFormModalOpen"
      :card-id="selectedId"
      @update:list="updateList"
      @close="selectedId = null"
    />
  </div>
</template>
