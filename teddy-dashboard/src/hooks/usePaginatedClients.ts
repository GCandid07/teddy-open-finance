import { getUsers } from "@/api/clients"
import type { ClientsResponse } from "@/types/clients"
import { useEffect, useState } from "react"

export function usePaginatedUsers() {
  const [cache, setCache] = useState<Record<string, ClientsResponse>>({})
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(12)
  const [isLoading, setIsLoading] = useState(false)
  const [forceRefetch, setForceRefetch] = useState(false)
  const [lastValidData, setLastValidData] = useState<ClientsResponse | null>(null)

  const cacheKey = `${page}-${limit}`
  const data = cache[cacheKey]

  useEffect(() => {
    if (!forceRefetch && data) {
      setLastValidData(data)
      return
    }

    setIsLoading(true)

    getUsers({ page, limit }).then((response) => {
      setCache((prev) => ({
        ...prev,
        [cacheKey]: response,
      }))
      setLastValidData(response)
      setIsLoading(false)
      setForceRefetch(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, forceRefetch])

  return {
    data: data ?? lastValidData,
    page,
    setPage,
    limit,
    setLimit,
    isLoading,
    totalPages: (data ?? lastValidData)?.totalPages ?? 1,
    refetch: () => setForceRefetch(true),
  }
}
