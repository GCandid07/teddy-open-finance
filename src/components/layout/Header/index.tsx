import { useState } from "react"
import { Menu } from "lucide-react"
import { Sidebar } from "@/components/layout/Sidebar"
import { HeaderLogo } from "./HeaderLogo"
import { HeaderNav } from "./HeaderNav"
import { HeaderUser } from "./HeaderUser"

export function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <header className="relative bg-white border-b px-8 py-4 shadow-sm flex items-center justify-between">
        <div className="flex gap-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="cursor-pointer"
          >
            <Menu className="w-6 h-6" />
          </button>

          <HeaderLogo />
        </div>
        <HeaderNav />
        <HeaderUser />
      </header>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  )
}
