<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  modelValue: string
  label?: string
  errorText?: string
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'editing'): void
}>()

const { locale } = useI18n()
const masks = ref({
  input: 'DD.MM.YYYY',
})
const datePickerModelConfig = reactive({
  type: 'string',
  mask: 'YYYY-MM-DD', // Uses 'iso' if missing
})

const computedDate = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emits('update:modelValue', val)
  },
})
</script>

<template>
  <ClientOnly>
    <VDatePicker
      v-model="computedDate"
      mode="date"
      :locale="locale"
      :masks="masks"
      :model-config="datePickerModelConfig"
      color="green"
      trim-weeks
      :popover="{ visibility: 'click' }"
    >
      <template #default="{ inputValue, inputEvents }">
        <VField :label="label">
          <VControl icon="feather:calendar">
            <input
              class="input v-input"
              type="text"
              :value="inputValue"
              v-on="inputEvents"
              @input="$emit('editing')"
            />
          </VControl>
          <p class="help has-text-danger">{{ errorText }}</p>
        </VField>
      </template>
    </VDatePicker>
  </ClientOnly>
</template>
