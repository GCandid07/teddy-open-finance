import { useState } from "react"
import { deleteUser } from "@/api/clients"
import { ClientCard } from "@/components/client/ClientCard"
import { ClientCardSkeleton } from "@/components/client/ClientCard/Skeleton"
import {
  FormClientModal,
  type ClientFormData
} from "@/components/client/FormClientModal"
import { PaginationControl } from "@/components/layout/Pagination"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { usePaginatedUsers } from "@/hooks/usePaginatedClients"
import { toast } from 'react-hot-toast'
import { Info } from "lucide-react"

export default function Dashboard() {
  const {
    data,
    page,
    setPage,
    isLoading,
    limit,
    setLimit,
    refetch
  } = usePaginatedUsers()

  const [openModal, setOpenModal] = useState(false)
  const [editingClient, setEditingClient] = useState<
    ClientFormData & { id: number } | null
  >(null)

  const openCreateModal = () => {
    setEditingClient(null)
    setOpenModal(true)
  }

  const openEditModal = (client: ClientFormData & { id: number }) => {
    setEditingClient(client)
    setOpenModal(true)
  }

  const handleDelete = async ({ id }: { id: number }) => {
    try {
      await deleteUser({ id })
      toast.success("Cliente deletado com sucesso!")
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const message = error?.message || ""

      if (message.includes("not found")) {
        toast("O cliente já havia sido removido.", {
          icon: <Info className="w-5 h-5 text-[#2b6cb0]" />,
        }
      )
      } else {
        toast.error("Erro ao deletar cliente.")
      }

      console.error(error)
    } finally {
      refetch()
    }
  }

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
        <span className="text-sm sm:text-lg text-muted-foreground">
          {isLoading ? "Carregando clientes..." : (
            <span>
              <strong className="font-bold text-foreground">
                {data?.clients.length ?? 0}
              </strong>{" "}
              clientes encontrados:
            </span>
          )}
        </span>

        <div className="flex items-center gap-2">
          <span className="text-sm sm:text-lg text-muted-foreground">
            Clientes por página:
          </span>
          <Select 
            value={String(limit)}
            onValueChange={(value) => {
              setLimit(Number(value))
              setPage(1)
            }}
            disabled={!data || (data.clients.length === 0)}
          >
            <SelectTrigger className="w-[70px] h-9">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="12">12</SelectItem>
              <SelectItem value="16">16</SelectItem>
              <SelectItem value="20">20</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
        {isLoading &&
          Array.from({ length: 12 }).map((_, i) => (
            <ClientCardSkeleton key={i} />
          ))
        }

        {!isLoading && data?.clients.length === 0 && (
          <span className="col-span-full text-muted-foreground text-md">
            Nenhum cliente encontrado.
          </span>
        )}

        {!isLoading && data?.clients.map(client => (
          <ClientCard
            key={client.id}
            client={client}
            onEdit={() => openEditModal(client)}
            onDelete={() => handleDelete({ id: client.id })}
          />
        ))}
      </div>

      <Button
        onClick={openCreateModal}
        variant="outline"
        className="cursor-pointer mt-6 w-full max-w-5xl mx-auto border-2 border-[#EC6724] text-[#EC6724] hover:text-[#EC6724] text-md font-bold py-5 px-4 rounded-sm transition"
      >
        Criar cliente
      </Button>

      <FormClientModal
        open={openModal}
        setOpen={setOpenModal}
        editingClient={editingClient}
        onClientSaved={refetch}
      />

      <div className="mt-4">
        <PaginationControl
          currentPage={data?.currentPage ?? page}
          totalPages={data?.totalPages ?? 1}
          onPageChange={setPage}
        />
      </div>
    </div>
  )
}
