<script setup lang="ts">
import { PatientInterface } from '/@src/utils/interfaces'

const props = defineProps<{
  patient: PatientInterface
  errors: {
    pinfl: string[]
    passport_series: string[]
    passport_number: string[]
    issued_by: string[]
    when_issued: string[]
  }
}>()

const emits = defineEmits(['update:patient', 'editing'])

const formData = computed({
  get() {
    return props.patient
  },
  set(val) {
    emits('update:patient', val)
  },
})
const passportSeriesMaskOptions = ref({
  mask: 'aa',
  prepare: function (str: string) {
    return str.toUpperCase()
  },
})
</script>

<template>
  <div class="fieldset p-5">
    <VField :label="$t('Pinfl')" required>
      <VControl>
        <VIMaskInput
          v-model="formData.pinfl"
          class="input"
          :options="{
            mask: '00000000000000',
          }"
          :placeholder="$t('Enter_pinfl')"
          @input="$emit('editing', 'pinfl')"
        />
        <p class="help has-text-danger">{{ errors.pinfl[0] }}</p>
      </VControl>
    </VField>
    <VField :label="$t('Passport_series')" required>
      <VControl>
        <VIMaskInput
          v-model="formData.passport_series"
          class="input"
          :options="passportSeriesMaskOptions"
          :placeholder="$t('Enter_passport_series')"
          @input="$emit('editing', 'passport_series')"
        />
        <p class="help has-text-danger">{{ errors.passport_series[0] }}</p>
      </VControl>
    </VField>
    <VField :label="$t('Passport_number')" required>
      <VControl>
        <VIMaskInput
          v-model="formData.passport_number"
          class="input"
          :options="{
            mask: '0000000',
          }"
          :placeholder="$t('Enter_passport_number')"
          @input="$emit('editing', 'passport_number')"
        />
        <p class="help has-text-danger">{{ errors.passport_number[0] }}</p>
      </VControl>
    </VField>
    <VField :label="$t('Issued_by')">
      <VControl>
        <VInput
          v-model="formData.issued_by"
          type="text"
          :placeholder="$t('Issued_by')"
          @input="$emit('editing', 'issued_by')"
        />
        <p class="help has-text-danger">{{ errors.issued_by[0] }}</p>
      </VControl>
    </VField>
    <DatePicker
      v-model="formData.when_issued"
      :label="$t('When_issued')"
      :error-text="errors.when_issued[0]"
      @editing="$emit('editing', 'when_issued')"
    />
  </div>
</template>
