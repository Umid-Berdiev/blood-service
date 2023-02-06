<script lang="ts" setup>
import { fetchDonationTypes } from '/@src/utils/api/additional'

const props = withDefaults(
  defineProps<{
    donationType: number | null
    error?: string
  }>(),
  {
    error: '',
  }
)

const emit = defineEmits<{
  (e: 'update:donationType', value: number | null): void
}>()

const computedDonationType = computed({
  get() {
    return props.donationType
  },
  set(value) {
    emit('update:donationType', value)
  },
})

const donationTypes = ref([])

// hooks
onMounted(async () => {
  donationTypes.value = await fetchDonationTypes().then((res) => res.result)
})
</script>

<template>
  <VField class="is-curved-select" :label="$t('Donation_type')">
    <VControl>
      <Multiselect
        v-model="computedDonationType"
        :options="donationTypes"
        :placeholder="$t('All')"
        label="name"
        value-prop="id"
      />
      <p class="help has-text-danger">{{ error }}</p>
    </VControl>
  </VField>
</template>
