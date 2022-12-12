<script setup lang="ts">
import { ContainerFormInterface } from '../../modals/DonationContainerFormModal.vue'

export interface PlateletpheresisFormProps {
  apheresis_method_id?: number
  first_fence_container_id?: number
  second_fence_container_id?: number
  third_fence_container_id?: number
  fourth_fence_container_id?: number
  hemoconservative_taken_blood_amount_first?: number
  hemoconservative_taken_blood_amount_second?: number
  hemoconservative_taken_blood_amount_third?: number
  hemoconservative_taken_blood_amount_fourth?: number
  received_platelet_concentrate_amount?: number
}

const props = defineProps<{
  formState: PlateletpheresisFormProps
  containerList: ContainerFormInterface[]
}>()
const emits = defineEmits<{
  (e: 'update:formState', value: PlateletpheresisFormProps): void
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
        <div class="field">
          <div class="control is-expended">
            <Multiselect
              v-model="computedFormState.apheresis_method_id"
              :options="[
                { id: 1, name: 'Ручной' },
                { id: 2, name: 'Аппаратный' },
              ]"
              :placeholder="$t('Select')"
              label="name"
              value-prop="id"
              :style="{ minWidth: '15rem', margin: 0 }"
            />
          </div>
        </div>
      </div>
    </div>
    <template v-if="formState.apheresis_method_id === 1">
      <hr class="is-divider" />
      <h5>{{ $t('First_fence') }}</h5>
      <div class="field is-horizontal">
        <div class="field-label is-flex">
          <label class="label">{{ $t('Container') }}</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control is-expended">
              <Multiselect
                v-model="computedFormState.first_fence_container_id"
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
            <span class="is-text-danger">*</span>
          </label>
        </div>
        <div class="field-body">
          <VField>
            <VInput
              v-model="computedFormState.hemoconservative_taken_blood_amount_first"
              type="text"
            />
          </VField>
        </div>
      </div>
      <hr class="is-divider" />
      <h5>{{ $t('Second_fence') }}</h5>
      <div class="field is-horizontal">
        <div class="field-label is-flex">
          <label class="label">{{ $t('Container') }}</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control is-expended">
              <Multiselect
                v-model="computedFormState.second_fence_container_id"
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
            <span class="is-text-danger">*</span>
          </label>
        </div>
        <div class="field-body">
          <VField>
            <VInput
              v-model="computedFormState.hemoconservative_taken_blood_amount_second"
              type="text"
            />
          </VField>
        </div>
      </div>
      <hr class="is-divider" />
      <h5>{{ $t('Third_fence') }}</h5>
      <div class="field is-horizontal">
        <div class="field-label is-flex">
          <label class="label">{{ $t('Container') }}</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control is-expended">
              <Multiselect
                v-model="computedFormState.third_fence_container_id"
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
            <span class="is-text-danger">*</span>
          </label>
        </div>
        <div class="field-body">
          <VField>
            <VInput
              v-model="computedFormState.hemoconservative_taken_blood_amount_third"
              type="text"
            />
          </VField>
        </div>
      </div>
      <hr class="is-divider" />
      <h5>{{ $t('Fourth_fence') }}</h5>
      <div class="field is-horizontal">
        <div class="field-label is-flex">
          <label class="label">{{ $t('Container') }}</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control is-expended">
              <Multiselect
                v-model="computedFormState.fourth_fence_container_id"
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
            <span class="is-text-danger">*</span>
          </label>
        </div>
        <div class="field-body">
          <VField>
            <VInput
              v-model="computedFormState.hemoconservative_taken_blood_amount_fourth"
              type="text"
            />
          </VField>
        </div>
      </div>
    </template>
    <template v-else-if="formState.apheresis_method_id === 2">
      <hr class="is-divider" />
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">{{ $t('Received_platelet_concentrate_amount_ml') }}</label>
        </div>
        <div class="field-body">
          <VField>
            <VInput
              v-model="computedFormState.received_platelet_concentrate_amount"
              type="text"
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
