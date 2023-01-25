<script setup lang="ts">
const route = useRoute()
const openSideblockLinks = ref('')

// hooks
onMounted(function () {
  const el = document.querySelector('ul#sidebar-menu a.router-link-exact-active')
  const elParent = el?.closest('li.collapse-links')
  // console.log({ el })
  // console.log({ elParent })

  elParent?.scrollIntoView()
})

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
      if (newVal.startsWith('/app/donations')) {
        openSideblockLinks.value = 'donations'
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
      if (newVal.startsWith('/app/processing')) {
        openSideblockLinks.value = 'processing'
      }
      if (newVal.startsWith('/app/quality-control')) {
        openSideblockLinks.value = 'quality-control'
      }
      if (newVal.startsWith('/app/blood-bank')) {
        openSideblockLinks.value = 'blood-bank'
      }
      if (newVal.startsWith('/app/blood-sampling')) {
        openSideblockLinks.value = 'blood-sampling'
      }
      if (newVal.startsWith('/app/scrapping')) {
        openSideblockLinks.value = 'scrapping'
      }
      if (newVal.startsWith('/app/forwarding')) {
        openSideblockLinks.value = 'forwarding'
      }
    }
  },
  { immediate: true }
)
</script>

<template>
  <ul id="sidebar-menu">
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
      <!-- <RouterLink
        to="/app/bloodborne-infections-laboratory/research-journal"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Bloodborne-infections-research-journal') }}</span>
      </RouterLink> -->
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
      <!-- <RouterLink
        to="/app/clinical-biochemical-laboratory/research-journal"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Clinical-biochemical-research-journal') }}</span>
      </RouterLink> -->
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
        to="/app/buck-laboratory/components-for-production-sterility-control"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Components_for_production_sterility_control') }}</span>
      </RouterLink>
      <!-- <RouterLink
        to="/app/buck-laboratory/serological-research-journal"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Serological-Research-Journal') }}</span>
      </RouterLink> -->
      <!-- <RouterLink
        to="/app/buck-laboratory/buck-control-sterility"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Buck-control-sterility') }}</span>
      </RouterLink> -->
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
      <!-- <RouterLink
        to="/app/immunological-research-department/research-journal"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Research-journal') }}</span>
      </RouterLink> -->
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
      <RouterLink to="/app/donations/containers" class="is-submenu mb-3">
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Containers_list') }}</span>
      </RouterLink>
    </VCollapseLinks>

    <!-- Processing -->
    <VCollapseLinks v-model:open="openSideblockLinks" collapse-id="processing">
      <template #header>
        <div class="icon">
          <i class="iconify" data-icon="feather:folder-plus" aria-hidden="true"></i>
        </div>
        {{ $t('Processing') }}
        <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
      </template>
      <RouterLink to="/app/processing/donations-for-processing" class="is-submenu mb-3">
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Donations_list_for_processing') }}</span>
      </RouterLink>
      <RouterLink
        to="/app/processing/donations-for-component-distribution"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Component-distribution-donations') }}</span>
      </RouterLink>
      <RouterLink to="/app/processing/components-for-recycling" class="is-submenu mb-3">
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Recycling-components') }}</span>
      </RouterLink>
      <RouterLink
        to="/app/processing/cryoprecipitate-batches-in-processing"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Cryoprecipitate-processing-batches') }}</span>
      </RouterLink>
      <RouterLink to="/app/processing/FFPs-in-storage" class="is-submenu mb-3">
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('FFPs-in-storage') }}</span>
      </RouterLink>
      <!-- <RouterLink
        to="/app/processing/component-processing-distribution-log"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Component-Recycling-Distribution-Log') }}</span>
      </RouterLink> -->
    </VCollapseLinks>

    <!-- Forwarding -->
    <VCollapseLinks v-model:open="openSideblockLinks" collapse-id="forwarding">
      <template #header>
        <div class="icon">
          <i class="iconify" data-icon="feather:folder-plus" aria-hidden="true"></i>
        </div>
        {{ $t('Forwarding') }}
        <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
      </template>
      <RouterLink
        to="/app/forwarding/storage-transferred-products"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Storage_transferred_products') }}</span>
      </RouterLink>
      <RouterLink
        to="/app/forwarding/components-transferred-to-drugs-production"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Components_transferred_to_drugs_production') }}</span>
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
      <RouterLink to="/app/quality-control/received-components" class="is-submenu mb-3">
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Received_components_list') }}</span>
      </RouterLink>
      <!-- <RouterLink
        to="/app/quality-control/inspected-components-log"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Inspected_components_log') }}</span>
      </RouterLink> -->
    </VCollapseLinks>

    <!-- Scrapping components -->
    <VCollapseLinks v-model:open="openSideblockLinks" collapse-id="scrapping">
      <template #header>
        <div class="icon">
          <i class="iconify" data-icon="feather:folder-plus" aria-hidden="true"></i>
        </div>
        {{ $t('Scrapping') }}
        <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
      </template>
      <RouterLink to="/app/scrapping/components-to-be-scrapped" class="is-submenu mb-3">
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Components_to_be_scrapped') }}</span>
      </RouterLink>
      <!-- <RouterLink
        to="/app//app/scrapping/scrapped-components-log"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Scrapped_components_log') }}</span>
      </RouterLink> -->
    </VCollapseLinks>

    <!-- blood-bank -->
    <!-- <VCollapseLinks v-model:open="openSideblockLinks" collapse-id="blood-bank">
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
    </VCollapseLinks> -->
  </ul>
</template>
