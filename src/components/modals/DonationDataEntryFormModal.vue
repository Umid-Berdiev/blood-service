<script setup lang="ts">
import moment from 'moment'
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { PlasmapheresisFormProps } from '../pages/donation/PlasmapheresisFormBlock.vue'
import { PlateletpheresisFormProps } from '../pages/donation/PlateletpheresisFormBlock.vue'
import { WholeBloodDonationFormProps } from '../pages/donation/WholeBloodDonationFormBlock.vue'
import { ContainerFormInterface } from './DonationContainerFormModal.vue'
import { useNotyf } from '/@src/composable/useNotyf'
import { donationTypes } from '/@src/data/additionals'
import { PatientInterface } from '/@src/utils/interfaces'

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
  (e: 'add:Container', value: boolean): void
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
const wholeBloodDonationFormState: WholeBloodDonationFormProps = reactive({})
const plasmapheresisFormState: PlasmapheresisFormProps = reactive({})
const plateletpheresisFormState: PlateletpheresisFormProps = reactive({})
const formErrors = reactive({
  donation_type_id: [],
  donation_date: [],
  completed_donation_status: [],
  post_infusion_reaction_id: [],
})
const containerList = ref<ContainerFormInterface[]>([
  { id: 1, name: 'Гемасин 500/400 4700812' },
])
const isContainerFormModalOpen = ref(false)
const container: ContainerFormInterface = reactive({})

// hooks
onMounted(async function () {
  await fetchContainerList()
})

// functions
async function onSubmit() {
  try {
    isLoading.value = true
    // await createWithdrawalForPatient(props.patient?.id, formState)
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
  Object.assign(formErrors, {
    donation_type_id: [],
    donation_date: [],
    completed_donation_status: [],
    post_infusion_reaction_id: [],
  })
}

function clearError(error: string) {
  formErrors[error] = ''
}

async function fetchContainerList() {
  // const res = await fetchContainers()
  // containerList.value = res.data
  console.log('ok')
}
</script>

<template>
  <VModal :open="isOpen" size="medium" :title="title" actions="right" @close="onClose">
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
                  :options="[
                    { id: 1, name: 'Успешная донация' },
                    { id: 2, name: 'Безуспешная донация' },
                  ]"
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
                  :options="[
                    { id: 1, name: 'Нормальное завершение' },
                    { id: 1, name: 'Некондиционный забор' },
                  ]"
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
      <template v-if="formState.donation_type_id === 1">
        <hr class="is-divider" />
        <WholeBloodDonationFormBlock
          :container-list="containerList"
          :form-state="wholeBloodDonationFormState"
        />
      </template>
      <template v-else-if="formState.donation_type_id === 2">
        <hr class="is-divider" />
        <PlasmapheresisFormBlock
          :container-list="containerList"
          :form-state="plasmapheresisFormState"
        />
      </template>
      <template v-else-if="formState.donation_type_id === 3">
        <hr class="is-divider" />
        <PlateletpheresisFormBlock
          :container-list="containerList"
          :form-state="plateletpheresisFormState"
        />
      </template>
      <hr class="is-divider" />
      <div class="box">
        <h5 class="is-size-5 mb-3">
          {{ $t('Component_Product_Transfer_Information') }}
        </h5>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">{{ $t('Transferred') }}</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control is-expended">
                <Multiselect
                  v-model="formState.transferred_id"
                  :options="[
                    { id: 1, name: 'на переработку' },
                    { id: 2, name: 'на контроль стерильности' },
                  ]"
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
    </template>
    <template #action="{ close }">
      <button class="button is-info is-outlined" @click="isContainerFormModalOpen = true">
        {{ $t('Add_container') }}
      </button>
      <SubmitButton :loading="isLoading" form="donation-data-entry-form" />
    </template>
  </VModal>
  <DonationContainerFormModal
    v-model:is-open="isContainerFormModalOpen"
    :container="container"
    @update:list="fetchContainerList"
  />
</template>

<style scoped lang="scss">
.is-dark {
  .box {
    background-color: var(--dark-sidebar);
  }
}

.field.is-horizontal {
  // align-items: center !important;
  // max-width: 50%;

  .field-label {
    flex-basis: unset;
    flex-grow: unset;
  }
}
</style>
