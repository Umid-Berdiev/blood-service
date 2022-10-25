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
