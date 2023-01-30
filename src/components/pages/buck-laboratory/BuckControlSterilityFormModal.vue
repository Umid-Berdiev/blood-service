<script setup lang="ts">
import { formatDate } from '@vueuse/core'
import moment from 'moment'
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { SterilityControlItemInterface } from '/@src/pages/app/buck-laboratory/components-for-production-sterility-control/index.vue'
import { storeSterilityResults } from '/@src/utils/api/buck-laboratory'

interface BuckControlSterilityFormInterface {
  sterility_status: 'sterile' | 'not_sterile'
  sterility_checked_date: string
}

interface FormProps {
  isOpen: boolean
  item: SterilityControlItemInterface | null
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
const title = ref(t('Sterility_test_result'))
const isLoading = ref(false)
const today = formatDate(new Date(), 'DD.MM.YYYY')
const formFields: BuckControlSterilityFormInterface = reactive({
  sterility_status: 'sterile',
  sterility_checked_date: today,
})
const errors = reactive({
  sterility_status: [],
  sterility_checked_date: [],
})

async function onSubmit() {
  try {
    isLoading.value = true
    await storeSterilityResults(props.item?.id, formFields)
    notif.success(t('Data_saved_successfully'))
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
  Object.assign(formFields, {
    sterility_status: 'sterile',
    sterility_checked_date: today,
  })
}

function clearErrors() {
  Object.assign(errors, {
    sterility_status: [],
    sterility_checked_date: [],
  })
}

function clearError(error: string) {
  errors[error] = ''
}
</script>

<template>
  <VModal :open="isOpen" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <div class="table-container">
        <table class="table is-fullwidth">
          <tbody class="align-middle">
            <tr>
              <th>{{ $t('Donation_code') }}</th>
              <td>{{ item?.donation_code }}</td>
            </tr>
            <tr>
              <th>{{ $t('Donation_date') }}</th>
              <td>{{ item?.date && formatDate(new Date(item?.date), 'DD.MM.YYYY') }}</td>
            </tr>
            <tr>
              <th>{{ $t('Component_name') }}</th>
              <td>{{ item?.product_name }}</td>
            </tr>
            <tr>
              <th>{{ $t('Come_from') }}</th>
              <td>{{ item?.sent_from }}</td>
            </tr>
            <tr>
              <th class="align-items-center">{{ $t('Control_result') }}</th>
              <td>
                <VField>
                  <VControl>
                    <VRadio
                      v-model="formFields.sterility_status"
                      value="sterile"
                      color="primary"
                      :label="$t('Sterile')"
                    />
                    <VRadio
                      v-model="formFields.sterility_status"
                      value="not_sterile"
                      color="primary"
                      :label="$t('Not_sterile')"
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
                    <IMaskDateInput
                      v-model="formFields.sterility_checked_date"
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
      <SubmitButton :loading="isLoading" type="button" @click="onSubmit" />
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
