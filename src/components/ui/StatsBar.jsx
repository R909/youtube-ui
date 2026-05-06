import { SparkleIcon } from '../ui/Icons'

export default function StatsBar({ currentPage, totalPages, resultCount, searchQuery }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-[#181818] px-4 py-3 shadow-sm">
      <div className="flex items-center gap-3">
        <div
          className="flex items-center gap-1.5 rounded-full border border-[#303030] bg-[#202020] px-3 py-1 text-[11px] font-semibold text-[#f1f1f1]"
        >
          <SparkleIcon size={11} />
          {searchQuery ? `Results for "${searchQuery}"` : 'Recommended'}
        </div>
        <span className="text-xs text-muted">
          {resultCount} result{resultCount !== 1 ? 's' : ''}
        </span>
      </div>

      <div className="text-xs font-medium text-muted">
        Page <span className="font-semibold text-[#f1f1f1]">{currentPage}</span> of{' '}
        <span className="font-semibold text-[#f1f1f1]">{totalPages}</span>
      </div>
    </div>
  )
}
