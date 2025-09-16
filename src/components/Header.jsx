import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Header(){
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const changeLang = (lng)=> { i18n.changeLanguage(lng); setOpen(false) }

  return (
    <header>
      <div className="container header-row">
        <a href="#hero" className="brand" style={{textDecoration:'none', color:'inherit'}}>
          <img
            src="/img/logo.jpg"
            alt="Logo Escola Estação Musical"
            style={{ width: 64, height: 64, borderRadius: '50%' }}
          />
          <span className="brand-title">Escola Estação Musical</span>
        </a>

        {/* Botão hambúrguer (mobile) */}
        <button
          className="menu-btn"
          aria-label="Abrir menu"
          onClick={()=> setOpen(v=>!v)}
        >
          <span/>
          <span/>
          <span/>
        </button>

        <nav className={`main-nav ${open ? 'open' : ''}`} onClick={()=> setOpen(false)}>
          <a href="#hero">{t('menu.home')}</a>
          <a href="#gallery">{t('menu.gallery')}</a>
          <a href="#contact">{t('menu.contact')}</a>
          <a href="#about">Sobre</a>
          <div className="lang-box" onClick={(e)=> e.stopPropagation()}>
            <span className="lang" onClick={()=>changeLang('pt')}>PT</span>
            <span className="lang" onClick={()=>changeLang('en')}>EN</span>
            <span className="lang" onClick={()=>changeLang('es')}>ES</span>
          </div>
        </nav>
      </div>
    </header>
  )
}
