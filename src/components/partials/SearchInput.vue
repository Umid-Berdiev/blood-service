<script setup lang="ts">
interface SearchInputProps {
  modelValue: string
}

withDefaults(defineProps<SearchInputProps>(), {
  modelValue: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <VField>
    <VControl icon="feather:search">
      <input
        :value="modelValue"
        type="text"
        class="input is-rounded"
        :placeholder="$t('Search') + '...'"
        @input="emit('update:modelValue', $event.target?.value)"
      />
    </VControl>
  </VField>
</template>

<style scoped lang="scss">
//
</style>
