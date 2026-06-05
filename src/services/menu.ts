import api from "./api"

export async function fetchMenus() {
  const response = await api.get(
    "/menu/menus/"
  )

  return response.data
}