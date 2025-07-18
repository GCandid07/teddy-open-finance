import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "auth/pages/Home"
import Dashboard from 'dashboard/pages/Dashboard'
import SavedClients from 'dashboard/pages/SavedClients'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { PrivateLayout } from 'dashboard/layout/PrivateLayout'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <main className="min-h-dvh bg-muted">
      <Routes>
        <Route path="/credentials" element={<Home />} />
        <Route element={<ProtectedRoute><PrivateLayout /></ProtectedRoute>}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clients" element={<Dashboard />} />
          <Route path="/clients/saved" element={<SavedClients />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: { /* estilos padrão */ },
        }}
      />
    </main>
  )
}

export default App
