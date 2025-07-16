import { getAuthUserName } from "@/utils/auth"

function getFirstName(name: string) {
  return name.trim().split(" ")[0]
}

export function HeaderUser() {
  const fullName = getAuthUserName() ?? "Usuário"
  const firstName = getFirstName(fullName)

  return (
    <span 
      className="text-md font-medium max-w-[120px] truncate block"
      title={fullName}>Olá, {firstName}!
    </span>
  )
}
