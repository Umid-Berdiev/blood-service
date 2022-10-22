<script setup lang="ts">
import { isEmpty, values } from 'lodash'
import { useNotyf } from '/@src/composable/useNotyf'
import { SearchErrorInterface } from '/@src/utils/interfaces'

defineProps<{
  isLoading: boolean
  errors: SearchErrorInterface
}>()

const emits = defineEmits(['search', 'clearError', 'clearForm'])
const notyf = useNotyf()
const filterForm = reactive({
  lastname: '',
  firstname: '',
  middlename: '',
  passpordId: '',
})

const handleSearch = async () => {
  if (!values(filterForm).every(isEmpty)) emits('search', filterForm)
  else notyf.error('Form fields are empty')
}

const clearFilterForm = async () => {
  Object.assign(filterForm, {
    lastname: '',
    firstname: '',
    middlename: '',
    passpordId: '',
  })
  emits('clearForm')
}
</script>

<template>
  <VCard radius="regular">
    <form @submit.prevent="handleSearch">
      <div class="columns">
        <div class="column">
          <VField :label="$t('Passport_series_number')" required>
            <VControl>
              <VInput
                v-model="filterForm.passpordId"
                type="text"
                :placeholder="$t('Passport_series_number')"
                @input="emits('clearError', 'passpordId')"
              />
              <p class="help has-text-danger">{{ errors.passpordId }}</p>
            </VControl>
          </VField>
        </div>
        <div class="column">
          <VField :label="$t('Last_name')" required>
            <VControl>
              <VInput
                v-model="filterForm.lastname"
                type="text"
                :placeholder="$t('Last_name')"
                @input="emits('clearError', 'lastname')"
              />
              <p class="help has-text-danger">{{ errors.lastname }}</p>
            </VControl>
          </VField>
        </div>
        <div class="column">
          <VField :label="$t('First_name')">
            <VControl>
              <VInput
                v-model="filterForm.firstname"
                type="text"
                :placeholder="$t('First_name')"
              />
            </VControl>
          </VField>
        </div>
        <div class="column">
          <VField :label="$t('Middlename')">
            <VControl>
              <VInput
                v-model="filterForm.middlename"
                type="text"
                :placeholder="$t('Middlename')"
              />
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
            :loading="isLoading"
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
