// src/components/HeroProfessor.jsx
import React from 'react'
import { SITE } from '../site.config'
import { useTranslation } from 'react-i18next'

export default function HeroProfessor() {
  const { t } = useTranslation()
  const msg = encodeURIComponent('Olá, Prof. Chagas! Quero saber mais sobre as aulas.')
  const href = `https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}?text=${msg}`

  return (
    <section className="hero-pro" style={{ padding: '20px 0' }}>
      {/* estilos embutidos */}
      <style>{`
        .hero-pro {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .hero-pro .pfp img {
          max-width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 12px;
        }
        @media (max-width: 768px) {
          .hero-pro {
            flex-direction: column;
            text-align: center;
          }
          .hero-pro .pfp img {
            width: 100%;
            height: auto;
          }
        }
      `}</style>

      <div className="pfp">
        <img src="/img/professor-chagas.png" alt="Professor Chagas" />
      </div>

      <div className="card" style={{ maxWidth: 420 }}>
        <h1 style={{ marginTop: 0 }}>{t('hero.title')}</h1>
        <p className="muted" style={{ marginTop: 6 }}>{t('hero.subtitle')}</p>

        <div style={{ display: 'flex', gap: 12, marginTop: 14, flexWrap: 'wrap' }}>
          <a className="btn" href={href} target="_blank" rel="noreferrer">
            <span>WhatsApp</span>
          </a>
          <a className="lang" href="#gallery">{t('menu.gallery')}</a>
        </div>
      </div>
    </section>
  )
}
