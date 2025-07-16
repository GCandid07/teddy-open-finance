import React from "react"
import { Navigate } from "react-router-dom"
import { isAuthenticated } from "@/utils/auth"

interface ProtectedRouteProps {
  children: React.JSX.Element
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  if (!isAuthenticated()) {
    return <Navigate to="/credentials" replace />
  }

  return children
}
