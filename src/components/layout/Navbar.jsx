import { BellIcon, MenuIcon, VideoIcon } from '../ui/Icons'
import SearchBar from '../ui/SearchBar'

export default function Navbar({ totalItems, onSearch }) {
  return (
    <header className="sticky top-0 z-50 glass border-b border-border">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6">
        <div className="flex h-16 items-center gap-3">
          <button
            type="button"
          className="hidden lg:inline-flex h-10 w-10 items-center justify-center rounded-full text-[#f1f1f1] hover:bg-[#2a2a2a]"
            aria-label="Open navigation"
          >
            <MenuIcon size={20} />
          </button>

          <a href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ff0000] text-white shadow-sm">
              <VideoIcon size={17} />
            </div>
            <span
              className="hidden sm:block text-xl font-semibold leading-none tracking-[-0.03em] text-[#f1f1f1]"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              ChillTube
            </span>
          </a>

          <div className="flex-1 px-0 sm:px-4">
            <SearchBar onSearch={onSearch} />
          </div>

          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-[#181818] px-4 py-2 text-sm font-medium text-[#f1f1f1] hover:bg-[#232323]"
            >
              <BellIcon size={16} />
              <span className="hidden lg:inline">Notifications</span>
            </button>
            <button
              type="button"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-[#2a2a2a] px-4 text-sm font-medium text-[#f1f1f1] hover:bg-[#353535]"
            >
              Upload
            </button>
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2a2a2a] text-sm font-semibold text-[#f1f1f1]"
              aria-label="Profile"
            >
              U
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
