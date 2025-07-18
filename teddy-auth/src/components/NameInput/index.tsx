import { Input } from "dashboard/components/ui/input"

interface NameInputProps {
  value: string
  onChange: (value: string) => void
  error?: string
}

export function NameInput({ value, onChange, error }: NameInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <Input
        id="name"
        placeholder="Digite seu nome"
        value={value}
        onChange={(e: { target: { value: string } }) => onChange(e.target.value)}
        className={`
          h-10 sm:h-12 text-base sm:text-lg px-4
          ${error ? "border-red-500 ring-1 ring-red-500" : ""}
        `}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  )
}
