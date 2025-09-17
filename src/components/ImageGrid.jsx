// src/components/ImageGrid.jsx
import React from 'react'

export default function ImageGrid() {
  const images = [
    '/img/foto01.webp',
    '/img/foto02.webp',
    '/img/foto03.webp',
    '/img/foto04.webp',
    '/img/foto05.webp',
    '/img/foto06.jpg',
    '/img/foto06.webp'
  ]

  return (
    <section className="image-grid-wrap">
      <style>{`
        .image-grid{
          display:grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap:16px;
        }
        .image-grid .tile{
          background:#121212;
          border-radius:14px;
          padding:8px;
          display:flex;
          align-items:center;
          justify-content:center;
        }
        .image-grid img{
          display:block;
          width:100%;
          height:auto;
          object-fit:contain;
          border-radius:10px;
        }
      `}</style>

      <div className="image-grid">
        {images.map((src, i) => (
          <div className="tile" key={i}>
            <img src={src} alt={`Momento ${i+1}`} loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
    </section>
  )
}
