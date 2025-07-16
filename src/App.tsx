import './App.css'
import { Routes, Route, Outlet } from "react-router-dom"
import Home from "@/pages/Home"
import Dashboard from '@/pages/Dashboard'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Toaster } from "sonner"

function App() {
  return (
    <main className="min-h-dvh flex items-center justify-center bg-muted">
      <Routes>
        <Route path="/credentials" element={<Home />} />
        <Route element={<ProtectedRoute><Outlet /></ProtectedRoute>}>
          <Route path="/"  element={<Dashboard />} />
        </Route>
      </Routes>
      <Toaster richColors closeButton position="top-right" expand />
    </main>
  )
}

export default App
