import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      subject: form.get('subject'),
      message: form.get('message'),
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('Thanks! Your message was sent.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative bg-slate-50 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-semibold text-slate-900">Contact</h2>
        <p className="mt-2 text-slate-600">Have a project in mind? Let's chat.</p>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm text-slate-700" htmlFor="name">Name</label>
            <input id="name" name="name" required className="rounded-md border border-slate-300 bg-white px-4 py-2 outline-none focus:ring-2 focus:ring-slate-400" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-slate-700" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required className="rounded-md border border-slate-300 bg-white px-4 py-2 outline-none focus:ring-2 focus:ring-slate-400" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-slate-700" htmlFor="subject">Subject</label>
            <input id="subject" name="subject" className="rounded-md border border-slate-300 bg-white px-4 py-2 outline-none focus:ring-2 focus:ring-slate-400" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-slate-700" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required className="rounded-md border border-slate-300 bg-white px-4 py-2 outline-none focus:ring-2 focus:ring-slate-400" />
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-md bg-slate-900 text-white px-5 py-2.5 font-medium hover:bg-slate-800 transition" type="submit">Send</button>
            <span className="text-sm text-slate-600">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
