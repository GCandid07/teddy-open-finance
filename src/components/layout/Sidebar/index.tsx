import { cn } from "@/lib/utils"
import { SidebarHeader } from "./SidebarHeader"
import { SidebarNav } from "./SidebarNav"

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-40 transition-all duration-300",
        open ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div
        className="absolute inset-0 bg-black/20"
        onClick={onClose}
      />

      <aside className="relative z-50 w-64 h-full rounded-tr-2xl bg-black/20 shadow-lg flex flex-col">
        <SidebarHeader />
        <SidebarNav onClose={onClose} />
      </aside>
    </div>
  )
}
