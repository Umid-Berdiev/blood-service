<script setup lang="ts">
import { PatientInterface } from '/@src/utils/interfaces'

const props = defineProps<{
  patient: PatientInterface
  errors: {
    district: string
    work_study_place: string
    email: string
  }
}>()
const patientAddressData = reactive({
  region: '',
  district: '',
  work_study_place: '',
  email: '',
  phone_number: '',
  phone_home: '',
  phone_work: '',
})
</script>
<template>
  <div class="fieldset p-5">
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
        <Multiselect
          v-model="patientAddressData.district"
          :options="['Toshkent sh.', 'Samarqand vil.']"
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
    <VField :label="$t('Phone_mobile')">
      <VControl>
        <VIMaskInput
          v-model="patientAddressData.phone_number"
          class="input"
          :options="{
            mask: '{998}(00)000-00-00',
            // lazy: false,
          }"
          placeholder="Format: 998(00)000-00-00"
        />
      </VControl>
    </VField>
    <VField :label="$t('Phone_home')">
      <VControl>
        <VIMaskInput
          v-model="patientAddressData.phone_home"
          class="input"
          :options="{
            mask: '{998}(00)000-00-00',
            // lazy: false,
          }"
          placeholder="Format: 998(00)000-00-00"
        />
      </VControl>
    </VField>
    <VField :label="$t('Phone_work')">
      <VControl>
        <VIMaskInput
          v-model="patientAddressData.phone_work"
          class="input"
          :options="{
            mask: '{998}(00)000-00-00',
            // lazy: false,
          }"
          placeholder="Format: 998(00)000-00-00"
        />
      </VControl>
    </VField>
  </div>
</template>
