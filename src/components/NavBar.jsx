import React, { useState } from 'react'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    close()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">Bui Cong Manh</div>
        <button className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
          <li><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a></li>
          <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
          <li><a href="#education" onClick={(e) => handleNavClick(e, 'education')}>Education</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
