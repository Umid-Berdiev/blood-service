<script setup lang="ts">
import { DonationContainerInterface } from '/@src/utils/interfaces'
import { apheresisMethods } from '/@src/utils/api/donation'

// export interface PlateletpheresisFormProps {
//   apheresis_method: 'manual' | 'device'
//   first_container_id: number | null
//   second_container_id: number | null
//   third_container_id: number | null
//   fourth_container_id: number | null
//   first_hemoconservative: number | null
//   second_hemoconservative: number | null
//   third_hemoconservative: number | null
//   fourth_hemoconservative: number | null
//   thromboconcentrate1: number | null
//   thromboconcentrate2: number | null
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
</script>

<template>
  <div class="box">
    <h5 class="is-size-5 mb-3">{{ $t('Plateletpheresis') }}</h5>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">{{ $t('Apheresis_method') }}</label>
      </div>
      <div class="field-body">
        <VField>
          <VControl expanded>
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
            <!-- <span class="has-text-danger">*</span> -->
          </label>
        </div>
        <div class="field-body">
          <VField>
            <VInput v-model="computedFormState.second_hemoconservative" type="text" />
          </VField>
        </div>
      </div>
      <hr class="is-divider" />
      <h5 class="mb-3">{{ $t('Third_fence') }}</h5>
      <div class="field is-horizontal">
        <div class="field-label is-flex is-align-items-center">
          <label class="label">{{ $t('Container') }}</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control is-expended">
              <Multiselect
                v-model="computedFormState.third_container_id"
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
            <!-- <span class="has-text-danger">*</span> -->
          </label>
        </div>
        <div class="field-body">
          <VField>
            <VInput v-model="computedFormState.third_hemoconservative" type="text" />
          </VField>
        </div>
      </div>
      <hr class="is-divider" />
      <h5 class="mb-3">{{ $t('Fourth_fence') }}</h5>
      <div class="field is-horizontal">
        <div class="field-label is-flex is-align-items-center">
          <label class="label">{{ $t('Container') }}</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control is-expended">
              <Multiselect
                v-model="computedFormState.fourth_container_id"
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
            <!-- <span class="has-text-danger">*</span> -->
          </label>
        </div>
        <div class="field-body">
          <VField>
            <VInput v-model="computedFormState.fourth_hemoconservative" type="text" />
          </VField>
        </div>
      </div>
    </template>
    <template v-if="computedFormState.apheresis_method === 'device'">
      <hr class="is-divider" />
      <h5>{{ $t('Received_platelet_concentrate_amount_ml') }}</h5>
      <br />
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">{{ $t('First_fence') }}</label>
        </div>
        <div class="field-body">
          <VField>
            <VInput
              v-model="computedFormState.thromboconcentrate1"
              type="text"
              style="width: 50%"
            />
          </VField>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">{{ $t('Second_fence') }}</label>
        </div>
        <div class="field-body">
          <VField>
            <VInput
              v-model="computedFormState.thromboconcentrate2"
              type="text"
              style="width: 50%"
            />
          </VField>
        </div>
      </div>
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
