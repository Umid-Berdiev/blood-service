<script setup lang="ts">
import { reactive, ref } from 'vue'
import { formatDate } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { SupernatantPlasmasItemInterface } from '/@src/pages/app/buck-laboratory/supernatant-plasmas/index.vue'

interface SupernatantPlasmaFormInterface {
  control_result: 'sterile' | 'not_sterile'
  result_date: string
}

interface FormProps {
  isOpen: boolean
  item: SupernatantPlasmasItemInterface
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
const title = ref(t('Supernatant_plasma_test_result'))
const isLoading = ref(false)
const today = formatDate(new Date(), 'YYYY-MM-DD')
const formFields: SupernatantPlasmaFormInterface = reactive({
  control_result: 'sterile',
  result_date: today,
})
const errors = reactive({
  control_result: [],
  result_date: [],
})

async function onSubmit() {
  try {
    isLoading.value = true
    // await storeHemotransmissionResearchResults(props.patient?.id, formFields)
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
    control_result: 'sterile',
    result_date: today,
  })
}

function clearErrors() {
  Object.assign(errors, {
    control_result: [],
    result_date: [],
  })
}

function clearError(error: keyof typeof errors) {
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
              <td>{{ item.donation_code }}</td>
            </tr>
            <tr>
              <th>{{ $t('Donation_date') }}</th>
              <td>{{ item.donation_date }}</td>
            </tr>
            <tr>
              <th>{{ $t('Component_name') }}</th>
              <td>{{ item.component_name }}</td>
            </tr>
            <tr>
              <th>{{ $t('Come_from') }}</th>
              <td>{{ item.come_from }}</td>
            </tr>
            <tr>
              <th>{{ $t('Control_result') }}</th>
              <td>
                <VField>
                  <VControl>
                    <VRadio
                      v-model="formFields.control_result"
                      value="sterile"
                      color="primary"
                      :label="$t('Sterile')"
                    />
                    <VRadio
                      v-model="formFields.control_result"
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
                <DatePicker v-model="formFields.result_date" />
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
