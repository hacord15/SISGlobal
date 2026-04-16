// components/csr/ContactForm.js — Client-side form with state
import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', type: 'general', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 20px' }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
        <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Message Sent!</h3>
        <p style={{ fontSize: 15, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 24 }}>
          Thanks for reaching out! Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', type: 'general', message: '' }) }}
          className="btn btn-outline"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div className="grid-2">
        <div className="form-group">
          <label className="form-label">Full Name *</label>
          <input className="form-input" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
        </div>
        <div className="form-group">
          <label className="form-label">Email Address *</label>
          <input className="form-input" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Inquiry Type</label>
        <select className="form-input" name="type" value={form.type} onChange={handleChange}>
          <option value="general">General Inquiry</option>
          <option value="employer">Employer Support</option>
          <option value="candidate">Candidate Support</option>
          <option value="billing">Billing Question</option>
          <option value="partnership">Partnership Opportunity</option>
          <option value="press">Press & Media</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Subject *</label>
        <input className="form-input" name="subject" value={form.subject} onChange={handleChange} placeholder="Brief subject line..." required />
      </div>

      <div className="form-group">
        <label className="form-label">Message *</label>
        <textarea
          className="form-input" name="message" rows="5"
          value={form.message} onChange={handleChange}
          placeholder="Tell us how we can help..."
          required
          style={{ resize: 'vertical' }}
        />
      </div>

      <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', padding: '14px' }} disabled={loading}>
        {loading ? 'Sending...' : 'Send Message →'}
      </button>
    </form>
  )
}
