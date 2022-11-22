<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
// import { MedicalQuestionnaireFormInterface } from '/@src/utils/interfaces'

interface AnswerInterface {
  id?: number
  question_id?: number
  value: string | number | boolean
}

interface QuestionInterface {
  id?: number
  question_category_id?: number
  name?: string
  answer_type?: string | number | boolean
  question_answer: string | number | boolean
}

interface MedicalQuestionnaireFormInterface {
  id?: number
  name?: string
  questions?: QuestionInterface[]
}

const props = withDefaults(
  defineProps<{
    errors: {
      age: string[]
      profession: string[]
      checkbox1: string[]
    }
    form: MedicalQuestionnaireFormInterface[]
  }>(),
  {
    errors: () => ({
      age: [],
      profession: [],
      checkbox1: [],
    }),
  }
)

const emits = defineEmits<{
  (e: 'update:form', value: MedicalQuestionnaireFormInterface): void
  (e: 'editing', value: string): void
}>()

const route = useRoute()
const router = useRouter()
const notif = useNotyf()
const { locale } = useI18n()
const isLoading = ref(false)
const computedForm = computed({
  get() {
    return props.form
  },
  set(val) {
    emits('update:form', val)
  },
})
const answers = ref<AnswerInterface[]>([])

function handleChange(question_id: number, question_answer) {
  const answerIndex = answers.value.findIndex(
    (answer) => answer.question_id == question_id
  )

  if (answerIndex === -1)
    answers.value.push({
      question_id,
      value: question_answer,
    })
  else {
    answers.value[answerIndex].question_id = question_id
    answers.value[answerIndex].value = question_answer
  }
}
</script>

<template>
  <table class="table is-bordered is-fullwidth">
    <template v-for="(block, blockIndex) in computedForm" :key="block.id">
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
                <!-- <VTextarea v-model="computedForm.textarea1" :rows="2" /> -->
                <VTextarea
                  v-if="question.answer_type === 'text'"
                  :value="
                    computedForm[blockIndex].questions[questionIndex].question_answer
                  "
                  @input="handleChange(question.id, question.question_answer)"
                  :rows="1"
                />
                <VCheckbox
                  v-if="question.answer_type === 'boolean'"
                  v-model="question.question_answer"
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
