<script setup lang="ts">
import { useI18n } from 'vue-i18n'
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

const { locale } = useI18n()
const masks = ref({
  input: 'YYYY-MM-DD',
})
const datePickerModelConfig = reactive({
  type: 'string',
  mask: masks.value.input, // Uses 'iso' if missing
})
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
    <!-- <div class="fieldset-separator"></div> -->
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
    <VDatePicker
      v-model="form.birth_date"
      :locale="locale"
      mode="date"
      :masks="masks"
      :model-config="datePickerModelConfig"
      color="green"
      trim-weeks
      :popover="{ visibility: 'click' }"
    >
      <template #default="{ inputValue, inputEvents }">
        <VField :label="$t('Date-of-birth')" required>
          <VControl icon="feather:calendar">
            <VInput
              :value="inputValue"
              v-on="inputEvents"
              @input="$emit('editing', 'birth_date')"
            />
            <p class="help has-text-danger">{{ errors.birth_date[0] }}</p>
          </VControl>
        </VField>
      </template>
    </VDatePicker>
    <VField :label="$t('Gender')">
      <VControl>
        <VRadio
          v-model="form.gender"
          value="male"
          :label="$t('Male')"
          @input="$emit('editing', 'gender')"
        />
        <VRadio
          v-model="form.gender"
          value="female"
          :label="$t('Female')"
          @input="$emit('editing', 'gender')"
        />
        <p class="help has-text-danger">{{ errors.gender[0] }}</p>
      </VControl>
    </VField>
  </div>
</template>
