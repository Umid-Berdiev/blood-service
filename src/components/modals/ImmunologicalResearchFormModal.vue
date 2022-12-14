<script setup lang="ts">
import { reactive, ref } from 'vue'
import { formatDate } from '@vueuse/core'
import moment from 'moment'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { PatientInterface } from '/@src/utils/interfaces'

interface ImmunologicalResearchFormInterface {
  blood_samples_taken_date: string
  analysis_date: string
  definitive_blood_group: string
  rhesus_affiliation: string
  natural_antibodies_titer: {
    value: string
    a1: string
    b1: string
  }
  incomplete_immune_antibodies: string
  comment: string
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
const formFields: ImmunologicalResearchFormInterface = reactive({
  definitive_blood_group: 'oab1',
  rhesus_affiliation: 'rh+',
  natural_antibodies_titer: {
    value: '',
    a1: '',
    b1: '',
  },
})
const errors = reactive({
  blood_samples_taken_date: [],
  analysis_date: [],
})

const optionsNaturalAntibodiesTiter = [
  { value: 1, label: 'detected' },
  { value: 2, label: 'not_detected' },
]

const optionsIncompleteImmuneAntibodies = [
  { value: 1, label: 'detected' },
  { value: 2, label: 'not_detected' },
]

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
              <span class="has-text-weight-bold mr-3">{{ $t('Visit_stage') }}:</span>
              <span>{{ patient.last_visit?.stage }}</span>
            </h5>
          </VFlexItem>
          <VFlexItem flex-basis="45%">
            <h5>
              <span class="has-text-weight-bold mr-3"
                >{{ $t('Preliminary_blood_type') }}:</span
              >
              <span>{{ patient.last_visit?.preliminary_blood_type ?? 'O(I)' }}</span>
            </h5>
          </VFlexItem>
        </VFlex>
      </div>
      <br />
      <h5 class="is-size-5 has-text-weight-medium">{{ $t('Analysis_results') }}</h5>
      <div class="box mt-5">
        <div class="columns is-multiline">
          <div class="column is-6">
            <div class="is-flex">
              <h5 class="has-text-danger mr-5">
                {{ $t('Окончательная группа крови') }}
              </h5>
              <div class="field">
                <div class="control">
                  <input
                    id="oab1"
                    v-model="formFields.definitive_blood_group"
                    type="radio"
                    value="oab1"
                  />
                  <label for="oab1" class="radio p-2">O<sub>&alpha;&beta;</sub>(I)</label>
                </div>
                <div class="control">
                  <input
                    id="ab2"
                    v-model="formFields.definitive_blood_group"
                    type="radio"
                    value="ab2"
                  />
                  <label for="ab2" class="radio p-2">A<sub>&beta;</sub>(II)</label>
                </div>
                <div class="control">
                  <input
                    id="a2b2"
                    v-model="formFields.definitive_blood_group"
                    type="radio"
                    value="a2b2"
                  />
                  <label for="a2b2" class="radio p-2">A<sub>2&beta;</sub>(II)</label>
                </div>
                <div class="control">
                  <input
                    id="a2a1b2"
                    v-model="formFields.definitive_blood_group"
                    type="radio"
                    value="a2a1b2"
                  />
                  <label for="a2a1b2" class="radio p-2"
                    >A<sub>2&alpha;1&beta;</sub>(II)</label
                  >
                </div>
                <div class="control">
                  <input
                    id="ba3"
                    v-model="formFields.definitive_blood_group"
                    type="radio"
                    value="ba3"
                  />
                  <label for="ba3" class="radio p-2">B<sub>&alpha;</sub>(III)</label>
                </div>
                <div class="control">
                  <input
                    id="ab04"
                    v-model="formFields.definitive_blood_group"
                    type="radio"
                    value="ab04"
                  />
                  <label for="ab04" class="radio p-2">AB<sub>0</sub>(IV)</label>
                </div>
                <div class="control">
                  <input
                    id="a2b04"
                    v-model="formFields.definitive_blood_group"
                    type="radio"
                    value="a2b04"
                  />
                  <label for="a2b04" class="radio p-2"
                    >A<sub>2</sub>B<sub>0</sub>(IV)</label
                  >
                </div>
                <div class="control">
                  <input
                    id="a2ba14"
                    v-model="formFields.definitive_blood_group"
                    type="radio"
                    value="a2ba14"
                  />
                  <label for="a2ba14" class="radio p-2"
                    >A<sub>2</sub>B<sub>&alpha;1</sub>(IV)</label
                  >
                </div>
                <div class="control">
                  <input
                    id="not_recognized"
                    v-model="formFields.definitive_blood_group"
                    type="radio"
                    value="not_recognized"
                  />
                  <label for="not_recognized" class="radio p-2">{{
                    $t('Группа крови не определяется')
                  }}</label>
                </div>
                <div class="control">
                  <input
                    id="panagglutination"
                    v-model="formFields.definitive_blood_group"
                    type="radio"
                    value="panagglutination"
                  />
                  <label for="panagglutination" class="radio p-2">{{
                    $t('Panagglutination')
                  }}</label>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-6">
            <div class="is-flex">
              <h5 class="has-text-danger mr-5">
                {{ $t('Rhesus_affiliation') }}
              </h5>
              <div class="field">
                <div class="control">
                  <input
                    id="rh+"
                    v-model="formFields.rhesus_affiliation"
                    type="radio"
                    value="rh+"
                  />
                  <label for="rh+" class="radio p-2">Rh+</label>
                </div>
                <div class="control">
                  <input
                    id="rh-"
                    v-model="formFields.rhesus_affiliation"
                    type="radio"
                    value="rh-"
                  />
                  <label for="rh-" class="radio p-2">Rh-</label>
                </div>
                <div class="control">
                  <input
                    id="du"
                    v-model="formFields.rhesus_affiliation"
                    type="radio"
                    value="du"
                  />
                  <label for="du" class="radio p-2"
                    >D<sup class="is-underlined">u</sup></label
                  >
                </div>
                <div class="control">
                  <input
                    id="rh1"
                    v-model="formFields.rhesus_affiliation"
                    type="radio"
                    value="rh1"
                  />
                  <label for="rh1" class="radio p-2">Rh'</label>
                </div>
                <div class="control">
                  <input
                    id="rh2"
                    v-model="formFields.rhesus_affiliation"
                    type="radio"
                    value="rh2"
                  />
                  <label for="rh2" class="radio p-2">Rh"</label>
                </div>
              </div>
            </div>
            <div>
              <div class="field">
                <label for="comment">{{ $t('Comment') }}</label>
                <div class="control">
                  <textarea
                    id="comment"
                    v-model="formFields.comment"
                    class="textarea"
                    :rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-6">
            <VField horizontal class="is-align-items-center is-justify-content-end">
              <h5 class="has-text-danger mr-5">{{ $t('Natural_antibodies_titer') }}</h5>
              <VControl>
                <Multiselect
                  v-model="formFields.natural_antibodies_titer.value"
                  :options="optionsNaturalAntibodiesTiter"
                  label="label"
                  value-prop="value"
                  style="width: 15rem"
                />
                <!-- <p class="help has-text-danger">{{ errors.visit_type[0] }}</p> -->
              </VControl>
            </VField>
            <div class="is-flex">
              <div class="is-flex is-horizontal is-align-items-center">
                <div class="field-label is-normal">
                  <label class="has-text-danger">&alpha; 1:</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <p class="control">
                      <input
                        v-model="formFields.natural_antibodies_titer.a1"
                        class="input"
                        type="text"
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div class="is-flex is-horizontal is-align-items-center">
                <div class="field-label is-normal">
                  <label class="has-text-danger">&beta; 1:</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <p class="control">
                      <input
                        v-model="formFields.natural_antibodies_titer.b1"
                        class="input"
                        type="text"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-6">
            <VField horizontal class="is-align-items-center">
              <h5 class="has-text-danger mr-5">
                {{ $t('Incomplete_immune_antibodies') }}
              </h5>
              <VControl class="is-flex">
                <Multiselect
                  v-model="formFields.incomplete_immune_antibodies"
                  :options="optionsIncompleteImmuneAntibodies"
                  label="label"
                  value-prop="value"
                  style="min-width: 15rem"
                />
              </VControl>
              <h5 class="ml-3 has-text-danger" for="">1:</h5>
              <p class="control">
                <input
                  v-model="formFields.natural_antibodies_titer.a1"
                  class="input"
                  type="text"
                  :style="{ width: '3rem' }"
                />
              </p>
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
        </div>
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
