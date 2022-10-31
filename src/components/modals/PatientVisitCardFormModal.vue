<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import {
  createVisitcard,
  updateVisitcardById,
  fetchVisitcardById,
} from '/@src/utils/api/patient'
import { PatientVisitCardInterface } from '/@src/utils/interfaces'

const props = defineProps<{
  modelValue: boolean
  cardId: number | null
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
  (e: 'update:list'): void
}>()

const route = useRoute()
const notif = useNotyf()
const { t } = useI18n()
const title = ref(t('Add'))
const patientID = route.params?.id || null
const isLoading = ref(false)
const visitcardForm: PatientVisitCardInterface = reactive({
  patient_id: patientID,
  visit_type: 'gratuitous',
  directed_by: 'medical_organization',
  medical_organization: '',
  public_organization: '',
  is_personalized_donation: '',
  is_mobile_team: '',
  personalized_donation: '',
  mobile_team: '',
})
const visitTypes = ref([
  { value: 'gratuitous', label: t('Gratuitous') },
  { value: 'chargeable', label: t('Chargeable') },
])
const directors = ref([
  { value: 'medical_organization', label: t('Healthcare_facilities') },
  { value: 'public_organization', label: t('Public_organizations') },
  { value: 'independently', label: t('Independently') },
])
const medicalOrganizations = ref(['Poliklinika #1', 'Red Half Moon Society'])
const errors = reactive({
  visit_type: '',
  directed_by: '',
  medical_organization: '',
  public_organization: '',
  is_personalized_donation: '',
  is_mobile_team: '',
  personalized_donation: '',
  mobile_team: '',
})
const personalizedDonationCheckbox = ref(false)
const mobileTeamCheckbox = ref(false)

watchEffect(async () => {
  if (Number(props.cardId)) {
    title.value = t('Edit')
    const res = await fetchVisitcardById(Number(props.cardId), patientID)
    Object.assign(visitcardForm, res.result)
  }
})

async function onSubmit() {
  try {
    isLoading.value = true
    props.cardId
      ? await updateVisitcardById(props.cardId, visitcardForm)
      : await createVisitcard(visitcardForm)
    emits('update:list')
    notif.success(t('Updated_successfully'))
    onClose()
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
    notif.error(error.message)
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
              v-model="visitcardForm.visit_type"
              :options="visitTypes"
              :placeholder="$t('Visit_type')"
              label="label"
              value-prop="value"
            />
            <p class="help has-text-danger">{{ errors.visit_type }}</p>
          </VControl>
        </VField>
        <br />
        <VField :label="$t('Directed_by')" required>
          <VControl>
            <VRadio
              v-for="(item, dirIndex) in directors"
              :key="dirIndex"
              v-model="visitcardForm.directed_by"
              :value="item.value"
              :label="item.label"
              color="primary"
            />
          </VControl>
        </VField>
        <VField
          v-if="visitcardForm.directed_by === 'medical_organization'"
          :label="$t('Healthcare_facilities_list')"
          required
        >
          <VControl>
            <Multiselect
              v-model="visitcardForm.medical_organization"
              :options="medicalOrganizations"
              :placeholder="$t('Medical_organizations_list')"
            />
            <p class="help has-text-danger">{{ errors.medical_organization }}</p>
          </VControl>
        </VField>
        <VField
          v-if="visitcardForm.directed_by === 'public_organization'"
          :label="$t('Public_organization_title')"
          required
        >
          <VControl>
            <VInput
              v-model="visitcardForm.public_organization"
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
                  v-model="visitcardForm.is_personalized_donation"
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
                  v-if="visitcardForm.is_personalized_donation"
                  v-model="visitcardForm.personalized_donation"
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
                  v-model="visitcardForm.is_mobile_team"
                  :label="$t('Mobile_team')"
                  color="primary"
                />
              </VControl>
            </VField>
          </div>
          <div class="column is-6">
            <VField>
              <VControl>
                <VInput
                  v-if="visitcardForm.is_mobile_team"
                  v-model="visitcardForm.mobile_team"
                />
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
