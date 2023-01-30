<script setup lang="ts">
import { MaskedRange } from 'imask'
import moment from 'moment'

const props = withDefaults(
  defineProps<{
    modelValue: string | null
  }>(),
  {
    modelValue: '',
  }
)

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const computedModelValue = computed({
  get() {
    return props.modelValue || ''
  },
  set(val: string) {
    emits('update:modelValue', val)
  },
})

const momentFormat = 'DD.MM.YYYY'

const imaskOptions = reactive({
  mask: Date,
  pattern: momentFormat,
  lazy: true,
  min: new Date(1970, 0, 1),
  max: new Date(2100, 0, 1),

  format: function (date: string) {
    return moment(date).format(momentFormat)
  },
  parse: function (str: string) {
    return moment(str, momentFormat)
  },

  blocks: {
    YYYY: {
      mask: MaskedRange,
      from: 1970,
      to: 2030,
    },
    MM: {
      mask: MaskedRange,
      from: 1,
      to: 12,
    },
    DD: {
      mask: MaskedRange,
      from: 1,
      to: 31,
    },
  },
})
</script>

<template>
  <VIMaskInput
    v-model="computedModelValue"
    class="input"
    :options="imaskOptions"
    :placeholder="$t('Format') + ': ' + 'dd.mm.yyyy'"
  />
</template>
