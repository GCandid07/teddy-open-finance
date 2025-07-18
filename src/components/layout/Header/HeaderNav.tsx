import { Link, useLocation, useNavigate } from "react-router-dom"
import { cn } from "@/lib/utils"
import { logout } from "@/utils/auth"

export function HeaderNav() {
  const location = useLocation()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate("/credentials", { replace: true })
  }

  const { pathname } = location

  return (
    <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex gap-8">
      <Link
        to="/"
        className={cn(
          "text-lg",
          pathname === "/" || pathname === "/clients"
            ? "text-[#EC6724] underline"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        Clientes
      </Link>

      <Link
        to="/clients/saved"
        className={cn(
          "text-lg",
          pathname === "/clients/saved"
            ? "text-[#EC6724] underline"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        Clientes selecionados
      </Link>

      <button
        onClick={handleLogout}
        className="cursor-pointer text-lg text-muted-foreground hover:text-foreground"
      >
        Sair
      </button>
    </nav>
  )
}
