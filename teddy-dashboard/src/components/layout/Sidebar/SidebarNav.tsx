import { Link, useLocation, useNavigate } from "react-router-dom"
import { cn } from "@/lib/utils"
import { routes } from "./sidebar_routes"
import { ArrowLeft, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent
} from "@/components/ui/tooltip"
import { logout } from "auth/utils/auth"

interface SidebarNavProps {
  onClose: () => void
}

export function SidebarNav({ onClose }: SidebarNavProps) {
  const location = useLocation()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate("/credentials", { replace: true })
  }

  return (
    <nav className="relative flex flex-col gap-4 text-sm pl-4 space-y-4 pt-8 bg-white flex-1">
      <div className="absolute -top-6 -right-6">
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={onClose}
              className="p-4 rounded-full bg-[#1f1f1f] text-[#1f1f1f] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 bg-white rounded-full" />
            </button>
          </TooltipTrigger>

          <TooltipContent side="right" align="center">
            Fechar menu
          </TooltipContent>
        </Tooltip>
      </div>

      {routes.map((route) => {
        let isActive = location.pathname === route.path

        if (location.pathname === "/" && route.path === "/") {
          isActive = false
        }

        if (location.pathname === "/" && route.path === "/clients") {
          isActive = true
        }

        return (
          <Link
            key={route.path}
            to={route.path}
            onClick={onClose}
            className={cn(
              "flex items-center gap-2 pl-2 py-2 font-bold transition-colors",
              isActive
                ? "text-[#EC6724] border-r-2 border-[#EC6724]"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <route.icon className="w-5 h-5" />
            {route.label}
          </Link>
        )
      })}

      <div className="mt-auto py-4 mr-4">
        <Button
          variant="outline"
          className="cursor-pointer pl-2 py-2 font-bold flex items-center justify-start gap-2 transition-colors w-full text-muted-foreground hover:text-foreground"
          onClick={handleLogout}
        >
          <LogOut className="w-5 h-5" />
          Sair
        </Button>
      </div>
    </nav>
  )
}
