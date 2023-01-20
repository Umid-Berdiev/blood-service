<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import {
  fetchRequestsForBiochemicalLaboratory,
  storeBiochemicalResearchResults,
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
}>()

const notif = useNotyf()
const { t } = useI18n()
const title = ref(t('clinical_biochemical_research_results'))
const isLoading = ref(false)
const errors = reactive({
  blood_samples_taken_date: [],
  analysis_date: [],
  clinical_biochemical_laboratory_date: [],
})
const medicalExamination = reactive({
  data: {
    date_analysis: '',
    alt: '',
    reagent: '',
    norm: false,
    plmal: false,
    bilirubin: '',
    general: '',
    thymol: '',
    leucocyte: '',
    platelets: '',
    esr: '',
    erythrocyte: '',
    hematocrit: '',
    basophils: '',
    eosinophils: '',
    stab: '',
    segmented: '',
    lymphocytes: '',
    monocytes: '',
    hemolysis: false,
    chilez: false,
  },
  required_fields: [] as string[],
})
const hasHemolisOrHiles = ref(false)

// hooks
watch(
  () => props.patient?.last_visit?.id,
  async (newVal) => {
    if (newVal) {
      const res = await fetchRequestsForBiochemicalLaboratory(newVal)
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
    await storeBiochemicalResearchResults(
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
        <VFlex flex-wrap="wrap" align-items="center" column-gap="2rem">
          <VFlexItem>
            <VField horizontal>
              <VLabel class="is-size-6 my-auto mr-3">ALT, ml. mol/l</VLabel>
              <VControl>
                <VInput v-model="medicalExamination.data.alt" />
              </VControl>
            </VField>
          </VFlexItem>
          <VFlexItem>
            <VField horizontal>
              <VLabel class="is-size-6 my-auto mr-3">Реагент</VLabel>
              <VControl>
                <VInput v-model="medicalExamination.data.reagent" />
              </VControl>
            </VField>
          </VFlexItem>
          <VFlexItem>
            <VField horizontal>
              <VControl>
                <VCheckbox
                  v-model="medicalExamination.data.norm"
                  color="primary"
                  label="Норма"
                />
              </VControl>
            </VField>
          </VFlexItem>
        </VFlex>
        <hr class="is-divider" />
        <VFlexItem>
          <VField horizontal>
            <VControl>
              <VCheckbox
                v-model="medicalExamination.data.plmal"
                color="primary"
                label="Plmal"
              />
            </VControl>
          </VField>
        </VFlexItem>
        <br />
        <div class="columns is-multiline">
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right">
                <span
                  v-if="medicalExamination.required_fields.includes('bilirubin')"
                  class="has-text-danger"
                  >*</span
                >
                <span>Билирубин, мл.моль/л</span>
              </VLabel>
              <VControl>
                <VInput v-model="medicalExamination.data.bilirubin" />
              </VControl>
            </VField>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right">
                <span
                  v-if="medicalExamination.required_fields.includes('general')"
                  class="has-text-danger"
                  >*</span
                >
                <span>Общий белок, ед.</span>
              </VLabel>
              <VControl>
                <VInput v-model="medicalExamination.data.general" />
              </VControl>
            </VField>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right">
                <span
                  v-if="medicalExamination.required_fields.includes('thymol')"
                  class="has-text-danger"
                  >*</span
                >
                <span>Тимоловые пробы</span>
              </VLabel>
              <VControl>
                <VInput v-model="medicalExamination.data.thymol" />
              </VControl>
            </VField>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right">
                <span
                  v-if="medicalExamination.required_fields.includes('leucocyte')"
                  class="has-text-danger"
                  >*</span
                >
                <span>Лейкоциты (Z), ед/л</span>
              </VLabel>
              <VControl>
                <VInput v-model="medicalExamination.data.leucocyte" />
              </VControl>
            </VField>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right">
                <span
                  v-if="medicalExamination.required_fields.includes('esr')"
                  class="has-text-danger"
                  >*</span
                >
                <span>СОЭ, мл/ч</span>
              </VLabel>
              <VControl>
                <VInput v-model="medicalExamination.data.esr" />
              </VControl>
            </VField>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right">
                <span
                  v-if="medicalExamination.required_fields.includes('erythrocyte')"
                  class="has-text-danger"
                  >*</span
                >
                <span>Эритроциты, ед/л</span>
              </VLabel>
              <VControl>
                <VInput v-model="medicalExamination.data.erythrocyte" />
              </VControl>
            </VField>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right">
                <span
                  v-if="medicalExamination.required_fields.includes('platelets')"
                  class="has-text-danger"
                  >*</span
                >
                <span>Тромбоциты, л</span>
              </VLabel>
              <VControl>
                <VInput v-model="medicalExamination.data.platelets" />
              </VControl>
            </VField>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right">
                <span
                  v-if="medicalExamination.required_fields.includes('hematocrit')"
                  class="has-text-danger"
                  >*</span
                >
                <span>Гематокрит, %</span>
              </VLabel>
              <VControl>
                <VInput v-model="medicalExamination.data.hematocrit" />
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
      <h5 class="is-size-5 py-1 has-text-centered">Лейкоформула</h5>
      <br />
      <div class="box">
        <div class="columns is-multiline">
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right">
                <span
                  v-if="medicalExamination.required_fields.includes('basophils')"
                  class="has-text-danger"
                  >*</span
                >
                <span>Базофилы, %</span>
              </VLabel>
              <VControl>
                <VInput v-model="medicalExamination.data.basophils" />
              </VControl>
            </VField>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right">
                <span
                  v-if="medicalExamination.required_fields.includes('eosinophils')"
                  class="has-text-danger"
                  >*</span
                >
                <span>Эозинофилы, %</span>
              </VLabel>
              <VControl>
                <VInput v-model="medicalExamination.data.eosinophils" />
              </VControl>
            </VField>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right">
                <span
                  v-if="medicalExamination.required_fields.includes('stab')"
                  class="has-text-danger"
                  >*</span
                >
                <span>Палочкоядерные, %</span>
              </VLabel>
              <VControl>
                <VInput v-model="medicalExamination.data.stab" />
              </VControl>
            </VField>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right">
                <span
                  v-if="medicalExamination.required_fields.includes('segmented')"
                  class="has-text-danger"
                  >*</span
                >
                <span>Сегментоядерные, %</span>
              </VLabel>
              <VControl>
                <VInput v-model="medicalExamination.data.segmented" />
              </VControl>
            </VField>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right">
                <span
                  v-if="medicalExamination.required_fields.includes('lymphocytes')"
                  class="has-text-danger"
                  >*</span
                >
                <span>Лимфоциты, %</span>
              </VLabel>
              <VControl>
                <VInput v-model="medicalExamination.data.lymphocytes" />
              </VControl>
            </VField>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right">
                <span
                  v-if="medicalExamination.required_fields.includes('monocytes')"
                  class="has-text-danger"
                  >*</span
                ><span>Моноциты, %</span>
              </VLabel>
              <VControl>
                <VInput v-model="medicalExamination.data.monocytes" />
              </VControl>
            </VField>
          </div>
        </div>
      </div>
      <hr class="is-divider" />
      <div class="box">
        <VFlex>
          <VFlexItem>
            <VField horizontal>
              <VControl>
                <VCheckbox
                  v-model="medicalExamination.data.chilez"
                  color="primary"
                  label="Хилез"
                />
              </VControl>
            </VField>
          </VFlexItem>
          <VFlexItem>
            <VField horizontal>
              <VControl>
                <VCheckbox
                  v-model="medicalExamination.data.hemolysis"
                  color="primary"
                  label="Гемолиз"
                />
              </VControl>
            </VField>
          </VFlexItem>
        </VFlex>
      </div>
    </template>
    <template #action>
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
