<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const currentId = (route.params?.id as number) ?? null
</script>

<template>
  <div>currentId - {{ currentId }}</div>
</template>

<style scoped lang="scss">
//
</style>
