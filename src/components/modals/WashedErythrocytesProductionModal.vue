<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { fetchHealthcareFacilities } from '/@src/utils/api/additional'
import { ProductInterface } from '/@src/utils/interfaces'

const props = withDefaults(
  defineProps<{
    product: ProductInterface
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
const title = ref(t('Production_of_washed_erythrocytes'))
const formState = reactive({
  divided_into_doses: false,
  plasma: {
    value: '',
    sent_for_quality_control: false,
  },
  erythrocyte_mass: {
    value: '',
    sent_for_quality_control: false,
    sent_for_sterility_control: false,
  },
  dose: {
    first: '',
    second: '',
  },
})

const formErrors = reactive({
  plasma: [],
  erythrocyte_mass: [],
  sent_for_quality_control: [],
  divided_into_doses: [],
  sent_for_sterility_control: [],
})
const optionsHemaconBloodType = ref([])
const optionsSuitabilityDecision = ref([])
const healthcareFacilitiesList = ref([])

// hooks
onMounted(async () => {
  await fetchHealthcareFacilities().then(
    (res) => (healthcareFacilitiesList.value = res.result)
  )
})

// functions
async function submitForm() {
  try {
    isLoading.value = true

    // formData.laboratory_researches = flatten(
    //   laboratoryResearchFormFields.value.map((block) =>
    //     block.laboratory_researches.filter((field) => field.value).map((item) => item.id)
    //   )
    // )
    // // console.log({ formData })

    // await sendingToLaboratoryResearch(props.visitcard.id, formData)
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
</script>

<template>
  <VModal :open="isOpen" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <div class="box">
        <table class="table is-fullwidth">
          <tbody>
            <tr>
              <td>
                <span class="">{{ $t('Donation_code') }}: </span>
                <span class="has-text-info">{{ product.donation_code }}</span>
              </td>
              <td>
                <span class="">{{ $t('Donation_date') }}: </span>
                <span class="has-text-info">{{ product.donation_date }}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span class="">{{ $t('Received_erythrocyte_mass_ml') }}: </span>
                <span class="has-text-info">{{ product.quantity }}</span>
              </td>
              <td>
                <span class="">{{ $t('Quantity_ml') }}: </span>
                <span class="has-text-info">{{ product.quantity }}</span>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span class="">{{ $t('Blood_type') }}: </span>
                  <span class="has-text-info">{{ product.blood_type }}</span>
                </p>
                <p>
                  <span class="">{{ $t('Rh_factor') }}: </span>
                  <span class="has-text-info">{{ product.rh_factor }}</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr class="is-divider" />
      <div class="box">
        <table class="table">
          <tbody>
            <tr>
              <td>
                <h5>{{ $t('Laundering_date') }}</h5>
              </td>
              <td>
                <VField>
                  <VControl>
                    <VInput v-model="formState.laundering_date" />
                  </VControl>
                </VField>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
