import { PaginationItem, PaginationLink } from "@/components/ui/pagination"

type PageButtonProps = {
  page: number
  isActive: boolean
  onClick: (page: number) => void
}

export function PageButton({ page, isActive, onClick }: PageButtonProps) {
  return (
    <PaginationItem>
      <PaginationLink
        href="#"
        isActive={isActive}
        onClick={e => {
          e.preventDefault()
          onClick(page)
        }}
        className={
          isActive 
            ? "bg-[#EC6724] hover:bg-[#d35a1f] text-white hover:text-white"
            : ""
          }
      >
        {page}
      </PaginationLink>
    </PaginationItem>
  )
}
