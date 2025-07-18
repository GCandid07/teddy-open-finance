import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination"
import { PageButton } from "./PageButton"
import { getPaginationRange } from "./paginationUtils"

type PaginationDesktopProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function PaginationDesktop({
  currentPage,
  totalPages,
  onPageChange
}: PaginationDesktopProps) {
  const pageRange = getPaginationRange(currentPage, totalPages)

  return (
    <Pagination className="hidden md:flex justify-center">
      <PaginationContent>
        {pageRange.map((page, idx) =>
          page === "..." ? (
            <PaginationItem key={`ellipsis-${idx}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PageButton
              key={page}
              page={page}
              isActive={page === currentPage}
              onClick={onPageChange}
            />
          )
        )}
      </PaginationContent>
    </Pagination>
  )
}
