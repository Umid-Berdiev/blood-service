<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    donationCode: string
    error: string
  }>(),
  {
    donationCode: '',
    error: '',
  }
)

const emit = defineEmits<{
  (e: 'update:donationCode', value: string): void
}>()

const computedDonationCode = computed({
  get() {
    return props.donationCode
  },
  set(value) {
    emit('update:donationCode', value)
  },
})
</script>

<template>
  <VField class="is-curved-select" :label="$t('Donation_code')">
    <VControl>
      <VInput v-model="computedDonationCode" :placeholder="$t('Donation_code')" />
      <p class="help has-text-danger">{{ error }}</p>
    </VControl>
  </VField>
</template>
