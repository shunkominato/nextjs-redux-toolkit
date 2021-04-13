import { apiClient } from "../../cliants/apiCliant"

export const getUserCartFormt = async (url: string) => {
  const res = await apiClient.get(url)
  return res.data.body
}