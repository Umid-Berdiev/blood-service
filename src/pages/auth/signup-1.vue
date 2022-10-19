<script setup lang="ts">
import type { TinySliderInstance } from 'tiny-slider/src/tiny-slider'
import { tns } from 'tiny-slider/src/tiny-slider'
import { useHead } from '@vueuse/head'

import { onceImageErrored } from '/@src/utils/via-placeholder'

import sleep from '/@src/utils/sleep'
import { useNotyf } from '/@src/composable/useNotyf'
import { useDarkmode } from '/@src/stores/darkmode'

let slider: TinySliderInstance
const sliderElement = ref<HTMLElement>()
const router = useRouter()
const notif = useNotyf()
const darkmode = useDarkmode()
const step = ref(0)
const selectedAvatar = ref(2)
const isLoading = ref(false)
const resizeValue = ref(70)
const uploadModalOpen = ref(false)
const avatars = [
  '/images/avatars/svg/vuero-1.svg',
  '/images/avatars/svg/vuero-2.svg',
  '/images/avatars/svg/vuero-3.svg',
  '/images/avatars/svg/vuero-4.svg',
  '/images/avatars/svg/vuero-5.svg',
  '/images/avatars/svg/vuero-6.svg',
  '/images/avatars/svg/vuero-7.svg',
  '/images/avatars/svg/vuero-8.svg',
  '/images/avatars/svg/vuero-9.svg',
  '/images/avatars/svg/vuero-10.svg',
  '/images/avatars/svg/vuero-11.svg',
  '/images/avatars/svg/vuero-12.svg',
]

const handleSignup = async () => {
  if (!isLoading.value) {
    step.value++
    isLoading.value = true
    sleep(2000)

    notif.dismissAll()
    notif.success('Welcome, Erik Kovalsky')
    router.push({ name: '/sidebar/dashboards' })
    isLoading.value = false
  }
}

const onAvatarChanged = (info: any) => {
  // direct access to info object
  const indexPrev = info.indexCached
  const indexCurrent = info.index

  // update style based on index
  info.slideItems[indexPrev].classList.remove('active')
  info.slideItems[indexCurrent].classList.add('active')

  if (info.displayIndex) {
    selectedAvatar.value = info.displayIndex - 1
  }
}

useHead({
  title: 'Auth Signup 1 - Vuero',
})

onMounted(() => {
  if (sliderElement.value) {
    slider = tns({
      container: sliderElement.value,
      controls: false,
      nav: false,
      mouseDrag: true,
      startIndex: 2,
      fixedWidth: 100,
      gutter: 40,
      slideBy: 1,
      swipeAngle: false,
      center: false,
      loop: true,
      edgePadding: 325,
    })
    slider.events.on('indexChanged', onAvatarChanged)
    onAvatarChanged(slider.getInfo())
  }
})

onUnmounted(() => {
  if (slider) {
    slider.events.off('indexChanged', onAvatarChanged)
    slider.destroy()
  }
})
</script>

