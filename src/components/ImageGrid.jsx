import React from 'react'
const images = ['/img/foto01.webp','/img/foto02.webp','/img/foto03.webp','/img/foto04.webp','/img/foto05.webp','/img/foto06.webp']
export default function ImageGrid(){
  return (<div className="grid">{images.map((src,i)=> <img key={i} src={src} alt={`Foto ${i+1}`} loading="lazy" />)}</div>)
}
