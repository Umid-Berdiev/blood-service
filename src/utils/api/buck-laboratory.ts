import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function fetchComponentsForSterility(params: any) {
  try {
    const { data } = await api({
      url: `/visit-cards/donation-results/sterility`,
      params,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function storeSterilityResults(donationResultID: number, payload: any) {
  try {
    const { data } = await api({
      url: `/visit-cards/donation-results/${donationResultID}/sterility`,
      method: 'PUT',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}
