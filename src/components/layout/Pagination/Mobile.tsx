type Props = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function PaginationMobile({ currentPage, totalPages, onPageChange }: Props) {
  return (
    <div className="md:hidden text-sm flex justify-between items-center w-full px-4 mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="cursor-pointer text-foreground disabled:opacity-50"
      >
        Anterior
      </button>
      <span className="text-muted-foreground">
        Página {currentPage} de {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="cursor-pointer text-foreground disabled:opacity-50"
      >
        Próxima
      </button>
    </div>
  )
}
