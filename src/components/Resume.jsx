import React from 'react'
import r from '../data/resume.json'

const Resume = () => {
  return (
    <div className="container section resume reveal-on-scroll">
      <h2>Resume</h2>
      <div className="resume-grid">
        <div>
          <h3>{r.name}</h3>
          <p className="muted">{r.title}</p>
          <p className="muted">{r.location}</p>
          <p>{r.email} • {r.phone}</p>
          <h4 style={{marginTop:12}}>Links</h4>
          <p className="muted"><a href={r.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> • <a href={r.github} target="_blank" rel="noreferrer">GitHub</a></p>
        </div>
        <div>
          <h4>Summary</h4>
          <p>{r.summary}</p>
          <h4>Skills</h4>
          <p>{r.skills.join(', ')}</p>
        </div>
      </div>

      <h4>Experience</h4>
      {r.experience.map((e, i) => (
        <div key={i} className="exp-item">
          <strong>{e.role}</strong> — <em>{e.company}</em>
          <div className="muted">{e.period} • {e.location || ''}</div>
          <p>{e.details}</p>
        </div>
      ))}

      <h4>Education</h4>
      {r.education && r.education.map((ed, i) => (
        <div key={i} className="exp-item">
          <strong>{ed.degree}</strong> — <em>{ed.school}</em>
          <div className="muted">{ed.period}</div>
          <p>{ed.details}</p>
        </div>
      ))}

      <h4>Certifications</h4>
      <ul>
        {r.certifications && r.certifications.map((c, i) => <li key={i} className="muted">{c}</li>)}
      </ul>

      <h4>Languages</h4>
      <p className="muted">{(r.languages || []).join(', ')}</p>
    </div>
  )
}

export default Resume
