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
const title = ref(t('Cryopreserved_erythrocyte_mass_production'))
const formState = reactive({
  dose: '',
  for_freezing: '',
  cassette_number: '',
  date: '',
})

const formErrors = reactive({
  dose: [],
  for_freezing: [],
  cassette_number: [],
  date: [],
})
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
                <span class="">{{ $t('Received_blood_ml') }}: </span>
                <span class="has-text-info">{{ product.quantity }}</span>
              </td>
              <td>
                <p class="has-text-light">
                  <span class="">{{ $t('Blood_type') }}: </span>
                  <span class="has-text-info">{{ product.blood_type }}</span>
                </p>
                <p class="has-text-light">
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
              <td class="">
                <h5>{{ $t('Divided_into_doses') }}</h5>
              </td>
              <td>
                <VField>
                  <VControl>
                    <VRadio v-model="formState.dose" color="info" label="2" :value="2" />
                    <VRadio v-model="formState.dose" color="info" label="4" :value="4" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td class="">
                <h5>{{ $t('Fencing_saline_used_for_freezing_ml') }}</h5>
              </td>
              <td>
                <VField>
                  <VControl>
                    <VInput v-model="formState.for_freezing" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td class="">
                <h5>{{ $t('Cassette_number') }}</h5>
              </td>
              <td>
                <VField>
                  <VControl>
                    <VInput v-model="formState.cassette_number" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td class="">
                <h5>{{ $t('Freeze_and_storage_date') }}</h5>
              </td>
              <td>
                <VField>
                  <VControl>
                    <VInput v-model="formState.date" />
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
        vertical-align: middle;
      }
    }
  }
}
</style>
