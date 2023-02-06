<script setup lang="ts">
import { isEmpty, values } from 'lodash'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { patientCategoriesList } from '/@src/utils/api/patient'

defineProps<{
  isLoading: boolean
}>()

const emits = defineEmits(['search', 'clearForm'])

const { t } = useI18n()
const notif = useNotyf()
const filterForm = reactive({
  start_date: '',
  end_date: '',
  donor_category_id: '',
  visit_type_id: '',
})

const donorCategories = await patientCategoriesList().then((res) => res.result)
const visitTypes = ref([
  { value: 'gratuitous', label: t('Gratuitous') },
  { value: 'chargeable', label: t('Chargeable') },
])

const canClear = ref(false)

// hooks
watch(
  filterForm,
  (newVal) => {
    if (newVal)
      canClear.value = Object.values(newVal).some((value) => {
        if (value) {
          return true
        }
        return false
      })
  },
  { deep: true }
)

// functions
const handleSearch = async () => {
  emits('search', filterForm)
  // else notif.error(t('Form_fields_are_empty'))
}

const clearFilterForm = async () => {
  Object.assign(filterForm, {
    start_date: '',
    end_date: '',
    donor_category_id: '',
    visit_type_id: '',
  })
  emits('clearForm')
}
</script>

<template>
  <VCard>
    <form @submit.prevent="handleSearch">
      <div class="columns">
        <div class="column">
          <VField>
            <VLabel>{{ $t('Period') }}</VLabel>
            <DateRangePicker
              v-model:start="filterForm.start_date"
              v-model:end="filterForm.end_date"
            />
          </VField>
        </div>
        <div class="column">
          <VField
            v-slot="{ id }"
            class="is-curved-select"
            :label="$t('Donor_categories')"
          >
            <VControl>
              <Multiselect
                v-model="filterForm.donor_category_id"
                :attrs="{ id }"
                :options="donorCategories"
                :placeholder="$t('All')"
                label="name"
                value-prop="id"
              />
            </VControl>
          </VField>
        </div>
        <div class="column">
          <VField v-slot="{ id }" class="is-curved-select" :label="$t('Visit_type')">
            <VControl>
              <Multiselect
                v-model="filterForm.visit_type_id"
                :attrs="{ id }"
                :options="visitTypes"
                :placeholder="$t('All')"
              />
            </VControl>
          </VField>
        </div>
      </div>
      <div class="navigation-buttons">
        <div class="buttons is-right">
          <ClearButton :disabled="isLoading || !canClear" @clear="clearFilterForm" />
          <SubmitButton :loading="isLoading">
            {{ $t('Search') }}
          </SubmitButton>
        </div>
      </div>
    </form>
  </VCard>
</template>
