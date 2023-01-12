import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function fetchPatientsListForLaboratories(payload: any) {
  try {
    const { data } = await api({
      url: `/patients/laboratory-research`,
      params: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function fetchRequestsForHemotransmissiveLaboratory(
  visitcardID: number,
  payload?: any
) {
  try {
    const { data } = await api({
      url: `/visit-cards/${visitcardID}/hemotransmissive-laboratory`,
      params: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function storeHemotransmissionResearchResults(
  visitcardID: number,
  payload: any
) {
  try {
    const { data } = await api({
      url: `/visit-cards/${visitcardID}/hemotransmissive-laboratory`,
      method: 'PUT',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function fetchRequestsForBiochemicalLaboratory(
  visitcardID: number,
  payload?: any
) {
  try {
    const { data } = await api({
      url: `/visit-cards/${visitcardID}/biochemical-laboratory`,
      params: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function storeBiochemicalResearchResults(visitcardID: number, payload: any) {
  try {
    const { data } = await api({
      url: `/visit-cards/${visitcardID}/biochemical-laboratory`,
      method: 'PUT',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}
