<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'
import { storeMedicalInspectionData } from '/@src/utils/api/medical-inspection'

interface MedicalInspectionFormInterface {
  weight: string
  height: string
  temperature: string
  blood_pressure: string
  pulse: string
  lymph_node: number | null
  liver: number | null
  skin: number | null
  lung: number | null
  heart: number | null
}

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
  (e: 'donation'): void
  (e: 'withdrawal'): void
}>()

const route = useRoute()
const router = useRouter()
const { locale, t } = useI18n()
const notif = useNotyf()
const isLoading = ref(false)
const title = ref(t('Medical_inspection'))
const formData = ref<MedicalInspectionFormInterface>({
  weight: '',
  height: '',
  temperature: '',
  blood_pressure: '',
  pulse: '',
  lymph_node: 0,
  liver: 0,
  skin: 0,
  lung: 0,
  heart: 0,
})

const formErrors = reactive({
  weight: [],
  height: [],
  temperature: [],
  blood_pressure: [],
  pulse: [],
  lymph_node: [],
  liver: [],
  skin: [],
  lung: [],
  heart: [],
})

// hooks
watchEffect(() => {
  if (props.visitcard && props.visitcard.medical_examination) {
    formData.value = props.visitcard.medical_examination
  }
})

// functions
function onClose() {
  emits('update:isOpen', false)
}

async function onSubmit() {
  try {
    isLoading.value = true
    const res = await storeMedicalInspectionData(
      props.visitcard.id as number,
      formData.value
    )
    notif.success(t('Data_saved_successfully'))
  } catch (error: any) {
    notif.error(t('Something_went_wrong'))
    Object.assign(formErrors, error.response?.data?.errors)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <VModal :open="isOpen" size="big" :title="title" actions="right" @close="onClose">
    <template #content>
      <!-- <h1 class="has-text-centered is-size-3">
        {{ $t('Medical_inspection') }}
      </h1>
      <br /> -->
      <div class="columns">
        <div class="column">
          <div class="table-container">
            <table class="table is-bordered is-fullwidth">
              <tbody>
                <tr>
                  <td>
                    <p class="">
                      {{ $t('Weight_kg') }}
                    </p>
                  </td>
                  <td>
                    <VField>
                      <VControl>
                        <VInput
                          v-model.trim="formData.weight"
                          class="text-hover-primary"
                          type="number"
                          :min="10"
                          step=".1"
                          :max="300"
                        />
                      </VControl>
                    </VField>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="">
                      {{ $t('Height_sm') }}
                    </p>
                  </td>
                  <td>
                    <VField>
                      <VControl>
                        <VInput
                          v-model.trim="formData.height"
                          class="text-hover-primary"
                          type="number"
                          :min="10"
                          step=".1"
                          :max="300"
                        />
                      </VControl>
                    </VField>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="">
                      {{ $t('Temperature') }}
                    </p>
                  </td>
                  <td>
                    <VField>
                      <VControl>
                        <VInput
                          v-model.trim="formData.temperature"
                          class="text-hover-primary"
                          type="number"
                          :min="10"
                          step=".1"
                          :max="50"
                        />
                      </VControl>
                    </VField>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="">
                      {{ $t('blood_pressure') }}
                    </p>
                  </td>
                  <td>
                    <VField>
                      <VControl>
                        <VIMaskInput
                          v-model.trim="formData.blood_pressure"
                          class="input"
                          :options="{
                            mask: '000 / 000',
                            pattern: /^$|^\d{3}$/,
                          }"
                          placeholder="000 / 000"
                        />
                      </VControl>
                    </VField>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="">
                      {{ $t('Pulse_beats_min') }}
                    </p>
                  </td>
                  <td>
                    <VField>
                      <VControl>
                        <VInput
                          v-model.trim="formData.pulse"
                          class="text-hover-primary"
                          type="number"
                          :min="10"
                          step=".1"
                          :max="100"
                        />
                      </VControl>
                    </VField>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="">
                      {{ $t('Lymph_nodes') }}
                    </p>
                  </td>
                  <td>
                    <VField>
                      <VControl raw>
                        <VRadio
                          v-model="formData.lymph_node"
                          :value="false"
                          :label="$t('Not_increased')"
                          color="primary"
                        />
                        <VRadio
                          v-model="formData.lymph_node"
                          :value="true"
                          :label="$t('Increased')"
                          color="primary"
                        />
                      </VControl>
                    </VField>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="">
                      {{ $t('Liver_spleen') }}
                    </p>
                  </td>
                  <td>
                    <VField>
                      <VControl>
                        <div class="columns">
                          <div class="column">
                            <VRadio
                              v-model="formData.liver"
                              :value="false"
                              :label="$t('Not_palpated')"
                              color="primary"
                            />
                          </div>
                          <div class="column">
                            <VRadio
                              v-model="formData.liver"
                              :value="true"
                              :label="$t('Increased')"
                              color="primary"
                            />
                          </div>
                        </div>
                      </VControl>
                    </VField>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="">
                      {{ $t('Skin and visible mucous membranes') }}
                    </p>
                  </td>
                  <td>
                    <VField>
                      <VControl>
                        <div class="columns">
                          <div class="column">
                            <VRadio
                              v-model="formData.skin"
                              :value="false"
                              :label="$t('Pure')"
                              color="primary"
                            />
                          </div>
                          <div class="column">
                            <VRadio
                              v-model="formData.skin"
                              :value="true"
                              :label="$t('With signs of damage')"
                              color="primary"
                            />
                          </div>
                        </div>
                      </VControl>
                    </VField>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="">
                      {{ $t('In_lungs') }}
                    </p>
                  </td>
                  <td>
                    <VField>
                      <VControl>
                        <div class="columns">
                          <div class="column">
                            <VRadio
                              v-model="formData.lung"
                              :value="false"
                              :label="$t('No_wheezing')"
                              color="primary"
                            />
                          </div>
                          <div class="column">
                            <VRadio
                              v-model="formData.lung"
                              :value="true"
                              :label="$t('Wheezing')"
                              color="primary"
                            />
                          </div>
                        </div>
                      </VControl>
                    </VField>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="">
                      {{ $t('Heart') }}
                    </p>
                  </td>
                  <td>
                    <VField>
                      <VControl>
                        <div class="columns">
                          <div class="column">
                            <VRadio
                              v-model="formData.heart"
                              :value="false"
                              :label="$t('Fine')"
                              color="primary"
                            />
                          </div>
                          <div class="column">
                            <VRadio
                              v-model="formData.heart"
                              :value="true"
                              :label="$t('Not_fine')"
                              color="primary"
                            />
                          </div>
                        </div>
                      </VControl>
                    </VField>
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
        <SubmitButton type="button" :loading="isLoading" @click="onSubmit" />
        <VButton
          type="button"
          color="primary"
          outlined
          :disabled="isLoading"
          @click="
            () => {
              close()
              $emit('donation')
            }
          "
        >
          {{ $t('For_donation') }}
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
//
</style>
