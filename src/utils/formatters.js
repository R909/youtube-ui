/**
 * Parse ISO 8601 duration to human-readable format
 * e.g. PT1H17M -> 1:17:00
 */
export function parseDuration(iso = 'PT0S') {
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
  if (!m) return '0:00'
  const h = parseInt(m[1] || 0)
  const min = parseInt(m[2] || 0)
  const s = parseInt(m[3] || 0)
  if (h) return `${h}:${String(min).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  return `${min}:${String(s).padStart(2, '0')}`
}

/**
 * Convert ISO duration to total seconds (for sorting)
 */
export function toSeconds(iso = 'PT0S') {
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
  return m ? (+m[1] || 0) * 3600 + (+m[2] || 0) * 60 + (+m[3] || 0) : 0
}

/**
 * Format large numbers to K/M
 */
export function formatNum(n) {
  n = parseInt(n || 0)
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M'
  if (n >= 1_000) return (n / 1_000).toFixed(1) + 'K'
  return n.toString()
}

/**
 * Relative time from date string
 */
export function timeAgo(dateStr) {
  const diff = (Date.now() - new Date(dateStr)) / 1000
  if (diff < 60) return 'just now'
  if (diff < 3600) return Math.floor(diff / 60) + 'm ago'
  if (diff < 86400) return Math.floor(diff / 3600) + 'h ago'
  if (diff < 2592000) return Math.floor(diff / 86400) + 'd ago'
  if (diff < 31536000) return Math.floor(diff / 2592000) + 'mo ago'
  return Math.floor(diff / 31536000) + 'y ago'
}

/**
 * Extract initials from name
 */
export function initials(name = '') {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0] || '')
    .join('')
    .toUpperCase()
}
