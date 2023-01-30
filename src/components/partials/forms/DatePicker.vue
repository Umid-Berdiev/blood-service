<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  modelValue: string
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const { t, locale } = useI18n()

const datePickerModelConfig = reactive({
  type: 'string',
  mask: 'DD.MM.YYYY', // Uses 'iso' if missing
})

const date = computed({
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
      v-model="date"
      :locale="locale"
      color="green"
      trim-weeks
      :model-config="datePickerModelConfig"
    >
      <template #default="{ inputValue, inputEvents }">
        <VField>
          <VControl icon="feather:calendar">
            <input
              class="input v-input"
              type="text"
              :value="inputValue"
              v-on="inputEvents"
            />
          </VControl>
        </VField>
      </template>
    </VDatePicker>
  </ClientOnly>
</template>
