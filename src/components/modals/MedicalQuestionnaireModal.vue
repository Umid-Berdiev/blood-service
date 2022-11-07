<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { MedicalQuestionnaireFormInterface } from '/@src/utils/interfaces'

const props = withDefaults(
  defineProps<{
    patientId: number | null
    isOpen: boolean
  }>(),
  {
    patientId: null,
    isOpen: false,
  }
)

const emits = defineEmits<{
  (e: 'update:isOpen', value: boolean): void
  (e: 'laboratoryResearch'): void
  (e: 'withdrawal'): void
}>()

const route = useRoute()
const router = useRouter()
const notif = useNotyf()
const { locale } = useI18n()
const isLoading = ref(false)
const title = ref('')

const formData: MedicalQuestionnaireFormInterface = reactive({})
const errors = reactive({
  age: [],
  profession: [],
  checkbox1: [],
})

function onClose() {
  clearFields()
  emits('update:isOpen', false)
}

function clearFields() {
  Object.assign(formData, {
    age: '',
    profession: '',
    last_doctor_visit_reason: '',
    date_input1: '',
    date_input2: '',
    date_input3: '',
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
    checkbox9: false,
    checkbox10: false,
    checkbox11: false,
    checkbox12: false,
    checkbox13: false,
    checkbox14: false,
    checkbox15: false,
    checkbox16: false,
    checkbox17: false,
    checkbox18: false,
    checkbox19: false,
    checkbox20: false,
    checkbox21: false,
    checkbox22: false,
    checkbox23: false,
    checkbox24: false,
    checkbox25: false,
    checkbox26: false,
    checkbox27: false,
    checkbox28: false,
    checkbox29: false,
    textarea1: false,
  })
}
</script>

<template>
  <VModal :open="isOpen" size="extra-big" :title="title" actions="right" @close="onClose">
    <template #content>
      <h1 class="has-text-centered is-size-3">
        {{ $t('Medical_questionnaire_before_donation') }}
      </h1>
      <form>
        <MedicalQuestionnaireForm :form="formData" :errors="errors" />
      </form>
    </template>
    <template #action="{ close }">
      <VButtons>
        <VButton
          type="button"
          color="warning"
          :disabled="isLoading"
          @click="
            () => {
              close()
              $emit('laboratoryResearch')
            }
          "
        >
          {{ $t('Send_for_examination') }}
        </VButton>
        <VButton
          type="button"
          color="danger"
          :disabled="isLoading"
          @click="
            () => {
              close()
              $emit('withdrawal')
            }
          "
        >
          {{ $t('Withdrawal') }}
        </VButton>
        <SubmitButton :loading="isLoading" />
      </VButtons>
    </template>
  </VModal>
</template>
