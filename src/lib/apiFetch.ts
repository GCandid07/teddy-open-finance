const BASE_URL = "https://boasorte.teddybackoffice.com.br"

type FetchOptions = RequestInit & {
  params?: Record<string, string | number>
}

export async function apiFetch(endpoint: string, options: FetchOptions = {}) {
  let url = BASE_URL + endpoint

  if (options.params) {
    const queryString = new URLSearchParams(options.params as Record<string, string>)
    url += `?${queryString.toString()}`
  }

  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  })

  if (!res.ok) {
    const error = await res.json().catch(() => ({}))
    throw new Error(error.message || "Erro ao realizar a requisição")
  }

  const contentType = res.headers.get("Content-Type") || ""

  if (contentType.includes("application/json")) {
    return res.json()
  } else {
    return res.text()
  }
}
