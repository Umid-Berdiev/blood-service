<script setup lang="ts">
import { DonationContainerInterface } from '/@src/utils/interfaces'
import { apheresisMethods } from '/@src/utils/api/donation'

// export interface PlasmapheresisFormProps {
//   apheresis_method: 'manual' | 'device'
//   first_container_id: number | null
//   second_container_id: number | null
//   first_hemoconservative: number | null
//   second_hemoconservative: number | null
//   plasma: number | null
//   laboratory: number | null
// }

const props = defineProps<{
  formState: any
  containerList: DonationContainerInterface[]
}>()
const emits = defineEmits<{
  (e: 'update:formState', value: any): void
}>()

const computedFormState = computed({
  get() {
    return props.formState
  },
  set(val) {
    emits('update:formState', val)
  },
})
const dividedIntoDoses = ref(1)

// hooks
watch(dividedIntoDoses, function (newVal) {
  if (computedFormState.value.doses.length > newVal) {
    computedFormState.value.doses.pop()
  }
  if (computedFormState.value.doses.length < newVal) computedFormState.value.doses.push(0)
})
</script>

<template>
  <div class="box">
    <h5 class="is-size-5 mb-3">{{ $t('Plasmapheresis') }}</h5>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">{{ $t('Apheresis_method') }}</label>
      </div>
      <div class="field-body">
        <VField>
          <VControl expended>
            <VSelect
              v-model="computedFormState.apheresis_method"
              class="is-primary"
              :placeholder="$t('Select')"
            >
              <VOption
                v-for="(opt, optIndex) in apheresisMethods"
                :key="optIndex"
                :value="opt.value"
              >
                {{ opt.label }}
              </VOption>
            </VSelect>
          </VControl>
        </VField>
      </div>
    </div>
    <template v-if="computedFormState.apheresis_method === 'manual'">
      <hr class="is-divider" />
      <h5 class="mb-3">{{ $t('First_fence') }}</h5>
      <div class="field is-horizontal">
        <div class="field-label is-flex is-align-items-center">
          <label class="label">{{ $t('Container') }}</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control is-expended">
              <Multiselect
                v-model="computedFormState.first_container_id"
                :options="containerList"
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
            <span class="has-text-danger">*</span>
          </label>
        </div>
        <div class="field-body">
          <VField>
            <VInput v-model="computedFormState.first_hemoconservative" type="text" />
          </VField>
        </div>
      </div>
      <hr class="is-divider" />
      <h5 class="mb-3">{{ $t('Second_fence') }}</h5>
      <div class="field is-horizontal">
        <div class="field-label is-flex is-align-items-center">
          <label class="label">{{ $t('Container') }}</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control is-expended">
              <Multiselect
                v-model="computedFormState.second_container_id"
                :options="containerList"
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
            <span class="has-text-danger">*</span>
          </label>
        </div>
        <div class="field-body">
          <VField>
            <VInput v-model="computedFormState.second_hemoconservative" type="text" />
          </VField>
        </div>
      </div>
    </template>
    <template v-else-if="computedFormState.apheresis_method === 'device'">
      <!-- <hr class="is-divider" /> -->
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">{{ $t('Received_plasma_amount_ml') }}</label>
        </div>
        <div class="field-body">
          <VField>
            <VInput v-model="computedFormState.plasma" type="text" />
          </VField>
        </div>
      </div>
      <VField horizontal class="is-align-items-center">
        <VLabel class="mr-3">{{ $t('Divided_into_doses') }}</VLabel>
        <VControl>
          <VInput
            v-model="dividedIntoDoses"
            type="number"
            :min="1"
            :max="10"
            :style="{ width: '5rem' }"
          />
        </VControl>
      </VField>
      <template v-for="(number, numIndex) in dividedIntoDoses" :key="numIndex">
        <VField horizontal class="is-align-items-center">
          <VLabel class="mr-3">{{ number }}-{{ $t('Dose') }}</VLabel>
          <VControl raw subcontrol>
            <VInput v-model="computedFormState.doses[numIndex]" type="number" />
          </VControl>
        </VField>
      </template>
      <!-- <div class="field is-horizontal">
        <div class="field-label">
          <label class="label">
            {{ $t('Laboratory_taken_blood_amount_ml') }}
          </label>
        </div>
        <div class="field-body">
          <VField>
            <VInput v-model="computedFormState.laboratory" type="text" />
          </VField>
        </div>
      </div> -->
    </template>
  </div>
</template>

<style scoped lang="scss">
.field.is-horizontal {
  // align-items: center !important;
  // max-width: 50%;

  .field-label {
    flex-basis: unset;
    flex-grow: unset;
  }
}
</style>
