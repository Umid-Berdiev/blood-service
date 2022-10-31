<script setup lang="ts">
const emits = defineEmits<{
  (e: 'view'): void
}>()
</script>

<template>
  <VDropdown icon="feather:more-vertical" class="is-pushed-mobile" spaced right>
    <template #content="{ close }">
      <a
        role="menuitem"
        href="#"
        class="dropdown-item is-media"
        @click.prevent="
          () => {
            emits('view')
            close()
          }
        "
      >
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-eye"></i>
        </div>
        <div class="meta">
          <span>{{ $t('View') }}</span>
          <span>{{ $t('View_patient_details') }}</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
