import React from 'react'
import r from '../data/resume.json'

const Contact = () => {
  return (
    <section className="container section contact reveal-on-scroll template-section" id="contact">
      <div className="section-divider">
        <span>CONTACT</span>
      </div>
      <div className="contact-grid">
        <div>
          <p className="section-kicker">Let's talk</p>
          <p className="muted">Nếu bạn muốn trao đổi công việc hoặc cơ hội hợp tác, hãy liên hệ qua email hoặc LinkedIn.</p>
          <div className="contact-list">
            <a href={`mailto:${r.email}`} target="_blank" rel="noreferrer">{r.email}</a>
            <a href={r.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={r.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={(e)=>{e.preventDefault(); alert('Form gửi (demo)')}}>
          <input placeholder="Name" required />
          <input placeholder="Email" required />
          <textarea placeholder="Message" required rows="5" />
          <button className="btn" type="submit">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
