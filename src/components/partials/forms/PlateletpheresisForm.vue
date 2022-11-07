<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { PlateletpheresisFormInterface } from '/@src/utils/interfaces'

const props = withDefaults(
  defineProps<{
    errors: {
      // age: string[]
      // profession: string[]
      // checkbox1: string[]
    }
  }>(),
  {
    errors: () => ({
      //
    }),
    form: {
      //
    },
  }
)

const emits = defineEmits<{
  // (e: 'update:form', value: PlateletpheresisFormInterface): void
  (e: 'editing', value: string): void
}>()

const route = useRoute()
const router = useRouter()
const notif = useNotyf()
const { locale } = useI18n()
const isLoading = ref(false)
const formData = reactive({})
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
  <div class="table-container">
    <table class="table is-bordered is-fullwidth">
      <thead>
        <tr>
          <th :colspan="4" class="has-text-centered">
            {{ $t('Laboratory_research_types') }}
          </th>
        </tr>
        <tr>
          <th class="has-text-centered">
            {{ $t('Исследования на гемотрансмиссивные инфекции') }}
          </th>
          <th class="has-text-centered">
            {{ $t('Клинико-биохимические исследования') }}
          </th>
          <th class="has-text-centered">{{ $t('Серологические исследования') }}</th>
          <th class="has-text-centered">{{ $t('Иммунологические исследования') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <VField>
              <VControl>
                <VCheckbox
                  class="p-0"
                  v-model="formData.checkbox1"
                  color="primary"
                  :label="$t('HBsAg')"
                />
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  class="p-0"
                  v-model="formData.checkbox2"
                  color="primary"
                  :label="$t('АнтиHCV')"
                />
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  class="p-0"
                  v-model="formData.checkbox3"
                  color="primary"
                  :label="$t('ВИП')"
                />
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  class="p-0"
                  v-model="formData.checkbox4"
                  color="primary"
                  :label="$t('RW')"
                />
              </VControl>
            </VField>
          </td>
          <td>
            <VField>
              <VControl>
                <VCheckbox
                  class="p-0"
                  v-model="formData.checkbox5"
                  color="primary"
                  :label="$t('Билирубин, мл.моль/л')"
                />
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  class="p-0"
                  v-model="formData.checkbox6"
                  color="primary"
                  :label="$t('Общий белок, г/л')"
                />
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  class="p-0"
                  v-model="formData.checkbox7"
                  color="primary"
                  :label="$t('Тимоловые пробы, ед.')"
                />
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  class="p-0"
                  v-model="formData.checkbox8"
                  color="primary"
                  :label="$t('Лекоциты (Z), ед/л')"
                />
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  class="p-0"
                  v-model="formData.checkbox9"
                  color="primary"
                  :label="$t('Тромбоциты, ед/л')"
                />
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  class="p-0"
                  v-model="formData.checkbox10"
                  color="primary"
                  :label="$t('СОЭ, мл/ч')"
                />
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  class="p-0"
                  v-model="formData.checkbox11"
                  color="primary"
                  :label="$t('Эритроциты, ед/л')"
                />
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  class="p-0"
                  v-model="formData.checkbox12"
                  color="primary"
                  :label="$t('Гематокрит, %')"
                />
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  class="p-0"
                  v-model="formData.checkbox13"
                  color="primary"
                  :label="$t('Базофилы, %')"
                />
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  class="p-0"
                  v-model="formData.checkbox14"
                  color="primary"
                  :label="$t('Эозинофилы, %')"
                />
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  class="p-0"
                  v-model="formData.checkbox15"
                  color="primary"
                  :label="$t('Палочкоядерные, %')"
                />
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  class="p-0"
                  v-model="formData.checkbox16"
                  color="primary"
                  :label="$t('Сегментоядерные, %')"
                />
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  class="p-0"
                  v-model="formData.checkbox17"
                  color="primary"
                  :label="$t('Лимфоциты, %')"
                />
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  class="p-0"
                  v-model="formData.checkbox18"
                  color="primary"
                  :label="$t('Моноциты, %')"
                />
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  class="p-0"
                  v-model="formData.checkbox19"
                  color="primary"
                  :label="$t('ALT, мл.моль/л')"
                />
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  class="p-0"
                  v-model="formData.checkbox20"
                  color="primary"
                  :label="$t('Plmal')"
                />
              </VControl>
            </VField>
          </td>
          <td>
            <VField>
              <VControl>
                <VCheckbox
                  class="p-0"
                  v-model="formData.checkbox21"
                  color="primary"
                  :label="$t('Реакция Хеддельсона')"
                />
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  class="p-0"
                  v-model="formData.checkbox22"
                  color="primary"
                  :label="$t('Титр антистафилакокковых антител')"
                />
              </VControl>
            </VField>
          </td>
          <td>
            <VField>
              <VControl>
                <VCheckbox
                  class="p-0"
                  v-model="formData.checkbox23"
                  color="primary"
                  :label="$t('Группа крови окончательная')"
                />
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  class="p-0"
                  v-model="formData.checkbox24"
                  color="primary"
                  :label="$t('Резус-фактор')"
                />
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  class="p-0"
                  v-model="formData.checkbox25"
                  color="primary"
                  :label="$t('Титр естественных тел')"
                />
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  class="p-0"
                  v-model="formData.checkbox26"
                  color="primary"
                  :label="$t('Иммунные антитела неполной формы')"
                />
              </VControl>
            </VField>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
.table {
  td {
    vertical-align: baseline;
  }
}
.is-dark {
  .table {
    thead {
      background-color: var(--dark-sidebar-dark-2);
    }
  }
}
</style>
