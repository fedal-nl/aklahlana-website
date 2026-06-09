import type { Menu } from "../types/menu"
import { fetchJson } from "./api"

export const menusQueryKey = ["menus"] as const
export const menusStaleTime =
  1000 * 60 * 30 // 30 minutes save time

const menusCacheKey =
  "aklahlana:menus"

type CachedMenus = {
  data: Menu[]
  updatedAt: number
}

export async function fetchMenus() {
  return fetchJson<Menu[]>(
    "/menu/menus/"
  )
}

export function readCachedMenus() {
  const cachedValue =
    localStorage.getItem(menusCacheKey)

  if (!cachedValue) {
    return null
  }

  try {
    return JSON.parse(
      cachedValue
    ) as CachedMenus
  } catch {
    localStorage.removeItem(
      menusCacheKey
    )

    return null
  }
}

export function writeCachedMenus(
  menus: Menu[]
) {
  localStorage.setItem(
    menusCacheKey,
    JSON.stringify({
      data: menus,
      updatedAt: Date.now(),
    } satisfies CachedMenus)
  )
}
