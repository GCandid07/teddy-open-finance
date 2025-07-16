import { Home, Users, UserCheck } from "lucide-react"

export const routes = [
  {
    path: "/",
    icon: Home,
    label: "Dashboard",
  },
  {
    path: "/clients",
    icon: Users,
    label: "Clientes",
  },
  {
    path: "/clients/selected",
    icon: UserCheck,
    label: "Clientes selecionados",
  },
]