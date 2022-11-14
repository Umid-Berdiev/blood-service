<script setup lang="ts">
import type { SideblockTheme } from '/@src/components/navigation/desktop/Sideblock.vue'
import { useMainStore } from '/@src/stores/main'
import { usePanels } from '/@src/stores/panels'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import mainMenuItems from '/@src/data/main-menu-items.json'
import { useUserSession } from '../stores/userSession'

const props = withDefaults(
  defineProps<{
    theme?: SideblockTheme
    defaultSideblock?: string
    closeOnChange?: boolean
    openOnMounted?: boolean
    nowrap?: boolean
  }>(),
  {
    defaultSideblock: 'dashboard',
    theme: 'default',
  }
)

const viewWrapper = useViewWrapper()
const { app } = useMainStore()
const userSession = useUserSession()
const panels = usePanels()
const router = useRouter()
const route = useRoute()
const isMobileSideblockOpen = ref(false)
const isDesktopSideblockOpen = ref(props.openOnMounted)
const activeMobileSubsidebar = ref(props.defaultSideblock)
const profileBranch = computed(() => userSession.user?.branch?.name)

/**
 * watchPostEffect callback will be executed each time dependent reactive values has changed
 */
watchPostEffect(() => {
  viewWrapper.setPushedBlock(isDesktopSideblockOpen.value ?? false)
})
onMounted(() => {
  viewWrapper.setPushed(false)
})
watch(
  () => route.fullPath,
  () => {
    isMobileSideblockOpen.value = false

    if (props.closeOnChange && isDesktopSideblockOpen.value) {
      isDesktopSideblockOpen.value = false
    }
  }
)
</script>

<template>
  <div class="app-layout">
    <div class="app-overlay"></div>

    <!-- Mobile navigation -->
    <MobileNavbar
      :is-open="isMobileSideblockOpen"
      @toggle="isMobileSideblockOpen = !isMobileSideblockOpen"
    >
      <template #brand>
        <RouterLink to="/" class="navbar-item is-brand">
          <AnimatedLogo width="38px" height="38px" />
        </RouterLink>

        <div class="brand-end">
          <NotificationsMobileDropdown />
          <UserProfileDropdown />
        </div>
      </template>
    </MobileNavbar>

    <!-- Mobile sidebar links -->
    <!-- <MobileSidebar
      :is-open="isMobileSideblockOpen"
      @toggle="isMobileSideblockOpen = !isMobileSideblockOpen"
    >
      <template #links>
        <li v-for="(item, itemIndex) in mainMenuItems" :key="itemIndex">
          <a
            :class="[activeMobileSubsidebar === item.slug && 'is-active']"
            @keydown.space.prevent="activeMobileSubsidebar = item.slug"
            @click="activeMobileSubsidebar = item.slug"
          >
            <i aria-hidden="true" class="iconify" :data-icon="item.icon"></i>
          </a>
        </li>
      </template>
    </MobileSidebar> -->

    <!-- Desktop navigation -->
    <!-- <CircularMenu /> -->

    <Transition name="slide-x">
      <Sideblock v-if="isDesktopSideblockOpen" :theme="props.theme">
        <template #header>
          <RouterLink to="/app/dashboard" class="sidebar-block-logo">
            <AnimatedLogo width="36" />
          </RouterLink>
          <h3>{{ $t(app.name) }}</h3>
        </template>
        <template #links>
          <!-- main menu links -->
          <MainMenuLinks />
        </template>
      </Sideblock>
    </Transition>

    <!-- <LanguagesPanel />
    <ActivityPanel />
    <SearchPanel />
    <TaskPanel /> -->

    <VViewWrapper full>
      <VPageContentWrapper>
        <template v-if="props.nowrap">
          <slot></slot>
        </template>
        <VPageContent v-else class="is-relative">
          <div class="page-title has-text-centered">
            <!-- Sidebar Trigger -->
            <div
              class="vuero-hamburger nav-trigger push-resize"
              tabindex="0"
              @keydown.space.prevent="isDesktopSideblockOpen = !isDesktopSideblockOpen"
              @click="isDesktopSideblockOpen = !isDesktopSideblockOpen"
            >
              <span class="menu-toggle has-chevron">
                <span
                  :class="[isDesktopSideblockOpen && 'active']"
                  class="icon-box-toggle"
                >
                  <span class="rotate">
                    <i aria-hidden="true" class="icon-line-top"></i>
                    <i aria-hidden="true" class="icon-line-center"></i>
                    <i aria-hidden="true" class="icon-line-bottom"></i>
                  </span>
                </span>
              </span>
            </div>

            <div class="title-wrap">
              <h1 class="title is-4">{{ viewWrapper.pageTitle }}</h1>
            </div>

            <div class="title-wrap ml-auto">
              <h3 class="title is-4">{{ profileBranch }}</h3>
            </div>

            <Toolbar class="desktop-toolbar ml-auto" />
          </div>

          <slot></slot>
        </VPageContent>
      </VPageContentWrapper>
    </VViewWrapper>
  </div>
</template>
