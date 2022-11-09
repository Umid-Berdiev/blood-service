<script setup lang="ts">
import moment from 'moment'
import { reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { createWithdrawalForPatient } from '/@src/utils/api/patient'
import { WithdrawalFormInterface } from '/@src/utils/interfaces'

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
const title = ref(t('Withdrawal'))
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
const formFields: WithdrawalFormInterface = reactive({
  type: 'temporary',
  reason: '',
  start_date: moment().format('YYYY-MM-DD'),
  end_date: '',
  source: '',
})
const errors = reactive({
  type: [],
  reason: [],
  start_date: [],
  end_date: [],
  source: [],
})
const range = reactive({
  start: new Date(),
  end: new Date(),
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
    type: 'temporary',
    reason: '',
    start_date: moment().format('YYYY-MM-DD'),
    end_date: '',
    source: '',
  })
}

function clearErrors() {
  Object.assign(errors, {
    type: [],
    reason: [],
    start_date: [],
    end_date: [],
    source: [],
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
        <div class="column is-12">
          <VField :label="$t('Withdrawal_type')" required>
            <VControl>
              <VRadio
                v-model="formFields.type"
                value="permanent"
                :label="$t('Permanent')"
                @change="clearError('type')"
              />
              <VRadio
                v-model="formFields.type"
                value="temporary"
                :label="$t('Temporary')"
                @change="clearError('type')"
              />
              <p class="help has-text-danger">{{ errors.type[0] }}</p>
            </VControl>
          </VField>
          <VField v-slot="{ id }" class="is-curved-select">
            <VControl>
              <Multiselect
                v-model="formFields.reason"
                :attrs="{ id }"
                :options="reasonOptions"
                :placeholder="$t('Select_reason')"
                label="name"
                value-prop="id"
              />
            </VControl>
          </VField>
          <VDatePicker
            v-model="formFields.start_date"
            :locale="locale"
            mode="date"
            :masks="masks"
            :model-config="datePickerModelConfig"
            color="green"
            trim-weeks
            :popover="{ visibility: 'click' }"
          >
            <template #default="{ inputValue, inputEvents }">
              <VField :label="$t('Start_date')">
                <VControl icon="feather:calendar">
                  <VInput
                    :value="inputValue"
                    v-on="inputEvents"
                    @change="clearError('start_date')"
                  />
                  <p class="help has-text-danger">{{ errors.start_date[0] }}</p>
                </VControl>
              </VField>
            </template>
          </VDatePicker>
          <VDatePicker
            v-model="formFields.end_date"
            :locale="locale"
            mode="date"
            :masks="masks"
            :model-config="datePickerModelConfig"
            color="green"
            trim-weeks
            :popover="{ visibility: 'click' }"
          >
            <template #default="{ inputValue, inputEvents }">
              <VField :label="$t('End_date')">
                <VControl icon="feather:calendar">
                  <VInput
                    class="is-primary-focus"
                    :value="inputValue"
                    :disabled="formFields.type === 'permanent'"
                    v-on="inputEvents"
                    @change="clearError('end_date')"
                  />
                  <p class="help has-text-danger">{{ errors.end_date[0] }}</p>
                </VControl>
              </VField>
            </template>
          </VDatePicker>
          <VField :label="$t('Source')" required>
            <VControl>
              <VTextarea
                v-model="formFields.source"
                :placeholder="t('Enter_source')"
                :rows="3"
                @input="clearError('source')"
              />
              <p class="help has-text-danger">{{ errors.source[0] }}</p>
            </VControl>
          </VField>
        </div>
      </form>
    </template>
    <template #action="{ close }">
      <SubmitButton :loading="isLoading" form="withdrawal-form" />
    </template>
  </VModal>
</template>
