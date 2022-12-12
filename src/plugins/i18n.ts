import { definePlugin } from '/@src/app'
import { createI18n, I18n } from 'vue-i18n'

/**
 * messages are generated using vite-plugin-i18n
 * each .json files located in the ./src/locales are registered in messages
 * @see https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
 */
import messages from '@intlify/vite-plugin-vue-i18n/messages'

let i18n: I18n

export default definePlugin(({ app }) => {
  const defaultLocale = useStorage('locale', 'ru')
  i18n = createI18n({
    locale: defaultLocale.value,
    messages,
  })

  app.use(i18n)
})

export { i18n }
