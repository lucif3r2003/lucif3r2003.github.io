import React from 'react'

const ProjectCard = ({ project }) => {
  const tech = project.tech || []

  return (
    <div className="project-card reveal-on-scroll">
      <div className="project-topline">
        <span>{project.role}</span>
        <span>{project.period}</span>
      </div>
      <h4>{project.title}</h4>
      <p className="muted project-desc">{project.desc}</p>
      <p className="project-label">Tech stack</p>
      <div className="tech-row">
        {tech.map((item) => <span key={item}>{item}</span>)}
      </div>
    </div>
  )
}

export default ProjectCard
