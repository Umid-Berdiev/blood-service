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
