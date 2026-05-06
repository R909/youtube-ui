import { useVideos } from './hooks/useVideos'
import { useVideoFilters } from './hooks/useVideoFilters'

import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'

import SortBar from './components/ui/SortBar'
import StatsBar from './components/ui/StatsBar'
import Pagination from './components/ui/Pagination'
import ErrorState from './components/ui/ErrorState'

import VideoGrid from './components/video/VideoGrid'

export default function App() {
  const {
    videos,
    loading,
    error,
    currentPage,
    totalPages,
    totalItems,
    fetchVideos,
  } = useVideos()

  const {
    filtered,
    searchQuery,
    setSearchQuery,
    sort,
    setSort,
  } = useVideoFilters(videos)

  const handlePageChange = (page) => {
    fetchVideos(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSearch = (q) => {
    setSearchQuery(q)
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f1f1f1]">
      <Navbar totalItems={totalItems} onSearch={handleSearch} />

      <div className="mx-auto flex max-w-screen-2xl gap-6 px-4 py-5 sm:px-6">
        <Sidebar />

        <main className="min-w-0 flex-1 pb-10">
          <div className="mb-5 flex flex-col gap-4">
            <div className="flex flex-col gap-3 rounded-3xl border border-border bg-[#181818] px-4 py-4 shadow-sm sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
                  Home
                </p>
                <h1
                  className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-[#f1f1f1] sm:text-3xl"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  Recommended for you
                </h1>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Browse trending tech tutorials, coding walkthroughs, and quick inspiration in a familiar feed layout.
                </p>
              </div>

              <div className="w-full sm:w-auto">
                <StatsBar
                  currentPage={currentPage}
                  totalPages={totalPages}
                  resultCount={loading ? 0 : filtered.length}
                  searchQuery={searchQuery}
                />
              </div>
            </div>

            <SortBar activeSort={sort} onSort={setSort} />
          </div>

          {error ? (
            <ErrorState message={error} onRetry={() => fetchVideos(currentPage)} />
          ) : (
            <>
              <VideoGrid videos={filtered} loading={loading} />

              {!loading && filtered.length > 0 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          )}
        </main>
      </div>
    </div>
  )
}
