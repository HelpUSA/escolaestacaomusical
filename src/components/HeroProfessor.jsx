import React from 'react'
import { SITE } from '../site.config'
import { useTranslation } from 'react-i18next'

export default function HeroProfessor(){
  const { t } = useTranslation()
  const msg = encodeURIComponent('Olá, Prof. Chagas! Quero saber mais sobre as aulas.')
  const href = `https://wa.me/${SITE.whatsapp.replace(/\D/g,'')}?text=${msg}`
  return (
    <section className="hero-pro">
      <div className="pfp">
        <img src="/img/professor-chagas.png" alt="Professor Chagas" />
      </div>
      <div className="card">
        <h1 style={{marginTop:0}}>{t('hero.title')}</h1>
        <p className="muted" style={{marginTop:6}}>{t('hero.subtitle')}</p>
        <div style={{display:'flex', gap:12, marginTop:14}}>
          <a className="btn" href={href} target="_blank" rel="noreferrer">
            <span>WhatsApp</span>
          </a>
          <a className="lang" href="#gallery">{t('menu.gallery')}</a>
        </div>
      </div>
    </section>
  )
}
