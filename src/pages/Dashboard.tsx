import { logout } from "@/utils/auth"
import { useNavigate } from "react-router-dom"

export default function Dashboard() {
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate("/credentials", { replace: true })
  }

  return (
    <div className="text-center p-4 max-w-md mx-auto">
      <button
        onClick={handleLogout}
        className="h-10 sm:h-12 rounded text-base sm:text-lg bg-[#EC6724] hover:bg-[#d35a1f] text-white py-2 px-4 cursor-pointer"
      >
        Sair
      </button>
    </div>
  )
}
