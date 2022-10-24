<script setup lang="ts">
import { PatientInterface } from '/@src/utils/interfaces'

const props = defineProps<{
  patient: PatientInterface
  errors: {
    last_name: string
  }
}>()
const patientData = reactive({
  last_name: '',
  first_name: '',
  father_name: '',
  birth_date: new Date(),
  sex: 'male',
})
</script>

<template>
  <div class="fieldset p-5">
    <!-- <div class="fieldset-separator"></div> -->
    <VField :label="$t('Last_name')" required>
      <VControl>
        <VInput
          v-model="patientData.lastname"
          type="text"
          :placeholder="$t('Last_name')"
          @input="$emit('editing', 'last_name')"
        />
        <p class="help has-text-danger">{{ errors.lastname }}</p>
      </VControl>
    </VField>
    <VField :label="$t('First_name')" required>
      <VControl>
        <VInput
          v-model="patientData.firstname"
          type="text"
          :placeholder="$t('First_name')"
        />
        <p class="help has-text-danger">{{ errors.firstname }}</p>
      </VControl>
    </VField>
    <VField :label="$t('Middlename')">
      <VControl>
        <VInput
          v-model="patientData.father_name"
          type="text"
          :placeholder="$t('Middlename')"
        />
        <p class="help has-text-danger">{{ errors.father_name }}</p>
      </VControl>
    </VField>
    <VDatePicker
      v-model="patientData.birth_date"
      color="green"
      trim-weeks
      popover.visibility="hidden"
    >
      <template #default="{ inputValue, inputEvents }">
        <VField :label="$t('Date-of-birth')" required>
          <VControl icon="feather:calendar">
            <VInput :value="inputValue" v-on="inputEvents" />
            <p class="help has-text-danger">{{ errors.birth_date }}</p>
          </VControl>
        </VField>
      </template>
    </VDatePicker>
    <VField :label="$t('Sex')">
      <VControl>
        <VRadio v-model="patientData.sex" value="male" :label="$t('Male')" />
        <VRadio v-model="patientData.sex" value="female" :label="$t('Female')" />
        <p class="help has-text-danger">{{ errors.sex }}</p>
      </VControl>
    </VField>
  </div>
</template>
