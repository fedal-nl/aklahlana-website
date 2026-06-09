import type { Menu } from "../types/menu"
import { fetchJson } from "./api"

export async function fetchMenus() {
  return fetchJson<Menu[]>(
    "/menu/menus/"
  )
}
