import React from 'react'
import { SITE } from '../site.config'
export default function FloatingWhatsApp(){
  const msg = encodeURIComponent('Olá! Tenho interesse nas aulas de música.')
  const href = `https://wa.me/${SITE.whatsapp.replace(/\D/g,'')}?text=${msg}`
  return <a className="wa" href={href} target="_blank" rel="noreferrer"><span>WhatsApp</span></a>
}
