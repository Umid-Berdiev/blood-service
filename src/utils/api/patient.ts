import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function patientList(payload: any) {
  try {
    const { data } = await api({
      url: '',
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
      url: '',
      method: 'POST',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function updatePatientById(payload: any) {
  try {
    const { data } = await api({
      url: '',
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
      url: `${id}`,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function visitCardList(payload: any) {
  try {
    const { data } = await api({
      url: '',
      params: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function createVisitCard(payload: any) {
  try {
    const { data } = await api({
      url: '',
      method: 'POST',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function updateVisitCardById(payload: any) {
  try {
    const { data } = await api({
      url: '',
      method: 'PUT',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function fetchVisitCardById(id: number | string) {
  try {
    const { data } = await api({
      url: `${id}`,
    })

    return data
  } catch (error) {
    throw error
  }
}
