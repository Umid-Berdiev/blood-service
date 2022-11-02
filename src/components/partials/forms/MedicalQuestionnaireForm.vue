<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { MedicalQuestionnaireFormInterface } from '/@src/utils/interfaces'

const props = withDefaults(
  defineProps<{
    form: MedicalQuestionnaireFormInterface
    errors: {
      age: string[]
      profession: string[]
      checkbox1: string[]
    }
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
  (e: 'update:form'): void
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
</script>

<template>
  <table class="table is-bordered is-fullwidth">
    <thead>
      <tr>
        <th class="has-text-centered">{{ $t('Questions') }} ({{ $t('Block') }}#1)</th>
        <th class="has-text-centered">{{ $t('Answer') }}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ $t('How_old_are_you') }}</td>
        <td>
          <VField>
            <VControl>
              <VInput
                v-model="computedForm.age"
                type="number"
                :placeholder="$t('Age')"
                @input="$emit('editing', 'age')"
              />
              <p class="help has-text-danger">{{ errors.age[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>{{ $t('Profession') }}</td>
        <td>
          <VField>
            <VControl>
              <VInput
                v-model="computedForm.profession"
                :placeholder="$t('Type_profession')"
                @input="$emit('editing', 'profession')"
              />
              <p class="help has-text-danger">{{ errors.profession[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>{{ $t('Когда в последний раз Вы сдавали кровь?') }}</td>
        <td>
          <VField>
            <VControl>
              <VInput v-model="computedForm.profession" />
              <p class="help has-text-danger">{{ errors.profession[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>
          {{
            $t(
              'Когда в последний раз Вы были на приеме у вашего врача? По какой причине?'
            )
          }}
        </td>
        <td>
          <VField>
            <VControl>
              <VInput v-model="computedForm.profession" />
              <p class="help has-text-danger">{{ errors.profession[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th class="has-text-centered">{{ $t('For_women') }}</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          {{ $t('Вы беременны?') }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox1" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>
          {{ $t('За последние 6 месяцев были ли у Вас роды или выкидыши?') }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox2" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>
          {{ $t('В настоящее время кормите ли Вы грудью?') }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox3" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th class="has-text-centered">{{ $t('Questions') }} ({{ $t('Block') }}#2)</th>
        <th class="has-text-centered"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          {{ $t('Вы сегодня себя хорошо чувствуете?') }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox4" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
    </tbody>
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
