import React from 'react'
import r from '../data/resume.json'

const sections = [
  { title: 'Database', items: ['MySQL', 'MSSQL', 'Oracle', 'MongoDB'] },
  { title: 'Tools & DevOps', items: ['Docker', 'Git', 'Linux'] },
  { title: 'Concepts', items: ['Microservices', 'REST APIs'] },
  { title: 'Security', items: ['JWT', 'OAuth2', 'Authentication', 'Authorization'] },
  { title: 'Programming Languages', items: ['Go', 'C#', 'JavaScript', 'TypeScript'] },
  { title: 'Back-end', items: ['Go', '.NET', 'Node.js'] },
  { title: 'Front-end', items: ['HTML', 'CSS', 'ReactJS'] }
]

const Skills = () => {
  return (
    <section className="container section reveal-on-scroll template-section" id="skills">
      <div className="section-divider">
        <span>SKILLS</span>
      </div>
      <div className="skills-grid">
        {sections.map((group) => (
          <div key={group.title} className="skill-card">
            <h3>{group.title}</h3>
            <div className="tag-grid">
              {group.items.map((item) => <span key={item} className="tag-pill">{item}</span>)}
            </div>
          </div>
        ))}
      </div>
      <p className="muted skills-note">{r.skills.join(' • ')}</p>
    </section>
  )
}

export default Skills