import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app-root">
      <NavBar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="education"><Education /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  )
}
