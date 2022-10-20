<script setup lang="ts">
import { useNotyf } from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'

const router = useRouter()
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

const search = async () => {
  isLoading.value = true
  await sleep(1000)

  if (!search.lastname) {
    notyf.error('Fill form correctly!')
    errors.lastname = 'Requited field'
  } else {
    // if patient found open modal with his/her info
    // else
    notyf.success('Донор не найдено')

    // router.push({
    //   name: '/registration/register-donors',
    // })
  }

  isLoading.value = false
}
</script>

<template>
  <div id="wizard-step-2" class="inner-wrapper is-active">
    <div class="step-content">
      <div class="step-title">
        <h2 class="dark-inverted">Расширенный поиск</h2>
      </div>

      <div class="columns is-justify-content-center">
        <div class="column is-6">
          <form @submit.prevent="search">
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
            <div class="navigation-buttons">
              <div class="buttons is-right">
                <VButton
                  type="submit"
                  color="primary"
                  bold
                  :loading="isLoading"
                  tabindex="0"
                >
                  {{ $t('Search') }}
                </VButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