<template>
  <div>
    <div class="signup-nav">
      <div class="signup-nav-inner">
        <RouterLink to="/" class="logo">
          <AnimatedLogo width="36px" height="36px" />
        </RouterLink>
      </div>
    </div>

    <div id="vuero-signup" class="signup-wrapper">
      <div class="signup-steps" :class="[step === 0 && 'is-hidden']">
        <div class="steps-container">
          <div
            class="step-icon is-active"
            :class="[step >= 1 && 'is-active', step < 1 && 'is-inactive']"
          >
            <div class="inner">
              <i aria-hidden="true" class="iconify" data-icon="feather:user"></i>
            </div>
            <span class="step-label">Profile Pic</span>
          </div>
          <div
            class="step-icon"
            :class="[step >= 2 && 'is-active', step < 2 && 'is-inactive']"
          >
            <div class="inner">
              <i aria-hidden="true" class="iconify" data-icon="feather:shield"></i>
            </div>
            <span class="step-label">Account</span>
          </div>
          <div
            class="step-icon"
            :class="[step >= 3 && 'is-active', step < 3 && 'is-inactive']"
          >
            <div class="inner">
              <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
            </div>
            <span class="step-label">Done</span>
          </div>
          <progress class="progress" :value="step - 1" :max="2">25%</progress>
        </div>
      </div>

      <img
        :class="[step > 0 && 'is-hidden']"
        class="card-bg"
        src="/@src/assets/backgrounds/signup/vuero-signup.webp"
        alt=""
      />

      <div class="hero is-fullheight">
        <div class="hero-body">
          <div class="container">
            <!-- Step 1 -->
            <div class="columns signup-columns" :class="[step !== 0 && 'is-hidden']">
              <div class="column is-4 is-offset-1">
                <h1 id="main-signup-title" class="title is-3 signup-title">
                  Become a Vuero
                </h1>
                <h2 id="main-signup-subtitle" class="subtitle signup-subtitle">
                  And simply join an unmatched design experience.
                </h2>
                <div class="signup-card">
                  <form class="signup-form is-mobile-spaced" @submit.prevent>
                    <div class="columns is-multiline">
                      <div class="column is-6">
                        <VField>
                          <VControl>
                            <VInput type="text" autocomplete="given-name" />
                            <VLabel raw class="auth-label">First Name</VLabel>
                          </VControl>
                        </VField>
                      </div>
                      <div class="column is-6">
                        <VField>
                          <VControl>
                            <VInput type="text" autocomplete="family-name" />
                            <VLabel raw class="auth-label">Last Name</VLabel>
                          </VControl>
                        </VField>
                      </div>
                      <div class="column is-12">
                        <VField>
                          <VControl>
                            <VInput type="text" autocomplete="email" />
                            <VLabel raw class="auth-label">Email Address</VLabel>
                          </VControl>
                        </VField>
                      </div>
                      <div class="column is-12">
                        <div class="signup-type">
                          <div class="box-wrap">
                            <input type="radio" name="signup_type" checked />
                            <div class="signup-box">
                              <i aria-hidden="true" class="lnil lnil-coffee-cup"></i>
                              <div class="meta">
                                <span>Free</span>
                                <span>Nice to get started</span>
                              </div>
                            </div>
                          </div>
                          <div class="box-wrap">
                            <input type="radio" name="signup_type" />
                            <div class="signup-box">
                              <i aria-hidden="true" class="lnil lnil-crown-alt-1"></i>
                              <div class="meta">
                                <span>Paid</span>
                                <span>Get a lot more features</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="control is-agree">
                      <span>
                        By continuing you agree to our <a href="#">Terms</a> and
                        <a href="#">Privacy</a>
                      </span>
                    </div>

                    <div class="button-wrap has-help">
                      <VButton
                        color="primary"
                        size="big"
                        bold
                        fullwidth
                        rounded
                        @click="step++"
                      >
                        Continue
                      </VButton>
                      <span>
                        Or
                        <RouterLink to="/auth/login"> Sign In </RouterLink>
                        to your account.
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="columns signup-columns" :class="[step !== 1 && 'is-hidden']">
              <form class="column is-8" @submit.prevent>
                <div class="signup-profile-wrapper">
                  <h1 class="title is-5 signup-title has-text-centered">
                    Add a profile picture
                  </h1>
                  <h2 class="subtitle signup-subtitle has-text-centered">
                    This is your visual identity.
                  </h2>
                  <div class="picture-selector">
                    <div class="image-container">
                      <img :src="avatars[selectedAvatar]" alt="" />
                      <div
                        class="upload-button"
                        role="button"
                        tabindex="0"
                        @keydown.space.prevent="uploadModalOpen = true"
                        @click="uploadModalOpen = true"
                      >
                        <i
                          aria-hidden="true"
                          class="iconify"
                          data-icon="feather:plus"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="divider-container">
                  <div class="divider">
                    <span>Or select an avatar</span>
                  </div>
                </div>

                <div ref="sliderElement" class="avatar-carousel resized-mobile">
                  <div v-for="(avatar, key) in avatars" :key="key" class="carousel-item">
                    <div class="image-wrapper">
                      <img :src="avatar" alt="" @error.once="onceImageErrored(150)" />
                    </div>
                  </div>
                </div>
                <div class="button-wrap is-centered has-text-centered">
                  <VButton color="primary" size="big" rounded lower @click="step++">
                    Continue
                  </VButton>
                </div>
              </form>
            </div>

            <!-- Step 3 -->
            <div class="columns signup-columns" :class="[step !== 2 && 'is-hidden']">
              <div class="column is-4 is-offset-4 username-form">
                <h1 class="title is-5 signup-title has-text-centered">Pick a username</h1>
                <h2 class="subtitle signup-subtitle has-text-centered">
                  Your username is how others will find you on Vuero so pick a good one.
                  You can change it later.
                </h2>
                <form class="signup-form" @submit.prevent="handleSignup">
                  <div class="columns is-multiline">
                    <div class="column is-12">
                      <VField>
                        <VControl>
                          <VInput type="text" autocomplete="username" />
                          <VLabel raw class="auth-label">Username</VLabel>
                        </VControl>
                      </VField>
                    </div>
                    <div class="column is-12">
                      <VField>
                        <VControl>
                          <VInput type="password" autocomplete="new-password" />
                          <VLabel raw class="auth-label">Password</VLabel>
                        </VControl>
                      </VField>
                    </div>
                    <div class="column is-12">
                      <VField>
                        <VControl>
                          <VInput type="password" autocomplete="new-password" />
                          <VLabel raw class="auth-label">Confirm Password</VLabel>
                        </VControl>
                      </VField>
                    </div>
                    <div class="column is-12">
                      <VField>
                        <VControl class="has-switch">
                          <VLabel>Send me marketing and transaction emails</VLabel>
                          <VSwitchBlock color="success" checked />
                        </VControl>
                      </VField>
                    </div>
                  </div>

                  <div class="button-wrap is-centered has-text-centered">
                    <VButton
                      size="big"
                      color="primary"
                      type="submit"
                      rounded
                      primary
                      lower
                      :loading="isLoading"
                    >
                      Done
                    </VButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="signup-footer">
      <div class="container">
        <div class="columns">
          <div class="column is-4 is-offset-1">
            <label
              class="dark-mode"
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
          </div>
        </div>
      </div>
    </div>

    <!-- upload modal -->
    <VModal
      :open="uploadModalOpen"
      title="Upload and crop your picture"
      actions="center"
      size="small"
      @close="uploadModalOpen = false"
    >
      <template #content>
        <div class="has-text-centered">
          <div class="upload-demo-wrap"><VAvatar size="big" /></div>

          <small class="help-text">Use the slider to resize the image</small>

          <VField class="resize-handler">
            <VControl>
              <Slider v-model="resizeValue" :tooltips="false" />
            </VControl>
          </VField>
        </div>
      </template>
      <template #cancel><wbr /></template>
      <template #action>
        <VField grouped>
          <VControl>
            <div class="file">
              <label class="file-label">
                <input class="file-input" type="file" name="resume" />
                <span class="file-cta">
                  <span class="file-icon">
                    <i aria-hidden="true" class="fas fa-cloud-upload-alt"></i>
                  </span>
                  <span class="file-label"> Choose a file… </span>
                </span>
              </label>
            </div>
          </VControl>
          <VControl>
            <VButton class="upload-result" size="big" outlined disabled>
              Confirm
            </VButton>
          </VControl>
        </VField>
      </template>
    </VModal>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/pages/signup';
</style>
