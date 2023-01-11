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
      url: `/visit-cards/${visitcardID}/hemotransmission-research`,
      method: 'POST',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}
