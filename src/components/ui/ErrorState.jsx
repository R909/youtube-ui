import { RefreshIcon } from '../ui/Icons'

export default function ErrorState({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-[#181818] py-28 text-center">
      <div
        className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-[#3a2424] bg-[#241414] text-4xl"
      >
        📡
      </div>
      <h3
        className="mb-2 text-xl font-semibold text-[#f1f1f1]"
        style={{ fontFamily: 'Syne, sans-serif' }}
      >
        Connection failed
      </h3>
      <p className="mb-8 max-w-xs text-sm text-muted">{message}</p>
      <button
        onClick={onRetry}
        className="flex items-center gap-2 rounded-full bg-[#ff0000] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        <RefreshIcon size={15} />
        Try Again
      </button>
    </div>
  )
}
