import { Skeleton } from './components/Skeleton'

export default function Loading() {
  return (
    <div className="p-4 space-y-4">
      <Skeleton className="h-14 w-full" />
      <Skeleton className="h-24 w-3/4" />
      <Skeleton className="h-24 w-1/2" />
      <Skeleton className="h-14 w-1/4" />
    </div>
  )
}
