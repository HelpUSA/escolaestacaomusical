// src/components/ImageGrid.jsx
import React from 'react'

export default function ImageGrid({ images = [] }) {
  if (!images?.length) return null

  return (
    <section className="image-grid-wrap">
      <style>{`
        .image-grid{
          display:grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap:16px;
        }
        /* cada tile é um “quadro” flex: a imagem fica inteira no centro */
        .image-grid .tile{
          background:#121212;
          border-radius:14px;
          padding:8px;
          display:flex;
          align-items:center;
          justify-content:center;
          /* sem height fixa, sem absolute */
        }
        .image-grid img{
          display:block;
          width:100%;
          height:auto;
          object-fit:contain;
          border-radius:10px;
        }
        /* Caso queira quadros com proporção fixa SEM cortar a foto (letterbox) */
        /* .image-grid .tile{ aspect-ratio: 16/9; } */
      `}</style>

      <div className="image-grid">
        {images.map((src, i) => (
          <div className="tile" key={i}>
            <img src={src} alt={`Momento ${i+1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}
