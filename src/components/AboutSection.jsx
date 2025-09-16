import React from 'react'
import { useTranslation } from 'react-i18next'

export default function AboutSection(){
  const { t } = useTranslation()
  return (
    <section id="about" className="container" style={{marginTop:24}}>
      <div className="card">
        <h2 style={{margin:'0 0 6px 0'}}>{t('about.title')}</h2>
        <p style={{color:'var(--muted)'}}>{t('about.text')}</p>
      </div>
    </section>
  )
}
