<script setup lang="ts">
import { flatten } from 'lodash'
import { useI18n } from 'vue-i18n'
import VFlexItem from '../base/flex/VFlexItem.vue'
import { useNotyf } from '/@src/composable/useNotyf'
import { fetchDonationTypes, fetchImmunizations } from '/@src/utils/api/additional'
import {
  sendingToLaboratoryResearch,
  fetchLaboratoryResearchFields,
} from '/@src/utils/api/patient'
import { PatientVisitCardInterface } from '/@src/utils/interfaces'

interface LaboratoryResearchField {
  id?: number
  name: string
  value: boolean
}

interface LaboratoryResearchForm {
  id?: number
  name: string
  laboratory_researches: LaboratoryResearchField[]
}

const props = withDefaults(
  defineProps<{
    visitcard: PatientVisitCardInterface
    isOpen: boolean
  }>(),
  {
    isOpen: false,
  }
)

const emits = defineEmits<{
  (e: 'update:isOpen', value: boolean): void
  (e: 'update:status'): void
}>()

const notif = useNotyf()
const { t } = useI18n()
const isLoading = ref(false)
const title = ref(t('Direction_for_laboratory_research'))
const immunizationOptions = ref([])
const donationTypes = ref([])

const laboratoryResearchFormFields = ref<LaboratoryResearchForm[]>([])

const formData: {
  donation_code: number | null
  donation_type_id: number | null
  immunization_id: number | null
  laboratory_researches: number[]
} = reactive({
  donation_code: null,
  donation_type_id: null,
  immunization_id: null,
  laboratory_researches: [],
})

const errors = reactive({
  donation_type_id: [],
  immunization_id: [],
  donation_code: [],
})

// hooks
onMounted(async () => {
  formData.donation_code = props.visitcard.donation_code
  formData.donation_type_id = props.visitcard.donation_type_id
  formData.immunization_id = props.visitcard.immunization_id
  donationTypes.value = await fetchDonationTypes().then((res) => res.result)
  immunizationOptions.value = await fetchImmunizations().then((res) => res.result)
})

watch(
  () => formData.donation_type_id,
  async (newVal) => {
    if (newVal === 1) await getLaboratoryResearchFields()
  }
)

// functions
async function submitForm() {
  try {
    isLoading.value = true
    clearErrors()

    formData.laboratory_researches = flatten(
      laboratoryResearchFormFields.value.map((block) =>
        block.laboratory_researches.filter((field) => field.value).map((item) => item.id)
      )
    )
    // console.log({ formData })

    await sendingToLaboratoryResearch(props.visitcard.id, formData)
    notif.success(t('Data_saved_successfully'))
    onClose()
  } catch (error: any) {
    notif.error(error.message)
    Object.assign(errors, error.response?.data?.errors)
  } finally {
    isLoading.value = false
  }
}

async function getLaboratoryResearchFields() {
  laboratoryResearchFormFields.value = await fetchLaboratoryResearchFields(
    props.visitcard.id
  ).then((res) => res.result)
}

function onClose() {
  emits('update:isOpen', false)
}

function clearErrors() {
  Object.assign(errors, {
    donation_type_id: [],
    immunization_id: [],
    donation_code: [],
  })
}
</script>

<template>
  <VModal :open="isOpen" size="extra-big" :title="title" actions="right" @close="onClose">
    <template #content>
      <VFlex flex-wrap="wrap" column-gap="5rem">
        <VFlexItem>
          <VField horizontal>
            <VLabel class="my-auto mr-5">{{ $t('Donation_types_list') }}</VLabel>
            <VControl>
              <Multiselect
                v-model="formData.donation_type_id"
                style="min-width: 15rem"
                :options="donationTypes"
                :placeholder="$t('Select_donation_type')"
                label="name"
                value-prop="id"
              />
            </VControl>
            <p class="help has-text-danger">{{ errors.donation_type_id[0] }}</p>
          </VField>
        </VFlexItem>
        <VFlexItem>
          <VField horizontal>
            <VLabel class="my-auto mr-5">{{ $t('Immunization') }}</VLabel>
            <VControl>
              <Multiselect
                v-model="formData.immunization_id"
                style="min-width: 15rem"
                :options="immunizationOptions"
                :placeholder="$t('Not_required')"
                label="name"
                value-prop="id"
              />
              <p class="help has-text-danger">{{ errors.immunization_id[0] }}</p>
            </VControl>
          </VField>
        </VFlexItem>
        <VFlexItem v-show="formData.donation_type_id !== 3">
          <VField horizontal>
            <VLabel class="my-auto mr-5">{{ $t('Donation_code') }}</VLabel>
            <VControl>
              <VInput v-model="formData.donation_code" />
              <p class="help has-text-danger">{{ errors.donation_code[0] }}</p>
            </VControl>
          </VField>
        </VFlexItem>
      </VFlex>
      <br />
      <div
        v-if="formData.donation_type_id !== 3 && laboratoryResearchFormFields.length"
        class="table-container"
      >
        <table class="table is-bordered is-fullwidth">
          <thead>
            <tr>
              <th :colspan="4" class="has-text-centered">
                {{ $t('Laboratory_research_types') }}
              </th>
            </tr>
            <tr>
              <th v-for="block in laboratoryResearchFormFields" :key="block.id">
                {{ block.name }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <VField
                  v-for="field in laboratoryResearchFormFields[0].laboratory_researches"
                  :key="field.id"
                >
                  <VControl>
                    <VCheckbox
                      v-model="field.value"
                      class="p-0"
                      color="primary"
                      :label="field.name"
                    />
                  </VControl>
                </VField>
              </td>
              <td>
                <VField
                  v-for="field in laboratoryResearchFormFields[1].laboratory_researches"
                  :key="field.id"
                >
                  <VControl>
                    <VCheckbox
                      v-model="field.value"
                      class="p-0"
                      color="primary"
                      :label="field.name"
                    />
                  </VControl>
                </VField>
              </td>
              <td>
                <VField
                  v-for="field in laboratoryResearchFormFields[2].laboratory_researches"
                  :key="field.id"
                >
                  <VControl>
                    <VCheckbox
                      v-model="field.value"
                      class="p-0"
                      color="primary"
                      :label="field.name"
                    />
                  </VControl>
                </VField>
              </td>
              <td>
                <VField
                  v-for="field in laboratoryResearchFormFields[3].laboratory_researches"
                  :key="field.id"
                >
                  <VControl>
                    <VCheckbox
                      v-model="field.value"
                      class="p-0"
                      color="primary"
                      :label="field.name"
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
      <SubmitButton type="button" :loading="isLoading" @click="submitForm">
        {{ $t('Submit_for_research') }}
      </SubmitButton>
    </template>
  </VModal>
</template>

<style scoped lang="scss">
.table {
  td {
    vertical-align: baseline;
  }
}

.is-dark {
  .table {
    thead {
      background-color: var(--dark-sidebar-dark-2);
    }
  }
}
</style>
