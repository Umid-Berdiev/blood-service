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

onMounted(async () => {
  // componentsList.value = await fetchComponentsList().then((res) => res.result)
})

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
      </div>
    </form>
  </VCard>
</template>
