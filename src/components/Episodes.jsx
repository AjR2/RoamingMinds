import { useState, useEffect } from 'react'
import './Episodes.css'

const RSS_URL = 'https://anchor.fm/s/10746343c/podcast/rss'
const MAX_EPISODES = 6

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

function parseDuration(raw) {
  if (!raw) return null
  // HH:MM:SS or MM:SS
  const parts = raw.split(':').map(Number)
  if (parts.length === 3) {
    const [h, m] = parts
    return h > 0 ? `${h}h ${m}m` : `${m}m`
  }
  if (parts.length === 2) {
    const [m] = parts
    return `${m}m`
  }
  return null
}

export default function Episodes() {
  const [episodes, setEpisodes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]   = useState(false)

  const fetchEpisodes = async () => {
    setLoading(true)
    setError(false)
    try {
      const res = await fetch(RSS_URL)
      if (!res.ok) throw new Error('Network error')
      const text = await res.text()
      const xml  = new DOMParser().parseFromString(text, 'text/xml')
      if (xml.querySelector('parsererror')) throw new Error('Parse error')

      const items = [...xml.querySelectorAll('item')].slice(0, MAX_EPISODES)
      const parsed = items.map(item => {
        const title    = item.querySelector('title')?.textContent?.replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '').trim() ?? 'Untitled'
        const pubDate  = item.querySelector('pubDate')?.textContent ?? ''
        const desc     = item.querySelector('description')?.textContent?.replace(/<[^>]+>/g, '').replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '').trim().slice(0, 160) ?? ''
        const duration = item.querySelector('duration')?.textContent ?? ''
        const episodeNum = item.querySelector('episode')?.textContent ?? ''
        const link     = item.querySelector('link')?.textContent ?? item.querySelector('enclosure')?.getAttribute('url') ?? '#'
        return { title, pubDate, desc, duration, episodeNum, link }
      })
      setEpisodes(parsed)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchEpisodes() }, [])

  return (
    <section className="episodes section" id="episodes">
      <div className="container">
        <div className="episodes__header">
          <div>
            <span className="section-label">Recent episodes</span>
            <h2 className="section-title episodes__title">Latest from the pod</h2>
            <div className="divider" />
          </div>
          <button
            className="btn btn-outline episodes__refresh"
            onClick={fetchEpisodes}
            disabled={loading}
            aria-label="Refresh episodes"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="1 4 1 10 7 10"/>
              <path d="M3.51 15a9 9 0 1 0 .49-4.5"/>
            </svg>
            Refresh
          </button>
        </div>

        {loading && (
          <div className="episodes__loading" aria-live="polite" aria-label="Loading episodes">
            {Array.from({ length: 3 }).map((_, i) => (
              <div className="episodes__skeleton" key={i} />
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="episodes__error" role="alert">
            <p>Couldn't load episodes right now. <button onClick={fetchEpisodes} className="episodes__retry">Try again</button></p>
          </div>
        )}

        {!loading && !error && episodes.length > 0 && (
          <div className="episodes__grid">
            {episodes.map((ep, i) => (
              <a
                key={i}
                href={ep.link !== '#' ? ep.link : '#listen'}
                target={ep.link !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="episodes__card card"
                aria-label={`Episode: ${ep.title}`}
              >
                <div className="episodes__card-top">
                  <div className="episodes__num-badge">
                    {ep.episodeNum ? `Ep. ${ep.episodeNum}` : `#${i + 1}`}
                  </div>
                  {i === 0 && <span className="episodes__latest-badge">Latest</span>}
                </div>
                <h3 className="episodes__card-title">{ep.title}</h3>
                {ep.desc && <p className="episodes__card-desc">{ep.desc}{ep.desc.length === 160 ? '…' : ''}</p>}
                <div className="episodes__card-meta">
                  {ep.pubDate && <span>{formatDate(ep.pubDate)}</span>}
                  {ep.duration && <span>{parseDuration(ep.duration)}</span>}
                  <span className="episodes__card-play">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    Play
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}

        <div className="episodes__cta">
          <a href="#listen" className="btn btn-primary">See all episodes</a>
        </div>
      </div>
    </section>
  )
}
