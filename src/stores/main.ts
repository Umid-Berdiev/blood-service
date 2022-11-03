import { acceptHMRUpdate, defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    app: {
      name: 'Blood_service',
      version: '',
      copyright: new Date().getFullYear(),
    },
    confirmModalState: ref(false),
    confirmState: ref(false),
    confirmModalOkButtonColor: 'danger',
  }),
  getters: {
    getConfirmModalState(state) {
      return state.confirmModalState
    },
    getConfirmState(state) {
      return state.confirmState
    },
    getConfirmModalOkButtonColor(state) {
      return state.confirmModalOkButtonColor
    },
  },
  actions: {},
})

/**
 * Pinia supports Hot Module replacement so you can edit your stores and
 * interact with them directly in your app without reloading the page.
 *
 * @see https://pinia.esm.dev/cookbook/hot-module-replacement.html
 * @see https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot))
}
