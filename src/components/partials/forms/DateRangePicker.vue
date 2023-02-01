<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  start: string
  end: string
}>()

const emits = defineEmits<{
  (e: 'update:start', value: string): void
  (e: 'update:end', value: string): void
}>()

const { locale } = useI18n()
const masks = ref({
  input: 'DD.MM.YYYY',
})
const datePickerModelConfig = reactive({
  type: 'string',
  mask: 'YYYY-MM-DD', // Uses 'iso' if missing
})

const range = computed({
  get() {
    return {
      start: props.start,
      end: props.end,
    }
  },
  set(val) {
    emits('update:start', val.start)
    emits('update:end', val.end)
  },
})
</script>

<template>
  <ClientOnly>
    <VDatePicker
      v-model="range"
      :locale="locale"
      is-range
      color="green"
      trim-weeks
      :masks="masks"
      :model-config="datePickerModelConfig"
    >
      <template #default="{ inputValue, inputEvents }">
        <VField addons>
          <VControl expanded icon="feather:corner-down-right">
            <input
              class="input v-input"
              type="text"
              :value="inputValue.start"
              v-on="inputEvents.start"
            />
          </VControl>
          <VControl>
            <VButton static>
              <i class="fas fa-angle-double-right" aria-hidden="true"></i>
            </VButton>
          </VControl>
          <VControl expanded icon="feather:corner-right-up" subcontrol>
            <input
              class="input v-input"
              type="text"
              :value="inputValue.end"
              v-on="inputEvents.end"
            />
          </VControl>
        </VField>
      </template>
    </VDatePicker>
  </ClientOnly>
</template>
