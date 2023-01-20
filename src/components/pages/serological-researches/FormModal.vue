<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import {
  fetchRequestsForBacteriologicalLaboratory,
  storeBacteriologicalResearchResults,
} from '/@src/utils/api/laboratories'
import { PatientInterface } from '/@src/utils/interfaces'

interface FormProps {
  isOpen: boolean
  patient: PatientInterface | null
}

const props = withDefaults(defineProps<FormProps>(), {
  isOpen: false,
})

const emits = defineEmits<{
  (e: 'update:isOpen', isOpen: boolean): void
  (e: 'update:list'): void
  (e: 'emergency-noticing'): void
}>()

const notif = useNotyf()
const { t } = useI18n()
const title = ref(t('Serological_research_results'))
const isLoading = ref(false)
const errors = reactive({
  blood_samples_taken_date: [],
  analysis_date: [],
})
const medicalExamination = reactive({
  data: {
    date_analysis: '',
    heddelson: '',
    staphylococcal: '',
    hemolysis: false,
    chilez: false,
  },
  required_fields: [] as string[],
})
const hasHemolisOrHiles = ref(false)
const heddelsonVariants = ref([
  { value: 0, label: t('negative') },
  { value: 1, label: t('positive') },
  { value: 2, label: t('doubtful') },
])

// hooks
watch(
  () => props.patient?.last_visit?.id,
  async (newVal) => {
    if (newVal) {
      const res = await fetchRequestsForBacteriologicalLaboratory(newVal)
      Object.assign(medicalExamination, res.result)
    }
  }
)

watch(
  [() => medicalExamination.data.hemolysis, () => medicalExamination.data.chilez],
  async (newVal) => {
    if (newVal.includes(true)) {
      // medicalExamination.data.hbsag = false
      // medicalExamination.data.hiv = false
      // medicalExamination.data.antihcv = false
      // medicalExamination.data.rw = false

      hasHemolisOrHiles.value = true
    } else hasHemolisOrHiles.value = false
  }
)

// functions
async function onSubmit() {
  try {
    isLoading.value = true
    await storeBacteriologicalResearchResults(
      props.patient?.last_visit?.id as number,
      medicalExamination.data
    )
    notif.success(t('Data_saved_successfully'))
    emits('update:list')
    onClose()
  } catch (error: any) {
    if (error.response?.data.error) notif.error(error.response?.data.error)
    else Object.assign(errors, error.response?.data?.errors)
  } finally {
    isLoading.value = false
  }
}

function onClose() {
  clearFields()
  clearErrors()
  emits('update:isOpen', false)
}

function clearFields() {
  medicalExamination.data.date_analysis = ''
}

function clearErrors() {
  Object.assign(errors, {
    date_analysis: [],
  })
}

// function clearError(error: string) {
//   errors[error] = ''
// }

function onEmergencyNoticing() {
  emits('emergency-noticing')
  onClose()
}
</script>

<template>
  <VModal :open="isOpen" size="big" :title="title" actions="right" @close="onClose">
    <template #content>
      <div class="columns">
        <div class="column">
          <h5 class="is-size-5 has-text-weight-medium">
            {{ $t('Donation_code') }}: {{ patient?.last_visit?.donation_code }}
          </h5>
        </div>
      </div>
      <div class="box">
        <VFlex flex-wrap="wrap" row-gap="2rem" justify-content="space-between">
          <VFlexItem flex-basis="45%">
            <VField horizontal>
              <VLabel class="my-auto mr-3 is-size-6">{{
                $t('Blood_sampling_date')
              }}</VLabel>
              <VControl>
                <VInput :value="patient?.last_visit?.blood_sample?.date" disabled />
              </VControl>
            </VField>
          </VFlexItem>
          <VFlexItem flex-basis="45%">
            <VField horizontal>
              <VLabel class="my-auto mr-3 is-size-6">{{
                $t('Blood_samples_taken_date')
              }}</VLabel>
              <VInput
                :value="patient?.last_visit?.blood_sample?.chemical_date"
                disabled
              />
            </VField>
          </VFlexItem>
          <VFlexItem flex-basis="45%">
            <VField horizontal>
              <VLabel class="my-auto mr-3 is-size-6">{{ $t('Analysis_date') }}</VLabel>
              <VControl>
                <IMaskDateInput v-model="medicalExamination.data.date_analysis" />
              </VControl>
            </VField>
          </VFlexItem>
          <VFlexItem flex-basis="45%">
            <h5>
              <span class="has-text-weight-bold">{{ $t('Visit_stage') }}</span>
              <span>{{ patient?.last_visit?.stage }}</span>
            </h5>
          </VFlexItem>
        </VFlex>
      </div>
      <br />
      <div class="box">
        <div class="columns is-multiline">
          <div class="column is-6 is-flex is-align-items-center">
            <VField>
              <VLabel class="is-size-6 my-auto mr-3 has-text-right">
                <span
                  v-if="medicalExamination.required_fields.includes('heddelson')"
                  class="has-text-danger"
                  >*</span
                >
                <span>Реакция Хендельсона (бруцеллез)</span>
              </VLabel>
              <VControl>
                <!-- <VCheckbox
                  v-model="medicalExamination.data.heddelson"
                  color="primary"
                  label="Реакция Хендельсона (бруцеллез)"
                /> -->
                <Multiselect
                  v-model="medicalExamination.data.heddelson"
                  :options="heddelsonVariants"
                  :placeholder="$t('Select')"
                  :style="{ 'min-width': '15rem' }"
                />
              </VControl>
            </VField>
          </div>
          <div class="column is-6 is-flex is-align-items-center">
            <VField class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right">
                <span
                  v-if="medicalExamination.required_fields.includes('staphylococcal')"
                  class="has-text-danger"
                  >*</span
                >
                <span>Титр антистафилококковый антител</span>
              </VLabel>
              <VControl>
                <VInput v-model="medicalExamination.data.staphylococcal" />
              </VControl>
            </VField>
          </div>
          <div class="column is-narrow is-flex is-align-items-center">
            <VField horizontal>
              <VControl>
                <VCheckbox
                  v-model="medicalExamination.data.chilez"
                  color="primary"
                  label="Хилез"
                />
              </VControl>
            </VField>
            <VField horizontal style="margin-bottom: 0.75rem">
              <VControl>
                <VCheckbox
                  v-model="medicalExamination.data.hemolysis"
                  color="primary"
                  label="Гемолиз"
                />
              </VControl>
            </VField>
          </div>
        </div>
        <br />
        <p class="has-text-danger">
          Красным цветом указаны показатели, заданные врачом-терапевтом, как обязательные
          для определения
        </p>
      </div>
    </template>
    <template #action>
      <VButton type="button" color="warning" outlined @click="onEmergencyNoticing">
        Экстренное извещение
      </VButton>
      <SubmitButton :loading="isLoading" @click="onSubmit" />
    </template>
  </VModal>
</template>

<style scoped lang="scss">
.is-dark {
  .box {
    background-color: var(--dark-sidebar);
  }
}
</style>
