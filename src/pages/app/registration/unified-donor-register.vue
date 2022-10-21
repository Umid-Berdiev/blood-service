<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import sleep from '/@src/utils/sleep'

const router = useRouter()
const { t } = useI18n()
const notyf = useNotyf()
const search = reactive({
  lastname: '',
  firstname: '',
  middlename: '',
  doctype: '',
  docnumber: '',
})
const errors = reactive({
  lastname: '',
  firstname: '',
  middlename: '',
  doctype: '',
  docnumber: '',
})
const isLoading = ref(false)
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Advanced_Search'))
useHead({
  title: t('Advanced_Search'),
})

const handleSearch = async () => {
  isLoading.value = true
  await sleep(1000)

  if (!search.lastname) {
    notyf.error('Fill form correctly!')
    errors.lastname = 'Requited field'
  } else {
    notyf.success('Донор не найдено')

    router.push({
      name: '/app/registration/register-donors',
    })
  }

  isLoading.value = false
}
</script>

<template>
  <div class="columns is-justify-content-center">
    <div class="column is-6">
      <!-- <div class="">
          <h1 class="has-text-centered is-size-5">{{ $t('Advanced_Search') }}</h1>
        </div> -->
      <form @submit.prevent="handleSearch">
        <VField :label="$t('Last_name')" required>
          <VControl>
            <VInput
              v-model="search.lastname"
              type="text"
              :placeholder="$t('Last_name')"
              @input="errors.lastname = ''"
            />
            <p class="help has-text-danger">{{ errors.lastname }}</p>
          </VControl>
        </VField>
        <VField :label="$t('First_name')">
          <VControl>
            <VInput
              v-model="search.firstname"
              type="text"
              :placeholder="$t('First_name')"
            />
          </VControl>
        </VField>
        <VField :label="$t('Middlename')">
          <VControl>
            <VInput
              v-model="search.middlename"
              type="text"
              :placeholder="$t('Middlename')"
            />
          </VControl>
        </VField>
        <VField :label="$t('Doc_number')">
          <VControl>
            <Multiselect
              v-model="search.doctype"
              :options="['password', 'military doc']"
              :placeholder="$t('Doc_number')"
            />
          </VControl>
        </VField>
        <VField :label="$t('Doc_number')">
          <VControl>
            <VInput
              v-model="search.docnumber"
              type="text"
              :placeholder="$t('Doc_number')"
            />
          </VControl>
        </VField>
        <br />
        <div class="navigation-buttons">
          <div class="buttons is-right">
            <VButton type="submit" color="primary" bold :loading="isLoading" tabindex="0">
              {{ $t('Search') }}
            </VButton>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
