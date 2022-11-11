<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useNotyf } from '/@src/composable/useNotyf'

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
  (e: 'donation'): void
  (e: 'withdrawal'): void
}>()

const route = useRoute()
const router = useRouter()
const notif = useNotyf()
const { locale, t } = useI18n()
const isLoading = ref(false)
const title = ref('')
const formData = reactive({
  weight: '',
  height: '',
  temperature: '',
  arterial_pressure: '',
  pulse: '',
  lymph_nodes: 0,
  liver_spleen: 0,
  skin_mucous_membranes: 0,
  in_lungs: 0,
  heart: 0,
})

function onClose() {
  emits('update:isOpen', false)
}
</script>

<template>
  <VModal
    :open="isOpen"
    size="big"
    :title="$t('Medical_inspection')"
    actions="right"
    @close="onClose"
  >
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
                      {{ $t('Arterial_pressure') }}
                    </p>
                  </td>
                  <td>
                    <VField>
                      <VControl>
                        <VIMaskInput
                          v-model.trim="formData.arterial_pressure"
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
                      <VControl>
                        <div class="columns">
                          <div class="column">
                            <VRadio
                              v-model="formData.lymph_nodes"
                              :value="0"
                              :label="$t('Not_increased')"
                              color="primary"
                            />
                          </div>
                          <div class="column">
                            <VRadio
                              v-model="formData.lymph_nodes"
                              :value="1"
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
                      {{ $t('Liver_spleen') }}
                    </p>
                  </td>
                  <td>
                    <VField>
                      <VControl>
                        <div class="columns">
                          <div class="column">
                            <VRadio
                              v-model="formData.liver_spleen"
                              :value="0"
                              :label="$t('Not_palpated')"
                              color="primary"
                            />
                          </div>
                          <div class="column">
                            <VRadio
                              v-model="formData.liver_spleen"
                              :value="1"
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
                              v-model="formData.skin_mucous_membranes"
                              :value="0"
                              :label="$t('Pure')"
                              color="primary"
                            />
                          </div>
                          <div class="column">
                            <VRadio
                              v-model="formData.skin_mucous_membranes"
                              :value="1"
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
                              v-model="formData.in_lungs"
                              :value="0"
                              :label="$t('No_wheezing')"
                              color="primary"
                            />
                          </div>
                          <div class="column">
                            <VRadio
                              v-model="formData.in_lungs"
                              :value="1"
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
                              :value="0"
                              :label="$t('Fine')"
                              color="primary"
                            />
                          </div>
                          <div class="column">
                            <VRadio
                              v-model="formData.heart"
                              :value="1"
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
