import VideoCard from './VideoCard'
import SkeletonCard from '../ui/SkeletonCard'

export default function VideoGrid({ videos, loading }) {
  if (loading) {
    return (
      <div className="grid gap-x-4 gap-y-10 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {Array(10).fill(0).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    )
  }

  if (!videos.length) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-[#181818] py-24 text-center">
        <div
          className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-border bg-[#202020] text-4xl"
        >
          📺
        </div>
        <h3
          className="mb-2 text-xl font-semibold text-[#f1f1f1]"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          No videos found
        </h3>
        <p className="max-w-xs text-sm text-muted">
          Try adjusting your search or filter to find what you're looking for.
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-x-4 gap-y-10 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {videos.map((video, i) => (
        <VideoCard key={video.id} video={video} index={i} />
      ))}
    </div>
  )
}
