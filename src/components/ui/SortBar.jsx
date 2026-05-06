import { SORT_OPTIONS } from '../../constants'

export default function SortBar({ activeSort, onSort }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-[10px] uppercase tracking-[0.22em] text-muted font-semibold mr-1 hidden sm:block">
        Filter by
      </span>
      {SORT_OPTIONS.map(({ key, label, icon }) => (
        <button
          key={key}
          onClick={() => onSort(key)}
          className="flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-medium transition-all duration-150 cursor-pointer"
          style={
            activeSort === key
              ? {
                  background: '#2a2a2a',
                  borderColor: '#ff0000',
                  color: '#f1f1f1',
                }
              : {
                  background: '#181818',
                  borderColor: '#303030',
                  color: '#f1f1f1',
                }
          }
        >
          <span>{icon}</span>
          <span className="hidden sm:inline">{label}</span>
          <span className="sm:hidden">{label.split(' ')[0]}</span>
        </button>
      ))}
    </div>
  )
}
