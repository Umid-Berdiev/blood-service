<script lang="ts" setup>
defineEmits<{
  (e: 'clear'): void
}>()
</script>

<template>
  <VButton type="button" color="warning" bold tabindex="0" @click="$emit('clear')">
    <slot>
      {{ $t('Clear') }}
    </slot>
  </VButton>
</template>
