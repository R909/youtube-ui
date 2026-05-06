import { useState } from 'react'
import { parseDuration, formatNum, timeAgo, initials } from '../../utils/formatters'

function channelColor(name = '') {
  const colors = [
    ['#ff0000', '#ff4d4f'],
    ['#ff8f00', '#ffb347'],
    ['#1f6feb', '#5ab0ff'],
    ['#00b894', '#35d0ba'],
    ['#8e44ad', '#b87dff'],
    ['#d6336c', '#ff6b9a'],
  ]
  const idx = name.charCodeAt(0) % colors.length
  return colors[idx]
}

export default function VideoCard({ video, index }) {
  const [imgError, setImgError] = useState(false)

  const s = video.snippet || {}
  const st = video.statistics || {}
  const cd = video.contentDetails || {}

  const thumb = s.thumbnails?.high?.url || s.thumbnails?.medium?.url || ''
  const dur = parseDuration(cd.duration)
  const ytUrl = `https://www.youtube.com/watch?v=${video.id}`
  const [c1, c2] = channelColor(s.channelTitle)

  const views = formatNum(st.viewCount)
  const published = timeAgo(s.publishedAt)

  return (
    <a
      href={ytUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl transition-transform duration-200 hover:-translate-y-1"
      style={{
        animation: `fadeUp 0.45s ease ${index * 0.04}s both`,
      }}
    >
      <div className="overflow-hidden rounded-2xl">
        <div className="relative aspect-video bg-[#202020]">
          {!imgError ? (
            <img
              src={thumb}
              alt={s.title}
              loading="lazy"
              onError={() => setImgError(true)}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-5xl text-[#6f6f6f]">
              ▶
            </div>
          )}

          <span className="absolute bottom-2 right-2 rounded bg-black/85 px-1.5 py-0.5 text-[11px] font-medium text-white">
            {dur}
          </span>
        </div>

        <div className="flex gap-3 bg-[#0f0f0f] px-0 pt-3">
          <div
            className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
            style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
          >
            {initials(s.channelTitle)}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="line-clamp-2 text-[15px] font-medium leading-5 text-[#f1f1f1] group-hover:text-white">
              {s.title}
            </h3>

            <p className="mt-1 text-sm text-[#aaaaaa]">{s.channelTitle || 'Unknown channel'}</p>
            <p className="text-sm text-[#aaaaaa]">
              {views} views · {published}
            </p>
          </div>
        </div>
      </div>
    </a>
  )
}
