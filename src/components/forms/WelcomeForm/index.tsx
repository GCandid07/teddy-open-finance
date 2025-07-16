import { z } from "zod"
import { useForm, FormProvider, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"
import { setAuthUserName } from "@/utils/auth"
import { Button } from "@/components/ui/button"
import { NameInput } from "@/components/NameInput"
import { toast } from "sonner"

const schema = z.object({
  name: z.string().min(2, "Digite seu nome"),
})

type FormData = z.infer<typeof schema>

export default function WelcomeForm() {
  const navigate = useNavigate()

  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
    },
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods

  const onSubmit = (data: FormData) => {
    setAuthUserName(data.name)
    toast.success(`Bem-vindo, ${data.name}!`)
    navigate("/", { replace: true })
  }

  return (
    <div className="min-h-dvh flex items-center justify-center bg-muted">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-[480px] mx-auto flex flex-col gap-6 p-6"
        >
          <h1 className="text-3xl sm:text-4xl font-semibold text-center">Olá, seja bem-vindo!</h1>

          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <NameInput
                value={field.value}
                onChange={field.onChange}
                error={errors.name?.message}
              />
            )}
          />

          <Button
            type="submit"
            className="h-10 sm:h-12 text-base sm:text-lg bg-[#EC6724] hover:bg-[#d35a1f] text-white w-full"
          >
            Entrar
          </Button>
        </form>
      </FormProvider>
    </div>
  )
}
