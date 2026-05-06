import { ChevronLeftIcon, ChevronRightIcon } from './Icons'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const start = Math.max(1, currentPage - 2)
  const end = Math.min(totalPages, currentPage + 2)

  const pageNums = Array.from({ length: end - start + 1 }, (_, i) => start + i)

  const btnBase =
    'flex items-center justify-center min-w-[36px] h-9 px-3 rounded-full text-xs font-semibold border transition-all duration-150 cursor-pointer select-none'

  return (
    <nav className="flex items-center justify-center gap-1.5 mt-14 flex-wrap" aria-label="Pagination">
      {/* Prev */}
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className={`${btnBase} gap-1.5 pr-4 ${
          currentPage <= 1
            ? 'opacity-30 cursor-not-allowed bg-[#181818] border-border text-muted'
            : 'bg-[#181818] border-border text-[#f1f1f1] hover:border-[#4a4a4a] hover:text-white'
        }`}
      >
        <ChevronLeftIcon size={13} /> Prev
      </button>

      {/* First page if truncated */}
      {start > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className={`${btnBase} bg-[#181818] border-border text-[#f1f1f1] hover:border-[#4a4a4a]`}
          >
            1
          </button>
          {start > 2 && (
            <span className="text-muted text-xs px-1 select-none">···</span>
          )}
        </>
      )}

      {/* Page numbers */}
      {pageNums.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`${btnBase} ${
            p === currentPage
              ? 'border-[#ff0000] text-white glow-accent'
              : 'bg-[#181818] border-border text-[#f1f1f1] hover:border-[#4a4a4a]'
          }`}
          style={p === currentPage ? { background: '#ff0000' } : {}}
        >
          {p}
        </button>
      ))}

      {/* Last page if truncated */}
      {end < totalPages && (
        <>
          {end < totalPages - 1 && (
            <span className="text-muted text-xs px-1 select-none">···</span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className={`${btnBase} bg-[#181818] border-border text-[#f1f1f1] hover:border-[#4a4a4a]`}
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next */}
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className={`${btnBase} gap-1.5 pl-4 ${
          currentPage >= totalPages
            ? 'opacity-30 cursor-not-allowed bg-[#181818] border-border text-muted'
            : 'bg-[#181818] border-border text-[#f1f1f1] hover:border-[#4a4a4a]'
        }`}
      >
        Next <ChevronRightIcon size={13} />
      </button>
    </nav>
  )
}
