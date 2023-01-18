<script setup lang="ts">
import { DonationContainerInterface } from '/@src/utils/interfaces'

export interface WholeBloodDonationFormProps {
  container_id: number | null
  hemoconservative: number | null
  laboratory: number | null
}

const props = defineProps<{
  formState: WholeBloodDonationFormProps
  containerList: DonationContainerInterface[]
}>()
const emits = defineEmits<{
  (e: 'update:formState', value: WholeBloodDonationFormProps): void
}>()

const computedFormState = computed({
  get() {
    return props.formState
  },
  set(val) {
    emits('update:formState', val)
  },
})
</script>

<template>
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
              v-model="computedFormState.container_id"
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
          <VInput v-model="computedFormState.hemoconservative" type="text" />
        </VField>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label">
        <label class="label">
          {{ $t('Laboratory_taken_blood_amount_ml') }}
          <span class="has-text-danger">*</span>
        </label>
      </div>
      <div class="field-body">
        <VField>
          <VInput v-model="computedFormState.laboratory" type="text" />
        </VField>
      </div>
    </div>
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
