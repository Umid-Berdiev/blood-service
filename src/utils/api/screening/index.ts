import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function patientsListForScreening(payload: any) {
  try {
    const { data } = await api({
      url: '/patients/primary-screening',
      params: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function fetchScreeningCompletedDonorsList(payload: any) {
  try {
    const { data } = await api({
      url: '/patients/screening-finished',
      params: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function getPrimaryScreeningResult(visitcardID: number) {
  try {
    const { data } = await api({
      url: `/visit-cards/${visitcardID}/primary-screening-results`,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function storePrimaryScreeningResult(id: number | null, payload: any) {
  try {
    const { data } = await api({
      url: `/visit-cards/${id}/primary-screening-results`,
      method: 'POST',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}
