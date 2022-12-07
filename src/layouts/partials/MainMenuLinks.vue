<script setup lang="ts">
const route = useRoute()
const openSideblockLinks = ref('')

watch(
  () => route.path,
  (newVal) => {
    if (newVal) {
      if (newVal.startsWith('/app/registration')) {
        openSideblockLinks.value = 'registration'
      }
      if (newVal.startsWith('/app/physician-therapist')) {
        openSideblockLinks.value = 'physician-therapist'
      }
      if (newVal.startsWith('/app/screening')) {
        openSideblockLinks.value = 'screening'
      }
      if (newVal.startsWith('/app/donation')) {
        openSideblockLinks.value = 'donation'
      }
      if (newVal.startsWith('/app/bloodborne-infections-laboratory')) {
        openSideblockLinks.value = 'bloodborne-infections-laboratory'
      }
      if (newVal.startsWith('/app/clinical-biochemical-laboratory')) {
        openSideblockLinks.value = 'clinical-biochemical-laboratory'
      }
      if (newVal.startsWith('/app/buck-laboratory')) {
        openSideblockLinks.value = 'buck-laboratory'
      }
      if (newVal.startsWith('/app/immunological-research-department')) {
        openSideblockLinks.value = 'immunological-research-department'
      }
      if (newVal.startsWith('/app/recycling')) {
        openSideblockLinks.value = 'recycling'
      }
      if (newVal.startsWith('/app/quality-control')) {
        openSideblockLinks.value = 'quality-control'
      }
      if (newVal.startsWith('/app/blood-bank')) {
        openSideblockLinks.value = 'blood-bank'
      }
    }
  },
  { immediate: true }
)
</script>

<template>
  <ul>
    <!-- dashboard -->
    <li>
      <RouterLink to="/app/dashboard" class="single-link">
        <span class="icon">
          <i class="iconify" data-icon="feather:grid"></i>
        </span>
        {{ $t('Dashboard') }}
      </RouterLink>
    </li>

    <VCollapseLinks v-model:open="openSideblockLinks" collapse-id="registration">
      <template #header>
        <div class="icon">
          <i class="iconify" data-icon="feather:folder-plus" aria-hidden="true"></i>
        </div>
        {{ $t('Registration') }}
        <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
      </template>
      <RouterLink to="/app/registration/unified-donor-register" class="is-submenu mb-3">
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Unified-donor-register') }}</span>
      </RouterLink>
      <!-- <RouterLink to="/app/registration/register-donors" class="is-submenu mb-3">
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Register-donors') }}</span>
      </RouterLink> -->
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
          <i class="iconify" data-icon="feather:folder-plus" aria-hidden="true"></i>
        </div>
        {{ $t('Physician-therapist') }}
        <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
      </template>
      <RouterLink
        to="/app/physician-therapist/donors-for-examination"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Donors-list-for-examination') }}</span>
      </RouterLink>
      <RouterLink
        to="/app/physician-therapist/examined-donors-list"
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
          <i class="iconify" data-icon="feather:folder-plus" aria-hidden="true"></i>
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

    <!-- blood-sampling -->
    <VCollapseLinks v-model:open="openSideblockLinks" collapse-id="blood-sampling">
      <template #header>
        <div class="icon">
          <i class="iconify" data-icon="feather:folder-plus" aria-hidden="true"></i>
        </div>
        {{ $t('Blood_sampling') }}
        <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
      </template>
      <RouterLink to="/app/blood-sampling/list" class="is-submenu mb-3">
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Donor_list_for_blood_sampling') }}</span>
      </RouterLink>
      <RouterLink
        to="/app/blood-sampling/journal-blood-&-components"
        class="is-submenu mb-3"
      >
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
          <i class="iconify" data-icon="feather:folder-plus" aria-hidden="true"></i>
        </div>
        {{ $t('Bloodborne-infections-laboratory') }}
        <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
      </template>
      <RouterLink
        to="/app/bloodborne-infections-laboratory/research-aimed-donations"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Research-aimed-donations-list') }}</span>
      </RouterLink>
      <RouterLink
        to="/app/bloodborne-infections-laboratory/research-journal"
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
          <i class="iconify" data-icon="feather:folder-plus" aria-hidden="true"></i>
        </div>
        {{ $t('Clinical-biochemical-laboratory') }}
        <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
      </template>
      <RouterLink
        to="/app/clinical-biochemical-laboratory/research-aimed-donations"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Research-aimed-donations-list') }}</span>
      </RouterLink>
      <RouterLink
        to="/app/clinical-biochemical-laboratory/research-journal"
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
          <i class="iconify" data-icon="feather:folder-plus" aria-hidden="true"></i>
        </div>
        {{ $t('Buck-laboratory') }}
        <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
      </template>
      <RouterLink
        to="/app/buck-laboratory/research-aimed-donations"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Research-aimed-donations-list') }}</span>
      </RouterLink>
      <RouterLink to="/app/buck-laboratory/supernatant-plasmas" class="is-submenu mb-3">
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
          <i class="iconify" data-icon="feather:folder-plus" aria-hidden="true"></i>
        </div>
        {{ $t('Immunological-Research-Department') }}
        <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
      </template>
      <RouterLink
        to="/app/immunological-research-department/research-aimed-donations"
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

    <!-- Donations -->
    <VCollapseLinks v-model:open="openSideblockLinks" collapse-id="donations">
      <template #header>
        <div class="icon">
          <i class="iconify" data-icon="feather:folder-plus" aria-hidden="true"></i>
        </div>
        {{ $t('Donations') }}
        <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
      </template>
      <RouterLink to="/app/donations/donors-for-donation" class="is-submenu mb-3">
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Donors_for_donation') }}</span>
      </RouterLink>
    </VCollapseLinks>

    <!-- Recycling -->
    <VCollapseLinks v-model:open="openSideblockLinks" collapse-id="recycling">
      <template #header>
        <div class="icon">
          <i class="iconify" data-icon="feather:folder-plus" aria-hidden="true"></i>
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
          <i class="iconify" data-icon="feather:folder-plus" aria-hidden="true"></i>
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
          <i class="iconify" data-icon="feather:folder-plus" aria-hidden="true"></i>
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
  </ul>
</template>
