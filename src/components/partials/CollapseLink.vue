<script setup lang="ts">
export interface VCollapseProps {
  title: string
  titleClasses: string
  content: string
  withChevron?: boolean
}

const props = withDefaults(defineProps<VCollapseProps>(), {
  title: '',
  titleClasses: '',
  content: '',
})
</script>

<template>
  <details
    :class="[withChevron && 'has-chevron', !withChevron && 'has-plus']"
    class="collapse"
  >
    <summary class="collapse-header" tabindex="0">
      <h3 :class="titleClasses">
        <slot name="collapse-item-summary">
          {{ title }}
        </slot>
      </h3>
      <div class="collapse-head-info">
        <div class="collapse-icon">
          <VIcon v-if="withChevron" icon="feather:chevron-right" />
          <VIcon v-else-if="!withChevron" icon="feather:plus" />
        </div>
      </div>
    </summary>
    <div class="collapse-content">
      <p>
        <slot name="collapse-item-content">
          {{ content }}
        </slot>
      </p>
    </div>
  </details>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.collapse {
  // @include vuero-s-card;

  padding: 0;
  // margin-bottom: 1.5rem;

  &.has-plus {
    &[open] {
      .collapse-header {
        .collapse-icon {
          transform: rotate(45deg);
        }
      }

      .collapse-content {
        display: block;
      }
    }
  }

  &.has-chevron {
    &[open] {
      .collapse-header {
        .collapse-icon {
          transform: rotate(90deg);
        }
      }

      .collapse-content {
        display: block;
      }
    }
  }

  &[open] {
    .collapse-icon {
      border-color: var(--fade-grey-dark-3) !important;
      box-shadow: var(--light-box-shadow);
    }
  }

  .collapse-header {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;

    .collapse-head-info {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-left: 0.5rem;
    }

    .collapse-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      // height: 1.5rem;
      // width: 1.5rem;
      background: var(--white);
      border-radius: var(--radius-rounded);
      border: 1px solid transparent;
      transition: all 0.3s; // transition-all test

      > span {
        display: block;
        height: 1.5rem;
        width: 1.5rem;
      }

      svg {
        height: 1.5rem;
        width: 1.5rem;
        color: var(--light-text);
      }
    }
  }
}

.is-dark {
  .collapse {
    @include vuero-card--dark;

    &[open] {
      .collapse-header {
        .collapse-icon {
          background: var(--dark-sidebar-light-2);
          border-color: var(--dark-sidebar-light-4) !important;
        }
      }
    }

    .collapse-header {
      h3 {
        color: var(--dark-dark-text);
      }

      .collapse-icon {
        background: var(--dark-sidebar-light-6);
        border-color: var(--dark-sidebar-light-6);
      }
    }
  }
}
</style>
