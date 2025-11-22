import { useState } from 'react'

function Generator() {
  const [prompt, setPrompt] = useState('A modern AI startup landing page for a voice agent named FlamesBlue')
  const [color, setColor] = useState('indigo')
  const [sections, setSections] = useState(3)
  const [html, setHtml] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const generate = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, color, sections: Number(sections) })
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.detail || 'Failed to generate site')
      }
      const data = await res.json()
      setHtml(data.html)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const copyHtml = async () => {
    if (!html) return
    await navigator.clipboard.writeText(html)
    alert('HTML copied to clipboard!')
  }

  return (
    <section id="generate" className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Generate a website</h2>
          <p className="mt-2 text-slate-300">Describe what you want and get a ready-to-export page.</p>
        </div>

        <form onSubmit={generate} className="rounded-2xl p-6 bg-white/5 border border-white/10">
          <div className="grid gap-4 md:grid-cols-6">
            <div className="md:col-span-4">
              <label className="block text-sm text-slate-300 mb-2">Prompt</label>
              <input value={prompt} onChange={(e) => setPrompt(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder:text-white/40" placeholder="Describe your site…" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-2">Accent</label>
              <select value={color} onChange={(e) => setColor(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white">
                {['indigo','violet','cyan','emerald','rose','orange','amber'].map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-2">Sections</label>
              <input type="number" min={1} max={6} value={sections} onChange={(e) => setSections(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white" />
            </div>
            <div className="md:col-span-6 flex gap-3 items-end">
              <button disabled={loading} className="px-5 py-3 rounded-lg bg-indigo-500 text-white hover:bg-indigo-400 transition disabled:opacity-60">
                {loading ? 'Generating…' : 'Generate' }
              </button>
              {html && (
                <button type="button" onClick={copyHtml} className="px-5 py-3 rounded-lg border border-white/15 hover:border-white/25 text-white/90 transition">
                  Copy HTML
                </button>
              )}
            </div>
          </div>
        </form>

        {error && (
          <p className="mt-4 text-rose-400">{error}</p>
        )}

        {html && (
          <div className="mt-8 rounded-xl overflow-hidden border border-white/10">
            <iframe title="Preview" srcDoc={html} className="w-full h-[600px] bg-white"></iframe>
          </div>
        )}
      </div>
    </section>
  )
}

export default Generator
