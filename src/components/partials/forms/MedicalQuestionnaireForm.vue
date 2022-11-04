<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { MedicalQuestionnaireFormInterface } from '/@src/utils/interfaces'

const props = withDefaults(
  defineProps<{
    errors: {
      age: string[]
      profession: string[]
      checkbox1: string[]
    }
    form: MedicalQuestionnaireFormInterface
  }>(),
  {
    errors: () => ({
      age: [],
      profession: [],
      checkbox1: [],
    }),
    form: {
      age: '',
      profession: '',
      last_doctor_visit_reason: '',
      date_input1: '',
      date_input2: '',
      date_input3: '',
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false,
      checkbox8: false,
      checkbox9: false,
      checkbox10: false,
      checkbox11: false,
      checkbox12: false,
      checkbox13: false,
      checkbox14: false,
      checkbox15: false,
      checkbox16: false,
      checkbox17: false,
      checkbox18: false,
      checkbox19: false,
      checkbox20: false,
      checkbox21: false,
      checkbox22: false,
      checkbox23: false,
      checkbox24: false,
      checkbox25: false,
      checkbox26: false,
      checkbox27: false,
      checkbox28: false,
      checkbox29: false,
      textarea1: false,
    },
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
</script>

<template>
  <table class="table is-bordered is-fullwidth">
    <thead>
      <tr>
        <th class="has-text-centered">{{ $t('Questions') }} ({{ $t('Block') }} #1)</th>
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
              <IMaskDateInput v-model="computedForm.date_input1" />
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
              <IMaskDateInput v-model="computedForm.date_input2" />
              <p class="help has-text-danger">{{ errors.profession[0] }}</p>
            </VControl>
          </VField>
          <VField>
            <VControl>
              <VTextarea v-model="computedForm.last_doctor_visit_reason" :rows="2" />
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
        <th class="has-text-centered">{{ $t('Questions') }} ({{ $t('Block') }} #2)</th>
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
      <tr>
        <td>
          {{
            $t(
              'Вы страдаете хронической болезнью? (эпилепсия, диабет, рак, болезнь сердца, почек, болезнь крови, хроническая анемия, язва желудка)'
            )
          }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox5" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>
          {{
            $t(
              'Принимаете ли Вы постоянно какое-либо лечение и/или в течение последней недели Вы принимали медикаменты?'
            )
          }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox6" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>
          {{ $t('Вы болели гипатитом (желтухой, бруцеллёзом)?') }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox7" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>
          {{ $t('Вы болели гепатитом (желтухой, бруцеллёзом)?') }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox8" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>
          {{ $t('В прошлом, доктор говорил Вам не сдавать кровь?') }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox9" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>
          {{
            $t(
              'За последние две недели были ли у Вас какие-либо стоматологические процедуры?'
            )
          }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox10" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>
          {{ $t('За последние 6 месяцев выезжали ли Вы в зарубежные страны?') }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox11" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>
          {{
            $t(
              'За последние 3 недели: Была ли у Вас лихорадка или подъем температуры? Посещали ли Вы регионы, эндемичные по малярии'
            )
          }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox12" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>
          {{ $t('В прошлом месяце, Вы получали какую-нибудь вакцинацию?') }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox13" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>
          {{
            $t(
              'За последние 3 месяца наблюдали ли Вы ночную потливость, потерю веса, лихорабку, диарею и увеличение лимфатических узлов?'
            )
          }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox14" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>
          {{
            $t(
              'У Вас был контакт с человеком, зараженным гепатитом (желтухой) или ВИЧ/СПИД в течении 6 месяцев?'
            )
          }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox15" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th class="has-text-centered">{{ $t('Last_6_month') }}:</th>
        <th class="has-text-centered"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          {{ $t('Был ли у Вас случайный, незащищенный секс?') }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox16" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>
          {{ $t('Вы были изнасилованы?') }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox18" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>
          {{ $t('Было ли у Вас более чем 2 половых партнеров?') }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox19" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>
          {{ $t('Пользовались ли Вы услугами коммерческого секса?') }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox20" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>
          {{ $t('Вы были госпитализированы?') }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox21" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>
          {{
            $t(
              'Было ли у Вас хирургическое или др.медицинское вмешательство (эндоскопия)?'
            )
          }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox22" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>
          {{
            $t('Переливалась ли Вам кровь, плазма, альбумин или другие препараты крови?')
          }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox23" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>
          {{
            $t(
              'Принимали ли Вы лечение от венерических инфекций (гонорея, хламидия, язва половых органов или высыпания)?'
            )
          }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox24" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>
          {{ $t('Использовали ли Вы общие иглы, шприцы или скарификаторы?') }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox25" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>
          {{ $t('Делали ли Вы татуировку или пирсинг?') }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox26" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>
          {{ $t('Были ли Вы в местах заключения? Если да, когда?') }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox27" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
          <VField>
            <VControl>
              <!-- <VInput color="primary" class="p-0" v-model="computedForm.input4" /> -->
              <IMaskDateInput v-model="computedForm.date_input3" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>
          {{
            $t(
              'Даете ли Вы согласие на тестирование Вашей крови на ВИЧ/СПИД, гепатиты, сифилис?'
            )
          }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox28" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>
          {{
            $t(
              'Вы желаете сдавать кровь регулярно, и мы можем связаться с Вами в будущем?'
            )
          }}
        </td>
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" class="p-0" v-model="computedForm.checkbox29" />
              <p class="help has-text-danger">{{ errors.checkbox1[0] }}</p>
            </VControl>
          </VField>
        </td>
      </tr>
      <tr>
        <td>
          {{ $t('Что Вы можете добавить в дополнение относительно Вашего здоровья?') }}
        </td>
        <td>
          <VField>
            <VControl>
              <VTextarea v-model="computedForm.textarea1" :rows="2" />
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
