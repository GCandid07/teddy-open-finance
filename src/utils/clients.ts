import { Clients } from "@/types/clients"

const CLIENTS_KEY = "savedClients"

export function getSavedClients(): Clients[] {
  const stored = sessionStorage.getItem(CLIENTS_KEY)
  if (!stored) return []
  
  try {
    return JSON.parse(stored) as Clients[]
  } catch {
    return []
  }
}

export function saveClient(client: Clients): boolean {
  const clients = getSavedClients()
  const exists = clients.some(c => c.id === client.id)

  if (exists) return false

  clients.push(client)

  sessionStorage.setItem(CLIENTS_KEY, JSON.stringify(clients))
  return true
}

export function removeSavedClient(id: number) {
  let clients = getSavedClients()
  clients = clients.filter(c => c.id !== id)
  sessionStorage.setItem(CLIENTS_KEY, JSON.stringify(clients))
}

export function clearSavedClients() {
  sessionStorage.removeItem(CLIENTS_KEY)
}
