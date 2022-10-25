<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  createVisitCard,
  updateVisitCardById,
  fetchVisitCardById,
} from '/@src/utils/api/patient'

const props = defineProps<{
  modelValue: boolean
  cardId: number | null
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
  (e: 'update:list'): void
}>()

const { t } = useI18n()
const title = ref(t('Add'))
const isLoading = ref(false)
const form = reactive({
  visit_type: '',
  directed_by: 'Healthcare facilities',
  healthcare_facility: '',
  public_organization: '',
  personalized_donation: '',
  mobile_team: '',
})
const visitTypes = ref(['gratuitous', 'chargeable'])
const directors = ref(['Healthcare facilities', 'Public organizations', 'Independently'])
const errors = reactive({
  visit_type: '',
  directed_by: 'Healthcare facilities',
  healthcare_facility: '',
  public_organization: '',
  personalized_donation: '',
  mobile_team: '',
})
const personalizedDonationCheckbox = ref(false)
const mobileTeamCheckbox = ref(false)
watch(
  () => props.roleId,
  async (newVal) => {
    if (newVal) {
      title.value = t('Edit')
      const res = await fetchById(Number(props.roleId))
      Object.assign(name, res.name)
      Object.assign(description, res.description)
    }
  },
  { deep: true, immediate: true }
)

async function onSubmit() {
  try {
    isLoading.value = true
    props.roleId
      ? await updateById(props.roleId, { name, description })
      : await create({ name, description })
    emits('update:list')
    onClose()
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
    // throw error
  } finally {
    isLoading.value = false
  }
}

function onClose() {
  title.value = t('Add')
  clearFields()
  clearErrors()
  emits('update:modelValue', false)
}

function clearFields() {
  //
}

function clearErrors() {
  // Object.assign(errors, {
  //   'name.uz': [],
  //   'name.en': [],
  //   'name.ru': [],
  //   'description.uz': [],
  //   'description.en': [],
  //   'description.ru': [],
  // })
}
</script>

<template>
  <VModal :open="modelValue" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <form id="role-form" class="modal-form" @submit.prevent="onSubmit">
        <VField :label="$t('Visit_type')" required>
          <VControl>
            <Multiselect
              v-model="form.visit_type"
              :options="visitTypes"
              :placeholder="$t('Visit_type')"
            />
            <p class="help has-text-danger">{{ errors.visit_type }}</p>
          </VControl>
        </VField>
        <VField :label="$t('Directed_by')" required>
          <VControl>
            <VRadio
              v-for="(item, dirIndex) in directors"
              :key="dirIndex"
              v-model="form.directed_by"
              :value="item"
              :label="item"
              color="primary"
            />
          </VControl>
        </VField>
        <VField
          v-if="form.directed_by === 'Healthcare facilities'"
          :label="$t('Healthcare_facilities_list')"
          required
        >
          <VControl>
            <Multiselect
              v-model="form.healthcare_facility"
              :options="visitTypes"
              :placeholder="$t('Visit_type')"
            />
            <p class="help has-text-danger">{{ errors.healthcare_facility }}</p>
          </VControl>
        </VField>
        <VField
          v-if="form.directed_by === 'Public organizations'"
          :label="$t('Public_organization_title')"
          required
        >
          <VControl>
            <VInput
              v-model="form.public_organization"
              :placeholder="$t('Public_organization_title')"
            />
            <p class="help has-text-danger">{{ errors.public_organization }}</p>
          </VControl>
        </VField>
        <div class="columns">
          <div class="column is-6">
            <VField>
              <VControl>
                <VCheckbox
                  v-model="personalizedDonationCheckbox"
                  :label="$t('Personalized_donation')"
                  color="primary"
                />
              </VControl>
            </VField>
          </div>
          <div class="column is-6">
            <VField>
              <VControl>
                <VInput
                  v-if="personalizedDonationCheckbox"
                  v-model="form.personalized_donation"
                />
              </VControl>
            </VField>
          </div>
        </div>
        <div class="columns">
          <div class="column is-6">
            <VField>
              <VControl>
                <VCheckbox
                  v-model="mobileTeamCheckbox"
                  :label="$t('Mobile_team')"
                  color="primary"
                />
              </VControl>
            </VField>
          </div>
          <div class="column is-6">
            <VField>
              <VControl>
                <VInput v-if="mobileTeamCheckbox" v-model="form.mobile_team" />
              </VControl>
            </VField>
          </div>
        </div>
      </form>
    </template>
    <template #action="{ close }">
      <VButton
        :loading="isLoading"
        color="primary"
        outlined
        type="submit"
        form="role-form"
        :disabled="isLoading"
      >
        {{ $t('Send_for_examination') }}
      </VButton>
    </template>
  </VModal>
</template>
