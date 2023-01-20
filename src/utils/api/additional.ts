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

export async function fetchSesOrganizations() {
  try {
    const { data } = await api({
      url: `/csses-organizations`,
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

export async function fetchBloodTypeByID(id: number) {
  try {
    const { data } = await api({
      url: `/blood-types/${id}`,
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

export async function fetchDonationTypeByID(id: number) {
  try {
    const { data } = await api({
      url: `/donation-types/${id}`,
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

export async function fetchImmunizationByID(id: number) {
  try {
    const { data } = await api({
      url: `/immunizations/${id}`,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function fetchWithdrawalReasons() {
  try {
    const { data } = await api({
      url: `/reject-reasons`,
    })

    return data
  } catch (error) {
    throw error
  }
}
