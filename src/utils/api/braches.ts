import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function fetchBranches() {
  try {
    const { data } = await api({
      url: `/branches`,
    })

    return data
  } catch (error) {
    throw error
  }
}

export async function fetchBranchById(id: number) {
  try {
    const { data } = await api({
      url: `/branches/${id}`,
    })

    return data
  } catch (error) {
    throw error
  }
}
