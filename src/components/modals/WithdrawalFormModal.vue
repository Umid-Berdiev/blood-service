<script setup lang="ts">
import { formatDate } from '@vueuse/core'
import { reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { fetchWithdrawalReasons } from '/@src/utils/api/additional'
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
const withdrawalReasons = ref([])
const formData: WithdrawalFormInterface = reactive({
  type: 'temporary',
  reason_text: '',
  start_date: formatDate(new Date(), 'YYYY-MM-DD'),
  end_date: '',
  source: '',
})
const errors = reactive({
  type: [],
  reason_text: [],
  start_date: [],
  end_date: [],
  source: [],
})
const range = reactive({
  start: new Date(),
  end: new Date(),
})

// hooks
onMounted(async () => {
  const res = await fetchWithdrawalReasons()
  withdrawalReasons.value = res.result
})

// functions
async function onSubmit() {
  try {
    isLoading.value = true
    await createWithdrawalForPatient(props.patientId, formData)
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
  Object.assign(formData, {
    type: 'temporary',
    reason_text: null,
    start_date: formatDate(new Date(), 'YYYY-MM-DD'),
    end_date: '',
    source: '',
  })
}

function clearErrors() {
  Object.assign(errors, {
    type: [],
    reason_text: [],
    start_date: [],
    end_date: [],
    source: [],
  })
}

function clearError(error: keyof typeof errors) {
  errors[error] = []
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
                v-model="formData.type"
                value="permanent"
                :label="$t('Permanent')"
                @change="clearError('type')"
              />
              <VRadio
                v-model="formData.type"
                value="temporary"
                :label="$t('Temporary')"
                @change="clearError('type')"
              />
              <p class="help has-text-danger">{{ errors.type[0] }}</p>
            </VControl>
          </VField>
          <VField class="is-curved-select">
            <VControl>
              <VInput v-model="formData.reason_text" :placeholder="$t('Select_reason')" />
              <span class="help has-text-danger">{{ errors.reason_text[0] }}</span>
            </VControl>
          </VField>
          <DatePicker
            v-model="formData.start_date"
            :label="$t('Start_date')"
            :error-text="errors.start_date[0]"
            @editing="clearError('start_date')"
          />
          <DatePicker
            v-if="formData.type === 'temporary'"
            v-model="formData.end_date"
            :label="$t('End_date')"
            :error-text="errors.start_date[0]"
            @editing="clearError('start_date')"
          />
          <VField :label="$t('Source')" required>
            <VControl>
              <VTextarea
                v-model="formData.source"
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
