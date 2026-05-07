import React, { useState } from 'react'

function guessFields(text) {
  const lines = text.split(/\n+/).map(l => l.trim()).filter(Boolean)
  const emailMatch = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)
  const phoneMatch = text.match(/(\+?\d[\d\s().-]{6,}\d)/)
  const name = lines[0] || 'Your Name'
  return {
    name,
    email: emailMatch ? emailMatch[0] : 'you@example.com',
    phone: phoneMatch ? phoneMatch[0] : '+84 ...',
    summary: lines.slice(1,4).join(' ')
  }
}

const CVImporter = () => {
  const [text, setText] = useState('')
  const [preview, setPreview] = useState(null)

  const handleImport = () => {
    const guessed = guessFields(text)
    const json = {
      ...guessed,
      title: 'Frontend Developer',
      skills: [],
      experience: []
    }
    setPreview(json)
  }

  const downloadJSON = () => {
    if (!preview) return
    const blob = new Blob([JSON.stringify(preview, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'resume.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="container section cv-import">
      <h2>Import CV (paste)</h2>
      <p className="muted">Paste your CV text here. The importer will try to extract name, email, phone and summary.</p>
      <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Paste your CV text here" rows={8} />
      <div style={{display:'flex',gap:8,marginTop:8}}>
        <button className="btn" onClick={handleImport}>Preview</button>
        <button className="btn btn-outline" onClick={downloadJSON} disabled={!preview}>Download JSON</button>
      </div>
      {preview && (
        <div className="preview" style={{marginTop:12}}>
          <pre style={{whiteSpace:'pre-wrap'}}>{JSON.stringify(preview, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default CVImporter
