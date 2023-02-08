<script setup lang="ts">
import { formatDate } from '@vueuse/core'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { storeDonationContainer, updateDonationContainer } from '/@src/utils/api/donation'
import { DonationContainerInterface } from '/@src/utils/interfaces'

interface FormModalProps {
  isOpen: boolean
  container: DonationContainerInterface | null
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
const formState = ref<DonationContainerInterface>({
  name: '',
  name_cyr: '',
  name_lat: '',
  series: '',
  count_hemopreservative: null,
  hemopreservative: '',
  expire_date: formatDate(new Date(), 'YYYY-MM-DD'),
  expire_days: null,
})
const formErrors = ref({
  name: [],
  name_cyr: [],
  name_lat: [],
  series: [],
  count_hemopreservative: [],
  hemopreservative: [],
  expire_date: [],
  expire_days: [],
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
      ? await updateDonationContainer(formState.value.id, formState.value)
      : await storeDonationContainer(formState.value)
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
    name_cyr: '',
    name_lat: '',
    series: '',
    count_hemopreservative: null,
    hemopreservative: '',
    expire_date: formatDate(new Date(), 'YYYY-MM-DD'),
    expire_days: null,
  }
}

function clearErrors() {
  Object.getOwnPropertyNames(formErrors.value).forEach((prop) => {
    formErrors.value[prop] = []
  })
}

// function clearError(error: keyof typeof errors) {
//   formErrors.value[error] = ''
// }
</script>

<template>
  <VModal :open="isOpen" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <form id="donation-container-form" class="modal-form" @submit.prevent="onSubmit">
        <table class="table is-fullwidth">
          <tbody>
            <tr>
              <td>{{ $t('Title') }} (RU)</td>
              <td>
                <VField required>
                  <VControl>
                    <VInput v-model="formState.name" />
                    <p class="help has-text-danger">
                      {{ formErrors?.name[0] }}
                    </p>
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>{{ $t('Title') }} (UZ_CYR)</td>
              <td>
                <VField required>
                  <VControl>
                    <VInput v-model="formState.name_cyr" />
                    <p class="help has-text-danger">
                      {{ formErrors.name_cyr[0] }}
                    </p>
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>{{ $t('Title') }} (UZ_LAT)</td>
              <td>
                <VField required>
                  <VControl>
                    <VInput v-model="formState.name_lat" />
                    <p class="help has-text-danger">
                      {{ formErrors.name_lat[0] }}
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
                    <VInput v-model="formState.count_hemopreservative" />
                    <p class="help has-text-danger">
                      {{ formErrors.count_hemopreservative[0] }}
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
                    <VInput v-model="formState.hemopreservative" />
                    <p class="help has-text-danger">
                      {{ formErrors?.hemopreservative[0] }}
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
                <DatePicker v-model="formState.expire_date" />
                <p class="help has-text-danger">
                  {{ formErrors?.expire_date[0] }}
                </p>
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('Preservative_shelf_life_days') }}
              </td>
              <td>
                <VField required>
                  <VControl>
                    <VInput v-model="formState.expire_days" />
                    <p class="help has-text-danger">
                      {{ formErrors?.expire_days[0] }}
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
