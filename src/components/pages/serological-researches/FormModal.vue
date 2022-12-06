<script setup lang="ts">
import { reactive, ref } from 'vue'
import { formatDate } from '@vueuse/core'
import moment from 'moment'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { PatientInterface } from '/@src/utils/interfaces'

interface SerologicalResearchFormInterface {
  blood_samples_taken_date: string
  analysis_date: string
  reaction_hendelson_brutsellez: boolean
  anti_staphylococcal_antibody_titer: string
  gemoliz?: boolean
  hilez?: boolean
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
  (e: 'emergency-noticing'): void
}>()

const notif = useNotyf()
const { t } = useI18n()
const title = ref(t('Hemotransmission_research_results'))
const isLoading = ref(false)
const formFields: SerologicalResearchFormInterface = reactive({
  leykotsity: '',
  trombotsity: '',
})
const errors = reactive({
  blood_samples_taken_date: [],
  analysis_date: [],
})

async function onSubmit() {
  try {
    isLoading.value = true
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
  })
}

function clearErrors() {
  Object.assign(errors, {
    blood_samples_taken_date: [],
    analysis_date: [],
  })
}

function clearError(error: string) {
  errors[error] = ''
}

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
        <div class="columns is-multiline">
          <div class="column is-narrow is-flex is-align-items-center">
            <VField horizontal class="">
              <VControl>
                <VCheckbox
                  v-model="formFields.reaction_hendelson_brutsellez"
                  color="primary"
                  label="Реакция Хендельсона (бруцеллез)"
                />
              </VControl>
            </VField>
            <VField horizontal class="">
              <VControl>
                <VCheckbox v-model="formFields.hilez" color="primary" label="Хилез" />
              </VControl>
            </VField>
            <VField horizontal class="">
              <VControl>
                <VCheckbox v-model="formFields.gemoliz" color="primary" label="Гемолиз" />
              </VControl>
            </VField>
          </div>
          <div class="column is-narrow is-flex is-align-items-center">
            <VField horizontal class="is-justify-content-end">
              <VLabel class="is-size-6 my-auto mr-3 has-text-right">
                Титр антистафилококковый антител
              </VLabel>
              <VControl>
                <VInput v-model="formFields.anti_staphylococcal_antibody_titer" />
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
