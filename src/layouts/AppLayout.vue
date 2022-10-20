<script setup lang="ts">
import type { SideblockTheme } from '/@src/components/navigation/desktop/Sideblock.vue'
import { useMainStore } from '/@src/stores/main'
import { usePanels } from '/@src/stores/panels'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import mainMenuItems from '/@src/data/main-menu-items.json'

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
const panels = usePanels()
const route = useRoute()
const router = useRouter()
const isMobileSideblockOpen = ref(false)
const isDesktopSideblockOpen = ref(props.openOnMounted)
const activeMobileSubsidebar = ref(props.defaultSideblock)

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
    <MobileSidebar
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
    </MobileSidebar>

    <!-- Desktop navigation -->
    <!-- <CircularMenu /> -->

    <Transition name="slide-x">
      <Sideblock v-if="isDesktopSideblockOpen" :theme="props.theme">
        <template #header>
          <RouterLink to="/" class="sidebar-block-logo">
            <AnimatedLogo width="36px" />
          </RouterLink>
          <h3>{{ app.name }}</h3>
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

            <Toolbar class="desktop-toolbar" />
          </div>

          <slot></slot>
        </VPageContent>
      </VPageContentWrapper>
    </VViewWrapper>
  </div>
</template>
