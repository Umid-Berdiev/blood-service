<template>
  <div class="flex-list-inner">
    <VPlaceholderSection
      :title="$t('No_data')"
      :subtitle="$t('There_is_no_data_that_match_your_query')"
      class="my-6"
    >
      <template #image>
        <img
          class="light-image"
          src="/@src/assets/illustrations/placeholders/search-7.svg"
          alt=""
        />
        <img
          class="dark-image"
          src="/@src/assets/illustrations/placeholders/search-7-dark.svg"
          alt=""
        />
      </template>
    </VPlaceholderSection>
  </div>
</template>
