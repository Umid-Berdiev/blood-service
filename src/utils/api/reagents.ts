import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function fetchReagents(payload: any) {
  try {
    const { data } = await api({
      url: `/reagents`,
      params: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function storeReagent(payload: any) {
  try {
    const { data } = await api({
      url: `/reagents`,
      method: 'POST',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function updateReagent(reagentID: number, payload: any) {
  try {
    const { data } = await api({
      url: `/reagents/${reagentID}`,
      method: 'PUT',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function removeReagent(reagentID: number) {
  try {
    const { data } = await api({
      url: `/reagents/${reagentID}`,
      method: 'DELETE',
    })

    return data
  } catch (error) {
    throw error
  }
}
