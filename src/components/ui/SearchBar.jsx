import { useState } from 'react'
import { SearchIcon, CloseIcon } from '../ui/Icons'

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(value.trim())
  }

  const handleClear = () => {
    setValue('')
    onSearch('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full items-center overflow-hidden rounded-full border border-border bg-[#121212] transition-all duration-200 focus-within:border-[#444444] focus-within:shadow-[0_1px_3px_rgba(0,0,0,0.3)]"
    >
      <span className="pl-4 text-muted flex-shrink-0">
        <SearchIcon size={18} />
      </span>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
        className="flex-1 border-none bg-transparent px-3 py-3 text-sm text-[#f1f1f1] outline-none placeholder:text-[#8a8a8a]"
        style={{ fontFamily: 'Outfit, sans-serif' }}
      />

      {value && (
        <button
          type="button"
          onClick={handleClear}
          className="px-2 text-muted hover:text-light transition-colors"
        >
          <CloseIcon size={13} />
        </button>
      )}

      <button
        type="submit"
        className="flex-shrink-0 bg-[#2a2a2a] px-5 py-3 text-sm font-medium text-[#f1f1f1] transition-colors hover:bg-[#3a3a3a] hover:text-white"
      >
        Search
      </button>
    </form>
  )
}
