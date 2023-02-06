<script setup lang="ts">
import { isEmpty, values } from 'lodash'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'

defineProps<{
  isLoading: boolean
}>()

const emits = defineEmits(['search', 'clearForm'])

const { t } = useI18n()
const notif = useNotyf()
const filterForm = ref({
  last_name: '',
  first_name: '',
  father_name: '',
  passport_series: '',
  passport_number: '',
})
const passportId = ref('')
const computedPassportId = computed({
  get() {
    return passportId.value
  },
  set(val) {
    passportId.value = val
    if (isEmpty(val)) {
      filterForm.value.passport_series = ''
      filterForm.value.passport_number = ''
    } else {
      const series = passportId.value.substring(0, 2)
      const number = passportId.value.substring(2)
      filterForm.value.passport_series = series
      filterForm.value.passport_number = number
    }
  },
})
const passportIMaskInputOptions = ref({
  mask: 'aa0000000',
  prepare: function (str: string) {
    return str.toUpperCase()
  },
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
  emits('search', filterForm.value)
}

const clearFilterForm = async () => {
  filterForm.value.last_name = ''
  filterForm.value.first_name = ''
  filterForm.value.father_name = ''
  filterForm.value.passport_series = ''
  filterForm.value.passport_number = ''
  passportId.value = ''
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
                v-model.trim="computedPassportId"
                class="input"
                :options="passportIMaskInputOptions"
                :placeholder="$t('Passport_series_number')"
              />
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
              />
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
          <ClearButton :disabled="isLoading || !canClear" @clear="clearFilterForm" />
          <SubmitButton :loading="isLoading">
            {{ $t('Search') }}
          </SubmitButton>
        </div>
      </div>
    </form>
  </VCard>
</template>
