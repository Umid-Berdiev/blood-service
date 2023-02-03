<script setup lang="ts">
import { formatDate } from '@vueuse/core'
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import {
  storeHemotransmissionResearchResults,
  fetchRequestsForHemotransmissiveLaboratory,
} from '/@src/utils/api/laboratories'
import { PatientInterface } from '/@src/utils/interfaces'

interface FormProps {
  isOpen: boolean
  patient: PatientInterface | null
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
const title = ref(t('Hemotransmission_research_results'))
const isLoading = ref(false)
const errors = reactive({
  date_analysis: [],
})
const today = formatDate(new Date(), 'YYYY-MM-DD')
const medicalExamination = reactive({
  data: {
    date_analysis: today,
    hbsag: false,
    hbsag_test_system: '',
    hiv: false,
    hiv_test_system: '',
    antihcv: false,
    antihcv_test_system: '',
    rw: false,
    rw_test_system: '',
    hemolysis: false,
    chilez: false,
  },
  required_fields: [] as string[],
})
const hasHemolisOrHiles = ref(false)

// hooks
watch(
  () => props.patient?.last_visit?.id,
  async (newVal) => {
    if (newVal) {
      const res = await fetchRequestsForHemotransmissiveLaboratory(newVal)
      Object.assign(medicalExamination, res.result)
      medicalExamination.data.date_analysis ||= today
    }
  }
)

watch(
  [() => medicalExamination.data.hemolysis, () => medicalExamination.data.chilez],
  async (newVal) => {
    if (newVal.includes(true)) {
      medicalExamination.data.hbsag = false
      medicalExamination.data.hiv = false
      medicalExamination.data.antihcv = false
      medicalExamination.data.rw = false

      hasHemolisOrHiles.value = true
    } else hasHemolisOrHiles.value = false
  }
)

// functions
async function onSubmit() {
  try {
    isLoading.value = true
    await storeHemotransmissionResearchResults(
      props.patient?.last_visit?.id as number,
      medicalExamination.data
    )
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
  medicalExamination.data = {
    date_analysis: today,
    hbsag: false,
    hbsag_test_system: '',
    hiv: false,
    hiv_test_system: '',
    antihcv: false,
    antihcv_test_system: '',
    rw: false,
    rw_test_system: '',
    hemolysis: false,
    chilez: false,
  }
}

function clearErrors() {
  Object.assign(errors, {
    date_analysis: [],
  })
}

// function clearError(error: string) {
//   errors[error] = ''
// }
</script>

<template>
  <VModal
    ref="hemotransmissionLaboratoryForm"
    :open="isOpen"
    size="big"
    :title="title"
    actions="right"
    @close="onClose"
  >
    <template #content>
      <div class="columns">
        <div class="column">
          <h5 class="is-size-5 has-text-weight-medium">
            {{ $t('Donation_code') }}: {{ patient?.last_visit?.donation_code }}
          </h5>
        </div>
      </div>
      <div class="box">
        <VFlex flex-wrap="wrap" row-gap="2rem" justify-content="space-between">
          <VFlexItem flex-basis="45%">
            <span>{{ $t('Blood_sampling_date') }}: </span>
            <span>{{ patient?.last_visit?.blood_sample?.date }}</span>
          </VFlexItem>
          <VFlexItem flex-basis="45%">
            <span>{{ $t('Blood_samples_taken_date') }}: </span>
            <span>{{ patient?.last_visit?.blood_sample?.hemotransmissible_date }}</span>
          </VFlexItem>
          <VFlexItem flex-basis="45%">
            <span class="mr-3 is-size-6">{{ $t('Analysis_date') }}: </span>
            <DatePicker v-model="medicalExamination.data.date_analysis" />
          </VFlexItem>
          <VFlexItem flex-basis="45%" class="is-flex is-align-items-center">
            <h5>
              <span class="has-text-weight-bold">{{ $t('Visit_stage') }}</span>
              <span>{{ patient?.last_visit?.stage }}</span>
            </h5>
          </VFlexItem>
        </VFlex>
      </div>
      <br />
      <div class="table-container">
        <table class="table box is-fullwidth">
          <tbody>
            <tr>
              <td>
                <!-- <VField>
                  <VControl>
                    <VCheckbox
                      v-model="medicalExamination.data.hbsag"
                      :class="[
                        medicalExamination.required_fields.includes('hbsag') &&
                          'has-text-danger',
                        'p-2',
                      ]"
                      :color="
                        medicalExamination.required_fields.includes('hbsag')
                          ? 'danger'
                          : 'primary'
                      "
                      :label="$t('HBsAg')"
                    />
                  </VControl>
                </VField> -->
                <label for="hbsag">
                  <input
                    id="hbsag"
                    v-model="medicalExamination.data.hbsag"
                    class="checkbox"
                    type="checkbox"
                    :disabled="hasHemolisOrHiles"
                  />
                  <span class="ml-2">{{ $t('HBsAg') }}</span>
                  <span
                    v-if="medicalExamination.required_fields.includes('hbsag')"
                    class="has-text-danger ml-2"
                    >*</span
                  >
                </label>
              </td>
              <td>
                <VField horizontal class="is-justify-content-end">
                  <VLabel class="is-size-6 my-auto mr-3"
                    >{{ $t('Testing_system') }} ({{ $t('HBsAg') }})</VLabel
                  >
                  <VControl>
                    <VInput v-model="medicalExamination.data.hbsag_test_system" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                <!-- <VField>
                  <VControl>
                    <VCheckbox
                      v-model="medicalExamination.data.hiv"
                      :class="[
                        medicalExamination.required_fields.includes('hiv') &&
                          'has-text-danger',
                        'p-2',
                      ]"
                      :color="
                        medicalExamination.required_fields.includes('hiv')
                          ? 'danger'
                          : 'primary'
                      "
                      :label="$t('OIDS')"
                    />
                  </VControl>
                </VField> -->
                <label for="hiv">
                  <input
                    id="hiv"
                    v-model="medicalExamination.data.hiv"
                    class="checkbox"
                    type="checkbox"
                    :disabled="hasHemolisOrHiles"
                  />
                  <span class="ml-2">{{ $t('OIDS') }}</span>
                  <span
                    v-if="medicalExamination.required_fields.includes('hiv')"
                    class="has-text-danger ml-2"
                    >*</span
                  >
                </label>
              </td>
              <td>
                <VField horizontal class="is-justify-content-end">
                  <VLabel class="is-size-6 my-auto mr-3"
                    >{{ $t('Testing_system') }} ({{ $t('OIDS') }})</VLabel
                  >
                  <VControl>
                    <VInput v-model="medicalExamination.data.hiv_test_system" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                <!-- <VField>
                  <VControl>
                    <VCheckbox
                      v-model="medicalExamination.data.antihcv"
                      :class="[
                        medicalExamination.required_fields.includes('antihcv') &&
                          'has-text-danger',
                        'p-2',
                      ]"
                      :color="
                        medicalExamination.required_fields.includes('antihcv')
                          ? 'danger'
                          : 'primary'
                      "
                      :label="$t('AntiHCV')"
                    />
                  </VControl>
                </VField> -->
                <label for="antihcv">
                  <input
                    id="antihcv"
                    v-model="medicalExamination.data.antihcv"
                    class="checkbox"
                    type="checkbox"
                    :disabled="hasHemolisOrHiles"
                  />
                  <span class="ml-2">{{ $t('AntiHCV') }}</span>
                  <span
                    v-if="medicalExamination.required_fields.includes('antihcv')"
                    class="has-text-danger ml-2"
                    >*</span
                  >
                </label>
              </td>
              <td>
                <VField horizontal class="is-justify-content-end">
                  <VLabel class="is-size-6 my-auto mr-3"
                    >{{ $t('Testing_system') }} ({{ $t('AntiHCV') }})</VLabel
                  >
                  <VControl>
                    <VInput v-model="medicalExamination.data.antihcv_test_system" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                <!-- <VField>
                  <VControl>
                    <VCheckbox
                      v-model="medicalExamination.data.rw"
                      :class="[
                        medicalExamination.required_fields.includes('rw') &&
                          'has-text-danger',
                        'p-2',
                      ]"
                      :color="
                        medicalExamination.required_fields.includes('rw')
                          ? 'danger'
                          : 'primary'
                      "
                      :label="$t('RW')"
                    />
                  </VControl>
                </VField> -->
                <label for="rw">
                  <input
                    id="rw"
                    v-model="medicalExamination.data.rw"
                    class="checkbox"
                    type="checkbox"
                    :disabled="hasHemolisOrHiles"
                  />
                  <span class="ml-2">{{ $t('RW') }}</span>
                  <span
                    v-if="medicalExamination.required_fields.includes('rw')"
                    class="has-text-danger ml-2"
                    >*</span
                  >
                </label>
              </td>
              <td>
                <VField horizontal class="is-justify-content-end">
                  <VLabel class="is-size-6 my-auto mr-3"
                    >{{ $t('Testing_system') }} ({{ $t('RW') }})</VLabel
                  >
                  <VControl>
                    <VInput v-model="medicalExamination.data.rw_test_system" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                <!-- <VField>
                  <VControl>
                    <VCheckbox
                      v-model="medicalExamination.data.hemolysis"
                      :class="[
                        medicalExamination.required_fields.includes('hemolysis') &&
                          'has-text-danger',
                        'p-2',
                      ]"
                      :color="
                        medicalExamination.required_fields.includes('hemolysis')
                          ? 'danger'
                          : 'primary'
                      "
                      :label="$t('Hemolis')"
                    />
                  </VControl>
                </VField> -->
                <label for="hemolysis">
                  <input
                    id="hemolysis"
                    v-model="medicalExamination.data.hemolysis"
                    class="checkbox"
                    type="checkbox"
                  />
                  <span class="ml-2">{{ $t('Hemolis') }}</span>
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <!-- <VField>
                  <VControl>
                    <VCheckbox
                      v-model="medicalExamination.data.chilez"
                      :class="[
                        medicalExamination.required_fields.includes('chilez') &&
                          'has-text-danger',
                        'p-2',
                      ]"
                      :color="
                        medicalExamination.required_fields.includes('chilez')
                          ? 'danger'
                          : 'primary'
                      "
                      :label="$t('Hiles')"
                    />
                  </VControl>
                </VField> -->
                <label for="chilez">
                  <input
                    id="chilez"
                    v-model="medicalExamination.data.chilez"
                    class="checkbox"
                    type="checkbox"
                  />
                  <span class="ml-2">{{ $t('Hiles') }}</span>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
        <p class="has-text-danger">
          Красным цветом указаны показатели, заданные врачом-терапевтом, как обязательные
          для определения
        </p>
      </div>
    </template>
    <template #action>
      <SubmitButton :loading="isLoading" @click="onSubmit" />
    </template>
  </VModal>
</template>

<style scoped lang="scss">
.is-dark {
  .box {
    background-color: var(--dark-sidebar);
  }
}
input.checkbox {
  &:disabled {
    cursor: not-allowed;
  }
}
</style>
