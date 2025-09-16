import React from 'react'
import { useTranslation } from 'react-i18next'
import { SITE } from '../site.config'

export default function Footer(){
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="container" style={{display:'grid', gap:8}}>
        <div><strong>Instagram:</strong> <a href={SITE.instagram} target="_blank" rel="noreferrer">@escola.estacaomusical</a></div>
        <div><strong>Email:</strong> <a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
        <div><strong>{t('contact.address_label')}:</strong> {SITE.address}</div>

        {/* crédito da desenvolvedora */}
        <div style={{display:'flex', alignItems:'center', gap:10, marginTop:6}}>
          <a href="https://helpusbr.com" target="_blank" rel="noreferrer" title="HelpUS">
            <img src="/img/helpus-icon.png" alt="HelpUS" style={{width:28, height:28, borderRadius:8}} />
          </a>
          <span style={{fontSize:14}}>
            Desenvolvido por <a href="https://helpusbr.com" target="_blank" rel="noreferrer">HelpUS</a>
          </span>
        </div>

        <div style={{color:'var(--muted)'}}>{t('footer.rights', {year})}</div>
      </div>
    </footer>
  )
}
