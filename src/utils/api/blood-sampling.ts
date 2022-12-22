import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function getPatientsForBloodSample(payload: any) {
  try {
    const { data } = await api({
      url: `/patients/blood-samples`,
      params: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function storeBloodSampleData(visitcardID: number, payload: any) {
  try {
    const { data } = await api({
      url: `/visit-cards/${visitcardID}/blood-samples`,
      method: 'POST',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}
