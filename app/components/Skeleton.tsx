interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-primary-default_light rounded-md ${className}`}
    />
  )
}
