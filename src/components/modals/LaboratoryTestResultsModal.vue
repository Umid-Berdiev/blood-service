<script setup lang="ts">
// import { useI18n } from 'vue-i18n'
// import { useNotyf } from '/@src/composable/useNotyf'
import {
  PatientVisitCardInterface,
  PrimaryScreeningFormInterface,
} from '/@src/utils/interfaces'

const props = withDefaults(
  defineProps<{
    visitcard: PatientVisitCardInterface
    isOpen: boolean
  }>(),
  {
    isOpen: false,
  }
)

const emits = defineEmits<{
  (e: 'update:isOpen', value: boolean): void
  (e: 'medicalExamination'): void
  (e: 'withdrawal'): void
}>()

// const route = useRoute()
// const router = useRouter()
// const notif = useNotyf()
// const { locale, t } = useI18n()
const isLoading = ref(false)
const title = ref('')
const primaryScreeningResult = ref<PrimaryScreeningFormInterface | null>(null)

// hooks
watchEffect(() => {
  if (props.visitcard) {
    primaryScreeningResult.value = props.visitcard.primary_screening_result
  }
})

// functions
function onClose() {
  emits('update:isOpen', false)
}
</script>

<template>
  <VModal :open="isOpen" size="extra-big" :title="title" actions="right" @close="onClose">
    <template #content>
      <h4 class="has-text-centered is-size-4">
        {{ $t('Laboratory_test_results') }}
      </h4>
      <br />
      <div class="columns">
        <div class="column">
          <div class="table-container">
            <table class="table is-bordered">
              <thead class="">
                <tr>
                  <th class="has-text-centered">{{ $t('Primary_screening_results') }}</th>
                  <th class="has-text-centered">
                    {{ $t('Hemotransmission_research_results') }}
                  </th>
                  <th class="has-text-centered">
                    {{ $t('clinical_biochemical_research_results') }}
                  </th>
                  <th class="has-text-centered">
                    {{ $t('Serological_research_results') }}
                  </th>
                  <th class="has-text-centered">
                    {{ $t('Immunological_research_results') }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p class="">
                      {{ $t('Researched_at') }}:
                      <strong>{{ primaryScreeningResult?.date }}</strong>
                    </p>
                    <p class="">
                      {{ $t('Researched_by') }}:
                      <strong>{{ $t('Specialist') }}</strong>
                    </p>
                    <p class="">
                      {{ $t('Preliminary_blood_type') }}:
                      <strong>{{ primaryScreeningResult?.blood_type?.label }}</strong>
                    </p>
                    <p class="">
                      {{ $t('Hemoglobin_gl') }}:
                      <strong class="has-text-primary">{{
                        primaryScreeningResult?.value
                      }}</strong>
                    </p>
                  </td>
                  <td>
                    <p class="">
                      {{ $t('Researched_at') }}:
                      <strong>06.03.2013</strong>
                    </p>
                    <p class="">
                      {{ $t('Researched_by') }}:
                      <strong>Specialist</strong>
                    </p>
                  </td>
                  <td>
                    <p class="">
                      {{ $t('Researched_at') }}:
                      <strong>06.03.2013</strong>
                    </p>
                    <p class="">
                      {{ $t('Researched_by') }}:
                      <strong>Specialist</strong>
                    </p>
                  </td>
                  <td>
                    <p class="">
                      {{ $t('Researched_at') }}:
                      <strong>06.03.2013</strong>
                    </p>
                    <p class="">
                      {{ $t('Researched_by') }}:
                      <strong>Specialist</strong>
                    </p>
                  </td>
                  <td>
                    <p class="">
                      {{ $t('Researched_at') }}:
                      <strong>06.03.2013</strong>
                    </p>
                    <p class="">
                      {{ $t('Researched_by') }}:
                      <strong>Specialist</strong>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>
    <template #action="{ close }">
      <VButtons>
        <VButton
          type="button"
          color="primary"
          outlined
          :disabled="isLoading"
          @click="
            () => {
              close()
              $emit('medicalExamination')
            }
          "
        >
          {{ $t('For_medical_examination') }}
        </VButton>
        <VButton
          type="button"
          color="danger"
          outlined
          :disabled="isLoading"
          @click="
            () => {
              close()
              $emit('withdrawal')
            }
          "
        >
          {{ $t('Withdrawal') }}
        </VButton>
      </VButtons>
    </template>
  </VModal>
</template>

<style scoped lang="scss">
.table {
  tbody {
    tr {
      td {
        vertical-align: baseline;
      }
    }
  }
}
.is-dark {
  .table {
    thead {
      background-color: url(--dark);
    }
  }
}
</style>
