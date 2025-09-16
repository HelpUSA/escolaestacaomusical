import React from 'react'
const videos = ['/videos/video01.mp4','/videos/video02.mp4','/videos/video03.mp4','/videos/video04.mp4','/videos/video05.mp4','/videos/video06.mp4']
export default function VideoGallery(){
  return (
    <div className="grid">
      {videos.map((src,i)=>(
        <video key={i} src={src} controls preload="metadata" style={{width:'100%',height:200,objectFit:'cover',borderRadius:12,background:'#000'}} />
      ))}
    </div>
  )
}
