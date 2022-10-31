import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function patientCategoriesList() {
  try {
    const { data } = await api({
      url: '/patients/categories',
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function patientsList(payload: any) {
  try {
    const { data } = await api({
      url: '/patients',
      params: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function createPatient(payload: any) {
  try {
    const { data } = await api({
      url: '/patients',
      method: 'POST',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function updatePatientById(id: number, payload: any) {
  try {
    const { data } = await api({
      url: `/patients/${id}`,
      method: 'PUT',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function fetchPatientById(id: number | string) {
  try {
    const { data } = await api({
      url: `/patients/${id}`,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function visitcardsList(payload: any) {
  try {
    const { data } = await api({
      url: `/patients/${payload.patient_id}/visit-cards`,
      // url: '/visit-cards',
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
      // url: '/visit-cards',
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
      // url: `/visit-cards/${id}`,
      method: 'PUT',
      data: payload,
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
      // url: `/visit-cards/${id}`,
    })

    return data
  } catch (error) {
    throw error
  }
}
