<script setup lang="ts">
import { formatDate } from '@vueuse/core'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { useMainStore } from '/@src/stores/main'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { ApiDataInterface, ProductInterface } from '/@src/utils/interfaces'

const router = useRouter()
const notif = useNotyf()
const { t } = useI18n()
const mainStore = useMainStore()
const isLoading = ref(false)
const viewWrapper = useViewWrapper()
const selectedRowId = ref<number | null>(null)
const optionsCryoprecipitateSeries = ref([])
const formState = reactive({
  cryoprecipitate_series_id: null,
  processing_date: formatDate(new Date(), 'YYYY-MM-DD'),
})
viewWrapper.setPageTitle(t('Processing'))
useHead({
  title: `${t('Cryoprecipitate_processing')} - ${mainStore.app.name}`,
})

const apiData: { data: ProductInterface[]; pagination: ApiDataInterface['pagination'] } =
  reactive({
    data: [
      {
        id: 11,
        donation_code: '130100123400',
        donation_date: '10.12.2022',
        cryoprecipitate_quantities: 55,
        supernatant_plasma_amount: 65,
        plasma_sample_for_sterility_control: 'Передать',
        blood_type: 'O(I)',
        visit_type: 'Безвозмезные донации',
        rh_factor: 'Rh+',
        component_name: 'Эритроцитная масса',
        donation_type: 'Донация цельной крови',
        dose: '0',
        quantity: '340',
        come_from: 'Республиканский центр крови',
        personalized_donation: 'Николай Резанов',
        expiry_date: '01.03.2023',
      },
      {
        id: 17,
        donation_code: '130100456500',
        donation_date: '18.12.2022',
        cryoprecipitate_quantities: 55,
        supernatant_plasma_amount: 65,
        plasma_sample_for_sterility_control: 'Передать',
        blood_type: 'O(I)',
        visit_type: 'Платные донации',
        rh_factor: 'Rh+',
        component_name: 'Эритроцитная масса',
        donation_type: 'Тромбоцитаферез',
        dose: '0',
        quantity: '340',
        come_from: 'Республиканский центр крови',
        personalized_donation: 'Николай Резанов',
        expiry_date: '01.03.2023',
      },
      {
        id: 21,
        donation_code: '130100987300',
        donation_date: '18.12.2022',
        cryoprecipitate_quantities: 55,
        supernatant_plasma_amount: 65,
        plasma_sample_for_sterility_control: 'Передать',
        blood_type: 'O(I)',
        visit_type: 'Платные донации',
        rh_factor: 'Rh+',
        component_name: 'Эритроцитная масса',
        donation_type: 'Плазмаферез',
        dose: '0',
        quantity: '340',
        come_from: 'Республиканский центр крови',
        personalized_donation: 'Николай Резанов',
        expiry_date: '01.03.2023',
      },
    ],
    pagination: {
      total: 10,
      count: 10,
      per_page: 10,
      current_page: 1,
      total_pages: 1,
    },
  })
const selectedRow = reactive({})
const selectedRows = ref<number[]>([])
const isFormModalOpen = ref(false)
const filterErrors = reactive({
  donation_code: [],
  donation_type_id: [],
})
const isAllChecked = computed({
  get() {
    return (
      selectedRows.value.length > 0 && selectedRows.value.length === apiData.data.length
    )
  },
  set(val: boolean) {
    if (val) {
      selectedRows.value = apiData.data.map((item) => item.id) as number[]
    } else {
      selectedRows.value = []
    }
  },
})

// await handleSearch(currentFilterData)

// hooks
watch(isFormModalOpen, function (newVal: boolean) {
  if (newVal === false) {
    Object.assign(selectedRow, {})
  }
})

