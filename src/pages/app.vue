<route lang="yaml">
meta:
  requiresAuth: true
</route>

<template>
  <AppLayout open-on-mounted>
    <!-- Content Wrapper -->
    <RouterView v-slot="{ Component, route }">
      <Transition name="fade-slow" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </Transition>
    </RouterView>
    <!-- <RouterView /> -->
  </AppLayout>
</template>
