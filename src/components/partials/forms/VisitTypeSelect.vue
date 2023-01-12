<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = withDefaults(
  defineProps<{
    visitType: string
    error: string
  }>(),
  {
    visitType: '',
    error: '',
  }
)

const emit = defineEmits<{
  (e: 'update:visitType', value: string): void
}>()

const computedVisitType = computed({
  get() {
    return props.visitType
  },
  set(value) {
    emit('update:visitType', value)
  },
})

const visitTypes = ref([
  { value: 'gratuitous', label: t('Gratuitous') },
  { value: 'chargeable', label: t('Chargeable') },
])
</script>

<template>
  <VField class="is-curved-select" :label="$t('Visit_type')">
    <VControl>
      <Multiselect
        v-model="computedVisitType"
        :options="visitTypes"
        :placeholder="$t('All')"
      />
      <p class="help has-text-danger">{{ error }}</p>
    </VControl>
  </VField>
</template>
