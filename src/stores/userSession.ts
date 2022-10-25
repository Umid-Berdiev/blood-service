import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useStorage } from '@vueuse/core'
import { useApi } from '../composable/useApi'
import { login, logout } from '/@src/utils/api/auth'

export type UserData = Record<string, any> | null

const api = useApi()

export const useUserSession = defineStore('userSession', () => {
  // token will be synced with local storage
  // @see https://vueuse.org/core/usestorage/
  const token = useStorage('token', '')

  const user = ref<Partial<UserData>>()
  const loading = ref(true)

  const isLoggedIn = computed(() => token.value !== undefined && token.value !== '')
  const userRoleID = computed(() => user.value?.role_id)

  function setUser(newUser: Partial<UserData>) {
    user.value = newUser
  }

  function setToken(newToken: string) {
    token.value = newToken
  }

  function setLoading(newLoading: boolean) {
    loading.value = newLoading
  }

  async function loginUser(payload: any) {
    try {
      const data = await login(payload)

      setUser(data.result.user)
      setToken(data.result.token)
    } catch (error) {
      throw error
    }
  }

  async function logoutUser() {
    try {
      await logout()
      token.value = ''
      user.value = null
    } catch (error) {
      throw error
    }
  }

  async function fetchProfile() {
    try {
      const { data } = await api({
        url: '/users/profile',
      })
      setUser(data.result)
    } catch (error) {
      throw error
    }
  }

  async function updateProfile(payload: FormData) {
    try {
      const { data } = await api({
        url: '/users/profile',
        method: 'POST',
        data: payload,
      })

      setUser(data.data)
    } catch (error) {
      throw error
    }
  }

  async function updateProfilePassword(payload: any) {
    try {
      const { data } = await api({
        url: '/users/profile/password',
        method: 'PUT',
        data: payload,
      })

      setUser(data.data)
    } catch (error) {
      throw error
    }
  }

  return {
    user,
    token,
    isLoggedIn,
    userRoleID,
    loading,
    loginUser,
    logoutUser,
    fetchProfile,
    updateProfile,
    updateProfilePassword,
    setUser,
    setToken,
    setLoading,
  } as const
})

/**
 * Pinia supports Hot Module replacement so you can edit your stores and
 * interact with them directly in your app without reloading the page.
 *
 * @see https://pinia.esm.dev/cookbook/hot-module-replacement.html
 * @see https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserSession, import.meta.hot))
}
