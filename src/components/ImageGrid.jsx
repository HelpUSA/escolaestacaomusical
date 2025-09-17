// src/components/ImageGrid.jsx
export default function ImageGrid({ images = [] }) {
  return (
    <section className="image-grid-wrap">
      <style>{`
        .image-grid{
          display:grid;
          grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
          gap:16px;
        }
        /* cada tile vira um "quadro" flex para centralizar a imagem completa */
        .image-grid .tile{
          background:#121212;
          border-radius:14px;
          padding:8px;
          display:flex;
          align-items:center;
          justify-content:center;
          /* IMPORTANTE: sem altura fixa aqui */
        }
        /* a imagem ocupa a largura possível, mantendo proporção, sem recorte */
        .image-grid img{
          width:100%;
          height:auto;
          object-fit:contain;   /* sem cortes */
          border-radius:10px;
          display:block;
        }
        /* se quiser quadros com proporção fixa MAS sem cortar a foto,
           use aspect-ratio e deixe a imagem caber dentro (letterbox) */
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
