<script setup lang="ts">
import { isEmpty, values } from 'lodash'
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
          <VButton
            type="button"
            color="warning"
            bold
            :disabled="isLoading"
            tabindex="0"
            @click="clearFilterForm"
          >
            {{ $t('Clear') }}
          </VButton>
          <VButton type="submit" color="primary" bold :loading="isLoading" tabindex="0">
            {{ $t('Search') }}
          </VButton>
        </div>
      </div>
    </form>
  </VCard>
</template>
