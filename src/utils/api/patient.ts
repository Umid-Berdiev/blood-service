import { WithdrawalFormInterface } from '../interfaces'
import { useApi } from '/@src/composable/useApi'

const api = useApi()

// patients module
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

export async function storeDonation(visitcardID: number, payload: any) {
  try {
    const { data } = await api({
      url: `/visit-cards/${visitcardID}/donation`,
      method: 'PUT',
      data: payload,
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

export async function createWithdrawalForPatient(
  id: number | null,
  payload: WithdrawalFormInterface
) {
  try {
    const { data } = await api({
      url: `/patients/${id}/rejects`,
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

export async function fetchQuestionsList(id: number) {
  try {
    const { data } = await api({
      url: `/visit-cards/${id}/questionnaire`,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function storePatientQuestionnaire(id: number, payload: any) {
  try {
    const { data } = await api({
      url: `/visit-cards/${id}/questionnaire`,
      method: 'POST',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function fetchLaboratoryResearchFields(visitcardID: number) {
  try {
    const { data } = await api({
      url: `/visit-cards/${visitcardID}/laboratory-research`,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function sendingToLaboratoryResearch(visitcardID: number, payload: any) {
  try {
    const { data } = await api({
      url: `/visit-cards/${visitcardID}/laboratory-research`,
      method: 'PUT',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function storeHemotransmissionResearchResults(
  visitcardID: number,
  payload: any
) {
  try {
    const { data } = await api({
      url: `/visit-cards/${visitcardID}/hemotransmission-research`,
      method: 'POST',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}
