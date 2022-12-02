<script setup lang="ts">
import { formatDate } from '@vueuse/core'
import moment from 'moment'
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
// import { storeHemotransmissionResearchResults } from '/@src/utils/api/patient'
import { PatientInterface } from '/@src/utils/interfaces'

interface ClinicalBiochemicalResearchFormInterface {
  alt?: string
  reagent?: string
  norma?: boolean
  plmal?: boolean
  bilirubin?: string
  obshiy_belok?: string
  timolovye_proby?: string
  leykotsity: string
  soe?: string
  eritrotsity?: string
  trombotsity: string
  gematokrit?: string
  bazofily?: string
  eozinofily?: string
  palochkoyadernye?: string
  segmentoyadernye?: string
  limfotsity?: string
  monotsity?: string
  hilez?: boolean
  gemoliz?: boolean
}

interface FormProps {
  isOpen: boolean
  patient: PatientInterface
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
const title = ref(t('Hemotransmission_research_results'))
const isLoading = ref(false)
const formFields: ClinicalBiochemicalResearchFormInterface = reactive({
  leykotsity: '',
  trombotsity: '',
})
const errors = reactive({
  blood_samples_taken_date: [],
  analysis_date: [],
  clinical_biochemical_laboratory_date: [],
})

async function onSubmit() {
  try {
    isLoading.value = true
    // await storeHemotransmissionResearchResults(props.patient?.id, formFields)
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
  Object.assign(formFields, {
    blood_samples_taken_date: moment().format('YYYY-MM-DD'),
    analysis_date: moment().format('YYYY-MM-DD'),
    clinical_biochemical_laboratory_date: moment().format('YYYY-MM-DD'),
  })
}

function clearErrors() {
  Object.assign(errors, {
    blood_samples_taken_date: [],
    analysis_date: [],
    clinical_biochemical_laboratory_date: [],
  })
}

function clearError(error: string) {
  errors[error] = ''
}
</script>

<template>
  <VModal :open="isOpen" size="big" :title="title" actions="right" @close="onClose">
    <template #content>
      <div class="columns">
        <div class="column">
          <h5 class="is-size-5 has-text-weight-medium">
            {{ $t('Donor_code') }}: {{ patient.last_visit?.donation_code }}
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
                <VInput
                  :value="
                    formatDate(new Date(patient.last_visit?.updated_at), 'YYYY-MM-DD')
                  "
                  disabled
                />
              </VControl>
            </VField>
          </VFlexItem>
          <VFlexItem flex-basis="45%">
            <VField horizontal>
              <VLabel class="my-auto mr-3 is-size-6">{{
                $t('Blood_samples_taken_date')
              }}</VLabel>
              <VControl>
                <IMaskDateInput v-model="formFields.blood_samples_taken_date" />
              </VControl>
            </VField>
          </VFlexItem>
          <VFlexItem flex-basis="45%">
            <VField horizontal>
              <VLabel class="my-auto mr-3 is-size-6">{{ $t('Analysis_date') }}</VLabel>
              <VControl>
                <IMaskDateInput v-model="formFields.analysis_date" />
              </VControl>
            </VField>
          </VFlexItem>
          <VFlexItem flex-basis="45%">
            <h5>
              <span class="has-text-weight-bold">{{ $t('Visit_stage') }}</span>
              <span>{{ patient.last_visit?.stage }}</span>
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
                <VInput v-model="formFields.alt" />
              </VControl>
            </VField>
          </VFlexItem>
          <VFlexItem>
            <VField horizontal>
              <VLabel class="is-size-6 my-auto mr-3">Реагент</VLabel>
              <VControl>
                <VInput v-model="formFields.reagent" />
              </VControl>
            </VField>
          </VFlexItem>
          <VFlexItem>
            <VField horizontal>
              <VControl>
                <VCheckbox v-model="formFields.norma" color="primary" label="Норма" />
              </VControl>
            </VField>
          </VFlexItem>
        </VFlex>
        <hr class="is-divider" />
        <VFlexItem>
          <VField horizontal>
            <VControl>
              <VCheckbox v-model="formFields.plmal" color="primary" label="Plmal" />
            </VControl>
          </VField>
        </VFlexItem>
        <br />
        <div class="columns is-multiline">
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right"
                >Билирубин, мл.моль/л</VLabel
              >
              <VControl>
                <VInput v-model="formFields.bilirubin" />
              </VControl>
            </VField>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right"
                >Общий белок, ед.</VLabel
              >
              <VControl>
                <VInput v-model="formFields.obshiy_belok" />
              </VControl>
            </VField>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right"
                >Тимоловые пробы</VLabel
              >
              <VControl>
                <VInput v-model="formFields.timolovye_proby" />
              </VControl>
            </VField>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right">
                Лейкоциты (Z), ед/л<span class="has-text-danger">*</span>
              </VLabel>
              <VControl>
                <VInput v-model="formFields.leykotsity" />
              </VControl>
            </VField>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right">СОЭ, мл/ч</VLabel>
              <VControl>
                <VInput v-model="formFields.soe" />
              </VControl>
            </VField>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right"
                >Эритроциты, ед/л</VLabel
              >
              <VControl>
                <VInput v-model="formFields.eritrotsity" />
              </VControl>
            </VField>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right">
                Тромбоциты, л<span class="has-text-danger">*</span>
              </VLabel>
              <VControl>
                <VInput v-model="formFields.trombotsity" />
              </VControl>
            </VField>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right">
                Гематокрит, %</VLabel
              >
              <VControl>
                <VInput v-model="formFields.gematokrit" />
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
              <VLabel class="is-size-6 my-auto mr-3 has-text-right">Базофилы, %</VLabel>
              <VControl>
                <VInput v-model="formFields.bazofily" />
              </VControl>
            </VField>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right">Эозинофилы, %</VLabel>
              <VControl>
                <VInput v-model="formFields.eozinofily" />
              </VControl>
            </VField>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right"
                >Палочкоядерные, %</VLabel
              >
              <VControl>
                <VInput v-model="formFields.palochkoyadernye" />
              </VControl>
            </VField>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right">
                Сегментоядерные, %
              </VLabel>
              <VControl>
                <VInput v-model="formFields.segmentoyadernye" />
              </VControl>
            </VField>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right">Лимфоциты, %</VLabel>
              <VControl>
                <VInput v-model="formFields.limfotsity" />
              </VControl>
            </VField>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right">Моноциты, %</VLabel>
              <VControl>
                <VInput v-model="formFields.monotsity" />
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
                <VCheckbox v-model="formFields.hilez" color="primary" label="Хилез" />
              </VControl>
            </VField>
          </VFlexItem>
          <VFlexItem>
            <VField horizontal>
              <VControl>
                <VCheckbox v-model="formFields.gemoliz" color="primary" label="Гемолиз" />
              </VControl>
            </VField>
          </VFlexItem>
        </VFlex>
      </div>
    </template>
    <template #action>
      <SubmitButton :loading="isLoading" form="blood-sampling-form" />
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
