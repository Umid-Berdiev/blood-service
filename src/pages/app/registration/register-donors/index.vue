<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import VueScrollTo from 'vue-scrollto'
import { useNotyf } from '/@src/composable/useNotyf'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { PatientInterface } from '/@src/utils/interfaces'
import sleep from '/@src/utils/sleep'
import { createPatient, patientCategoriesList } from '/@src/utils/api/patient'

const router = useRouter()
const notif = useNotyf()
const { scrollTo } = VueScrollTo
const { t } = useI18n()

const currentStep = ref<number>(0)
const isLoading = ref(false)
const currentHelp = ref(-1)
const viewWrapper = useViewWrapper()

const patientForm: PatientInterface = reactive({
  patient_category_id: null,
  last_name: '',
  first_name: '',
  father_name: '',
  birth_date: new Date(),
  gender: 'male',
  pinfl: '',
  passport_series: '',
  passport_number: '',
  issued_by: '',
  when_issued: new Date(),
  region_id: null,
  district_id: null,
  address: '',
  work_study_place: '',
  email: '',
  phone_number: '',
  phone_home: '',
  phone_work: '',
  avatar: '',
})

const errors = reactive({
  patient_category_id: [],
  last_name: [],
  first_name: [],
  father_name: [],
  birth_date: [],
  gender: [],
  pinfl: [],
  passport_series: [],
  passport_number: [],
  issued_by: [],
  when_issued: [],
  region_id: [],
  district_id: [],
  address: [],
  work_study_place: [],
  email: [],
  phone_number: [],
  phone_home: [],
  phone_work: [],
})

const categoryOptions = ref([])

onMounted(async () => {
  const res = await patientCategoriesList()
  categoryOptions.value = res.result
})

viewWrapper.setPageTitle(t('Registration'))
useHead({
  title: t('Register-donors'),
})

const handleSubmit = async () => {
  clearErrors()

  try {
    isLoading.value = true
    const res = await createPatient(patientForm)
    notif.success('New patient data is successfully stored!')

    router.push(`/app/registration/unified-donor-register/${res.result.id}`)
  } catch (error: any) {
    Object.assign(errors, error.response?.data.errors)
  } finally {
    isLoading.value = false
  }
}

function clearError(error: keyof typeof errors) {
  errors[error] = []
}

function clearErrors() {
  Object.getOwnPropertyNames(errors).forEach((prop) => {
    if (prop in errors) {
      errors[prop] = []
    }
  })
}
</script>

<template>
  <form class="s-card" @submit.prevent="handleSubmit">
    <div class="columns">
      <div class="column">
        <h3 class="ml-5">
          <span>{{ $t('Certifying_document') }}</span>
        </h3>

        <PatientPassportForm
          :patient="patientForm"
          :errors="errors"
          @editing="clearError"
        />
      </div>

      <div class="column">
        <h3 class="ml-5">
          <span>{{ $t('Personal_Info') }}</span>
        </h3>

        <PatientPersonalInfoForm
          :patient="patientForm"
          :errors="errors"
          @editing="clearError"
        />
        <VField class="px-5" :label="$t('Category')" required>
          <VControl>
            <Multiselect
              v-model="patientForm.patient_category_id"
              :options="categoryOptions"
              :placeholder="$t('Select_category')"
              label="name"
              value-prop="id"
              @change="clearError('patient_category_id')"
            />
            <p class="help has-text-danger">{{ errors.patient_category_id[0] }}</p>
          </VControl>
        </VField>
      </div>

      <div class="column">
        <h3 class="ml-5">
          <span>{{ $t('Address') }}</span>
        </h3>
        <PatientAddressForm
          :patient="patientForm"
          :errors="errors"
          @editing="clearError"
        />
      </div>
    </div>
    <div class="buttons is-right mr-5">
      <VButton
        type="submit"
        color="primary"
        bold
        :loading="isLoading"
        :disabled="isLoading"
        tabindex="0"
      >
        {{ $t('Save') }}
      </VButton>
    </div>
  </form>
</template>
