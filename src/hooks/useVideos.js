import { useState, useEffect, useCallback } from 'react'
import { API_BASE } from '../constants'

export function useVideos() {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalItems, setTotalItems] = useState(0)

  const fetchVideos = useCallback(async (page = 1) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${API_BASE}?page=${page}&limit=10`)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const json = await res.json()
      if (!json.success) throw new Error('API returned failure')
      const d = json.data
      setTotalPages(d.totalPages)
      setTotalItems(d.totalItems)
      setCurrentPage(d.page)
      setVideos(d.data.map((v) => v.items))
    } catch (err) {
      setError(err.message || 'Failed to load videos')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchVideos(1)
  }, [fetchVideos])

  return { videos, loading, error, currentPage, totalPages, totalItems, fetchVideos }
}
