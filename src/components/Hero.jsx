import React from 'react'
import r from '../data/resume.json'

const Hero = () => {
  return (
    <section className="hero template-section">
      <div className="hero-decor hero-decor-left" aria-hidden />
      <div className="hero-decor hero-decor-right" aria-hidden />
      <div className="container hero-shell reveal-on-scroll">
        <div className="hero-copy">
          <p className="eyebrow">Developer Portfolio</p>
          <h1>
            Hello, <br />
            This is <span>{r.name}</span>
          </h1>
          <p className="lead">{r.title}</p>
          <p className="subtitle muted">{r.summary}</p>
          <div className="hero-cta">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
          <div className="hero-links">
            <a href={r.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={r.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${r.email}`} target="_blank" rel="noreferrer">Email</a>
          </div>
        </div>
        <div className="hero-panel">
          <div className="hero-avatar" aria-hidden>
            <span>{r.name.split(' ').slice(-1)[0].slice(0, 1)}</span>
          </div>
          <div className="hero-code">
            <div className="code-window">
              <div className="code-dots"><span /><span /><span /></div>
              <pre>{`const developer = {
  name: '${r.name}',
  role: '${r.title}',
  location: '${r.location}',
  focus: ['Backend', 'Microservices', 'APIs'],
  stack: ['Go', '.NET', 'Node.js', 'React']
}`}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
