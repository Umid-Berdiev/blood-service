<script setup lang="ts">
const patientAddressData = reactive({
  region: '',
  district: '',
  work_study_place: '',
  email: '',
})

const errors = reactive({
  region: '',
  district: '',
  work_study_place: '',
  email: '',
})
</script>
<template>
  <div class="fieldset">
    <VField :label="$t('Region')" required>
      <VControl>
        <Multiselect
          v-model="patientAddressData.region"
          :options="['Toshkent sh.', 'Samarqand vil.']"
          :placeholder="$t('Region')"
        />
      </VControl>
    </VField>
    <VField :label="$t('District')" required>
      <VControl>
        <VTextarea
          v-model="patientAddressData.district"
          rows="2"
          :placeholder="$t('District')"
        />
        <p class="help has-text-danger">{{ errors.district }}</p>
      </VControl>
    </VField>
    <VField :label="$t('Place_work_study')">
      <VControl>
        <VTextarea
          v-model="patientAddressData.work_study_place"
          rows="2"
          :placeholder="$t('Place_work_study')"
        />
        <p class="help has-text-danger">{{ errors.work_study_place }}</p>
      </VControl>
    </VField>
    <VField :label="$t('Email')">
      <VControl>
        <VInput
          v-model="patientAddressData.email"
          type="text"
          :placeholder="$t('Email')"
        />
        <p class="help has-text-danger">{{ errors.email }}</p>
      </VControl>
    </VField>
  </div>
</template>
