<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { donationTypes, visitTypes } from '/@src/data/additionals'

defineProps<{
  isLoading: boolean
  errors: {
    visit_type: string[]
    donation_type_id: string[]
    donation_code: string[]
  }
}>()

const emits = defineEmits(['search', 'clearError', 'clearForm'])

const { t } = useI18n()
const notif = useNotyf()
const filterForm = reactive({
  visit_type: '',
  donation_type_id: null,
  donation_code: '',
})

const handleSearch = async () => {
  // if (Object.values(filterForm).some((value) => Boolean(value))) {
  emits('search', filterForm)
  // } else notif.error(t('Form_fields_are_empty'))
}

const clearFilterForm = async () => {
  Object.assign(filterForm, {
    visit_type: '',
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
          <VField v-slot="{ id }" class="is-curved-select" :label="$t('Visit_type')">
            <VControl>
              <Multiselect
                v-model="filterForm.visit_type"
                :attrs="{ id }"
                :options="visitTypes"
                :placeholder="$t('All')"
              />
              <p class="help has-text-danger">
                {{ errors.visit_type[0] }}
              </p>
            </VControl>
          </VField>
        </div>
        <div class="column is-3">
          <VField v-slot="{ id }" class="is-curved-select" :label="$t('Donation_type')">
            <VControl>
              <Multiselect
                v-model="filterForm.donation_type_id"
                :attrs="{ id }"
                :options="donationTypes"
                :placeholder="$t('All')"
                label="name"
                value-prop="id"
              />
              <p class="help has-text-danger">
                {{ errors.donation_type_id[0] }}
              </p>
            </VControl>
          </VField>
        </div>
        <div class="column is-3">
          <VField v-slot="{ id }" class="is-curved-select" :label="$t('Donation_code')">
            <VControl>
              <VInput
                v-model="filterForm.donation_code"
                :attrs="{ id }"
                :placeholder="$t('Donation_code')"
              />
              <p class="help has-text-danger">
                {{ errors.donation_code[0] }}
              </p>
            </VControl>
          </VField>
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
