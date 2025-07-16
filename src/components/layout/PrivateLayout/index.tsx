import { Outlet } from "react-router-dom"
import { Header } from "@/components/layout/Header"

export function PrivateLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-y-auto p-4">
        <Outlet />
      </main>
    </div>
  )
}
