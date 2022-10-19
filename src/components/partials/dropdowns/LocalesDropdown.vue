<script setup lang="ts">
import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStorage } from '@vueuse/core'
import { useRouter } from 'vue-router'

const router = useRouter()
const { locale, availableLocales } = useI18n()

/**
 * We use the same storage key as we use in the /src/i18n.ts file
 * so if user reload the page, the selected language will be the same
 */
// const defaultLocale = useStorage('locale', navigator?.language || 'uz')
const defaultLocale = useStorage('locale', 'uz')

/**
 * Each time we change the locale, we persit it in the storage
 */
watch(locale, () => {
  defaultLocale.value = locale.value
})

const filteredLocales = computed(() =>
  availableLocales.filter((item) => item !== locale.value)
)

const localFlagSrc = computed(() => {
  return (locale: string) => {
    switch (locale) {
      case 'en':
        return '/images/svg/flag_en.svg'
      case 'ru':
        return '/images/svg/flag_ru.svg'
      case 'uz':
      default:
        return '/images/svg/flag_uz.svg'
    }
  }
})

function changeLocale(loc: string) {
  locale.value = loc
  router.go(0)
}
</script>

<template>
  <VDropdown right class="locale-dropdown">
    <template #button="{ open, toggle }">
      <button class="button is-rounded outlined" @click="toggle">
        {{ locale.toUpperCase() }}
      </button>
    </template>

    <template #content="{ close }">
      <div class="p-3" @blur="close">
        <button
          v-for="(lang, langIndex) in filteredLocales"
          :key="langIndex"
          class="dropdown-item button is-flex is-align-items-center mb-3"
          @click="
            () => {
              changeLocale(lang)
              close()
            }
          "
        >
          <img class="mr-3" :src="localFlagSrc(lang)" :alt="lang + 'flag'" />
          <span>{{ lang.toUpperCase() }}</span>
        </button>
      </div>
    </template>
  </VDropdown>
</template>

<style scoped lang="scss">
.locale-dropdown .dropdown-menu {
  min-width: none !important;
}
</style>
