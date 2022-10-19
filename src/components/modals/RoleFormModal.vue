<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { create, updateById, fetchById } from '/@src/utils/api/roles'

interface RoleFormProps {
  modelValue: boolean
  roleId: number | null
}

const props = withDefaults(defineProps<RoleFormProps>(), {
  modelValue: false,
  roleId: null,
})

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
  (e: 'update:list'): void
}>()

const notyf = useNotyf()
const { t } = useI18n()
const title = ref(t('Add'))
const isLoading = ref(false)
const name = reactive({
  uz: '',
  ru: '',
  en: '',
})
const description = reactive({
  uz: '',
  ru: '',
  en: '',
})
const errors = reactive({
  'name.uz': [],
  'name.en': [],
  'name.ru': [],
  'description.uz': [],
  'description.en': [],
  'description.ru': [],
})

watch(
  () => props.roleId,
  async (newVal) => {
    if (newVal) {
      console.log(newVal)

      title.value = t('Edit')
      const res = await fetchById(Number(props.roleId))
      Object.assign(name, res.name)
      Object.assign(description, res.description)
    }
  },
  { deep: true }
)

async function onSubmit() {
  try {
    isLoading.value = true
    props.roleId
      ? await updateById(props.roleId, { name, description })
      : await create({ name, description })
    emits('update:list')
    onClose()
  } catch (error: any) {
    if (error.response?.data.error) notyf.error(error.response?.data.error)
    else Object.assign(errors, error.response?.data?.errors)
    // throw error
  } finally {
    isLoading.value = false
  }
}

function onClose() {
  title.value = t('Add')
  clearFields()
  clearErrors()
  emits('update:modelValue', false)
}

function clearFields() {
  Object.assign(name, {
    uz: '',
    ru: '',
    en: '',
  })
  Object.assign(description, {
    uz: '',
    ru: '',
    en: '',
  })
}

function clearErrors() {
  Object.assign(errors, {
    'name.uz': [],
    'name.en': [],
    'name.ru': [],
    'description.uz': [],
    'description.en': [],
    'description.ru': [],
  })
}
</script>

<template>
  <VModal :open="modelValue" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <form id="role-form" class="modal-form" @submit.prevent="onSubmit">
        <VTabs
          type="boxed"
          :selected="'uz'"
          :tabs="[
            { label: $t('Uzbek'), value: 'uz' },
            { label: $t('Russian'), value: 'ru' },
            { label: $t('English'), value: 'en' },
          ]"
        >
          <template #tab="{ activeValue }">
            <div v-if="activeValue === 'uz'" class="columns is-multiline pt-5">
              <div class="column is-12">
                <VField :label="$t('Name_uz')" required>
                  <VControl>
                    <VInput
                      v-model="name.uz"
                      name="name_uz"
                      type="text"
                      :placeholder="t('Type_name_uz')"
                    />
                    <p class="help has-text-danger">{{ errors['name.uz'][0] }}</p>
                  </VControl>
                </VField>
                <VField :label="$t('Description_uz')" required>
                  <VControl>
                    <VTextarea
                      v-model="description.uz"
                      name="description_uz"
                      :placeholder="t('Add_description_uz')"
                    />
                    <p class="help has-text-danger">{{ errors['description.uz'][0] }}</p>
                  </VControl>
                </VField>
              </div>
            </div>
            <div v-else-if="activeValue === 'ru'" class="columns is-multiline pt-5">
              <div class="column is-12">
                <VField :label="$t('Name_ru')">
                  <VControl>
                    <VInput
                      v-model="name.ru"
                      name="name_ru"
                      type="text"
                      :placeholder="t('Type_name_ru')"
                    />
                  </VControl>
                </VField>
                <VField :label="$t('Description_ru')">
                  <VControl>
                    <VTextarea
                      v-model="description.ru"
                      name="description_ru"
                      :placeholder="t('Add_description_ru')"
                    />
                  </VControl>
                </VField>
              </div>
            </div>
            <div v-else-if="activeValue === 'en'" class="columns is-multiline pt-5">
              <div class="column is-12">
                <VField :label="$t('Name_en')">
                  <VControl>
                    <VInput
                      v-model="name.en"
                      name="name_en"
                      type="text"
                      :placeholder="t('Type_name_en')"
                    />
                  </VControl>
                </VField>
                <VField :label="$t('Description_en')">
                  <VControl>
                    <VTextarea
                      v-model="description.en"
                      name="description_en"
                      :placeholder="t('Add_description_en')"
                    />
                  </VControl>
                </VField>
              </div>
            </div>
          </template>
        </VTabs>
      </form>
    </template>
    <template #action="{ close }">
      <VButton
        :loading="isLoading"
        color="primary"
        outlined
        type="submit"
        form="role-form"
        :disabled="isLoading"
      >
        {{ $t('Save') }}
      </VButton>
    </template>
  </VModal>
</template>
