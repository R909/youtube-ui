export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#0f0f0f] py-8">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span
            className="text-base font-semibold text-[#f1f1f1]"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            <span className="gradient-text">Stream</span>
            <span className="text-[#f1f1f1]">Vault</span>
          </span>
          <span className="text-xs text-muted">·</span>
          <span className="text-xs text-muted">Powered by FreeAPI</span>
        </div>
        <p className="text-[11px] text-muted">
          Built with React + Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
