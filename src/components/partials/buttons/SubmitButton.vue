<script setup lang="ts">
withDefaults(
  defineProps<{
    loading?: boolean
  }>(),
  {
    loading: false,
  }
)
</script>

<template>
  <VButton
    type="submit"
    color="primary"
    bold
    :loading="loading"
    :disabled="loading"
    tabindex="0"
  >
    <slot>
      {{ $t('Save') }}
    </slot>
  </VButton>
</template>
