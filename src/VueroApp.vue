<script setup lang="ts">
import { initDarkmode } from '/@src/stores/darkmode'

// This is the global app setup function

/**
 * Initialize the darkmode watcher
 *
 * @see /@src/stores/darkmode
 */
initDarkmode()
</script>

<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition mode="out-in" name="fade">
        <Suspense>
          <!-- main content -->
          <component :is="Component" />

          <!-- loading state -->
          <template #fallback> Loading... </template>
        </Suspense>
      </Transition>
    </template>
  </RouterView>
</template>
