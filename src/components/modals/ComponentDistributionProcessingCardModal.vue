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
const title = ref(t('Processing_card'))
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
  <VModal :open="isOpen" size="big" :title="title" actions="right" @close="onClose">
    <template #content>
      <div class="box">
        <table class="table is-fullwidth">
          <tbody>
            <tr>
              <td>
                <span class="">{{ $t('Donation_type') }}: </span>
                <span class="has-text-info">{{ product.donation_type }}</span>
              </td>
              <td>
                <span class="">{{ $t('Donation_code') }}: </span>
                <span class="has-text-info">{{ product.donation_code }}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span class="">{{ $t('Donation_date') }}: </span>
                <span class="has-text-info">{{ product.donation_date }}</span>
              </td>
              <td>
                <span class="">{{ $t('Visit_type') }}: </span>
                <span class="has-text-info">{{ product.visit_type }}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span class="">{{ $t('Quantity_ml') }}: </span>
                <span class="has-text-info">{{ product.quantity }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr class="is-divider" />
      <div class="box">
        <h5 class="is-size-5">{{ $t('Components_received') }}:</h5>
        <br />
        <table class="table is-fullwidth">
          <tbody>
            <tr>
              <td>
                <VField horizontal class="is-align-items-center">
                  <h5 class="mr-3">{{ $t('Plasma_FFP_ml') }}</h5>
                  <VControl subcontrol>
                    <VInput v-model="formState.plasma.value" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                <VField horizontal class="is-align-items-center">
                  <h5 class="mr-3">{{ $t('Dose') }} 1, ml</h5>
                  <VControl subcontrol>
                    <VInput v-model="formState.dose.first" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                <VField horizontal class="is-align-items-center">
                  <h5 class="mr-3">{{ $t('Dose') }} 2, ml</h5>
                  <VControl subcontrol>
                    <VInput v-model="formState.dose.second" />
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td class="is-flex is-align-items-center">
                <VField horizontal class="is-align-items-center my-0">
                  <h5 class="mr-3">{{ $t('Erythrocyte_mass_ml') }}</h5>
                  <VControl subcontrol>
                    <VInput v-model="formState.erythrocyte_mass.value" />
                  </VControl>
                </VField>
                <h6 class="ml-6">{{ $t('Expiry_date') }}</h6>
              </td>
            </tr>
            <tr>
              <td>
                <VField horizontal class="is-align-items-center">
                  <h5 class="mr-3">{{ $t('Hemacon_blood_type') }}</h5>
                  <VControl>
                    <VControl>
                      <Multiselect
                        v-model="formState.hemacon_blood_type"
                        :options="optionsHemaconBloodType"
                        :placeholder="$t('Select')"
                        label="name"
                        value-prop="id"
                        :style="{ minWidth: '15rem' }"
                      />
                    </VControl>
                  </VControl>
                </VField>
              </td>
            </tr>
            <tr>
              <td>
                <VField horizontal class="is-align-items-center">
                  <h5 class="mr-3">{{ $t('Suitability_decision') }}</h5>
                  <VControl>
                    <VControl>
                      <Multiselect
                        v-model="formState.suitability_decision"
                        :options="optionsSuitabilityDecision"
                        :placeholder="$t('Select')"
                        label="name"
                        value-prop="id"
                        :style="{ minWidth: '15rem' }"
                      />
                    </VControl>
                  </VControl>
                </VField>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr class="is-divider" />
      <h4 class="has-text-centered is-size-4">
        {{ $t('Laboratory_test_results') }}
      </h4>
      <br />
      <div class="columns">
        <div class="column">
          <div class="table-container">
            <table class="table is-bordered">
              <thead class="">
                <tr>
                  <th class="has-text-centered">{{ $t('Primary_screening_results') }}</th>
                  <th class="has-text-centered">
                    {{ $t('Hemotransmission_research_results') }}
                  </th>
                  <th class="has-text-centered">
                    {{ $t('clinical_biochemical_research_results') }}
                  </th>
                  <th class="has-text-centered">
                    {{ $t('Serological_research_results') }}
                  </th>
                  <th class="has-text-centered">
                    {{ $t('Immunological_research_results') }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p class="">
                      {{ $t('Researched_at') }}:
                      <strong>06.03.2013</strong>
                    </p>
                    <p class="">
                      {{ $t('Researched_by') }}:
                      <strong>Specialist</strong>
                    </p>
                    <p class="">
                      {{ $t('Preliminary_blood_type') }}:
                      <strong>B(III)</strong>
                    </p>
                    <p class="">
                      {{ $t('Hemoglobin_gl') }}:
                      <strong class="has-text-primary">142</strong>
                    </p>
                  </td>
                  <td>
                    <p class="">
                      {{ $t('Researched_at') }}:
                      <strong>06.03.2013</strong>
                    </p>
                    <p class="">
                      {{ $t('Researched_by') }}:
                      <strong>Specialist</strong>
                    </p>
                  </td>
                  <td>
                    <p class="">
                      {{ $t('Researched_at') }}:
                      <strong>06.03.2013</strong>
                    </p>
                    <p class="">
                      {{ $t('Researched_by') }}:
                      <strong>Specialist</strong>
                    </p>
                  </td>
                  <td>
                    <p class="">
                      {{ $t('Researched_at') }}:
                      <strong>06.03.2013</strong>
                    </p>
                    <p class="">
                      {{ $t('Researched_by') }}:
                      <strong>Specialist</strong>
                    </p>
                  </td>
                  <td>
                    <p class="">
                      {{ $t('Researched_at') }}:
                      <strong>06.03.2013</strong>
                    </p>
                    <p class="">
                      {{ $t('Researched_by') }}:
                      <strong>Specialist</strong>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
