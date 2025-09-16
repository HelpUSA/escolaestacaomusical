// src/App.jsx
import React from 'react'
import { useTranslation } from 'react-i18next'

import Header from './components/Header'
import VideoCarousel from './components/VideoCarousel'
import ImageGrid from './components/ImageGrid'
import VideoGallery from './components/VideoGallery'
import AboutSection from './components/AboutSection'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Footer from './components/Footer'
import { SITE } from './site.config'

export default function App() {
  const { t } = useTranslation()
  const waLink =
    `https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}?text=` +
    encodeURIComponent('Olá! Quero saber mais sobre as aulas.')

  return (
    <>
      <Header />

      {/* HERO — texto à esquerda e imagem MENOR à direita */}
      <section id="hero" className="container" style={{ marginTop: 16 }}>
        {/* media query local para mobile */}
        <style>
          {`
            @media (max-width: 640px) {
              .hero-grid {
                grid-template-columns: 1fr !important; /* empilha no mobile */
              }
              .hero-img {
                aspect-ratio: 4 / 5;       /* garante altura agradável no celular */
                height: auto !important;
              }
            }
          `}
        </style>

        <div
          className="card hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.3fr minmax(240px, 380px)', /* imagem menor no desktop */
            gap: 24,
            alignItems: 'center'
          }}
        >
          <div>
            <h1 style={{ margin: '0 0 6px 0' }}>{t('hero.title')}</h1>
            <p style={{ color: 'var(--muted)', margin: '0 0 14px 0' }}>
              {t('hero.subtitle')}
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <a className="btn" href={waLink} target="_blank" rel="noreferrer">
                Falar no WhatsApp
              </a>
              <a className="lang" href="#contact">{t('menu.contact')}</a>
            </div>
          </div>

          <div
            style={{
              borderRadius: 16,
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,.06)'
            }}
          >
            <img
              src="/img/imagem01.png"
              alt="Professor Chagas no teclado"
              className="hero-img"
              loading="lazy"
              decoding="async"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'left center' // foca no rosto no lado esquerdo
              }}
            />
          </div>
        </div>
      </section>

      {/* CARROSSEL — 1 por vez + timer */}
      <section id="videos" className="container" style={{ marginTop: 24 }}>
        <div className="card" style={{ padding: 0 }}>
          <VideoCarousel narrow={true} intervalMs={5000} />
        </div>
      </section>

      {/* GALERIA DE FOTOS */}
      <section id="gallery" className="container" style={{ marginTop: 24 }}>
        <h2 style={{ margin: '12px 0' }}>{t('gallery.title')}</h2>
        <div className="card"><ImageGrid /></div>
      </section>

      {/* GALERIA DE VÍDEOS */}
      <section className="container" style={{ marginTop: 24 }}>
        <h2 style={{ margin: '12px 0' }}>Galeria de Vídeos</h2>
        <div className="card"><VideoGallery /></div>
      </section>

      {/* SOBRE */}
      <AboutSection />

      {/* CONTATO */}
      <section id="contact" className="container" style={{ marginTop: 24 }}>
        <div className="card" style={{ display: 'grid', gap: 10 }}>
          <h2 style={{ margin: '0 0 6px 0' }}>{t('contact.title')}</h2>
          <iframe
            title="Mapa"
            style={{ width: '100%', height: 300, border: 0, borderRadius: 12 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Av.+Gov.+Fl%C3%A1vio+Ribeiro+Coutinho,+167+-+Mana%C3%A1ra,+Jo%C3%A3o+Pessoa&output=embed"
          />
        </div>
      </section>

      <FloatingWhatsApp />
      <Footer />
    </>
  )
}
