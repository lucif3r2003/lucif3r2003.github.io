import React from 'react'
import r from '../data/resume.json'

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href={r.github} target="_blank" rel="noreferrer" aria-label="github" title="GitHub">GitHub</a>
      <a href={r.linkedin} target="_blank" rel="noreferrer" aria-label="linkedin" title="LinkedIn">LinkedIn</a>
      <a href={`mailto:${r.email}`} target="_blank" rel="noreferrer" aria-label="email" title="Email">Email</a>
    </div>
  )
}

export default SocialLinks
