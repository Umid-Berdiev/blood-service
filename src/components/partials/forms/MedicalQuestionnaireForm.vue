<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'

const props = defineProps([])
const emits = defineEmits([])

const route = useRoute()
const router = useRouter()
const { locale } = useI18n()
const notif = useNotyf()
const isLoading = ref(false)

const masks = ref({
  input: 'YYYY-MM-DD',
})
const datePickerModelConfig = reactive({
  type: 'string',
  mask: masks.value.input, // Uses 'iso' if missing
})

const formData = reactive({})
const errors = reactive({})
</script>

<template>
  <div class="fieldset p-5">
    <form @submit.prevent="onSubmit">
      <VField :label="$t('Issued_by')">
        <VControl>
          <VInput
            v-model="formData.name"
            type="text"
            :placeholder="$t('Name')"
            @input="$emit('editing', 'name')"
          />
          <p class="help has-text-danger">{{ errors.name[0] }}</p>
        </VControl>
      </VField>
      <VDatePicker
        v-model="formData.when_issued"
        :locale="locale"
        mode="date"
        :masks="masks"
        :model-config="datePickerModelConfig"
        color="green"
        trim-weeks
        :popover="{ visibility: 'click' }"
      >
        <template #default="{ inputValue, inputEvents }">
          <VField :label="$t('When_issued')">
            <VControl icon="feather:calendar">
              <VInput
                :value="inputValue"
                v-on="inputEvents"
                @change="$emit('editing', 'when_issued')"
              />
              <p class="help has-text-danger">{{ errors.when_issued[0] }}</p>
            </VControl>
          </VField>
        </template>
      </VDatePicker>
      <SubmitButton :loading="isLoading" />
    </form>
  </div>
</template>
