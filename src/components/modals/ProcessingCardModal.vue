<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { fetchHealthcareFacilities } from '/@src/utils/api/additional'
import {
  fetchProcessingResultsByID,
  storeProcessingResults,
} from '/@src/utils/api/processing'
import { ProductInterface } from '/@src/utils/interfaces'

const props = withDefaults(
  defineProps<{
    product: ProductInterface | null
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
const title = ref(t('Processing_card'))
const dividedIntoDoses = ref(1)

const formState = ref({
  plasma: 0,
  sent_to_quality_control: false,
  erythrocyte: 0,
  erythrocyte_sent_to_quality_control: false,
  erythrocyte_sent_to_sterility_control: false,
  doses: [0],
})

const formErrors = reactive({
  plasma: [],
  sent_to_quality_control: [],
  erythrocyte: [],
  erythrocyte_sent_to_quality_control: [],
  erythrocyte_sent_to_sterility_control: [],
  doses: [],
})

const healthcareFacilitiesList = ref([])

// hooks
onMounted(async () => {
  await fetchHealthcareFacilities().then(
    (res) => (healthcareFacilitiesList.value = res.result)
  )
})

watch(
  () => props.product?.id,
  async (newVal) => {
    if (newVal) {
      // const res = await fetchProcessingResultsByID(newVal)
      // formState.value = res.result
      // formState.value.doses ??= [0]
    }
  }
)

watch(
  () => props.product?.amount,
  async (newVal) => {
    if (newVal) {
      formState.value.plasma = Math.ceil((newVal * 1) / 2)
      formState.value.erythrocyte = Math.floor((newVal * 1) / 2)
    }
    formState.value.doses[0] = formState.value.plasma
  }
)

watch(dividedIntoDoses, function (newVal) {
  const dosesLength = formState.value.doses.length
  if (dosesLength > newVal) {
    formState.value.doses.pop()
    formState.value.doses = formState.value.doses.map((dose, doseIndex) => {
      if (doseIndex === 0) {
        return formState.value.plasma
      } else return 0
    })
  }
  if (dosesLength < newVal) {
    let diff = newVal - dosesLength
    while (diff > 0) {
      // const usedDoses = formState.value.doses.reduce((acc, cur) => acc + cur, 0)
      formState.value.doses.push(0)
      diff--
    }
  }
})

// functions
async function submitForm() {
  try {
    isLoading.value = true

    await storeProcessingResults(props.product?.id as number, formState.value)
    notif.success(t('Data_saved_successfully'))
    onClose()
  } catch (error: any) {
    notif.error(error.message)
    Object.assign(formErrors, error.response?.data?.errors)
  } finally {
    isLoading.value = false
  }
}

function onClose() {
  emits('update:isOpen', false)
}

function onPlasmaChange(val: number) {
  formState.value.erythrocyte = props.product.amount - val
  // dividingIntoDoses()
}

function onErythrocyteChange(val: number) {
  formState.value.plasma = props.product.amount - val
}

function dividingIntoDoses() {
  const dosesLength = formState.value.doses.length
  formState.value.doses = formState.value.doses.map((dose, doseIndex) => {
    if (doseIndex === dosesLength - 1)
      return Math.ceil(formState.value.plasma / dosesLength)
    else return Math.floor(formState.value.plasma / dosesLength)
  })
}
</script>

<template>
  <VModal :open="isOpen" size="big" :title="title" actions="right" @close="onClose">
    <template #content>
      <template v-if="product">
        <div class="box">
          <table class="table is-fullwidth">
            <tbody>
              <tr>
                <td>
                  <span class="">{{ $t('Donation_type') }}: </span>
                  <span class="has-text-info">{{ product.donation_type?.name }}</span>
                </td>
                <td>
                  <span class="">{{ $t('Donation_code') }}: </span>
                  <span class="has-text-info">{{ product.donation_code }}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="">{{ $t('Donation_date') }}: </span>
                  <span class="has-text-info">{{ product.date }}</span>
                </td>
                <td>
                  <span class="">{{ $t('Visit_type') }}: </span>
                  <span class="has-text-info">{{ $t(product.visit_type) }}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="">{{ $t('Quantity_ml') }}: </span>
                  <span class="has-text-info">{{ product.amount }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr class="is-divider" />
        <div class="box">
          <template v-if="product.donation_type?.id === 3">
            <h5 class="is-size-5">{{ $t('Components_received') }}:</h5>
            <br />
            <table class="table is-fullwidth">
              <tbody>
                <tr>
                  <td class="">
                    <VField horizontal class="is-align-items-center">
                      <h5 class="mr-3">{{ $t('Plasma_FFP_ml') }}:</h5>
                      <VControl>
                        <VInput
                          v-model="formState.plasma"
                          type="number"
                          :min="1"
                          @input="onPlasmaChange($event.target.value)"
                        />
                      </VControl>
                    </VField>
                    <div class="mb-3">
                      <VField horizontal class="is-align-items-center">
                        <h5 class="mr-3">{{ $t('Divided_into_doses') }}:</h5>
                        <VControl>
                          <VInput
                            v-model="dividedIntoDoses"
                            type="number"
                            :min="1"
                            :max="4"
                            :style="{ width: '5rem' }"
                          />
                        </VControl>
                      </VField>
                    </div>
                    <template
                      v-for="(number, numIndex) in dividedIntoDoses"
                      :key="numIndex"
                    >
                      <VField horizontal class="is-align-items-center">
                        <h5 class="mr-3">{{ number }}-{{ $t('Dose') }}</h5>
                        <VControl raw subcontrol>
                          <VInput
                            v-model="formState.doses[numIndex]"
                            type="number"
                            :min="1"
                          />
                        </VControl>
                      </VField>
                    </template>
                    <VField>
                      <VControl raw subcontrol>
                        <VCheckbox
                          v-model="formState.sent_to_quality_control"
                          :label="$t('Sample_sent_for_quality_control')"
                        />
                      </VControl>
                    </VField>
                  </td>
                </tr>
                <tr>
                  <td>
                    <VField horizontal class="is-align-items-center">
                      <h5 class="mr-3">{{ $t('Erythrocyte_mass_ml') }}</h5>
                      <VControl>
                        <VInput
                          v-model="formState.erythrocyte"
                          type="number"
                          :min="1"
                          @input="onErythrocyteChange($event.target.value)"
                        />
                      </VControl>
                      <VControl raw subcontrol>
                        <VCheckbox
                          v-model="formState.erythrocyte_sent_to_quality_control"
                          :label="$t('Sample_sent_for_quality_control')"
                        />
                      </VControl>
                      <VControl raw subcontrol>
                        <VCheckbox
                          v-model="formState.erythrocyte_sent_to_sterility_control"
                          :label="$t('Sample_sent_for_sterility_control')"
                        />
                      </VControl>
                    </VField>
                  </td>
                </tr>
              </tbody>
            </table>
          </template>
          <template v-if="product.donation_type?.id === 2">
            <VField
              v-for="(dose, doseIndex) in dividedIntoDoses"
              :key="doseIndex"
              horizontal
              class="is-align-items-center"
            >
              <h5 class="mr-3">{{ $t('Dose') }} {{ dose }}, ml</h5>
              <VControl>
                <VInput v-model="formState.doses[doseIndex]" type="number" :min="1" />
              </VControl>
            </VField>
          </template>
        </div>
      </template>
    </template>
    <template #action>
      <SubmitButton type="button" :loading="isLoading" @click="submitForm" />
    </template>
  </VModal>
</template>

<style scoped lang="scss">
.is-dark {
  .box,
  .table {
    background-color: var(--dark-sidebar);
  }
}

.table {
  tbody {
    tr {
      td {
        vertical-align: top;
      }
    }
  }
}
</style>
