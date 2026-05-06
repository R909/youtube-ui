import { HomeIcon, ShortsIcon, SubscriptionsIcon, LibraryIcon } from '../ui/Icons'

const items = [
  { key: 'home', label: 'Home', icon: HomeIcon, active: true },
  { key: 'shorts', label: 'Shorts', icon: ShortsIcon },
  { key: 'subs', label: 'Subscriptions', icon: SubscriptionsIcon },
  { key: 'library', label: 'Library', icon: LibraryIcon },
]

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex w-60 shrink-0 flex-col gap-1 pt-2">
      <div className="px-3 pb-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
          Explore
        </p>
      </div>

      {items.map(({ key, label, icon: Icon, active }) => (
        <button
          key={key}
          type="button"
          className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
            active
              ? 'bg-[#2a2a2a] text-[#f1f1f1]'
              : 'text-muted hover:bg-[#1f1f1f] hover:text-[#f1f1f1]'
          }`}
        >
          <Icon size={18} />
          <span>{label}</span>
        </button>
      ))}

      <div className="mt-6 rounded-3xl border border-border bg-[#181818] p-4 shadow-sm">
        <p className="text-sm font-semibold text-[#f1f1f1]">Trending now</p>
        <p className="mt-2 text-xs leading-5 text-muted">
          Discover the most watched tech tutorials, coding walkthroughs, and creator picks.
        </p>
      </div>
    </aside>
  )
}
