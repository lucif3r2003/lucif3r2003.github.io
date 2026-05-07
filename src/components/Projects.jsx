import React from 'react'
import ProjectCard from './ProjectCard'
import r from '../data/resume.json'

const Projects = () => {
  const list = r.projects || []
  return (
    <section className="container section projects reveal-on-scroll template-section" id="projects">
      <div className="section-divider">
        <span>PROJECTS</span>
      </div>
      <div className="project-grid">
        {list.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  )
}

export default Projects
