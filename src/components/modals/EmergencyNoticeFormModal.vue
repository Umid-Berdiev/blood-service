<script setup lang="ts">
import { formatDate } from '@vueuse/core'
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SubmitButton from '../partials/buttons/SubmitButton.vue'
import { useNotyf } from '/@src/composable/useNotyf'
import { PatientInterface } from '/@src/utils/interfaces'

interface EmergencyNoticeFormInterface {
  personal_individual_code?: string | number
  lastname: string
  firstname: string
  patronymic?: string
  gender?: 'male' | 'female'
  birthdate: string
  urban_resident?: boolean
  lethal_outcome?: boolean
  address?: string
  place_work_study?: string
  last_visitplace_date?: string
  diagnosis_info: {
    diagnosis: string
    status: 'suspicion' | 'probable' | 'confirmed'
    confirmed_by: string
  }
  diagnosis_date: string
  hospitalization_date?: string
  hospitalization_place?: string
  alleged_infection_place?: string
  poisoned_by?: string
  primary_anti_epidemic_measures?: string
  primary_signaling_date_tsgsen?: string
  primary_signaling_time_tsgsen?: string
  informent_fullname?: string
  message_taken_by?: string
  notice_sent_from?: string
  notice_sent_to?: string
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
const formState: EmergencyNoticeFormInterface = reactive({
  lastname: '',
  firstname: '',
  birthdate: '',
  diagnosis_info: { diagnosis: '', status: 'suspicion', confirmed_by: '' },
  diagnosis_date: '',
})
const errors = reactive({
  blood_samples_taken_date: [],
  analysis_date: [],
  clinical_biochemical_laboratory_date: [],
})
const diagnosisOptions = ref([
  { id: 1, name: 'HCV' },
  { id: 2, name: 'HBsAg' },
  { id: 3, name: 'PW' },
  { id: 4, name: 'ВИЧ' },
])
const today = formatDate(new Date(), 'YYYY-MM-DD')

async function onSubmit() {
  try {
    isLoading.value = true
    // await storeHemotransmissionResearchResults(props.patient?.id, formState)
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
  Object.assign(formState, {
    blood_samples_taken_date: today,
    analysis_date: today,
    clinical_biochemical_laboratory_date: today,
  })
}

function clearErrors() {
  Object.assign(errors, {
    blood_samples_taken_date: [],
    analysis_date: [],
    clinical_biochemical_laboratory_date: [],
  })
}

function clearError(error: keyof typeof errors) {
  errors[error] = []
}
</script>

<template>
  <VModal :open="isOpen" size="big" :title="title" actions="right" @close="onClose">
    <template #content>
      <form class="table-container" @submit.prevent="onSubmit">
        <table class="table is-bordered is-fullwidth">
          <tbody>
            <tr>
              <th class="is-vcentered">{{ $t('Personal_individual_code') }}</th>
              <td>
                <VField>
                  <VControl>
                    <VInput v-model="formState.personal_individual_code" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th class="is-vcentered">
                {{ $t('Last_name') }} <span class="has-text-danger">*</span>
              </th>
              <td>
                <VField>
                  <VControl>
                    <VInput v-model="formState.lastname" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th class="is-vcentered">
                {{ $t('First_name') }} <span class="has-text-danger">*</span>
              </th>
              <td>
                <VField>
                  <VControl>
                    <VInput v-model="formState.firstname" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th class="is-vcentered">{{ $t('Patronymic') }}</th>
              <td>
                <VField>
                  <VControl>
                    <VInput v-model="formState.patronymic" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th class="is-vcentered">{{ $t('Gender') }}</th>
              <td>
                <VField>
                  <VControl raw>
                    <VRadio
                      v-model="formState.gender"
                      class="p-2"
                      value="male"
                      :label="$t('Male')"
                      color="primary"
                    />
                    <VRadio
                      v-model="formState.gender"
                      class="p-2"
                      value="female"
                      :label="$t('Female')"
                      color="primary"
                    />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th class="is-vcentered">
                {{ $t('Date-of-birth') }} <span class="has-text-danger">*</span>
              </th>
              <td>
                <VField>
                  <VControl>
                    <VInput v-model="formState.birthdate" type="date" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th class="is-vcentered"></th>
              <td>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formState.urban_resident"
                      class="p-2"
                      color="primary"
                      :label="$t('Urban_resident')"
                    />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th class="is-vcentered">{{ $t('Address') }}</th>
              <td>
                <VField>
                  <VControl>
                    <VTextarea v-model="formState.address" :rows="1" type="date" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th class="is-vcentered">{{ $t('Place_work_study') }}</th>
              <td>
                <VField>
                  <VControl>
                    <VTextarea v-model="formState.place_work_study" :rows="1" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th class="is-vcentered">{{ $t('Last_visitplace_date') }}</th>
              <td>
                <VField>
                  <VControl>
                    <VInput v-model="formState.last_visitplace_date" type="date" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th class="is-vcentered">
                {{ $t('Diagnosis') }} <span class="has-text-danger">*</span>
              </th>
              <td>
                <VField class="is-curved-select">
                  <VControl>
                    <Multiselect
                      v-model="formState.diagnosis_info.diagnosis"
                      :options="diagnosisOptions"
                      :placeholder="$t('Select_diagnosis')"
                      label="name"
                      value-prop="id"
                    />
                  </VControl>
                </VField>
                <VField>
                  <VControl>
                    <VRadio
                      v-model="formState.diagnosis_info.status"
                      class="p-2"
                      value="suspicion"
                      :label="$t('Suspicion_preliminary')"
                      color="primary"
                    />
                    <br />
                    <VRadio
                      v-model="formState.diagnosis_info.status"
                      class="p-2"
                      value="probable"
                      :label="$t('Probable')"
                      color="primary"
                    />
                    <br />
                    <VRadio
                      v-model="formState.diagnosis_info.status"
                      class="p-2"
                      value="confirmed"
                      :label="$t('Confirmed_definitive')"
                      color="primary"
                    />
                  </VControl>
                </VField>
                <VField class="is-curved-select">
                  <VControl>
                    <Multiselect
                      v-model="formState.diagnosis_info.confirmed_by"
                      :options="diagnosisOptions"
                      :placeholder="$t('Confirmed_by')"
                      label="name"
                      value-prop="id"
                    />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th class="is-vcentered"></th>
              <td>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formState.lethal_outcome"
                      class="p-2"
                      color="primary"
                      :label="$t('Lethal_outcome')"
                    />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th class="is-vcentered">
                {{ $t('Diagnosis_date') }} <span class="has-text-danger">*</span>
              </th>
              <td>
                <VField>
                  <VControl>
                    <VInput v-model="formState.diagnosis_date" type="date" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th class="is-vcentered">{{ $t('Hospitalization_date') }}</th>
              <td>
                <VField>
                  <VControl>
                    <VInput v-model="formState.hospitalization_date" type="date" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th class="is-vcentered">{{ $t('Hospitalization_place') }}</th>
              <td>
                <VField>
                  <VControl>
                    <VInput v-model="formState.hospitalization_place" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th class="is-vcentered">{{ $t('Alleged_infection_place') }}</th>
              <td>
                <VField>
                  <VControl>
                    <VInput v-model="formState.alleged_infection_place" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th class="is-vcentered">{{ $t('Poisoned_by') }}</th>
              <td>
                <VField>
                  <VControl>
                    <VInput v-model="formState.poisoned_by" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th class="is-vcentered">{{ $t('Primary_anti_epidemic_measures') }}</th>
              <td>
                <VField>
                  <VControl>
                    <VInput v-model="formState.primary_anti_epidemic_measures" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th class="is-vcentered">{{ $t('Primary_signaling_in_TsGSEN_date') }}</th>
              <td>
                <VField>
                  <VControl>
                    <VInput
                      v-model="formState.primary_signaling_date_tsgsen"
                      type="date"
                    />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th class="is-vcentered">{{ $t('Primary_signaling_in_TsGSEN_time') }}</th>
              <td>
                <VField>
                  <VControl>
                    <VInput
                      v-model="formState.primary_signaling_time_tsgsen"
                      type="datetime"
                    />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th class="is-vcentered">{{ $t('Informer_fullname') }}</th>
              <td>
                <VField>
                  <VControl>
                    <VInput v-model="formState.informent_fullname" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th class="is-vcentered">{{ $t('Message_taken_by') }}</th>
              <td>
                <VField>
                  <VControl>
                    <VInput v-model="formState.message_taken_by" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th class="is-vcentered">{{ $t('Notice_sent_from') }}</th>
              <td>
                <VField class="is-curved-select">
                  <VControl>
                    <Multiselect
                      v-model="formState.notice_sent_from"
                      :options="[]"
                      :placeholder="$t('')"
                      label="name"
                      value-prop="id"
                    />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th class="is-vcentered">{{ $t('Notice_sent_to') }}</th>
              <td>
                <VField class="is-curved-select">
                  <VControl>
                    <Multiselect
                      v-model="formState.notice_sent_to"
                      :options="[]"
                      :placeholder="$t('')"
                      label="name"
                      value-prop="id"
                    />
                  </VControl>
                </VField>
              </td>
            </tr>
          </tbody>
        </table>
        <p class="has-text-danger">{{ $t('Notice_for_required_fields') }}</p>
      </form>
    </template>
    <template #action>
      <SubmitButton :loading="isLoading">
        {{ $t('Send') }}
      </SubmitButton>
    </template>
  </VModal>
</template>
