<script setup lang="ts">
import { PatientInterface } from '/@src/utils/interfaces'

const props = defineProps<{
  patient: PatientInterface
  errors: {
    passport_series: string
    passport_number: string
    issued_by: string
    when_issued: string
  }
}>()
const emits = defineEmits(['update:patient'])
const patientPersonalInfoForm = computed({
  get: () => props.patient,
  set: () => {
    emits('update:patient')
  },
})
</script>

<template>
  <div class="fieldset p-5">
    <VField :label="$t('Series')" required>
      <VControl>
        <VInput
          v-model="patientPersonalInfoForm.passport_series"
          type="text"
          :placeholder="$t('Series')"
        />
        <p class="help has-text-danger">{{ errors.passport_series }}</p>
      </VControl>
    </VField>
    <VField :label="$t('Number')" required>
      <VControl>
        <VInput
          v-model="patientPersonalInfoForm.passport_number"
          type="text"
          :placeholder="$t('Number')"
        />
        <p class="help has-text-danger">{{ errors.passport_number }}</p>
      </VControl>
    </VField>
    <VField :label="$t('Issued_by')">
      <VControl>
        <VInput
          v-model="patientPersonalInfoForm.issued_by"
          type="text"
          :placeholder="$t('Issued_by')"
        />
        <p class="help has-text-danger">{{ errors.issued_by }}</p>
      </VControl>
    </VField>
    <VDatePicker v-model="patientPersonalInfoForm.when_issued" color="green" trim-weeks>
      <template #default="{ inputValue, inputEvents }">
        <VField :label="$t('When_issued')">
          <VControl icon="feather:calendar">
            <VInput :value="inputValue" v-on="inputEvents" />
            <p class="help has-text-danger">{{ errors.when_issued }}</p>
          </VControl>
        </VField>
      </template>
    </VDatePicker>
  </div>
</template>
