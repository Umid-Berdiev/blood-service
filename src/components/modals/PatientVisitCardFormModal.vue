<script setup lang="ts">
import { isEmpty } from 'lodash'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import {
  createVisitcard,
  updateVisitcardById,
  fetchVisitcardById,
} from '/@src/utils/api/visitcard'
import { fetchHealthcareFacilities } from '/@src/utils/api/additional'
import { PatientVisitCardInterface } from '/@src/utils/interfaces'

const props = defineProps<{
  isOpen: boolean
  cardId: number | null
  patientCategoryId: number | null
}>()

const emits = defineEmits<{
  (e: 'update:isOpen', value: boolean): void
  (e: 'update:list'): void
}>()

const route = useRoute()
const notif = useNotyf()
const { t } = useI18n()
const title = ref(t('Add'))
const patientID = route.params?.id || null
const isLoading = ref(false)
const formData: PatientVisitCardInterface = reactive({
  patient_id: patientID,
  visit_type: 'gratuitous',
  directed_by: 'medical_organization',
  medical_organization_id: '',
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
const healthcareFacilitiesList = ref([])
const errors = reactive({
  visit_type: [],
  directed_by: [],
  medical_organization_id: [],
  public_organization: [],
  is_personalized_donation: [],
  is_mobile_team: [],
  personalized_donation: [],
  mobile_team: [],
})

// hooks
onMounted(async () => {
  const res = await fetchHealthcareFacilities()
  if (!isEmpty(res.result)) healthcareFacilitiesList.value = res.result
})

watchEffect(async () => {
  if (Number(props.cardId)) {
    title.value = t('Edit')
    const { result } = await fetchVisitcardById(Number(props.cardId), patientID)
    Object.assign(formData, {
      patient_id: result.patient_id,
      visit_type: result.visit_type,
      directed_by: result.directed_by,
      medical_organization_id: result.medical_organization_id,
      public_organization: result.public_organization,
      is_personalized_donation: result.is_personalized_donation,
      is_mobile_team: result.is_mobile_team,
      personalized_donation: result.personalized_donation,
      mobile_team: result.mobile_team,
    })
  }
})

async function onSubmit() {
  try {
    isLoading.value = true
    props.cardId
      ? await updateVisitcardById(props.cardId, formData)
      : await createVisitcard(formData)
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
  emits('update:isOpen', false)
}

function clearFields() {
  Object.assign(formData, {
    patient_id: patientID,
    visit_type: 'gratuitous',
    directed_by: 'medical_organization',
    medical_organization_id: '',
    public_organization: '',
    is_personalized_donation: '',
    is_mobile_team: '',
    personalized_donation: '',
    mobile_team: '',
  })
}

function clearErrors() {
  Object.assign(errors, {
    visit_type: [],
    directed_by: [],
    medical_organization_id: [],
    public_organization: [],
    is_personalized_donation: [],
    is_mobile_team: [],
    personalized_donation: [],
    mobile_team: [],
  })
}
</script>

<template>
  <VModal :open="isOpen" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <form id="visitcard-form" class="modal-form" @submit.prevent="onSubmit">
        <VField :label="$t('Visit_type')" required>
          <VControl>
            <Multiselect
              v-model="formData.visit_type"
              :options="visitTypes"
              :placeholder="$t('Visit_type')"
              label="label"
              value-prop="value"
              :disabled="patientCategoryId === 2"
            />
            <p class="help has-text-danger">{{ errors.visit_type[0] }}</p>
          </VControl>
        </VField>
        <br />
        <VField :label="$t('Directed_by')" required>
          <VControl>
            <VRadio
              v-for="(item, dirIndex) in directors"
              :key="dirIndex"
              v-model="formData.directed_by"
              :value="item.value"
              :label="item.label"
              color="primary"
            />
          </VControl>
        </VField>
        <VField
          v-if="formData.directed_by === 'medical_organization'"
          :label="$t('Healthcare_facilities_list')"
          required
        >
          <VControl>
            <Multiselect
              v-model="formData.medical_organization_id"
              :options="healthcareFacilitiesList"
              :placeholder="$t('Medical_organizations_list')"
              label="name"
              searchable
              value-prop="id"
            />
            <p class="help has-text-danger">{{ errors.medical_organization_id[0] }}</p>
          </VControl>
        </VField>
        <VField
          v-if="formData.directed_by === 'public_organization'"
          :label="$t('Public_organization_title')"
          required
        >
          <VControl>
            <VInput
              v-model="formData.public_organization"
              :placeholder="$t('Public_organization_title')"
            />
            <p class="help has-text-danger">{{ errors.public_organization[0] }}</p>
          </VControl>
        </VField>
        <div class="columns">
          <div class="column is-6">
            <VField>
              <VControl>
                <VCheckbox
                  v-model="formData.is_personalized_donation"
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
                  v-if="formData.is_personalized_donation"
                  v-model="formData.personalized_donation"
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
                  v-model="formData.is_mobile_team"
                  :label="$t('Mobile_team')"
                  color="primary"
                />
              </VControl>
            </VField>
          </div>
          <div class="column is-6">
            <VField>
              <VControl>
                <VInput v-if="formData.is_mobile_team" v-model="formData.mobile_team" />
              </VControl>
            </VField>
          </div>
        </div>
      </form>
    </template>
    <template #action="{ close }">
      <SubmitButton :loading="isLoading" form="visitcard-form">
        {{ $t('Send_for_examination') }}
      </SubmitButton>
    </template>
  </VModal>
</template>
