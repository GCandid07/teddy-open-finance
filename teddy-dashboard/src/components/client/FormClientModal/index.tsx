import { useEffect } from "react"
import { z } from "zod"
import { useForm, Controller, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createUser, updateUser } from "@/api/clients"
import { formatCurrency, parseCurrencyInput } from "@/utils/formatCurrency"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from 'react-hot-toast'
import { Info, X } from "lucide-react"

const schema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  salary: z.number({ message: "Salário obrigatório" }).min(100),
  companyValuation: z.number({ message: "Valor obrigatório" }).min(100),
})

export type ClientFormData = z.infer<typeof schema>

type Props = {
  open: boolean
  setOpen: (value: boolean) => void
  onClientSaved?: () => void
  editingClient?: ClientFormData & { id: number } | null
}

export function FormClientModal({
  open,
  setOpen,
  onClientSaved,
  editingClient,
}: Props) {
  const methods = useForm<ClientFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      salary: undefined,
      companyValuation: undefined,
    },
  })

  const {
    handleSubmit,
    control,
    formState: { errors, touchedFields, isSubmitted },
    reset,
    watch
  } = methods

  useEffect(() => {
    if (editingClient) {
      reset(editingClient)
    } else {
      reset()
    }
  }, [editingClient, reset])

  const onSubmit = async (data: ClientFormData) => {
    try {
      if (editingClient) {
        await updateUser({ id: editingClient.id, user: data })
        toast.success(`Cliente "${data.name}" atualizado com sucesso!`)
      } else {
        await createUser({ user: data })
        toast.success(`Cliente "${data.name}" criado com sucesso!`)
      }

      onClientSaved?.()
      setOpen(false)
      reset()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const message = error?.message || ""

      if (message.includes("not found")) {
        toast("Este cliente já foi removido por outro usuário.", {
          icon: <Info className="w-5 h-5 text-[#2b6cb0]" />,
        }
      )
      } else {
        toast.error("Erro ao salvar cliente.")
      }

      console.log({ error })
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen)

        if (!isOpen) {
          const values = watch()
          const hasData = Object.values(values).some(
            (val) => val !== "" && val !== undefined
          )
          if (hasData) {
            reset({
              name: "",
              salary: undefined,
              companyValuation: undefined,
            })
          }
        }
      }}      
    >
      <DialogContent className="max-w-md rounded-xl" showCloseButton={false}>
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">
              {editingClient ? "Editar cliente:" : "Criar cliente:"}
            </DialogTitle>
            <DialogClose asChild>
              <button
                className="cursor-pointer p-2 text-black hover:text-black hover:bg-muted rounded-md"
                aria-label="Fechar"
              >
                <X className="w-6 h-6" />
              </button>
            </DialogClose>
          </div>
          <DialogDescription />
        </DialogHeader>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="name"
                    placeholder="Digite o nome:"
                    className={`rounded-sm h-10 sm:h-12 ${
                      errors.name ? "border-red-500" : ""
                    }`}
                  />
                )}
              />
              {errors.name && (
                <span className="text-sm text-red-500">{errors.name.message}</span>
              )}
            </div>

            <div>
              <Controller
                name="salary"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    inputMode="numeric"
                    placeholder="Digite o salário:"
                    value={field.value !== undefined ? formatCurrency(field.value) : ""}
                    onChange={(e) => {
                      const cents = parseCurrencyInput(e.target.value)
                      field.onChange(cents === 0 ? undefined : cents)
                    }}
                    className={`rounded-sm h-10 sm:h-12 ${
                      errors.salary ? "border-red-500" : ""
                    }`}
                  />
                )}
              />
              {errors.salary && (isSubmitted || touchedFields.salary) && (
                <span className="text-sm text-red-500">{errors.salary.message}</span>
              )}
            </div>

            <div>
              <Controller
                name="companyValuation"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    inputMode="numeric"
                    placeholder="Digite o valor da empresa:"
                    value={field.value !== undefined ? formatCurrency(field.value) : ""}
                    onChange={(e) => {
                      const cents = parseCurrencyInput(e.target.value)
                      field.onChange(cents === 0 ? undefined : cents)
                    }}
                    className={`rounded-sm h-10 sm:h-12 ${
                      errors.companyValuation ? "border-red-500" : ""
                    }`}
                  />
                )}
              />
              {errors.companyValuation &&
                (isSubmitted || touchedFields.companyValuation) && (
                  <span className="text-sm text-red-500">
                    {errors.companyValuation.message}
                  </span>
                )}
            </div>

            <Button
              type="submit"
              className="cursor-pointer rounded-sm h-10 sm:h-12 text-base sm:text-lg bg-[#EC6724] hover:bg-[#d35a1f] text-white w-full mt-2"
            >
              {editingClient ? "Editar Cliente" : "Criar Cliente"}
            </Button>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}
