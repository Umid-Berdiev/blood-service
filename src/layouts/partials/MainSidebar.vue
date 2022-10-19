<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    template?: string
    isOpen?: boolean
  }>(),
  {
    defaultSideblock: 'dashboard',
    theme: 'default',
  }
)

const openSideblockLinks = ref('')
const isMobileSideblockOpen = ref(false)
const isDesktopSideblockOpen = ref(props.isOpen)
const activeMobileSubsidebar = ref(props.template)
</script>

<template>
  <Transition name="slide-x">
    <Sideblock v-if="isDesktopSideblockOpen" :theme="props.theme">
      <template #header>
        <RouterLink to="/" class="sidebar-block-logo">
          <AnimatedLogo width="36px" />
        </RouterLink>
        <h3>{{ app.name }}</h3>
      </template>
      <template #links>
        <li>
          <RouterLink to="/sidebar/dashboards" class="single-link">
            <span class="icon">
              <i class="iconify" data-icon="feather:grid"></i>
            </span>
            Dashboard
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/sidebar/dashboards/personal-2" class="single-link">
            <span class="icon">
              <i class="iconify" data-icon="feather:briefcase"></i>
            </span>
            Projects
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/sidebar/dashboards/human-ressources" class="single-link">
            <span class="icon">
              <i class="iconify" data-icon="feather:message-circle"></i>
            </span>
            Messages
            <span class="badge">3</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/sidebar/dashboards/personal-3" class="single-link">
            <span class="icon">
              <i class="iconify" data-icon="feather:book"></i>
            </span>
            Collections
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/sidebar/layouts/profile-view" class="single-link">
            <span class="icon">
              <i class="iconify" data-icon="feather:users"></i>
            </span>
            Users
          </RouterLink>
        </li>

        <VCollapseLinks v-model:open="openSideblockLinks" collapse-id="reports">
          <template #header>
            <div class="icon">
              <i class="iconify" data-icon="feather:briefcase"></i>
            </div>
            Reports
            <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
          </template>
          <RouterLink to="/sidebar/dashboards/analytics" class="is-submenu">
            <i class="lnil lnil-analytics-alt-1"></i>
            <span>Financial report</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/company" class="is-submenu">
            <i class="lnil lnil-pie-chart"></i>
            <span>Stocks report</span>
          </RouterLink>
          <RouterLink to="/sidebar/layouts/list-view-3" class="is-submenu">
            <i class="lnil lnil-stats-up"></i>
            <span>Growth report</span>
          </RouterLink>
        </VCollapseLinks>
        <li>
          <RouterLink to="/inbox" class="single-link">
            <span class="icon">
              <i class="iconify" data-icon="feather:mail"></i>
            </span>
            Inbox
          </RouterLink>
        </li>
        <li class="divider"></li>

        <VCollapseLinks v-model:open="openSideblockLinks" collapse-id="settings">
          <template #header>
            <div class="icon">
              <i aria-hidden="true" class="iconify" data-icon="feather:settings"></i>
            </div>
            Settings
            <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
          </template>
          <RouterLink to="/sidebar/layouts" class="is-submenu">
            <i class="lnil lnil-home"></i>
            <span>General</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/stocks" class="is-submenu">
            <i class="lnil lnil-lock-alt"></i>
            <span>Security</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/sales" class="is-submenu">
            <i class="lnil lnil-coin"></i>
            <span>Transactions</span>
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks v-model:open="openSideblockLinks" collapse-id="starters">
          <template #header>
            <div class="icon">
              <i aria-hidden="true" class="iconify" data-icon="feather:zap"></i>
            </div>
            Starters
            <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right" />
          </template>

          <RouterLink to="/starters/sidebar-blank-page-1" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Regular Sidebar</span>
          </RouterLink>
          <RouterLink to="/starters/sidebar-blank-page-2" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Curved Sidebar</span>
          </RouterLink>
          <RouterLink to="/starters/sidebar-blank-page-3" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Colored Sidebar</span>
          </RouterLink>
          <RouterLink to="/starters/sidebar-blank-page-4" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Curved Colored</span>
          </RouterLink>
          <RouterLink to="/starters/sidebar-blank-page-4" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Curved Colored Sidebar</span>
          </RouterLink>
          <RouterLink to="/starters/sidebar-blank-page-5" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Labels Sidebar</span>
          </RouterLink>
          <RouterLink to="/starters/sidebar-blank-page-6" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Labels Hover Sidebar</span>
          </RouterLink>
          <RouterLink to="/starters/sidebar-blank-page-7" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Float Sidebar</span>
          </RouterLink>

          <hr class="navbar-divider" />

          <RouterLink to="/starters/sideblock-blank-page-1" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Regular Sideblock</span>
            <VTag class="ml-2" label="v2.2" color="primary" size="tiny" outlined curved />
          </RouterLink>
          <RouterLink to="/starters/sideblock-blank-page-2" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Curved Sideblock</span>
            <VTag class="ml-2" label="v2.2" color="primary" size="tiny" outlined curved />
          </RouterLink>
          <RouterLink to="/starters/sideblock-blank-page-3" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Colored Sideblock</span>
            <VTag class="ml-2" label="v2.2" color="primary" size="tiny" outlined curved />
          </RouterLink>
          <RouterLink to="/starters/sideblock-blank-page-4" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Curved Colored</span>
            <VTag class="ml-2" label="v2.2" color="primary" size="tiny" outlined curved />
          </RouterLink>

          <hr class="navbar-divider" />

          <RouterLink to="/starters/navbar-blank-page-1" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>Regular Navbar</span>
          </RouterLink>
          <RouterLink to="/starters/navbar-blank-page-2" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>Fading Navbar</span>
          </RouterLink>
          <RouterLink to="/starters/navbar-blank-page-3" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>Colored Navbar</span>
          </RouterLink>
          <RouterLink to="/starters/navbar-blank-page-4" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>Dropdown Navbar</span>
          </RouterLink>
          <RouterLink to="/starters/navbar-blank-page-5" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>Colored Dropdown</span>
          </RouterLink>
          <RouterLink to="/starters/navbar-blank-page-6" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>Clean Navbar</span>
          </RouterLink>
          <RouterLink to="/starters/navbar-blank-page-7" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>Clean Center Navbar</span>
          </RouterLink>
          <RouterLink to="/starters/navbar-blank-page-8" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>Clean Fade Navbar</span>
          </RouterLink>
        </VCollapseLinks>
      </template>

      <template #bottom-links>
        <UserProfileDropdown up />
        <LayoutSwitcher />

        <a
          class="search-link"
          aria-label="Display search panel"
          data-content="Search"
          tabindex="0"
          @keydown.space.prevent="panels.setActive('search')"
          @click="panels.setActive('search')"
        >
          <i aria-hidden="true" class="iconify sidebar-svg" data-icon="feather-search" />
        </a>
      </template>
    </Sideblock>
  </Transition>
</template>

<style scoped>

</style>
