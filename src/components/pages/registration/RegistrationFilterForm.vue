<script setup lang="ts">
import { isEmpty, values } from 'lodash'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { SearchErrorInterface } from '/@src/utils/interfaces'

defineProps<{
  isLoading: boolean
  errors: SearchErrorInterface
}>()

const emits = defineEmits(['search', 'clearError', 'clearForm'])

const { t } = useI18n()
const notif = useNotyf()
const filterForm = reactive({
  last_name: '',
  first_name: '',
  father_name: '',
  passport_series: '',
  passport_number: '',
})
const passportId = ref('')
const handleSearch = async () => {
  if (!isEmpty(passportId.value)) {
    // if (/^[a-zA-Z]{2}[0-9]{7}$/.test(passportId.value)) {
    const series = passportId.value.substring(0, 2)
    const number = passportId.value.substring(2)
    filterForm.passport_series = series
    filterForm.passport_number = number
    // } else return notif.error(t('Passport_series_or_passport_number_filled_incorrect'))
  }

  if (!values(filterForm).every(isEmpty)) {
    emits('search', filterForm)
  } else notif.error(t('Form_fields_are_empty'))
}

const clearFilterForm = async () => {
  Object.assign(filterForm, {
    last_name: '',
    first_name: '',
    father_name: '',
    passpordId: '',
  })
  emits('clearForm')
}
</script>

<template>
  <VCard>
    <form @submit.prevent="handleSearch">
      <div class="columns">
        <div class="column">
          <VField :label="$t('Passport_series_number')">
            <VControl>
              <VIMaskInput
                v-model.trim="passportId"
                class="input"
                :options="{
                  mask: 'aa0000000',
                  prepare: function (str) {
                    return str.toUpperCase()
                  },
                }"
                :placeholder="$t('Passport_series_number')"
              />
              <p class="help has-text-danger">
                {{ errors.passport_series || errors.passport_number }}
              </p>
            </VControl>
          </VField>
        </div>
        <div class="column">
          <VField :label="$t('Last_name')">
            <VControl>
              <VInput
                v-model.trim="filterForm.last_name"
                type="text"
                :placeholder="$t('Last_name')"
                @input="emits('clearError', 'last_name')"
              />
              <p class="help has-text-danger">{{ errors.last_name }}</p>
            </VControl>
          </VField>
        </div>
        <div class="column">
          <VField :label="$t('First_name')">
            <VControl>
              <VInput
                v-model.trim="filterForm.first_name"
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
                v-model.trim="filterForm.father_name"
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
