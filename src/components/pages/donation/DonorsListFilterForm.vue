<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { patientCategoriesList } from '/@src/utils/api/patient'
import { donationTypes, visitTypes } from '/@src/data/additionals'

defineProps<{
  isLoading: boolean
  errors: {
    donor_category_id: string[]
    visit_type: string[]
    donation_type_id: string[]
    donation_code: string[]
  }
}>()

const emits = defineEmits(['search', 'clearError', 'clearForm'])

const { t } = useI18n()
const notif = useNotyf()
const filterForm = reactive({
  donor_category_id: '',
  visit_type: '',
  donation_type_id: '',
  donation_code: '',
})

const donorCategories = ref([])

onMounted(async () => {
  donorCategories.value = await patientCategoriesList().then((res) => res.result)
})

const handleSearch = async () => {
  emits('search', filterForm)
}

const clearFilterForm = async () => {
  Object.assign(filterForm, {
    donor_category_id: '',
    visit_type: '',
    donation_type_id: '',
    donation_code: '',
  })
  emits('clearForm')
}
</script>

<template>
  <VCard>
    <form @submit.prevent="handleSearch">
      <div class="columns">
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
                v-model="filterForm.visit_type"
                :attrs="{ id }"
                :options="visitTypes"
                :placeholder="$t('All')"
              />
              <p class="help has-text-danger">{{ errors.visit_type[0] }}</p>
            </VControl>
          </VField>
        </div>
        <div class="column">
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
              <p class="help has-text-danger">{{ errors.donation_type_id[0] }}</p>
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
