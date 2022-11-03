<script setup lang="ts">
import { useUserSession } from '/@src/stores/userSession'

const router = useRouter()
const userSession = useUserSession()
const profileName = computed(() => userSession.user?.username)

async function logoutAction() {
  await userSession.logoutUser()
  router.push('/')
  // location.replace('/')
}
</script>

<template>
  <VDropdown right spaced class="user-dropdown profile-dropdown">
    <template #button="{ toggle }">
      <a
        tabindex="0"
        class="is-trigger dropdown-trigger"
        aria-haspopup="true"
        @keydown.space.prevent="toggle"
        @click="toggle"
      >
        <p class="is-size-4 has-text-primary is-uppercase">{{ profileName }}</p>
        <!-- <VAvatar picture="/images/avatars/svg/vuero-1.svg" /> -->
      </a>
    </template>

    <template #content>
      <div class="dropdown-head">
        <VAvatar size="large" picture="/images/avatars/svg/vuero-1.svg" />

        <div class="meta">
          <span>{{ userSession.user?.email }}</span>
          <br />
          <span>{{ 'Product Manager' }}</span>
        </div>
      </div>
      <br />
      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-user-alt"></i>
        </div>
        <div class="meta has-text-left">
          <span>Profile</span>
          <span>View your profile</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

      <div class="dropdown-item is-button">
        <VButton
          class="logout-button"
          icon="feather:log-out"
          color="primary"
          role="menuitem"
          raised
          fullwidth
          @click="logoutAction"
        >
          {{ $t('Logout') }}
        </VButton>
      </div>
    </template>
  </VDropdown>
</template>

<style lang="scss" scoped>
.is-dark .dropdown.is-spaced:hover .is-trigger {
  background: var(--dark-sidebar-light-10) !important;
}
</style>
