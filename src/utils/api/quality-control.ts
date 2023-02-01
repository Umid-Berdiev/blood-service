import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function fetchQualityControlList() {
  try {
    const { data } = await api({
      url: `/quality-control`,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function storeQualityControl(id: number, payload: any) {
  try {
    const { data } = await api({
      url: `/quality-control/${id}`,
      method: 'PUT',
      data: payload,
    })

    return data
  } catch (error) {
    throw error
  }
}
