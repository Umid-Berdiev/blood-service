import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function visitcardsList(patient_id: number, payload: any) {
  try {
    const { data } = await api({
      url: `/patients/${patient_id}/visit-cards`,
      params: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function createVisitcard(payload: any) {
  try {
    const { data } = await api({
      url: `/patients/${payload.patient_id}/visit-cards`,
      method: 'POST',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function updateVisitcardById(id: number, payload: any) {
  try {
    const { data } = await api({
      url: `/patients/${payload.patient_id}/visit-cards/${id}`,
      method: 'PUT',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function removeVisitcardById(patient_id: number, id: number) {
  try {
    const { data } = await api({
      url: `/patients/${patient_id}/visit-cards/${id}`,
      method: 'DELETE',
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function fetchVisitcardById(
  id: number | string,
  patient_id: number | string
) {
  try {
    const { data } = await api({
      url: `/patients/${patient_id}/visit-cards/${id}`,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function fetchVisitcardStatuses() {
  try {
    const { data } = await api({
      url: `/visit-cards/statuses`,
    })

    return data
  } catch (error) {
    throw error
  }
}
