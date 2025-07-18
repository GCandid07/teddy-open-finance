'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Trash2, X } from 'lucide-react'
import { useState } from 'react'

interface DeleteClientModalProps {
  clientName: string
  onDelete: () => void
}

export function DeleteClientModal({ clientName, onDelete }: DeleteClientModalProps) {
  const [open, setOpen] = useState(false)

  const handleConfirm = () => {
    onDelete()
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Trash2
          className="w-5 h-5 cursor-pointer text-destructive/90 hover:text-destructive"
          aria-label="Excluir cliente"
        />
      </DialogTrigger>

      <DialogContent className="p-4 max-w-md rounded-xl" showCloseButton={false}>
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold">Excluir cliente</DialogTitle>
            <DialogClose asChild>
              <button
                aria-label="Fechar"
                className="cursor-pointer p-2 text-black hover:text-black hover:bg-muted rounded-md"
                >
                <X className="w-6 h-6" />
              </button>
            </DialogClose>
          </div>

          <DialogDescription className="text-xl text-start text-foreground">
            Você está prestes a excluir o cliente:{" "}
            <span className="font-bold">
              {clientName}
            </span>.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            className="cursor-pointer rounded-sm h-10 sm:h-12 text-base sm:text-lg bg-[#EC6724] hover:bg-[#d35a1f] text-white w-full mt-2"
            onClick={handleConfirm}
          >
            Excluir cliente
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
