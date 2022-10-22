<script setup lang="ts">
const patientPassportData = reactive({
  passport_series: '',
  passport_number: '',
  issued_by: '',
  when_issued: '',
})

const errors = reactive({
  passport_series: '',
  passport_number: '',
  issued_by: '',
  when_issued: '',
})
</script>

<template>
  <div class="fieldset">
    <VField :label="$t('Series')" required>
      <VControl>
        <VInput
          v-model="patientPassportData.passport_series"
          type="text"
          :placeholder="$t('Series')"
        />
        <p class="help has-text-danger">{{ errors.passport_series }}</p>
      </VControl>
    </VField>
    <VField :label="$t('Number')" required>
      <VControl>
        <VInput
          v-model="patientPassportData.passport_number"
          type="text"
          :placeholder="$t('Number')"
        />
        <p class="help has-text-danger">{{ errors.passport_number }}</p>
      </VControl>
    </VField>
    <VField :label="$t('Issued_by')">
      <VControl>
        <VInput
          v-model="patientPassportData.issued_by"
          type="text"
          :placeholder="$t('Issued_by')"
        />
        <p class="help has-text-danger">{{ errors.issued_by }}</p>
      </VControl>
    </VField>
    <VDatePicker v-model="patientPassportData.when_issued" color="green" trim-weeks>
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
