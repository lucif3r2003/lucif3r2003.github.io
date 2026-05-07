import React from 'react'
import r from '../data/resume.json'

const About = () => {
  const highlights = [r.location, r.email, r.phone, 'Backend Developer', 'FPT University']

  return (
    <section className="container section about reveal-on-scroll template-section" id="about">
      <div className="section-divider">
        <span>ABOUT ME</span>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p className="section-kicker">Who I am?</p>
          <p className="text-block">{r.summary}</p>
          <div className="tag-grid">
            {highlights.map((item) => <span key={item} className="tag-pill">{item}</span>)}
          </div>
          <p className="muted about-note">
            Tôi làm việc nhiều với hệ thống backend, thiết kế API, tích hợp dịch vụ và tối ưu hiệu năng cho ứng dụng doanh nghiệp.
          </p>
        </div>
        <div className="about-card">
          <div className="about-avatar" aria-hidden>
            <span>{r.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}</span>
          </div>
          <h3>{r.name}</h3>
          <p>{r.title}</p>
          <ul>
            <li><strong>Location:</strong> {r.location}</li>
            <li><strong>Email:</strong> {r.email}</li>
            <li><strong>Phone:</strong> {r.phone}</li>
            <li><strong>LinkedIn:</strong> <a href={r.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/manhbc</a></li>
            <li><strong>GitHub:</strong> <a href={r.github} target="_blank" rel="noreferrer">github.com/lucif3r2003</a></li>
            <li><strong>Languages:</strong> {r.languages.join(', ')}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
