<script setup lang="ts">
import { PatientInterface } from '/@src/utils/interfaces'

const props = defineProps<{
  patient: PatientInterface
  errors: {
    last_name: string[]
    first_name: string[]
    father_name: string[]
    birth_date: string[]
    gender: string[]
  }
}>()
const emits = defineEmits(['update:patient', 'editing'])

const form = computed({
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
    <VField :label="$t('Last_name')" required>
      <VControl>
        <VInput
          v-model="form.last_name"
          type="text"
          :placeholder="$t('Last_name')"
          @input="$emit('editing', 'last_name')"
        />
        <p class="help has-text-danger">{{ errors.last_name[0] }}</p>
      </VControl>
    </VField>
    <VField :label="$t('First_name')" required>
      <VControl>
        <VInput
          v-model="form.first_name"
          type="text"
          :placeholder="$t('First_name')"
          @input="$emit('editing', 'first_name')"
        />
        <p class="help has-text-danger">{{ errors.first_name[0] }}</p>
      </VControl>
    </VField>
    <VField :label="$t('Middlename')">
      <VControl>
        <VInput
          v-model="form.father_name"
          type="text"
          :placeholder="$t('Middlename')"
          @input="$emit('editing', 'father_name')"
        />
        <p class="help has-text-danger">{{ errors.father_name[0] }}</p>
      </VControl>
    </VField>
    <DatePicker
      v-model="form.birth_date"
      :label="$t('Date-of-birth')"
      :error-text="errors.birth_date[0]"
      @editing="$emit('editing', 'birth_date')"
    />
    <VField :label="$t('Gender')">
      <VControl>
        <VRadio
          v-model="form.gender"
          class="p-0"
          value="male"
          :label="$t('Male')"
          @input="$emit('editing', 'gender')"
        />
        <VRadio
          v-model="form.gender"
          class="p-0 pl-3"
          value="female"
          :label="$t('Female')"
          @input="$emit('editing', 'gender')"
        />
        <p class="help has-text-danger">{{ errors.gender[0] }}</p>
      </VControl>
    </VField>
  </div>
</template>
