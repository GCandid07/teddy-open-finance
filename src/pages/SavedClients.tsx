import { useEffect, useState } from "react"
import { Clients } from "@/types/clients"
import { ClientCard } from "@/components/client/ClientCard"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import {
  clearSavedClients,
  getSavedClients,
  removeSavedClient
} from "@/utils/clients"
import { Minus } from "lucide-react"

export default function SavedClientsPage() {
  const [clients, setClients] = useState<Clients[]>([])

  useEffect(() => {
    setClients(getSavedClients())
  }, [])

  const handleDelete = (id: number) => {
    removeSavedClient(id)
    setClients(getSavedClients())
    toast.success("Cliente removido dos salvos!")
  }

  const handleClearAll = () => {
    clearSavedClients()
    setClients([])
    toast.success("Todos os clientes salvos foram removidos!")
  }

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
        <span className="text-lg sm:text-2xl text-foreground font-bold">
          Clientes selecionados:
        </span>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
        {clients.length === 0 && (
          <span className="col-span-full text-muted-foreground text-md">
            Nenhum cliente salvo.
          </span>
        )}

        {clients.map(client => (
          <ClientCard
            key={client.id}
            client={client}
            onEdit={() => {}}
            onDelete={() => {}}
            footerButtons={
              <Minus
                className="w-5 h-5 cursor-pointer text-destructive/90 hover:text-destructive ml-auto"
                onClick={() => handleDelete(client.id)}
              />
            }
          />
        ))}
      </div>

      {clients.length > 0 && (
        <Button
          onClick={handleClearAll}
          variant="outline"
          className="cursor-pointer mt-6 w-full max-w-5xl mx-auto border-2 border-[#EC6724] text-[#EC6724] hover:text-[#EC6724] text-md font-bold py-5 px-4 rounded-sm transition"
        >
          Limpar clientes selecionados
        </Button>
      )}
    </div>
  )
}
