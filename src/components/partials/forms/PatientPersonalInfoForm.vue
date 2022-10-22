<script setup lang="ts">
const patientData = reactive({
  lastname: '',
  firstname: '',
  middlename: '',
  date_of_birth: new Date(),
  phone_number: '',
})

const errors = reactive({
  lastname: '',
  firstname: '',
  middlename: '',
  date_of_birth: '',
  phone_number: '',
})
</script>

<template>
  <div class="form-section-inner">
    <div class="fieldset">
      <!-- <div class="fieldset-separator"></div> -->
      <VField :label="$t('Last_name')" required>
        <VControl>
          <VInput
            v-model="patientData.lastname"
            type="text"
            :placeholder="$t('Last_name')"
            @input="errors.lastname = ''"
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
            v-model="patientData.middlename"
            type="text"
            :placeholder="$t('Middlename')"
          />
          <p class="help has-text-danger">{{ errors.middlename }}</p>
        </VControl>
      </VField>
      <VDatePicker
        v-model="patientData.date_of_birth"
        color="green"
        trim-weeks
        popover.visibility="hidden"
      >
        <template #default="{ inputValue, inputEvents }">
          <VField :label="$t('Date-of-birth')" required>
            <VControl icon="feather:calendar">
              <VInput :value="inputValue" v-on="inputEvents" />
              <p class="help has-text-danger">{{ errors.date_of_birth }}</p>
            </VControl>
          </VField>
        </template>
      </VDatePicker>
      <VField :label="$t('Phone')">
        <VControl>
          <VIMaskInput
            v-model="patientData.phone_number"
            class="input"
            :options="{
              mask: '{+998}(00)000-00-00',
              lazy: false,
            }"
          />
        </VControl>
      </VField>
    </div>
  </div>
</template>
