<script setup lang="ts">
import { formatDate } from '@vueuse/core'
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { storeQualityControl } from '/@src/utils/api/quality-control'

interface QuantityCheckFormInterface {
  status: 'qualitative' | 'not_qualitative'
  date: string
}

interface FormProps {
  isOpen: boolean
  component: {}
}

const props = withDefaults(defineProps<FormProps>(), {
  isOpen: false,
})

const emits = defineEmits<{
  (e: 'update:isOpen', isOpen: boolean): void
  (e: 'update:list'): void
}>()

const notif = useNotyf()
const { t } = useI18n()
const title = ref(t('Quality_check_result'))
const isLoading = ref(false)
const today = formatDate(new Date(), 'DD.MM.YYYY')

const formState: QuantityCheckFormInterface = reactive({
  status: 'qualitative',
  date: today,
})
const errors = reactive({
  status: [],
  date: [],
})

async function onSubmit() {
  try {
    isLoading.value = true
    await storeQualityControl(props.patient?.id, formState)
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
  Object.assign(formState, {
    status: 'qualitative',
    date: today,
  })
}

function clearErrors() {
  Object.assign(errors, {
    status: [],
    date: [],
  })
}

function clearError(error: string) {
  errors[error] = []
}
</script>

<template>
  <VModal :open="isOpen" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <div class="table-container">
        <table class="table is-fullwidth">
          <tbody>
            <tr>
              <th>{{ $t('Donation_code') }}</th>
              <td>{{ component.donation_code }}</td>
            </tr>
            <tr>
              <th>{{ $t('Donation_date') }}</th>
              <td>{{ component.donation_date }}</td>
            </tr>
            <tr>
              <th>{{ $t('Component_name') }}</th>
              <td>{{ component.component_name }}</td>
            </tr>
            <tr>
              <th>{{ $t('Component_quality') }}</th>
              <td>
                <VField>
                  <VControl>
                    <VRadio
                      v-model="formState.status"
                      value="qualitative"
                      color="primary"
                      :label="$t('Satisfactory')"
                    />
                    <VRadio
                      v-model="formState.status"
                      value="not_qualitative"
                      color="primary"
                      :label="$t('Not_satisfactory')"
                    />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th>{{ $t('Result_date') }}</th>
              <td>
                <VField>
                  <VControl>
                    <DatePicker v-model="formState.date" />
                  </VControl>
                </VField>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <template #action>
      <SubmitButton :loading="isLoading" type="button" />
    </template>
  </VModal>
</template>

<style scoped lang="scss">
.is-dark {
  .box {
    background-color: var(--dark-sidebar);
  }
}
</style>