// functions
async function handleSearch(filterForm: any) {
  try {
    isLoading.value = true
    const params = { ...filterForm, page: apiData.pagination.current_page }
    // const res = await patientsListForScreening(params)
    // Object.assign(apiData, res.result)

    // if (isEmpty(res.result.data)) {
    //   notif.warning(t('Data_not_found'))
    // } else notif.success(`${t('Found')}: ${res.result.pagination.total} ${t('records')}`)
  } catch (error: any) {
    Object.assign(filterErrors, error.response?.data?.errors)
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
</script>

<template>
  <div class="page-content-inner">
    <div class="columns mb-5">
      <div class="column is-narrow">
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
              label: $t('Processing'),
            },
            {
              label: $t('Cryoprecipitate_processing'),
            },
          ]"
        />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <VFlex align-items="end" column-gap="1rem">
          <VField class="is-align-items-center" :label="$t('Suitability_decision')">
            <VControl>
              <VControl>
                <Multiselect
                  v-model="formState.cryoprecipitate_series_id"
                  :options="optionsCryoprecipitateSeries"
                  :placeholder="$t('Select')"
                  label="name"
                  value-prop="id"
                  :style="{ minWidth: '15rem' }"
                />
              </VControl>
            </VControl>
          </VField>
          <VField class="is-align-items-center" :label="$t('Transfer_date_for_debiting')">
            <VField>
              <VControl>
                <IMaskDateInput v-model="formState.processing_date" />
              </VControl>
            </VField>
          </VField>
          <VButton class="mb-3" type="button" color="info">
            {{ $t('Save') }}
          </VButton>
          <VButton class="mb-3 ml-auto" type="button" color="info">
            {{ $t('To_forwarding') }}
          </VButton>
        </VFlex>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <VCard>
          <div class="table-container">
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
            <table v-else class="table is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <!-- <th :rowspan="2">
                    <VCheckbox v-model="isAllChecked" color="info" />
                  </th> -->
                  <th :rowspan="2">{{ $t('Donation_date') }}</th>
                  <th :rowspan="2">{{ $t('Donation_code') }}</th>
                  <th :rowspan="2">{{ $t('Cryoprecipitate_quantities_ml') }}</th>
                  <th :rowspan="2">{{ $t('Supernatant_plasma_amount_ml') }}</th>
                  <th :rowspan="2">{{ $t('Plasma_sample_for_sterility_control_ml') }}</th>
                  <th :colspan="2">
                    {{ $t('Sterility_control_results') }}
                  </th>
                  <th :colspan="2">
                    {{ $t('Printing_label') }}
                  </th>
                </tr>
                <tr>
                  <th>{{ $t('Supernatant_plasma_samples') }}</th>
                  <th>{{ $t('Cryoprecipitate_doses') }}</th>
                  <th>{{ $t('Supernatant_plasma') }}</th>
                  <th>{{ $t('Cryoprecipitate') }}</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="isLoading">
                  <tr v-for="key in apiData.pagination.per_page" :key="key">
                    <td colspan="3">
                      <VPlaceloadText :lines="2" last-line-width="70%" />
                    </td>
                  </tr>
                </template>
                <template v-else>
                  <tr v-for="(item, itemIndex) in apiData.data" :key="itemIndex">
                    <!-- <td>
                      <VCheckbox v-model="selectedRows" :value="item.id" />
                    </td> -->
                    <td>{{ item.donation_date }}</td>
                    <td>{{ item.donation_code }}</td>
                    <td>{{ item.cryoprecipitate_quantities }}</td>
                    <td>{{ item.supernatant_plasma_amount }}</td>
                    <td>
                      <a href="javascript:;" class="has-text-primary">{{
                        item.plasma_sample_for_sterility_control
                      }}</a>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <VButton class="mb-3 ml-auto" type="button" color="info">
                        {{ $t('Print') }}
                      </VButton>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>

          <!--Table Pagination-->
          <VFlexPagination
            v-if="apiData.data.length"
            v-model:current-page="apiData.pagination.current_page"
            class="mt-5"
            :item-per-page="apiData.pagination.per_page"
            :total-items="apiData.pagination.total"
            no-router
          />
        </VCard>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.table {
  thead {
    tr {
      th {
        font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu,
          Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, Arial,
          sans-serif;
        color: var(--muted-grey);
        // font-size: 0.8rem;
        font-weight: 600;
        // text-transform: uppercase;
        text-align: center;
      }
    }
  }
}
</style>
