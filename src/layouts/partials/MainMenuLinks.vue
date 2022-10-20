<script setup lang="ts">
const openSideblockLinks = ref('')
</script>

<template>
  <div>
    <!-- dashboard -->
    <li>
      <RouterLink to="/app/dashboard" class="single-link">
        <span class="icon">
          <i class="iconify" data-icon="feather:grid"></i>
        </span>
        {{ $t('Dashboard') }}
      </RouterLink>
    </li>

    <!-- registration -->
    <!-- <li>
      <RouterLink to="/registration" class="single-link">
        <span class="icon">
          <i class="iconify" data-icon="feather:list"></i>
        </span>
        {{ $t('Registration') }}
      </RouterLink>
    </li> -->

    <VCollapseLinks v-model:open="openSideblockLinks" collapse-id="registration">
      <template #header>
        <div class="icon">
          <i class="iconify" data-icon="feather:briefcase"></i>
        </div>
        {{ $t('Registration') }}
        <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
      </template>
      <RouterLink to="/app/registration/unified-donor-register" class="is-submenu mb-3">
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Unified-donor-register') }}</span>
      </RouterLink>
      <RouterLink to="/app/registration/register-donors" class="is-submenu mb-3">
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Register-donors') }}</span>
      </RouterLink>
      <RouterLink
        to="/app/registration/donation-diverted-register"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Donation-diverted-register') }}</span>
      </RouterLink>
    </VCollapseLinks>

    <!-- physician-therapist -->
    <VCollapseLinks v-model:open="openSideblockLinks" collapse-id="physician-therapist">
      <template #header>
        <div class="icon">
          <i class="iconify" data-icon="feather:briefcase"></i>
        </div>
        {{ $t('Physician-therapist') }}
        <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
      </template>
      <RouterLink
        to="/app/physician-therapist/donors-list-for-examination"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Donors-list-for-examination') }}</span>
      </RouterLink>
      <RouterLink
        to="/app/physician-therapist/examined-donor-register"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Examined-donor-register') }}</span>
      </RouterLink>
    </VCollapseLinks>

    <!-- screening -->
    <VCollapseLinks v-model:open="openSideblockLinks" collapse-id="screening">
      <template #header>
        <div class="icon">
          <i class="iconify" data-icon="feather:briefcase"></i>
        </div>
        {{ $t('Screening') }}
        <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
      </template>
      <RouterLink
        to="/app/screening/donors-list-for-primary-screening"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Donors-list-for-primary-screening') }}</span>
      </RouterLink>
      <RouterLink
        to="/app/screening/screening-passed-donors-list"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Screening-passed-donors-list') }}</span>
      </RouterLink>
    </VCollapseLinks>

    <!-- donation -->
    <VCollapseLinks v-model:open="openSideblockLinks" collapse-id="donation">
      <template #header>
        <div class="icon">
          <i class="iconify" data-icon="feather:briefcase"></i>
        </div>
        {{ $t('Donation') }}
        <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
      </template>
      <RouterLink to="/app/donation/donation-list" class="is-submenu mb-3">
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Donation-list') }}</span>
      </RouterLink>
      <RouterLink to="/app/donation/journal-blood-&-components" class="is-submenu mb-3">
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Journal-blood-&-components') }}</span>
      </RouterLink>
    </VCollapseLinks>

    <!-- Laboratory for Bloodborne Infections -->
    <VCollapseLinks
      v-model:open="openSideblockLinks"
      collapse-id="bloodborne-infections-laboratory"
    >
      <template #header>
        <div class="icon">
          <i class="iconify" data-icon="feather:briefcase"></i>
        </div>
        {{ $t('Bloodborne-infections-laboratory') }}
        <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
      </template>
      <RouterLink
        to="/app/bloodborne-infections-laboratory/research-aimed-donations-list"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Research-aimed-donations-list') }}</span>
      </RouterLink>
      <RouterLink
        to="/app/bloodborne-infections-laboratory/bloodborne-infections-research-journal"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Bloodborne-infections-research-journal') }}</span>
      </RouterLink>
    </VCollapseLinks>

    <!-- Clinical and biochemical laboratory -->
    <VCollapseLinks
      v-model:open="openSideblockLinks"
      collapse-id="clinical-biochemical-laboratory"
    >
      <template #header>
        <div class="icon">
          <i class="iconify" data-icon="feather:briefcase"></i>
        </div>
        {{ $t('Clinical-biochemical-laboratory') }}
        <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
      </template>
      <RouterLink
        to="/app/clinical-biochemical-laboratory/research-aimed-donations-list"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Research-aimed-donations-list') }}</span>
      </RouterLink>
      <RouterLink
        to="/app/clinical-biochemical-laboratory/Clinical-biochemical-research-journal"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Clinical-biochemical-research-journal') }}</span>
      </RouterLink>
    </VCollapseLinks>

    <!-- Buck laboratory -->
    <VCollapseLinks v-model:open="openSideblockLinks" collapse-id="buck-laboratory">
      <template #header>
        <div class="icon">
          <i class="iconify" data-icon="feather:briefcase"></i>
        </div>
        {{ $t('Buck-laboratory') }}
        <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
      </template>
      <RouterLink
        to="/app/buck-laboratory/research-aimed-donations-list"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Research-aimed-donations-list') }}</span>
      </RouterLink>
      <RouterLink
        to="/app/buck-laboratory/supernatant-plasma-list"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Supernatant-plasma-list') }}</span>
      </RouterLink>
      <RouterLink
        to="/app/buck-laboratory/serological-research-journal"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Serological-Research-Journal') }}</span>
      </RouterLink>
      <RouterLink
        to="/app/buck-laboratory/buck-control-sterility"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Buck-control-sterility') }}</span>
      </RouterLink>
    </VCollapseLinks>

    <!-- Immunological-Research-Department -->
    <VCollapseLinks
      v-model:open="openSideblockLinks"
      collapse-id="immunological-research-department"
    >
      <template #header>
        <div class="icon">
          <i class="iconify" data-icon="feather:briefcase"></i>
        </div>
        {{ $t('Immunological-Research-Department') }}
        <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
      </template>
      <RouterLink
        to="/app/immunological-research-department/research-aimed-donations-list"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Research-aimed-donations-list') }}</span>
      </RouterLink>
      <RouterLink
        to="/app/immunological-research-department/research-journal"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Research-journal') }}</span>
      </RouterLink>
    </VCollapseLinks>

    <!-- Recycling -->
    <VCollapseLinks v-model:open="openSideblockLinks" collapse-id="recycling">
      <template #header>
        <div class="icon">
          <i class="iconify" data-icon="feather:briefcase"></i>
        </div>
        {{ $t('Recycling') }}
        <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
      </template>
      <RouterLink to="/app/recycling/recycling-donations-list" class="is-submenu mb-3">
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Recycling-donations-list') }}</span>
      </RouterLink>
      <RouterLink
        to="/app/recycling/component-distribution-donations"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Component-distribution-donations') }}</span>
      </RouterLink>
      <RouterLink to="/app/recycling/recycling-components" class="is-submenu mb-3">
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Recycling-components') }}</span>
      </RouterLink>
      <RouterLink
        to="/app/recycling/cryoprecipitate-processing-batches"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Cryoprecipitate-processing-batches') }}</span>
      </RouterLink>
      <RouterLink to="/app/recycling/FFPs-in-storage" class="is-submenu mb-3">
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('FFPs-in-storage') }}</span>
      </RouterLink>
      <RouterLink
        to="/app/recycling/component-recycling-distribution-log"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Component-Recycling-Distribution-Log') }}</span>
      </RouterLink>
    </VCollapseLinks>

    <!-- Quality control -->
    <VCollapseLinks v-model:open="openSideblockLinks" collapse-id="quality-control">
      <template #header>
        <div class="icon">
          <i class="iconify" data-icon="feather:briefcase"></i>
        </div>
        {{ $t('Quality-control') }}
        <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
      </template>
      <RouterLink
        to="/app/quality-control/quality-control-products"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Quality-control-products') }}</span>
      </RouterLink>
      <RouterLink to="/app/quality-control/print" class="is-submenu mb-3">
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Print') }}</span>
      </RouterLink>
    </VCollapseLinks>

    <!-- blood-bank -->
    <VCollapseLinks v-model:open="openSideblockLinks" collapse-id="blood-bank">
      <template #header>
        <div class="icon">
          <i class="iconify" data-icon="feather:briefcase"></i>
        </div>
        {{ $t('Blood-bank') }}
        <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
      </template>
      <RouterLink to="/app/blood-bank/sticker-create-form" class="is-submenu mb-3">
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Sticker-create-form') }}</span>
      </RouterLink>
      <RouterLink to="/app/blood-bank/donor-system-directories" class="is-submenu mb-3">
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Donor-system-directories') }}</span>
      </RouterLink>
    </VCollapseLinks>
  </div>
</template>

<style scoped></style>
