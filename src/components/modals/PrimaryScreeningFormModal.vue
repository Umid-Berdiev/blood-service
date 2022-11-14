<script setup lang="ts">
import moment from 'moment'
import { reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { createWithdrawalForPatient } from '/@src/utils/api/patient'
import { PrimaryScreeningFormInterface } from '/@src/utils/interfaces'

interface WithdrawalFormProps {
  isOpen: boolean
  patientId: number | null
}

const props = withDefaults(defineProps<WithdrawalFormProps>(), {
  isOpen: false,
  patientId: null,
})

const emits = defineEmits<{
  (e: 'update:isOpen', isOpen: boolean): void
  (e: 'update:list'): void
}>()

const notif = useNotyf()
const { t } = useI18n()
const title = ref(t('Primary_screening_form'))
const isLoading = ref(false)
const { locale } = useI18n()
const masks = ref({
  input: 'YYYY-MM-DD',
})
const datePickerModelConfig = reactive({
  type: 'string',
  mask: masks.value.input, // Uses 'iso' if missing
})
const reasonOptions = ref([{ id: 'brucellosis', name: t('Brucellosis') }])
const formFields: PrimaryScreeningFormInterface = reactive({
  analysis_date: moment().format('YYYY-MM-DD'),
  preliminary_blood_type: 'O(I)',
  hemoglobin: '',
})
const errors = reactive({
  analysis_date: [],
  preliminary_blood_type: [],
  hemoglobin: [],
})

async function onSubmit() {
  try {
    isLoading.value = true
    await createWithdrawalForPatient(props.patientId, formFields)
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
    analysis_date: moment().format('YYYY-MM-DD'),
    preliminary_blood_type: 'O(I)',
    hemoglobin: '',
  })
}

function clearErrors() {
  Object.assign(errors, {
    analysis_date: [],
    preliminary_blood_type: [],
    hemoglobin: [],
  })
}

function clearError(error: string) {
  errors[error] = ''
}
</script>

<template>
  <VModal :open="isOpen" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <form id="withdrawal-form" class="modal-form" @submit.prevent="onSubmit">
        <table class="table is-bordered">
          <tbody>
            <tr>
              <td>{{ $t('Date_of_an_analysis') }}</td>
              <td>
                <VField required>
                  <VControl>
                    <IMaskDateInput v-model="formFields.analysis_date" />
                    <p class="help has-text-danger">{{ errors.analysis_date[0] }}</p>
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </form>
    </template>
    <template #action="{ close }">
      <SubmitButton :loading="isLoading" form="withdrawal-form" />
    </template>
  </VModal>
</template>
