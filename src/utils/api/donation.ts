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

export async function fetchContainersForDonation() {
  try {
    const { data } = await api({
      url: `/containers`,
      params: { per_page: 100 },
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
      // params: { per_page: 100 },
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
