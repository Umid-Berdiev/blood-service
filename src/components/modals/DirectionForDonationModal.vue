<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { storeDonation } from '/@src/utils/api/patient'
import { PatientVisitCardInterface } from '/@src/utils/interfaces'

interface FormModalProps {
  isOpen: boolean
  visitcard: PatientVisitCardInterface
}

const props = withDefaults(defineProps<FormModalProps>(), {
  isOpen: false,
})

const emits = defineEmits<{
  (e: 'update:isOpen', value: boolean): void
  (e: 'submit'): void
}>()

const notif = useNotyf()
const { t } = useI18n()
const isLoading = ref(false)
const title = ref(t('Direction_for_donation'))
const formData: {
  donation_code: number | null
  recommended_blood_capacity: string | number
} = reactive({
  donation_code: null,
  recommended_blood_capacity: '',
})

const errors = reactive({
  donation_code: [],
  recommended_blood_capacity: [],
})

// hooks
onMounted(() => {
  formData.donation_code = props.visitcard?.donation_code
})

// functions
async function submitForm() {
  try {
    isLoading.value = true

    await storeDonation(props.visitcard?.id, formData)
    notif.success(t('Data_saved_successfully'))
    onClose()
  } catch (error: any) {
    notif.error(error.message)
    Object.assign(errors, error.response?.data?.errors)
  } finally {
    isLoading.value = false
  }
}

function onClose() {
  emits('update:isOpen', false)
}
</script>

<template>
  <VModal :open="isOpen" :title="title" actions="right" @close="onClose">
    <template #content>
      <VGrid row-gap="1rem">
        <VGridItem>
          <VField horizontal>
            <VLabel class="my-auto mr-5">{{ $t('Donation_code') }}</VLabel>
            <VControl class="ml-auto">
              <VInput v-model="formData.donation_code" />
            </VControl>
          </VField>
        </VGridItem>
        <VGridItem>
          <VField horizontal>
            <VLabel class="my-auto mr-5">{{ $t('Recommended_blood_capacity') }}</VLabel>
            <VControl class="ml-auto">
              <VInput v-model="formData.recommended_blood_capacity" />
            </VControl>
          </VField>
        </VGridItem>
      </VGrid>
    </template>
    <template #action>
      <SubmitButton type="button" :loading="isLoading" @click="submitForm">
        {{ $t('For_donation') }}
      </SubmitButton>
    </template>
  </VModal>
</template>

<style scoped lang="scss">
.table {
  td {
    vertical-align: baseline;
  }
}

.is-dark {
  .table {
    thead {
      background-color: var(--dark-sidebar-dark-2);
    }
  }
}
</style>
