import { PaginationDesktop } from "./Desktop"
import { PaginationMobile } from "./Mobile"

export type Props = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function PaginationControl({ currentPage, totalPages, onPageChange }: Props) {
  const handlePageChange = (page: number) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page)
    }
  }

  return (
    <>
      <PaginationDesktop
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <PaginationMobile
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  )
}
