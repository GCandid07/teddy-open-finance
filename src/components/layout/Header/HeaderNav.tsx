import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"

export function HeaderNav() {
  const location = useLocation()

  const { pathname } = location

  return (
    // <nav className="hidden md:flex gap-4 flex-1 justify-center">
    <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex gap-4">
      <Link
        to="/"
        className={cn(
          "text-lg",
          pathname === "/"
            ? "text-[#EC6724] underline"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        Clientes
      </Link>

      <Link
        to="/clients/selected"
        className={cn(
          "text-lg",
          pathname === "/clients/selected"
            ? "text-[#EC6724] underline"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        Clientes selecionados
      </Link>

      <Link
        to="/"
        className="text-lg text-muted-foreground hover:text-foreground"
      >
        Sair
      </Link>
    </nav>
  )
}
