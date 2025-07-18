import type { Clients } from "@/types/clients"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { formatCurrency } from "@/utils/formatCurrency"
import { Plus, Pencil, Info } from "lucide-react"
import { DeleteClientModal } from "../DeleteClientModal"
import { saveClient } from "@/utils/clients"
import { toast } from 'react-hot-toast'
import React from "react"

interface ClientCardProps {
  client: Clients
  onEdit: () => void
  onDelete: () => void
  footerButtons?: React.ReactNode
}

export function ClientCard({
  client,
  onEdit,
  onDelete,
  footerButtons,
}: ClientCardProps) {
  const handleAddClient = () => {
    const saved = saveClient(client)
    if (saved) {
      toast.success(`Cliente "${client.name}" salvo com sucesso!`)
    } else {
      toast(`Cliente "${client.name}" já está salvo.`, {
        icon: <Info className="w-5 h-5 text-[#2b6cb0]" />,
      })
    }
  }

  const defaultFooter = (
    <>
      <Plus
        className="w-5 h-5 cursor-pointer text-black hover:text-primary"
        onClick={handleAddClient}
      />
      <Pencil
        className="w-5 h-5 cursor-pointer text-black hover:text-primary"
        onClick={onEdit}
      />
      <DeleteClientModal
        clientName={client.name}
        onDelete={async () => {
          await onDelete()
        }}
      />
    </>
  )

  return (
    <Card className="w-full rounded-none flex flex-col gap-0 p-2">
      <CardHeader className="p-3 pb-2">
        <CardTitle className="text-lg font-bold">{client.name}</CardTitle>
      </CardHeader>

      <CardContent className="p-3 pt-0 text-sm">
        <p>
          <span className="font-medium">
            Salário:
          </span> {formatCurrency(client.salary)}
        </p>
        <p>
          <span className="font-medium">
            Empresa:
          </span> {formatCurrency(client.companyValuation)}
        </p>
      </CardContent>

      <CardFooter className="p-3 pt-2 flex justify-between">
        {footerButtons || defaultFooter}
      </CardFooter>
    </Card>
  )
}
