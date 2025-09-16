import React, { useEffect, useRef, useState } from 'react'

const defaultVideos = [
  { src: '/videos/video01.mp4', poster: '/img/foto01.webp' },
  { src: '/videos/video02.mp4', poster: '/img/foto02.webp' },
  { src: '/videos/video03.mp4', poster: '/img/foto03.webp' },
  { src: '/videos/video04.mp4', poster: '/img/foto04.webp' },
  { src: '/videos/video05.mp4', poster: '/img/foto05.webp' },
  { src: '/videos/video06.mp4', poster: '/img/foto06.webp' },
]

export default function VideoCarousel({ items = defaultVideos, narrow = true, intervalMs = 5000 }) {
  const trackRef = useRef(null)
  const vidsRef = useRef([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const idx = Number(entry.target.dataset.index)
        if (entry.isIntersecting && entry.intersectionRatio > 0.75) {
          setActive(idx)
          entry.target.muted = true
          entry.target.play().catch(()=>{})
        } else {
          entry.target.pause()
        }
      })
    }, { root: track, threshold: [0.75] })
    vidsRef.current.forEach(v => v && observer.observe(v))
    return () => observer.disconnect()
  }, [items.length])

  const scrollToIndex = (idx) => {
    const el = vidsRef.current[idx]
    if (el) el.scrollIntoView({ behavior:'smooth', inline:'center', block:'nearest' })
  }
  const prev = () => scrollToIndex(Math.max(0, active - 1))
  const next = () => scrollToIndex(Math.min(items.length - 1, active + 1))
  const onKeyDown = (e) => { if (e.key==='ArrowRight') next(); if (e.key==='ArrowLeft') prev(); }

  return (
    <div className="carousel-wrap" onKeyDown={onKeyDown} tabIndex={0}>
      <div className="carousel" ref={trackRef}>
        {items.map((v,i)=> (
          <video
            key={i}
            data-index={i}
            ref={(el)=> vidsRef.current[i] = el}
            src={v.src}
            poster={v.poster}
            playsInline
            preload="metadata"
            controls
          />
        ))}
      </div>
      <button className="carousel-btn prev" aria-label="Anterior" onClick={prev}>‹</button>
      <button className="carousel-btn next" aria-label="Próximo" onClick={next}>›</button>
      <div className="carousel-dots">
        {items.map((_,i)=> (
          <span key={i} className={"dot " + (i===active ? "active" : "")} onClick={()=>scrollToIndex(i)} />
        ))}
      </div>
    </div>
  )
}
