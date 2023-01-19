<script setup lang="ts">
import { PatientInterface } from '/@src/utils/interfaces'
import { fetchDistricts, fetchRegions } from '/@src/utils/api/additional'
const props = defineProps<{
  patient: PatientInterface
  errors: {
    region_id: string[]
    district_id: string[]
    address: string[]
    work_study_place: string[]
    email: string[]
  }
}>()
const emits = defineEmits(['update:patient', 'editing'])
const form = computed({
  get() {
    const obj = {
      ...props.patient,
      phone_number: props.patient.phone_number ?? '',
      phone_work: props.patient.phone_work ?? '',
      phone_home: props.patient.phone_home ?? '',
    }
    return obj
  },
  set(val) {
    emits('update:patient', val)
  },
})
const regions = ref([])
const districts = ref([])

onMounted(async () => {
  const res = await fetchRegions()
  regions.value = res.result
})

watch(
  () => form.value.region_id,
  async function (newVal) {
    if (newVal) {
      // form.value.district_id = null
      const res = await fetchDistricts(newVal)
      districts.value = res.result
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="fieldset p-5">
    <VField v-slot="{ id }" :label="$t('Region')" required>
      <VControl>
        <Multiselect
          v-model="form.region_id"
          :attrs="{ id }"
          label="name"
          value-prop="id"
          :searchable="true"
          track-by="name"
          :options="regions"
          :placeholder="$t('Region')"
          @input="$emit('editing', 'region_id')"
        />
        <p class="help has-text-danger">{{ errors.region_id[0] }}</p>
      </VControl>
    </VField>
    <VField v-slot="{ id }" :label="$t('District')" required>
      <VControl>
        <Multiselect
          v-model="form.district_id"
          :attrs="{ id }"
          label="name"
          value-prop="id"
          :searchable="true"
          track-by="name"
          :options="districts"
          :placeholder="$t('District')"
          :disabled="!form.region_id"
          @input="$emit('editing', 'district_id')"
        />
        <p class="help has-text-danger">{{ errors.district_id[0] }}</p>
      </VControl>
    </VField>
    <VField :label="$t('Additional_address')">
      <VControl>
        <VTextarea
          v-model="form.address"
          rows="2"
          :placeholder="$t('Additional_address')"
          @input="$emit('editing', 'address')"
        />
        <p class="help has-text-danger">{{ errors.address[0] }}</p>
      </VControl>
    </VField>
    <VField :label="$t('Place_work_study')">
      <VControl>
        <VTextarea
          v-model="form.work_study_place"
          rows="2"
          :placeholder="$t('Place_work_study')"
          @input="$emit('editing', 'work_study_place')"
        />
        <p class="help has-text-danger">{{ errors.work_study_place[0] }}</p>
      </VControl>
    </VField>
    <VField :label="$t('Email')">
      <VControl>
        <VInput
          v-model="form.email"
          type="text"
          :placeholder="$t('Email')"
          @input="$emit('editing', 'email')"
        />
        <p class="help has-text-danger">{{ errors.email[0] }}</p>
      </VControl>
    </VField>
    <VField :label="$t('Phone_mobile')">
      <VControl>
        <VIMaskInput
          v-model="form.phone_number"
          class="input"
          :options="{
            mask: '{998}(00)000-00-00',
            // lazy: false,
          }"
          placeholder="Format: 998(00)000-00-00"
        />
      </VControl>
    </VField>
    <VField :label="$t('Phone_home')">
      <VControl>
        <VIMaskInput
          v-model="form.phone_home"
          class="input"
          :options="{
            mask: '{998}(00)000-00-00',
            // lazy: false,
          }"
          placeholder="Format: 998(00)000-00-00"
        />
      </VControl>
    </VField>
    <VField :label="$t('Phone_work')">
      <VControl>
        <VIMaskInput
          v-model="form.phone_work"
          class="input"
          :options="{
            mask: '{998}(00)000-00-00',
            // lazy: false,
          }"
          placeholder="Format: 998(00)000-00-00"
        />
      </VControl>
    </VField>
  </div>
</template>
