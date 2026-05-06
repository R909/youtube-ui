import { useState, useMemo } from 'react'
import { toSeconds } from '../utils/formatters'

export function useVideoFilters(videos) {
  const [searchQuery, setSearchQuery] = useState('')
  const [sort, setSort] = useState('default')

  const filtered = useMemo(() => {
    let v = [...videos]

    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      v = v.filter(
        (vid) =>
          vid.snippet?.title?.toLowerCase().includes(q) ||
          vid.snippet?.channelTitle?.toLowerCase().includes(q) ||
          (vid.snippet?.tags || []).some((t) => t.toLowerCase().includes(q))
      )
    }

    if (sort === 'views') {
      v.sort((a, b) => parseInt(b.statistics?.viewCount || 0) - parseInt(a.statistics?.viewCount || 0))
    } else if (sort === 'likes') {
      v.sort((a, b) => parseInt(b.statistics?.likeCount || 0) - parseInt(a.statistics?.likeCount || 0))
    } else if (sort === 'duration') {
      v.sort((a, b) => toSeconds(b.contentDetails?.duration) - toSeconds(a.contentDetails?.duration))
    }

    return v
  }, [videos, searchQuery, sort])

  return { filtered, searchQuery, setSearchQuery, sort, setSort }
}
