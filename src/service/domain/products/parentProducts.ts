import { BASE_URL, PARENT_PRODUCT_URL } from "../../../constants/config";
import { apiClient } from "../../cliants/apiCliant";

export const getParentProducts = async (url: string) => {
  const res = await apiClient.get(url)
  return res.data.body
}