import React from 'react'
import r from '../data/resume.json'

const Experience = () => {
  return (
    <section className="container section reveal-on-scroll template-section" id="experience">
      <div className="section-divider">
        <span>EXPERIENCES</span>
      </div>
      <div className="timeline-grid">
        {r.experience.map((item) => (
          <article key={`${item.company}-${item.period}`} className="timeline-card">
            <p className="timeline-period">{item.period}</p>
            <h3>{item.role}</h3>
            <p className="timeline-company">{item.company}</p>
            <p className="muted">{item.location}</p>
            <p>{item.details}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience