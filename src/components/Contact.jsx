import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { T } from '../theme'

const PHONE = '+918921179724'
const WA = 'https://wa.me/918921179724'
const EMAIL = 'info@livorainteriorstudio.com'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: '',
    type: '',
    message: ''
  })

  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }, [])

  const submit = async (e) => {
    e.preventDefault()

    if (Object.values(form).some(v => !v.trim())) {
      setStatus('error')
      return
    }

    setLoading(true)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          phone: form.phone,
          city: form.city,
          space_type: form.type,
          message: form.message,
          to_email: EMAIL,
        }
      )

      setStatus('success')
      setForm({
        name: '',
        phone: '',
        city: '',
        type: '',
        message: ''
      })

      setTimeout(() => setStatus(null), 4000)

    } catch (error) {
      console.error(error)
      setStatus('error')
    }

    setLoading(false)
  }

  return (
    <section id="contact" style={{ background: T.bgBeige }}>
      <div className="container">

        <div className="section-title reveal">
          <span className="label">Get In Touch</span>
          <h2>
            Begin Your <em style={{ color: T.gold }}>Journey</em> With Us
          </h2>
        </div>

        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
          />

          <input
            type="text"
            placeholder="Project City"
            value={form.city}
            onChange={e => setForm({ ...form, city: e.target.value })}
          />

          <select
            value={form.type}
            onChange={e => setForm({ ...form, type: e.target.value })}
          >
            <option value="">Select Type</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Kitchen">Modular Kitchen</option>
          </select>

          <textarea
            rows="4"
            placeholder="Message"
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Schedule Consultation'}
          </button>

          {status === 'success' && <p>✓ Message sent successfully</p>}
          {status === 'error' && <p>✕ Please fill all fields</p>}
        </form>

      </div>
    </section>
  )
}