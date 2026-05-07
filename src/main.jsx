import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/global.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Reveal-on-scroll using IntersectionObserver
if (typeof window !== 'undefined') {
  window.requestAnimationFrame(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll('.reveal-on-scroll').forEach((element) => observer.observe(element))
  })
}
