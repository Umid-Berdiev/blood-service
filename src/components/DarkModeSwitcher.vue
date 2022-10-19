<script setup lang="ts">
import { useDarkmode } from '/@src/stores/darkmode'
const darkmode = useDarkmode()
</script>

<template>
  <div>
    <label
      tabindex="0"
      class="dark-mode ml-auto"
      @keydown.space.prevent="(e) => (e.target as HTMLLabelElement).click()"
    >
      <input
        data-cy="dark-mode-toggle"
        type="checkbox"
        :checked="!darkmode.isDark"
        @change="darkmode.onChange"
      />
      <span></span>
    </label>
  </div>
</template>

<style scoped lang="scss">
.dark-mode input + span {
  transform: scale(0.5);
}
</style>
