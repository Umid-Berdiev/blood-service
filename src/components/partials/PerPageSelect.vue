<script setup lang="ts">
interface PerPageSelectProps {
  modelValue: number
}

withDefaults(defineProps<PerPageSelectProps>(), {
  modelValue: 10,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const list = [5, 10, 25, 50]
</script>

<template>
  <VField>
    <VControl>
      <div class="select is-rounded">
        <select @input="emit('update:modelValue', $event.target?.value)">
          <option
            v-for="num in list"
            :key="num"
            :selected="modelValue === num"
            :value="num"
          >
            {{ num }} results per page
          </option>
        </select>
      </div>
    </VControl>
  </VField>
</template>

