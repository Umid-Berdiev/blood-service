<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'

const props = defineProps({
  patientId: null,
  isOpen: false,
})
const emits = defineEmits<{
  (e: 'update:isOpen', value: boolean): void
  (e: 'withdrawal'): void
}>()

const route = useRoute()
const router = useRouter()
const notif = useNotyf()
const { locale } = useI18n()
const isLoading = ref(false)

const formData = reactive({})
const errors = reactive({
  age: [],
  profession: [],
  checkbox1: [],
})

function onClose() {
  emits('update:isOpen', false)
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
        <VButton type="button" color="warning" :disabled="isLoading">
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
