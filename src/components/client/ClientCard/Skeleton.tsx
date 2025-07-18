import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function ClientCardSkeleton() {
  return (
    <Card className="w-full rounded-none flex flex-col gap-0 p-2">
      <CardHeader className="p-3 pb-2">
        <CardTitle className="flex flex-col items-center">
          <Skeleton className="h-5 w-2/3" />
        </CardTitle>
      </CardHeader>

      <CardContent className="p-3 pt-0 space-y-2">
        <div className="flex justify-center">
          <Skeleton className="h-4 w-1/3 inline-block ml-1 align-middle" />{" "}
          <Skeleton className="h-4 w-2/3 inline-block ml-1 align-middle" />
        </div>
        <div className="flex justify-center">
          <Skeleton className="h-4 w-1/3 inline-block ml-1 align-middle" />{" "}
          <Skeleton className="h-4 w-2/3 inline-block ml-1 align-middle" />
        </div>
      </CardContent>

      <CardFooter className="p-3 pt-2 flex justify-between">
        <Skeleton className="h-6 w-6 rounded" />
        <Skeleton className="h-6 w-6 rounded" />
        <Skeleton className="h-6 w-6 rounded" />
      </CardFooter>
    </Card>
  )
}
