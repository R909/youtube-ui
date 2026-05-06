export default function SkeletonCard() {
  return (
    <div className="rounded-2xl bg-[#181818]">
      <div className="overflow-hidden rounded-2xl">
        <div className="aspect-video card-shimmer rounded-2xl" />

        <div className="flex gap-3 pt-3">
          <div className="h-9 w-9 flex-shrink-0 rounded-full card-shimmer" />
          <div className="flex-1 space-y-2 pt-1">
            <div className="h-3.5 w-11/12 rounded-full card-shimmer" />
            <div className="h-3 w-2/3 rounded-full card-shimmer" />
            <div className="h-3 w-1/2 rounded-full card-shimmer" />
          </div>
        </div>
      </div>
    </div>
  )
}
