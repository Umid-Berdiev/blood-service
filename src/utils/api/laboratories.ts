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
