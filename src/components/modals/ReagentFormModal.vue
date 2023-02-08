<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { storeReagent, updateReagent } from '/@src/utils/api/reagents'
import { ReagentInterface } from '/@src/utils/interfaces'

interface FormModalProps {
  isOpen: boolean
  container: ReagentInterface | null
}

const props = withDefaults(defineProps<FormModalProps>(), {
  isOpen: false,
})

const emits = defineEmits<{
  (e: 'update:isOpen', isOpen: boolean): void
  (e: 'update:list'): void
}>()

const notif = useNotyf()
const { t } = useI18n()
const title = ref(t('Reagent'))
const isLoading = ref(false)
const formState = ref<ReagentInterface>({
  name: '',
  unit: '',
  min_value: null,
  max_value: null,
})
const formErrors = ref({
  name: [],
  unit: [],
  min_value: [],
  max_value: [],
})

// hooks
watch(
  () => props.container,
  function (newVal) {
    if (newVal) formState.value = newVal
  },
  { deep: true }
)

watch(
  () => props.isOpen,
  function (newVal) {
    if (newVal == false) {
      clearFormState()
      clearErrors()
    }
  },
  { deep: true }
)

// functions
async function onSubmit() {
  try {
    isLoading.value = true
    formState.value.id
      ? await updateReagent(formState.value.id, formState.value)
      : await storeReagent(formState.value)
    emits('update:list')
    onClose()
  } catch (error: any) {
    if (error.response?.data.error) notif.error(error.response?.data.error)
    else formErrors.value = error.response?.data?.errors
  } finally {
    isLoading.value = false
  }
}

function onClose() {
  emits('update:isOpen', false)
}

function clearFormState() {
  formState.value = {
    name: '',
    unit: '',
    min_value: null,
    max_value: null,
  }
}

function clearErrors() {
  Object.getOwnPropertyNames(formErrors.value).forEach((prop) => {
    formErrors.value[prop] = []
  })
}

function clearError(error: keyof typeof formErrors.value) {
  formErrors.value[error] = []
}
</script>

<template>
  <VModal :open="isOpen" :title="title" actions="right" @close="onClose">
    <template #content>
      <form id="donation-container-form" class="modal-form" @submit.prevent="onSubmit">
        <table class="table is-fullwidth">
          <tbody>
            <tr>
              <td>
                <span>{{ $t('Title') }}</span>
                <span class="has-text-danger"> *</span>
              </td>
              <td>
                <VField required>
                  <VControl>
                    <VInput v-model="formState.name" @input="clearError('name')" />
                    <p class="help has-text-danger">
                      {{ formErrors?.name[0] }}
                    </p>
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                <span>{{ $t('Unit') }}</span>
                <span class="has-text-danger"> *</span>
              </td>
              <td>
                <VField required>
                  <VControl>
                    <VInput v-model="formState.unit" @input="clearError('unit')" />
                    <p class="help has-text-danger">
                      {{ formErrors.unit[0] }}
                    </p>
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                <span>{{ $t('Min') }}</span>
                <span class="has-text-danger"> *</span>
              </td>
              <td>
                <VField required>
                  <VControl>
                    <VInput
                      v-model="formState.min_value"
                      type="number"
                      @input="clearError('min_value')"
                    />
                    <p class="help has-text-danger">
                      {{ formErrors.min_value[0] }}
                    </p>
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                <span>{{ $t('Max') }}</span>
                <span class="has-text-danger"> *</span>
              </td>
              <td>
                <VField required>
                  <VControl>
                    <VInput
                      v-model="formState.max_value"
                      type="number"
                      @input="clearError('max_value')"
                    />
                    <p class="help has-text-danger">
                      {{ formErrors?.max_value[0] }}
                    </p>
                  </VControl>
                </VField>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </template>
    <template #action>
      <SubmitButton :loading="isLoading" form="donation-container-form" />
    </template>
  </VModal>
</template>
