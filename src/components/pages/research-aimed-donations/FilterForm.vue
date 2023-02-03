<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'

defineProps<{
  isLoading: boolean
  errors: {
    visit_type_id: string[]
    donation_type_id: string[]
    donation_code: string[]
  }
}>()

const emits = defineEmits(['search', 'clearError', 'clearForm'])

const { t } = useI18n()
const notif = useNotyf()
const filterForm = reactive({
  visit_type_id: '',
  donation_type_id: null,
  donation_code: '',
})
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
}

const clearFilterForm = async () => {
  Object.assign(filterForm, {
    visit_type_id: '',
    donation_type_id: null,
    donation_code: '',
  })
  emits('clearForm')
}
</script>

<template>
  <VCard>
    <form @submit.prevent="handleSearch">
      <div class="columns">
        <div class="column is-3">
          <VisitTypeSelect
            v-model:visit-type="filterForm.visit_type_id"
            :error="errors.visit_type_id[0]"
          />
        </div>
        <div class="column is-3">
          <DonationTypeSelect
            v-model:donation-type="filterForm.donation_type_id"
            :error="errors.donation_type_id[0]"
          />
        </div>
        <div class="column is-3">
          <DonationCodeInput
            v-model:donation-code="filterForm.donation_code"
            :error="errors.donation_code[0]"
          />
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
