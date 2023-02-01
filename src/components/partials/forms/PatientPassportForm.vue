<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { PatientInterface } from '/@src/utils/interfaces'

const props = withDefaults(
  defineProps<{
    patient: PatientInterface
    errors: {
      pinfl: string[]
      passport_series: string[]
      passport_number: string[]
      issued_by: string[]
      when_issued: string[]
    }
  }>(),
  {
    patient: {
      pinfl: '',
    },
  }
)
const emits = defineEmits(['update:patient', 'editing'])
const { locale } = useI18n()
const masks = ref({
  input: 'DD.MM.YYYY',
})
const datePickerModelConfig = reactive({
  type: 'string',
  mask: 'YYYY-MM-DD', // Uses 'iso' if missing
})
const formData = computed({
  get() {
    return props.patient
  },
  set(val) {
    emits('update:patient', val)
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
          :options="{
            mask: 'aa',
            prepare: function (str) {
              return str.toUpperCase()
            },
          }"
          @input="$emit('editing', 'passport_series')"
          :placeholder="$t('Enter_passport_series')"
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
    <ClientOnly>
      <VDatePicker
        v-model="formData.when_issued"
        :locale="locale"
        mode="date"
        :masks="masks"
        :model-config="datePickerModelConfig"
        color="green"
        trim-weeks
        :popover="{ visibility: 'click' }"
      >
        <template #default="{ inputValue, inputEvents }">
          <VField :label="$t('When_issued')">
            <VControl icon="feather:calendar">
              <VInput
                :value="inputValue"
                v-on="inputEvents"
                @change="$emit('editing', 'when_issued')"
              />
              <p class="help has-text-danger">{{ errors.when_issued[0] }}</p>
            </VControl>
          </VField>
        </template>
      </VDatePicker>
    </ClientOnly>
  </div>
</template>
