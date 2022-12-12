<script setup lang="ts">
import { isEmpty, values } from 'lodash'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { patientCategoriesList } from '/@src/utils/api/patient'

defineProps<{
  isLoading: boolean
  errors: {}
}>()

const emits = defineEmits(['search', 'clearError', 'clearForm'])

const { t } = useI18n()
const notif = useNotyf()
const filterForm = reactive({
  start_date: '',
  end_date: '',
  donor_category_id: '',
  visit_type_id: '',
  donation_type_id: '',
})

const donorCategories = await patientCategoriesList().then((res) => res.result)
const visitTypes = ref([
  { value: 'gratuitous', label: t('Gratuitous') },
  { value: 'chargeable', label: t('Chargeable') },
])
const donationTypes = ref([
  {
    id: 1,
    name: t('Whole_blood_donation'),
  },
  {
    id: 2,
    name: t('Plasmapheresis'),
  },
  {
    id: 3,
    name: t('Plateletpheresis'),
  },
])

const handleSearch = async () => {
  if (!values(filterForm).every(isEmpty)) {
    emits('search', filterForm)
  } else notif.error(t('Form_fields_are_empty'))
}

const clearFilterForm = async () => {
  Object.assign(filterForm, {
    start_date: '',
    end_date: '',
    donor_category_id: '',
    visit_type_id: '',
    donation_type_id: '',
  })
  emits('clearForm')
}
</script>

<template>
  <VCard>
    <form @submit.prevent="handleSearch">
      <div class="columns">
        <div class="column">
          <VField :label="$t('Start_date')">
            <VControl>
              <IMaskDateInput v-model="filterForm.start_date" />
              <p class="help has-text-danger">
                {{ errors.start_date[0] }}
              </p>
            </VControl>
          </VField>
        </div>
        <div class="column">
          <VField :label="$t('End_date')">
            <VControl>
              <IMaskDateInput v-model="filterForm.end_date" />
              <p class="help has-text-danger">
                {{ errors.end_date[0] }}
              </p>
            </VControl>
          </VField>
        </div>
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
                v-model="filterForm.visit_type_id"
                :attrs="{ id }"
                :options="visitTypes"
                :placeholder="$t('All')"
              />
              <p class="help has-text-danger">{{ errors.visit_type_id[0] }}</p>
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
