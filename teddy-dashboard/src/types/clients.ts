export type Client = {
  name: string,
  salary: number,
  companyValuation: number
}

export type Clients = {
  id: number
  createdAt: string
  updatedAt: string
} & Client

export type ClientsResponse = {
  clients: Clients[]
  currentPage: number
  totalPages: number
}
