export const formatCurrency = (value: string | number) => {
  const numeric = Number(value) / 100
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(numeric || 0)
}

export function parseCurrencyInput(input: string): number {
  const numeric = input.replace(/\D/g, "")
  return Number(numeric)
}
