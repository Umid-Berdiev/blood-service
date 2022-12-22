import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function storeMedicalInspectionData(visitcardID: number, payload: any) {
  try {
    const { data } = await api({
      url: `/visit-cards/${visitcardID}/medical-examinations`,
      method: 'POST',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}
