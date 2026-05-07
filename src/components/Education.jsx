import React from 'react'
import r from '../data/resume.json'

const Education = () => {
  return (
    <section className="container section reveal-on-scroll template-section" id="education">
      <div className="section-divider">
        <span>EDUCATION</span>
      </div>
      <div className="education-grid">
        {r.education.map((item) => (
          <article key={`${item.school}-${item.period}`} className="education-card">
            <p className="timeline-period">{item.period}</p>
            <h3>{item.degree}</h3>
            <p className="timeline-company">{item.school}</p>
            <p>{item.details}</p>
          </article>
        ))}
        <article className="education-card">
          <p className="timeline-period">CERTIFICATIONS</p>
          <ul className="detail-list">
            {r.certifications.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Education