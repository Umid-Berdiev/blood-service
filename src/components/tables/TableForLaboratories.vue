<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { ApiDataInterface, PatientInterface } from '/@src/utils/interfaces'

const props = withDefaults(
  defineProps<{
    data: ApiDataInterface<PatientInterface>
    isLoading: boolean
    currentPage: number
  }>(),
  {
    isLoading: false,
    currentPage: 1,
  }
)
const emits = defineEmits<{
  (e: 'openFormModal', value: PatientInterface): void
  (e: 'update:currentPage', value: number): void
}>()
const { t } = useI18n()
const columns = {
  orderNumber: {
    format: (value: any, row: any, index: number) => `${index + 1}`,
    cellClass: 'is-flex-grow-0',
  },
  donation_code: {
    label: t('Donation_code'),
    format: (value: string, row: any) => row.last_visit?.donation_code,
  },
  blood_sampling_date: {
    label: t('Blood_sampling_date'),
    format: (value: string, row: any) => row.last_visit?.blood_sample?.date,
  },
  name: {
    label: t('Donor_fullname'),
  },
  birth_date: {
    label: t('Date-of-birth'),
  },
  visit_type: {
    label: t('Visit_type'),
    format: (value: string, row: any) =>
      row.last_visit?.visit_type && t(row.last_visit?.visit_type),
  },
  visit_date: {
    label: t('Visit_date'),
    format: (value: string, row: any) => row.last_visit?.created_at,
  },
  donation_type: {
    label: t('Donation_type'),
    format: (value: string, row: any) => row.last_visit?.donation_type?.name,
  },
  visit_stage: {
    label: t('Visit_stage'),
    format: (value: string, row: any) => row.last_visit?.stage?.name,
  },
} as const
const computedCurrentPage = computed({
  get() {
    return props.currentPage
  },
  set(val) {
    emits('update:currentPage', val)
  },
})
</script>

<template>
  <div class="columns">
    <div class="column is-12">
      <VFlexTableWrapper
        :columns="columns"
        :data="data.data"
        :limit="data.pagination.per_page"
        :total="data.pagination.total"
      >
        <!--
            Here we retrieve the internal wrapperState.
            Note that we can not destructure it
          -->
        <template #default>
          <VFlexTable rounded :no-header="!isLoading && data.data.length === 0">
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
                    <VPlaceloadText :lines="2" last-line-width="70%" class="mx-2" />
                  </VFlexTableCell>
                </div>
              </div>

              <!-- This is the empty state -->
              <NoDataPlaceholder v-if="data.data.length === 0" />
            </template>

            <!-- This is the body cell slot -->
            <template #body-cell="{ row, column }">
              <template v-if="column.key === 'name'">
                <a
                  href="javascript:;"
                  class="has-text-primary"
                  @click="$emit('openFormModal', row)"
                >
                  {{ row.first_name }} {{ row.last_name }} {{ row.father_name }}
                  <!-- <span class="dark-text"></span> -->
                </a>
              </template>
            </template>
          </VFlexTable>

          <!--Table Pagination-->
          <VFlexPagination
            v-if="data.data.length"
            v-model:current-page="computedCurrentPage"
            class="mt-5"
            :item-per-page="data.pagination.per_page"
            :total-items="data.pagination.total"
            no-router
          />
        </template>
      </VFlexTableWrapper>
    </div>
  </div>
</template>
