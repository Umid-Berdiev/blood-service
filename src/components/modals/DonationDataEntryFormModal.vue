<script setup lang="ts">
import moment from 'moment'
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { donationTypes } from '/@src/data/additionals'
import { PatientInterface, PrimaryScreeningFormInterface } from '/@src/utils/interfaces'

interface DonationDataEntryFormProps {
  isOpen: boolean
  patient: PatientInterface
}

const props = withDefaults(defineProps<DonationDataEntryFormProps>(), {
  isOpen: false,
})

const emits = defineEmits<{
  (e: 'update:isOpen', isOpen: boolean): void
  (e: 'update:list'): void
}>()

const notif = useNotyf()
const { t } = useI18n()
const title = ref(t('Donation_data_entry_form'))
const isLoading = ref(false)
const formState = reactive({
  donation_type_id: null,
  donation_date: moment().format('YYYY-MM-DD'),
  completed_donation_status_id: null,
  post_infusion_reaction_id: null,
})
const errors = reactive({
  donation_type_id: [],
  donation_date: [],
  completed_donation_status: [],
  post_infusion_reaction_id: [],
})

async function onSubmit() {
  try {
    isLoading.value = true
    // await createWithdrawalForPatient(props.patient?.id, formState)
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
    donation_type_id: null,
    donation_date: moment().format('YYYY-MM-DD'),
    completed_donation_status_id: null,
    post_infusion_reaction_id: null,
  })
}

function clearErrors() {
  Object.assign(errors, {
    donation_type_id: [],
    donation_date: [],
    completed_donation_status: [],
    post_infusion_reaction_id: [],
  })
}

function clearError(error: string) {
  errors[error] = ''
}
</script>

<template>
  <VModal :open="isOpen" size="big" :title="title" actions="right" @close="onClose">
    <template #content>
      <VFlex column-gap="1rem">
        <VFlexItem>{{ $t('Recommended_single_donation_volume_ml') }}:</VFlexItem>
        <VFlexItem>0</VFlexItem>
      </VFlex>
      <div class="box mt-3">
        <h5 class="is-size-5 mb-3">{{ $t('Donation_results') }}</h5>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">{{ $t('Donation_type') }}</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control is-expended">
                <Multiselect
                  v-model="formState.donation_type_id"
                  :options="donationTypes"
                  :placeholder="$t('Select')"
                  label="name"
                  value-prop="id"
                  :style="{ minWidth: '15rem', margin: 0 }"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">{{ $t('Donation_date') }}</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <IMaskDateInput v-model="formState.donation_date" />
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">{{ $t('Completed_donation_status') }}</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <Multiselect
                  v-model="formState.completed_donation_status_id"
                  :options="[{ id: 1, name: 'Успешная донация' }]"
                  :placeholder="$t('Select')"
                  label="name"
                  value-prop="id"
                  :style="{ minWidth: '15rem', margin: 0 }"
                />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <Multiselect
                  v-model="formState.completed_donation_status_id"
                  :attrs="{ id }"
                  :options="[{ id: 1, name: 'Нормальное завершение' }]"
                  :placeholder="$t('Select')"
                  label="name"
                  value-prop="id"
                  :style="{ minWidth: '15rem', margin: 0 }"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">{{ $t('Post-infusion_reaction') }}</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <Multiselect
                  v-model="formState.post_infusion_reaction_id"
                  :options="[{ id: 1, name: 'Отсутствует' }]"
                  :placeholder="$t('Select')"
                  label="name"
                  value-prop="id"
                  :style="{ minWidth: '15rem', margin: 0 }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="is-divider" />
      <div class="box">
        <h5 class="is-size-5 mb-3">{{ $t('Whole_blood_donation') }}</h5>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">{{ $t('Container') }}</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control is-expended">
                <Multiselect
                  v-model="formState.container_id"
                  :options="[{ id: 1, name: 'Отсутствует' }]"
                  :placeholder="$t('Select')"
                  label="name"
                  value-prop="id"
                  :style="{ minWidth: '15rem', margin: 0 }"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">
              {{ $t('Hemoconservative_taken_blood_amount_ml') }}
            </label>
          </div>
          <div class="field-body">
            <VField>
              <VInput type="text" />
            </VField>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">{{ $t('Laboratory_taken_blood_amount_ml') }}</label>
          </div>
          <div class="field-body">
            <VField>
              <VInput type="text" />
            </VField>
          </div>
        </div>
      </div>
    </template>
    <template #action="{ close }">
      <SubmitButton :loading="isLoading" form="donation-data-entry-form" />
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
