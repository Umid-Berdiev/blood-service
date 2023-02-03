<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  modelValue: string
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const { locale } = useI18n()
const masks = ref({
  input: 'DD.MM.YYYY',
})
const datePickerModelConfig = reactive({
  type: 'string',
  mask: 'YYYY-MM-DD', // Uses 'iso' if missing
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
      :masks="masks"
      :model-config="datePickerModelConfig"
      color="green"
      trim-weeks
    >
      <template #default="{ inputValue, togglePopover }">
        <VField>
          <VControl icon="feather:calendar">
            <input
              class="input v-input"
              type="text"
              :value="inputValue"
              @click="togglePopover"
            />
          </VControl>
        </VField>
      </template>
    </VDatePicker>
  </ClientOnly>
</template>
