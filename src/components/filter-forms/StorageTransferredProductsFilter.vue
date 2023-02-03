<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'

interface FilterFormProps {
  isLoading: boolean
  errors: {
    component_id: string[]
    donation_code: string[]
  }
}

defineProps<FilterFormProps>()

const emits = defineEmits(['search', 'clearError', 'clearForm'])

const { t } = useI18n()
const notif = useNotyf()
const filterForm = reactive({
  component_id: null,
  donation_code: '',
})

const componentsList = ref([])
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
    component_id: null,
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
          <VField v-slot="{ id }" class="is-curved-select" :label="$t('Component_name')">
            <VControl>
              <Multiselect
                v-model="filterForm.component_id"
                :attrs="{ id }"
                :options="componentsList"
                :placeholder="$t('All')"
                label="name"
                value-prop="id"
              />
              <p class="help has-text-danger">{{ errors.component_id[0] }}</p>
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
              <p class="help has-text-danger">{{ errors.donation_code[0] }}</p>
            </VControl>
          </VField>
        </div>
        <!-- </div>
      <div class="navigation-buttons"> -->
        <div class="column is-narrow mt-auto ml-auto pb-4">
          <div class="buttons">
            <ClearButton :disabled="isLoading || !canClear" @clear="clearFilterForm" />
            <SubmitButton :loading="isLoading">
              {{ $t('Search') }}
            </SubmitButton>
          </div>
        </div>
      </div>
    </form>
  </VCard>
</template>
