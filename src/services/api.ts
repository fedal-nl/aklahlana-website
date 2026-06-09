const apiBaseUrl =
  import.meta.env.VITE_API_URL ?? ""

export async function fetchJson<T>(
  path: string,
  init?: RequestInit
) {
  const response = await fetch(
    `${apiBaseUrl}${path}`,
    {
      ...init,
      credentials: "include",
      headers: {
        Accept: "application/json",
        ...init?.headers,
      },
    }
  )

  if (!response.ok) {
    throw new Error(
      `Request failed with status ${response.status}`
    )
  }

  return response.json() as Promise<T>
}
