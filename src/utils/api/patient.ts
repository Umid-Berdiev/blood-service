import { WithdrawalFormInterface } from '../interfaces'
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

export async function fetchDonorsList(payload: any) {
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

export async function patientsListForCandidate(payload: any) {
  try {
    const { data } = await api({
      url: '/patients/candidate',
      params: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function patientsListRejected(payload: any) {
  try {
    const { data } = await api({
      url: '/patients/rejected',
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

export async function updatePatientById(id: number | null, payload: any) {
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

export async function fetchPatientById(id: number | null) {
  try {
    const { data } = await api({
      url: `/patients/show/${id}`,
    })

    return data
  } catch (error) {
    throw error
  }
}

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
      // url: `/visit-cards/${id}`,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function fetchDonorStatusesList() {
  try {
    const { data } = await api({
      url: `/patients/statuses`,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function createWithdrawalForPatient(
  id: number | null,
  payload: WithdrawalFormInterface
) {
  try {
    const { data } = await api({
      url: `/patients/${id}/withdrawal`,
      method: 'POST',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function updatePatientStatus(id: number | null, payload: any) {
  try {
    const { data } = await api({
      url: `/patients/${id}/status`,
      method: 'PUT',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}
