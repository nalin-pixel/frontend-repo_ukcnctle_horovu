import { useEffect, useState } from 'react'

function FunctionsGrid() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/functions`)
        const data = await res.json()
        setItems(data.functions || [])
      } catch (e) {
        setError('Could not load functions')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="functions" className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Everything included — for free</h2>
          <p className="mt-3 text-slate-300">Explore the capabilities available today.</p>
        </div>

        {loading ? (
          <p className="text-slate-400">Loading features…</p>
        ) : error ? (
          <p className="text-rose-400">{error}</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((f) => (
              <div key={f.id} className="rounded-xl p-5 bg-white/5 border border-white/10">
                <div className="text-xs uppercase tracking-wide text-emerald-300/90 mb-2">{f.free ? 'Free' : 'Pro'}</div>
                <h3 className="text-lg font-semibold text-white mb-1">{f.name}</h3>
                <p className="text-slate-300 text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default FunctionsGrid
