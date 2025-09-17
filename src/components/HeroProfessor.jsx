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
      <style>{`
        .hero-pro{
          display:flex;
          align-items:center;
          justify-content:center;
          gap:20px;
          flex-wrap:wrap;
        }
        /* evita que algum CSS global prenda altura do contêiner da foto */
        .hero-pro .pfp{
          width:100%;
          max-width:560px;
        }
        /* garante imagem completa SEM recorte, mesmo com CSS global agressivo */
        .hero-pro .pfp img{
          display:block;
          width:100%;
          max-width:100%;
          height:auto !important;
          object-fit: contain !important;
          border-radius:12px;
          aspect-ratio:auto; /* ignora proporções forçadas */
        }

        /* card com largura confortável ao lado da foto */
        .hero-pro .card{
          max-width:420px;
        }

        @media (max-width:768px){
          .hero-pro{
            flex-direction:column;
            text-align:center;
          }
          .hero-pro .pfp{
            max-width:100%;
          }
          .hero-pro .card{
            width:100%;
            max-width:640px;
          }
        }
      `}</style>

      <div className="pfp">
        <img
          src="/img/professor-chagas.png"
          alt="Professor Chagas"
          loading="eager"
          decoding="async"
          sizes="(max-width: 768px) 100vw, 560px"
        />
      </div>

      <div className="card">
        <h1 style={{ marginTop: 0 }}>{t('hero.title')}</h1>
        <p className="muted" style={{ marginTop: 6 }}>{t('hero.subtitle')}</p>

        <div style={{ display:'flex', gap:12, marginTop:14, flexWrap:'wrap', justifyContent:'center' }}>
          <a className="btn" href={href} target="_blank" rel="noreferrer">
            <span>WhatsApp</span>
          </a>
          <a className="lang" href="#gallery">{t('menu.gallery')}</a>
        </div>
      </div>
    </section>
  )
}
