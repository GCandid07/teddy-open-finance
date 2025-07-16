import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { routes } from "./sidebar_routes"
import { ArrowLeft } from "lucide-react"

interface SidebarNavProps {
  onClose: () => void
}

export function SidebarNav({ onClose }: SidebarNavProps) {
  const location = useLocation()

  return (
    <nav className="relative flex flex-col gap-4 text-sm pl-4 space-y-4 pt-8 bg-white flex-1">
      <button
        onClick={onClose}
        className="absolute -top-6 -right-6 p-4 z-10 rounded-full bg-[#1f1f1f] text-[#1f1f1f] cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4 bg-white rounded-full" />
      </button>

      {routes.map((route) => {
        const isActive = location.pathname === route.path

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
    </nav>
  )
}
