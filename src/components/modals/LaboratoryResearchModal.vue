<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { updatePatientStatus } from '/@src/utils/api/patient'

const props = withDefaults(
  defineProps<{
    patientId: number | null
    isOpen: boolean
  }>(),
  {
    patientId: null,
    isOpen: false,
  }
)

const emits = defineEmits<{
  (e: 'update:isOpen', value: boolean): void
  (e: 'update:status'): void
}>()

const route = useRoute()
const router = useRouter()
const notif = useNotyf()
const { locale, t } = useI18n()
const isLoading = ref(false)
const title = ref(t('Direction_for_laboratory_research'))
const selectedDonationType = ref(null)
const donationTypes = ref([
  {
    id: 1,
    name: t('Whole_blood_donation'),
  },
  {
    id: 2,
    name: t('Plasmapheresis'),
  },
  {
    id: 3,
    name: t('Plateletpheresis'),
  },
])

const formData = reactive({
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
})
const errors = reactive({})

async function submitForm() {
  try {
    isLoading.value = true
    const res = await updatePatientStatus(props.patientId, formData)
    onClose()
  } catch (error) {
    Object.assign(errors, error.response?.data?.errors)
  } finally {
    isLoading.value = false
  }
}

function clearFields() {
  Object.assign(formData, {
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
  })
}

function onClose() {
  clearFields()
  Object.assign(errors, {})
  emits('update:isOpen', false)
}
</script>

<template>
  <VModal :open="isOpen" size="extra-big" :title="title" actions="right" @close="onClose">
    <template #content>
      <div class="columns is-vcentered">
        <div class="column is-narrow has-text-right-desktop">
          <span>{{ $t('Donation_types_list') }}</span>
        </div>
        <div class="column is-2-fullhd is-3-widescreen is-3-desktop is-5-tablet">
          <VField>
            <VControl>
              <Multiselect
                v-model="selectedDonationType"
                :options="donationTypes"
                :placeholder="$t('Select_donation_type')"
                label="name"
                value-prop="id"
              />
            </VControl>
          </VField>
        </div>
      </div>
      <br />
      <div v-if="selectedDonationType === 3" class="table-container">
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
                      v-model="formData.checkbox1"
                      class="p-0"
                      color="primary"
                      :label="$t('HBsAg')"
                    />
                  </VControl>
                </VField>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formData.checkbox2"
                      class="p-0"
                      color="primary"
                      :label="$t('АнтиHCV')"
                    />
                  </VControl>
                </VField>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formData.checkbox3"
                      class="p-0"
                      color="primary"
                      :label="$t('ВИП')"
                    />
                  </VControl>
                </VField>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formData.checkbox4"
                      class="p-0"
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
                      v-model="formData.checkbox5"
                      class="p-0"
                      color="primary"
                      :label="$t('Билирубин, мл.моль/л')"
                    />
                  </VControl>
                </VField>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formData.checkbox6"
                      class="p-0"
                      color="primary"
                      :label="$t('Общий белок, г/л')"
                    />
                  </VControl>
                </VField>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formData.checkbox7"
                      class="p-0"
                      color="primary"
                      :label="$t('Тимоловые пробы, ед.')"
                    />
                  </VControl>
                </VField>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formData.checkbox8"
                      class="p-0"
                      color="primary"
                      :label="$t('Лекоциты (Z), ед/л')"
                    />
                  </VControl>
                </VField>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formData.checkbox9"
                      class="p-0"
                      color="primary"
                      :label="$t('Тромбоциты, ед/л')"
                    />
                  </VControl>
                </VField>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formData.checkbox10"
                      class="p-0"
                      color="primary"
                      :label="$t('СОЭ, мл/ч')"
                    />
                  </VControl>
                </VField>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formData.checkbox11"
                      class="p-0"
                      color="primary"
                      :label="$t('Эритроциты, ед/л')"
                    />
                  </VControl>
                </VField>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formData.checkbox12"
                      class="p-0"
                      color="primary"
                      :label="$t('Гематокрит, %')"
                    />
                  </VControl>
                </VField>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formData.checkbox13"
                      class="p-0"
                      color="primary"
                      :label="$t('Базофилы, %')"
                    />
                  </VControl>
                </VField>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formData.checkbox14"
                      class="p-0"
                      color="primary"
                      :label="$t('Эозинофилы, %')"
                    />
                  </VControl>
                </VField>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formData.checkbox15"
                      class="p-0"
                      color="primary"
                      :label="$t('Палочкоядерные, %')"
                    />
                  </VControl>
                </VField>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formData.checkbox16"
                      class="p-0"
                      color="primary"
                      :label="$t('Сегментоядерные, %')"
                    />
                  </VControl>
                </VField>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formData.checkbox17"
                      class="p-0"
                      color="primary"
                      :label="$t('Лимфоциты, %')"
                    />
                  </VControl>
                </VField>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formData.checkbox18"
                      class="p-0"
                      color="primary"
                      :label="$t('Моноциты, %')"
                    />
                  </VControl>
                </VField>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formData.checkbox19"
                      class="p-0"
                      color="primary"
                      :label="$t('ALT, мл.моль/л')"
                    />
                  </VControl>
                </VField>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formData.checkbox20"
                      class="p-0"
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
                      v-model="formData.checkbox21"
                      class="p-0"
                      color="primary"
                      :label="$t('Реакция Хеддельсона')"
                    />
                  </VControl>
                </VField>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formData.checkbox22"
                      class="p-0"
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
                      v-model="formData.checkbox23"
                      class="p-0"
                      color="primary"
                      :label="$t('Группа крови окончательная')"
                    />
                  </VControl>
                </VField>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formData.checkbox24"
                      class="p-0"
                      color="primary"
                      :label="$t('Резус-фактор')"
                    />
                  </VControl>
                </VField>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formData.checkbox25"
                      class="p-0"
                      color="primary"
                      :label="$t('Титр естественных тел')"
                    />
                  </VControl>
                </VField>
                <VField>
                  <VControl>
                    <VCheckbox
                      v-model="formData.checkbox26"
                      class="p-0"
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
    <template #action="{ close }">
      <SubmitButton type="button" :loading="isLoading" @click="submitForm">
        {{ $t('Submit_for_research') }}
      </SubmitButton>
    </template>
  </VModal>
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
