<script setup lang="ts">
import { formatDate } from '@vueuse/core'
import moment from 'moment'
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { PlasmapheresisFormProps } from '../pages/donation/PlasmapheresisFormBlock.vue'
import { PlateletpheresisFormProps } from '../pages/donation/PlateletpheresisFormBlock.vue'
import { WholeBloodDonationFormProps } from '../pages/donation/WholeBloodDonationFormBlock.vue'
import { useNotyf } from '/@src/composable/useNotyf'
import {
  fetchDonationResults,
  storeDonationResults,
  fetchDonationContainers,
  fetchPostinfusionReactions,
  completedDonationStatus,
  completedDonationStatusTypes,
} from '/@src/utils/api/donation'
import { PatientInterface, DonationContainerInterface } from '/@src/utils/interfaces'

interface FormProps {
  isOpen: boolean
  patient: PatientInterface | null
  donationTypes: any[]
}

const props = withDefaults(defineProps<FormProps>(), {
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
// const wholeBloodDonationFormState = ref<WholeBloodDonationFormProps>({})
// const plasmapheresisFormState = ref<PlasmapheresisFormProps>({})
// const plateletpheresisFormState = ref<PlateletpheresisFormProps>({})
const formState = ref({
  donation_type_id: null,
  date: formatDate(new Date(), 'YYYY-MM-DD'),
  status: '',
  status_type: '',
  postinfusion_reaction_id: null,
  // container_id: null,
  // hemoconservative: null,
  // laboratory: null,
  sent_to: '',
})
const formErrors = reactive({
  donation_type_id: [],
  date: [],
  status: [],
  status_type: [],
  postinfusion_reaction_id: [],
  container_id: [],
  hemoconservative: [],
  laboratory: [],
  sent_to: [],
})
const containerList = ref<DonationContainerInterface[]>([])
const postinfusionReactions = ref<any[]>([])
const isContainerFormModalOpen = ref(false)
const container = ref<DonationContainerInterface>({})

// hooks
onMounted(async function () {
  await fetchContainerList()
  const res = await fetchPostinfusionReactions()
  postinfusionReactions.value = res.result
})

watch(
  () => props.patient?.last_visit?.id,
  async (newVal) => {
    if (newVal) {
      const res = await fetchDonationResults(newVal)
      formState.value = res.result
    }
  }
)

// functions
async function onSubmit() {
  try {
    isLoading.value = true
    // const additionalsFormState =
    //   props.patient?.last_visit?.donation_type_id === 1
    //     ? plateletpheresisFormState.value
    //     : props.patient?.last_visit?.donation_type_id === 2
    //     ? plasmapheresisFormState.value
    //     : wholeBloodDonationFormState.value
    // const payload = {
    //   ...formState.value,
    //   ...additionalsFormState,
    // }
    await storeDonationResults(props.patient?.last_visit?.id as number, formState.value)
    notif.success(t('Data_saved_successfully'))
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
  formState.value = {
    date: formatDate(new Date(), 'YYYY-MM-DD'),
    status: '',
    status_type: '',
    postinfusion_reaction_id: null,
    // container_id: null,
    // hemoconservative: null,
    // laboratory: null,
    sent_to: '',
  }
}

function clearErrors() {
  Object.assign(formErrors, {
    donation_type_id: [],
    date: [],
    status: [],
    status_type: [],
    postinfusion_reaction_id: [],
    container_id: [],
    hemoconservative: [],
    laboratory: [],
    sent_to: [],
  })
}

function clearError(error: string) {
  formErrors[error] = ''
}

async function fetchContainerList() {
  const res = await fetchDonationContainers()
  containerList.value = res.result.data
  // console.log('ok')
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
                  :value="patient?.last_visit?.donation_type_id"
                  :options="donationTypes"
                  :placeholder="$t('Select')"
                  label="name"
                  value-prop="id"
                  :style="{ minWidth: '15rem', margin: 0 }"
                  disabled
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
                <IMaskDateInput v-model="formState.date" />
                <p class="help has-text-danger">{{ formErrors.date[0] }}</p>
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
                  v-model="formState.status"
                  :options="completedDonationStatus"
                  :placeholder="$t('Select')"
                  :style="{ minWidth: '15rem', margin: 0 }"
                />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <Multiselect
                  v-model="formState.status_type"
                  :options="completedDonationStatusTypes"
                  :placeholder="$t('Select')"
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
                  v-model="formState.postinfusion_reaction_id"
                  :options="postinfusionReactions"
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
      <template v-if="patient?.last_visit?.donation_type_id === 1">
        <hr class="is-divider" />
        <PlateletpheresisFormBlock
          v-model:form-state="formState"
          :container-list="containerList"
        />
      </template>
      <template v-else-if="patient?.last_visit?.donation_type_id === 2">
        <hr class="is-divider" />
        <PlasmapheresisFormBlock
          v-model:form-state="formState"
          :container-list="containerList"
        />
      </template>
      <template v-else-if="patient?.last_visit?.donation_type_id === 3">
        <hr class="is-divider" />
        <WholeBloodDonationFormBlock
          v-model:form-state="formState"
          :container-list="containerList"
        />
      </template>
      <!-- <hr class="is-divider" /> -->
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
                  v-model="formState.sent_to"
                  :options="[
                    { value: 'recycling', label: 'на переработку' },
                    { value: 'sterility', label: 'на контроль стерильности' },
                  ]"
                  :placeholder="$t('Select')"
                  :style="{ minWidth: '15rem', margin: 0 }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #action>
      <button class="button is-info is-outlined" @click="isContainerFormModalOpen = true">
        {{ $t('Add_container') }}
      </button>
      <SubmitButton :loading="isLoading" @click="onSubmit" />
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
