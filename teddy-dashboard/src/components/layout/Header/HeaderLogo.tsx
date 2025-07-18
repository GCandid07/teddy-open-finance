import { Link } from "react-router-dom";

export function HeaderLogo() {
  return (
    <>
      <Link to="/" className="text-xl font-bold">
        <img src="/logo_teddy.svg" alt="Logo Teddy" className="h-12 w-auto" />
      </Link>
    </>
  )
}
