import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function fetchDonationsForProcessing(params: any) {
  try {
    const { data } = await api({
      url: `/visit-cards/donation-results/recycling`,
      params,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function fetchProcessingResultsByID(id: number) {
  try {
    const { data } = await api({
      url: `/visit-cards/donation-results/${id}/recycling`,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function storeProcessingResults(id: number, payload: any) {
  try {
    const { data } = await api({
      url: `/visit-cards/donation-results/${id}/recycling`,
      method: 'PUT',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}
