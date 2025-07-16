import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "@/pages/Home"
import Dashboard from '@/pages/Dashboard'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Toaster } from "sonner"
import { PrivateLayout } from './components/layout/PrivateLayout'

function App() {
  return (
    <main className="min-h-dvh bg-muted">
      <Routes>
        <Route path="/credentials" element={<Home />} />
        <Route element={<ProtectedRoute><PrivateLayout /></ProtectedRoute>}>
          <Route path="/" element={<Dashboard />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <Toaster richColors closeButton position="top-right" expand />
    </main>
  )
}

export default App
