<script setup lang="ts">
import { formatDate } from '@vueuse/core'
import moment from 'moment'
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'

interface QuantityCheckFormInterface {
  batch_number: string
  destruction_date: string
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
const title = ref(t('Scrapping_component'))
const isLoading = ref(false)
const formState: QuantityCheckFormInterface = reactive({
  batch_number: '',
  destruction_date: formatDate(new Date(), 'YYYY-MM-DD'),
})
const errors = reactive({
  batch_number: [],
  destruction_date: [],
})

async function onSubmit() {
  try {
    isLoading.value = true
    // await storeHemotransmissionResearchResults(props.patient?.id, formState)
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
    batch_number: '',
    destruction_date: formatDate(new Date(), 'YYYY-MM-DD'),
  })
}

function clearErrors() {
  Object.assign(errors, {
    batch_number: [],
    destruction_date: [],
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
              <th>{{ $t('Donation_date') }}</th>
              <td>{{ component.donation_date }}</td>
            </tr>
            <tr>
              <th>{{ $t('Donation_code') }}</th>
              <td>{{ component.donation_code }}</td>
            </tr>
            <tr>
              <th>{{ $t('Dose') }}</th>
              <td>{{ component.dose }}</td>
            </tr>
            <tr>
              <th>{{ $t('Component_name') }}</th>
              <td>{{ component.component_name }}</td>
            </tr>
            <tr>
              <th>{{ $t('Quantity_ml') }}</th>
              <td>{{ component.quantity }}</td>
            </tr>
            <tr>
              <th>{{ $t('Batch number') }}</th>
              <td>
                <VField>
                  <VControl>
                    <VInput
                      v-model="formState.batch_number"
                      value="satisfactory"
                      color="primary"
                      :label="$t('Satisfactory')"
                    />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <th>{{ $t('Destruction_date') }}</th>
              <td>
                <VField>
                  <VControl>
                    <IMaskDateInput
                      v-model="formState.destruction_date"
                      :style="{ width: '50%' }"
                    />
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
