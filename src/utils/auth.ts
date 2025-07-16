const AUTH_KEY = "authUserName"

export function setAuthUserName(name: string) {
  sessionStorage.setItem(AUTH_KEY, name)
}

export function getAuthUserName(): string | null {
  return sessionStorage.getItem(AUTH_KEY)
}

export function logout() {
  sessionStorage.removeItem(AUTH_KEY)
}

export function isAuthenticated() {
  return Boolean(getAuthUserName())
}
