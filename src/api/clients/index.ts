import { apiFetch } from "@/lib/apiFetch"
import { Client, ClientsResponse } from "@/types/clients"

/**
 * Parameters to get user
 * @param id - User's id - string
 */

export async function getUser({ id }: { id: string }) {
  return await apiFetch(`/users/${id}`)
}

export async function getUsers(
  { page, limit }: {page: number, limit: number}
): Promise<ClientsResponse> {
  return await apiFetch(`/users?page=${page}&limit=${limit}`)
}

/**
 * User parameters to create user
 * @param name - User's name - string
 * @param salary - User's salary - number
 * @param companyValuation - User's company valuation - number
 */

export async function createUser({ user }: { user: Client }) {
  return await apiFetch(`/users`, {
    method: "POST",
    body: JSON.stringify(user),
  })
}

/**
 * Parameters to update user
 * @param id - User's id - string
 * @param user - User's data - object
 * @param user.name - User's name - string
 * @param user.salary - User's salary - number
 * @param user.companyValuation - User's company valuation - number
 */

export async function updateUser({ id, user }: { id: number, user: Client }) {
  return await apiFetch(`/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify(user),
  })
}

/**
 * Parameters to delete user
 * @param id - User's id - string
 */

export async function deleteUser({ id }: { id: number }) {
  return await apiFetch(`/users/${id}`, {
    method: "DELETE",
  })
}
