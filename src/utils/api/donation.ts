import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function fetchDonationResults(visitcardID: number) {
  try {
    const { data } = await api({
      url: `/visit-cards/${visitcardID}/donation-results`,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function storeDonationResults(visitcardID: number, payload: any) {
  try {
    const { data } = await api({
      url: `/visit-cards/${visitcardID}/donation-results`,
      method: 'PUT',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function fetchDonationContainers(payload = { page: 1, per_page: 100 }) {
  try {
    const { data } = await api({
      url: `/containers`,
      params: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function storeDonationContainer(payload: any) {
  try {
    const { data } = await api({
      url: `/containers`,
      method: 'POST',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function updateDonationContainer(containerID: number, payload: any) {
  try {
    const { data } = await api({
      url: `/containers/${containerID}`,
      method: 'PUT',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function removeDonationContainer(containerID: number) {
  try {
    const { data } = await api({
      url: `/containers/${containerID}`,
      method: 'DELETE',
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function fetchPostinfusionReactions() {
  try {
    const { data } = await api({
      url: `/postinfusion-reactions`,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function createDonationLabel(payload: any) {
  try {
    const { data } = await api({
      url: `/donation-labels`,
      method: 'POST',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function fetchFreeDonationLabels() {
  try {
    const { data } = await api({
      url: `/donation-labels`,
    })

    return data
  } catch (error) {
    throw error
  }
}

export const completedDonationStatus = [
  { value: 'success', label: 'Успешная донация' },
  { value: 'not_success', label: 'Безуспешная донация' },
]

export const completedDonationStatusTypes = [
  { value: 'normal', label: 'Нормальное завершение' },
  { value: 'not_normal', label: 'Некондиционный забор' },
]

export const apheresisMethods = [
  { value: 'manual', label: 'Ручной' },
  { value: 'device', label: 'Аппаратный' },
]
