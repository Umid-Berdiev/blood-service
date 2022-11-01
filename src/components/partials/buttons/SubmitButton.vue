<script setup lang="ts">
withDefaults(
  defineProps<{
    loading: boolean
  }>(),
  {
    loading: false,
  }
)
</script>

<template>
  <VButton type="submit" color="primary" outlined :loading="loading" :disabled="loading">
    <slot>
      {{ $t('Save') }}
    </slot>
  </VButton>
</template>
