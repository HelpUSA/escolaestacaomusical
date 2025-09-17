// src/components/ImageGrid.jsx
import React, { useMemo } from 'react'

export default function ImageGrid({ images }) {
  // Fallback se nada for passado via props
  const fallback = useMemo(() => ([
    '/img/image02.jpg','/img/image03.jpg','/img/image04.jpg','/img/image05.jpg',
    '/img/image06.jpg','/img/image07.jpg','/img/image08.jpg','/img/image09.jpg',
    '/img/image10.jpg','/img/image11.jpg','/img/image12.jpg','/img/image13.jpg',
  ]), [])

  const list = images?.length ? images : fallback

  return (
    <section className="image-grid-wrap">
      <style>{`
        .image-grid{
          display:grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap:16px;
        }
        /* Cada tile é um “quadro” que se dimensiona pelo conteúdo */
        .image-grid .tile{
          background:#121212;
          border-radius:14px;
          padding:8px;
          display:flex;
          align-items:center;
          justify-content:center;
          /* Não fixe altura, não use absolute, não esconda overflow */
        }
        .image-grid img{
          display:block;
          width:100%;
          height:auto;            /* mantém proporção */
          object-fit:contain;     /* não corta */
          border-radius:10px;
        }

        /* Caso EXISTAM regras globais agressivas, neutralize: */
        .image-grid .tile,
        .image-grid img{
          position:static !important;
          overflow:visible !important;
          max-height:none !important;
        }

        @media (max-width:640px){
          .image-grid{ grid-template-columns: repeat(auto-fit, minmax(160px,1fr)); }
        }
      `}</style>

      <div className="image-grid">
        {list.map((src, i) => (
          <div className="tile" key={i}>
            <img src={src} alt={`Momento ${i+1}`} loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
    </section>
  )
}
