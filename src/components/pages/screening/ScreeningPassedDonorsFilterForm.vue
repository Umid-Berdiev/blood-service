<script setup lang="ts">
import { isEmpty, values } from 'lodash'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { patientCategoriesList } from '/@src/utils/api/patient'

defineProps<{
  isLoading: boolean
  errors: {}
}>()

const emits = defineEmits(['search', 'clearError', 'clearForm'])

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
          <VField :label="$t('Start_date')">
            <DatePicker v-model="filterForm.start_date" />
            <p class="help has-text-danger">
              {{ errors.start_date[0] }}
            </p>
          </VField>
        </div>
        <div class="column">
          <VField :label="$t('End_date')">
            <DatePicker v-model="filterForm.end_date" />
            <p class="help has-text-danger">
              {{ errors.end_date[0] }}
            </p>
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
              <p class="help has-text-danger">{{ errors.donor_category_id[0] }}</p>
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
              <p class="help has-text-danger">{{ errors.visit_type_id[0] }}</p>
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
