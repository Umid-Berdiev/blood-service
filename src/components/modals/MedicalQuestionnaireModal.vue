<script setup lang="ts">
import { flatten } from 'lodash'
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { fetchQuestionsList, storePatientQuestionnaire } from '/@src/utils/api/patient'

interface AnswerInterface {
  id?: number
  question_id?: number
  value: string | number | boolean
}

interface QuestionInterface {
  id: number
  question_category_id?: number
  name?: string
  answer_type?: string | number | boolean
  question_answer: string | number | boolean
}

interface MedicalQuestionnaireFormInterface {
  id?: number
  name?: string
  questions: QuestionInterface[]
}

const props = withDefaults(
  defineProps<{
    visitcardId: number | null
    isOpen: boolean
  }>(),
  {
    visitcardId: null,
    isOpen: false,
  }
)

const emits = defineEmits<{
  (e: 'update:isOpen', value: boolean): void
  (e: 'laboratoryResearch'): void
  (e: 'withdrawal'): void
}>()

const route = useRoute()
const router = useRouter()
const notif = useNotyf()
const { t } = useI18n()
const isLoading = ref(false)
const title = t('Medical_questionnaire_before_donation')
const medicalQuestionnaireForm = ref<MedicalQuestionnaireFormInterface[]>([])
// const medicalQuestionnaireFormAnswers = ref<AnswerInterface[]>([])

await questionsList()

async function questionsList() {
  const res = await fetchQuestionsList(props.visitcardId as number)
  medicalQuestionnaireForm.value = res.result
}

async function onSubmit() {
  try {
    isLoading.value = true
    const medicalQuestionnaireFormAnswers = flatten(
      medicalQuestionnaireForm.value.map((block) =>
        block.questions.map((question) => ({
          question_id: question.id,
          value: question.question_answer,
        }))
      )
    )
    // console.log({ medicalQuestionnaireFormAnswers })

    await storePatientQuestionnaire(props.visitcardId as number, {
      answers: medicalQuestionnaireFormAnswers,
    })
    notif.success(t('Success'))
  } catch (error: any) {
    notif.error(error.message)
  } finally {
    isLoading.value = false
  }
}
function onClose() {
  emits('update:isOpen', false)
}
</script>

<template>
  <VModal :open="isOpen" size="extra-big" :title="title" actions="right" @close="onClose">
    <template #content>
      <form id="questionnaire-form" @submit.prevent="onSubmit">
        <table class="table is-bordered is-fullwidth">
          <template
            v-for="(block, blockIndex) in medicalQuestionnaireForm"
            :key="block.id"
          >
            <thead>
              <tr>
                <th class="has-text-centered">{{ block.name }}</th>
                <th class="has-text-centered">{{ $t('Answer') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(question, questionIndex) in block.questions" :key="question.id">
                <td>{{ question.name }}</td>
                <td>
                  <VField>
                    <VControl>
                      <VTextarea
                        v-if="question.answer_type === 'text'"
                        v-model="
                          medicalQuestionnaireForm[blockIndex].questions[questionIndex]
                            .question_answer
                        "
                        :rows="1"
                      />
                      <VCheckbox
                        v-if="question.answer_type === 'boolean'"
                        v-model="
                          medicalQuestionnaireForm[blockIndex].questions[questionIndex]
                            .question_answer
                        "
                        true-value="1"
                        :false-value="null"
                        color="primary"
                        class="p-0"
                      />
                      <!-- <p class="help has-text-danger">{{ errors.age[0] }}</p> -->
                    </VControl>
                  </VField>
                </td>
              </tr>
            </tbody>
          </template>
        </table>
      </form>
    </template>
    <template #action="{ close }">
      <VButtons>
        <VButton
          type="button"
          color="warning"
          :disabled="isLoading"
          @click="
            () => {
              close()
              $emit('laboratoryResearch')
            }
          "
        >
          {{ $t('Send_for_examination') }}
        </VButton>
        <VButton
          type="button"
          color="danger"
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
        <SubmitButton form="questionnaire-form" :loading="isLoading" />
      </VButtons>
    </template>
  </VModal>
</template>

<style scoped lang="scss">
table {
  thead {
    tr {
      th:first-child {
        width: 70%;
      }
    }
  }
}
</style>
