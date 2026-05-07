import React from 'react'
import SocialLinks from './SocialLinks'
import r from '../data/resume.json'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>{r.name}</strong>
          <div className="muted">{r.title} • React + Vite portfolio</div>
        </div>
        <SocialLinks />
      </div>
    </footer>
  )
}

export default Footer
