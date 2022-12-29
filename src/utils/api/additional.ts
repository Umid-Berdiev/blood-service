import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function fetchLanguages() {
  try {
    const { data } = await api({
      url: `/languages`,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function fetchRegions() {
  try {
    const { data } = await api({
      url: `/regions`,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function fetchDistricts(region_id: number) {
  try {
    const { data } = await api({
      url: `/districts`,
      params: { region_id },
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function fetchHealthcareFacilities() {
  try {
    const { data } = await api({
      url: `/medical-organizations`,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function fetchBloodTypes() {
  try {
    const { data } = await api({
      url: `/blood-types`,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function fetchDonationTypes() {
  try {
    const { data } = await api({
      url: `/donation-types`,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function fetchImmunizations() {
  try {
    const { data } = await api({
      url: `/immunizations`,
    })

    return data
  } catch (error) {
    throw error
  }
}
