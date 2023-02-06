<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { fetchDonationTypes } from '/@src/utils/api/additional'

interface FilterFormProps {
  isLoading: boolean
}

defineProps<FilterFormProps>()

const emits = defineEmits(['search', 'clearForm'])

const { t } = useI18n()
const notif = useNotyf()
const filterForm = reactive({
  donation_code: '',
  donation_type_id: null,
})

const donationTypes = ref([])
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

onMounted(async () => {
  const res = await fetchDonationTypes()
  donationTypes.value = res.result
})

const handleSearch = async () => {
  emits('search', filterForm)
}

const clearFilterForm = async () => {
  Object.assign(filterForm, {
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
          <VField v-slot="{ id }" class="is-curved-select" :label="$t('Donation_code')">
            <VControl>
              <VInput
                v-model="filterForm.donation_code"
                :attrs="{ id }"
                :placeholder="$t('Donation_code')"
              />
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
