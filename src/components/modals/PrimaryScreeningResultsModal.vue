<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'

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
  (e: 'medicalExamination'): void
  (e: 'withdrawal'): void
}>()

const route = useRoute()
const router = useRouter()
const notif = useNotyf()
const { locale, t } = useI18n()
const isLoading = ref(false)
const title = ref('')

function onClose() {
  emits('update:isOpen', false)
}
</script>

<template>
  <VModal :open="isOpen" :title="title" actions="center" @close="onClose">
    <template #content>
      <h1 class="has-text-centered is-size-3">
        {{ $t('Primary_screening_results') }}
      </h1>
      <br />
      <div class="columns">
        <div class="column">
          <p class="is-size-5">
            {{ $t('Researched_at') }}:
            <strong>06.03.2013</strong>
          </p>
          <p class="is-size-5">
            {{ $t('Researched_by') }}:
            <strong>Specialist</strong>
          </p>
          <p class="is-size-5">
            {{ $t('Preliminary_blood_type') }}:
            <strong>B(III)</strong>
          </p>
          <p class="is-size-5">
            {{ $t('Hemoglobin_gl') }}:
            <strong class="has-text-primary">142</strong>
          </p>
        </div>
      </div>
    </template>
    <template #action="{ close }">
      <VButtons>
        <VButton
          type="button"
          color="primary"
          outlined
          :disabled="isLoading"
          @click="
            () => {
              close()
              $emit('medicalExamination')
            }
          "
        >
          {{ $t('For_medical_examination') }}
        </VButton>
        <VButton
          type="button"
          color="danger"
          outlined
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
      </VButtons>
    </template>
  </VModal>
</template>
