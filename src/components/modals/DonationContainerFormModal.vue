<script setup lang="ts">
import { formatDate } from '@vueuse/core'
import { isEmpty } from 'lodash'
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
// import { createWithdrawalForPatient } from '/@src/utils/api/donations'

export interface ContainerFormInterface {
  title: {
    ru: string
    uz: string
    en: string
  }
  series: string
  preservative: string
  preservative_volume: string
  container_expiration_date: string
  preservative_shelf_life_days: string
}

interface FormModalProps {
  isOpen: boolean
  container: ContainerFormInterface
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
const title = ref(t('Container'))
const isLoading = ref(false)
const formState: ContainerFormInterface = reactive({
  title: {
    ru: '',
    uz: '',
    en: '',
  },
  series: '',
  preservative_volume: '63',
  preservative: '',
  container_expiration_date: formatDate(new Date(), 'YYYY-MM-DD'),
  preservative_shelf_life_days: '50',
})
const formErrors = reactive({
  'title.ru': [],
  'title.uz': [],
  'title.en': [],
  series: [],
  preservative_volume: [],
  preservative: [],
  container_expiration_date: [],
  preservative_shelf_life_days: [],
})

// hooks
watch(
  props.container,
  function (newVal) {
    if (newVal && !isEmpty(newVal)) Object.assign(formState, newVal)
  },
  { deep: true }
)

// functions
async function onSubmit() {
  try {
    isLoading.value = true
    // await createWithdrawalForPatient(props.container?.id, formFields)
    emits('update:list')
    onClose()
  } catch (error: any) {
    if (error.response?.data.error) notif.error(error.response?.data.error)
    else Object.assign(formErrors, error.response?.data?.errors)
  } finally {
    isLoading.value = false
  }
}

function onClose() {
  clearFormState()
  clearErrors()
  emits('update:isOpen', false)
}

function clearFormState() {
  Object.assign(formState, {
    title: {
      ru: '',
      uz: '',
      en: '',
    },
    series: '',
    preservative_volume: '63',
    preservative: '',
    container_expiration_date: formatDate(new Date(), 'YYYY-MM-DD'),
    preservative_shelf_life_days: '50',
  })
}

function clearErrors() {
  Object.getOwnPropertyNames(formErrors).forEach((prop) => {
    if (formErrors[prop]) formErrors[prop] = []
  })
}

function clearError(error: string) {
  formErrors[error] = ''
}
</script>

<template>
  <VModal :open="isOpen" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <form id="donation-container-form" class="modal-form" @submit.prevent="onSubmit">
        <table class="table is-fullwidth">
          <tbody>
            <tr>
              <td>
                {{ $t('Name_ru') }}
              </td>
              <td>
                <VField required>
                  <VControl>
                    <VInput v-model="formState.title.ru" />
                    <p class="help has-text-danger">
                      {{ formErrors['title.ru'][0] }}
                    </p>
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('Name_uz') }}
              </td>
              <td>
                <VField required>
                  <VControl>
                    <VInput v-model="formState.title.uz" />
                    <p class="help has-text-danger">
                      {{ formErrors['title.uz'][0] }}
                    </p>
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('Name_en') }}
              </td>
              <td>
                <VField required>
                  <VControl>
                    <VInput v-model="formState.title.en" />
                    <p class="help has-text-danger">
                      {{ formErrors['title.en'][0] }}
                    </p>
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('Series') }}
              </td>
              <td>
                <VField required>
                  <VControl>
                    <VInput v-model="formState.series" />
                    <p class="help has-text-danger">
                      {{ formErrors.series[0] }}
                    </p>
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('Preservative_volume') }}
              </td>
              <td>
                <VField required>
                  <VControl>
                    <VInput v-model="formState.preservative_volume" />
                    <p class="help has-text-danger">
                      {{ formErrors.preservative_volume[0] }}
                    </p>
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('Preservative') }}
              </td>
              <td>
                <VField required>
                  <VControl>
                    <VInput v-model="formState.preservative" />
                    <p class="help has-text-danger">
                      {{ formErrors.preservative[0] }}
                    </p>
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('Container_expiration_date') }}
              </td>
              <td>
                <VField required>
                  <VControl>
                    <IMaskDateInput v-model="formState.container_expiration_date" />
                    <p class="help has-text-danger">
                      {{ formErrors.container_expiration_date[0] }}
                    </p>
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('Preservative_shelf_life_days') }}
              </td>
              <td>
                <VField required>
                  <VControl>
                    <VInput v-model="formState.preservative_shelf_life_days" />
                    <p class="help has-text-danger">
                      {{ formErrors.preservative_shelf_life_days[0] }}
                    </p>
                  </VControl>
                </VField>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </template>
    <template #action="{ close }">
      <SubmitButton :loading="isLoading" form="donation-container-form" />
    </template>
  </VModal>
</template>
