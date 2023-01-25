<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'

import { useDarkmode } from '/@src/stores/darkmode'
import { useUserSession } from '/@src/stores/userSession'
import { useNotyf } from '/@src/composable/useNotyf'

type StepId = 'login' | 'forgot-password'

const { t } = useI18n()
const step = ref<StepId>('login')
const isLoading = ref(false)
const darkmode = useDarkmode()
const router = useRouter()
const route = useRoute()
const notif = useNotyf()
const { loginUser, isLoggedIn } = useUserSession()
const redirect = route.query.redirect as string
const formErrors = reactive({
  username: [],
  password: [],
})

const handleLogin = async (event: Event) => {
  try {
    isLoading.value = true
    Object.assign(formErrors, {
      username: [],
      password: [],
    })

    const values = Object.fromEntries(new FormData(event.target as HTMLFormElement))

    await loginUser(values)

    notif.dismissAll()
    notif.success(`${t('Welcome_back')}, ${values.username?.toUpperCase()}`)

    if (redirect) {
      router.push(redirect)
    } else {
      router.push({
        name: '/app/dashboard',
      })
    }
  } catch (error: any) {
    Object.assign(formErrors, error.response?.data?.errors)
    error.response?.data?.errors.message &&
      notif.error(error.response?.data?.errors.message)
  } finally {
    isLoading.value = false
  }
}

useHead({
  title: t('auth_login'),
})

function clearError(fieldName: string) {
  formErrors[fieldName] = []
}
</script>

<template>
  <AuthLayout>
    <div class="modern-login">
      <div class="underlay h-hidden-mobile h-hidden-tablet-p"></div>

      <div class="columns is-gapless is-vcentered">
        <div class="column is-relative is-8 h-hidden-mobile h-hidden-tablet-p">
          <div
            class="hero is-fullheight is-image"
            style="background: url('/images/clean-medical-background_53876-97927.webp')"
          >
            <div class="hero-body">
              <div class="container">
                <div class="columns">
                  <div class="column">
                    <!-- <img
                      class="hero-image"
                      src="/@src/assets/illustrations/login/station.svg"
                      alt=""
                    /> -->
                    <!-- <p class="is-size-1">{{ $t('Republic_Blood_Center') }}</p> -->
                    <p
                      class="is-size-1 has-text-dark is-underlined has-text-weight-medium"
                      style="text-shadow: #0fa 1px 0 5px"
                    >
                      Автоматизированная информационная система по формированию и ведению
                      базы данных по донорам и лицам, отведенным от донорства, и данных по
                      учету и распределению донорской крови
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4 is-relative">
          <RouterLink to="/" class="top-logo">
            <AnimatedLogo :size="75" />
          </RouterLink>

          <label
            class="dark-mode ml-auto"
            tabindex="0"
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
          <div class="is-form mt-3">
            <div class="hero-body">
              <div
                class="form-text has-text-centered"
                :class="[step !== 'login' && 'is-hidden']"
              >
                <h2>{{ $t('Sign_In') }}</h2>
                <p>{{ $t('Please_sign_in_to_your_account') }}</p>
              </div>
              <!-- <div class="form-text" :class="[step === 'login' && 'is-hidden']">
                <h2>Recover Account</h2>
                <p>Reset your account password.</p>
              </div> -->
              <form
                data-cy="login-form"
                :class="[step !== 'login' && 'is-hidden']"
                class="login-wrapper"
                @submit.prevent="handleLogin"
              >
                <!-- <VMessage color="primary">
                  <div>
                    <strong class="pr-1">email:</strong>
                    <span>john.doe@cssninja.io</span>
                  </div>
                  <div>
                    <strong class="pr-1">password:</strong>
                    <span>ada.lovelace</span>
                  </div>
                </VMessage> -->

                <VField>
                  <VControl icon="feather:user">
                    <VInput
                      type="text"
                      name="username"
                      :placeholder="$t('Username')"
                      autocomplete="username"
                      @input="clearError('username')"
                    />
                    <p class="help has-text-danger">{{ formErrors.username[0] }}</p>
                  </VControl>
                </VField>
                <VField>
                  <VControl icon="feather:lock">
                    <VInput
                      type="password"
                      name="password"
                      :placeholder="$t('Password')"
                      autocomplete="current-password"
                      @input="clearError('current-password')"
                    />
                    <p class="help has-text-danger">{{ formErrors.password[0] }}</p>
                  </VControl>
                </VField>

                <!-- <VField>
                  <VControl class="is-flex">
                    <VLabel raw class="remember-toggle">
                      <VInput raw type="checkbox" />

                      <span class="toggler">
                        <span class="active">
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:check"
                          ></i>
                        </span>
                        <span class="inactive">
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:circle"
                          ></i>
                        </span>
                      </span>
                    </VLabel>
                    <VLabel raw class="remember-me">Remember Me</VLabel>
                    <a
                      tabindex="0"
                      @keydown.space.prevent="step = 'forgot-password'"
                      @click="step = 'forgot-password'"
                    >
                      Forgot Password?
                    </a>
                  </VControl>
                </VField> -->

                <div class="button-wrap has-help">
                  <VButton
                    id="login-button"
                    :loading="isLoading"
                    :disabled="isLoading"
                    color="primary"
                    type="submit"
                    size="big"
                    rounded
                    raised
                    bold
                  >
                    {{ $t('Confirm') }}
                  </VButton>
                  <!-- <span>
                    Or
                    <RouterLink to="/auth/signup-1">Create</RouterLink>
                    an account.
                  </span> -->
                </div>
              </form>

              <!-- <form
                :class="[step !== 'forgot-password' && 'is-hidden']"
                class="login-wrapper"
                @submit.prevent
              >
                <p class="recover-text">
                  Enter your email and click on the confirm button to reset your password.
                  We'll send you an email detailing the steps to complete the procedure.
                </p>

                <VField>
                  <VControl icon="lnil lnil-envelope autv-icon">
                    <VLabel class="auth-label">Email Address</VLabel>
                    <VInput type="email" autocomplete="current-password" />
                  </VControl>
                </VField>
                <div class="button-wrap">
                  <VButton color="white" size="big" lower rounded @click="step = 'login'">
                    Cancel
                  </VButton>
                  <VButton
                    color="primary"
                    size="big"
                    type="submit"
                    lower
                    rounded
                    solid
                    @click="step = 'login'"
                  >
                    Confirm
                  </VButton>
                </div>
              </form> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </AuthLayout>
</template>

<style lang="scss" scoped>
@import '/@src/scss/pages/auth';
@import '/@src/scss/pages/login';
</style>
