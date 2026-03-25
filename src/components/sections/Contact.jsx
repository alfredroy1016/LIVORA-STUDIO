import { useState } from 'react'
import { FiArrowRight, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { T } from '../../theme'

const WHATSAPP_NUMBER = '918921179724'
const EMAIL = 'info@livorainteriorstudio.com'
const PHONE = '+918921179724'
const ADDRESS = 'Sultan Bathery, Wayanad, Kerala'

const CONTACT_ITEMS = [
  { icon: FiPhone, label: 'Call Us', value: PHONE, href: `tel:${PHONE}` },
  { icon: FiMail, label: 'Email Us', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: FiMapPin, label: 'Visit Studio', value: ADDRESS, href: null },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: '',
    type: '',
    message: '',
  })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const submit = async (event) => {
    event.preventDefault()

    if (Object.values(form).some((value) => !value.trim())) {
      setStatus('error')
      setTimeout(() => setStatus(null), 3000)
      return
    }

    setLoading(true)

    try {
      const whatsappMessage = encodeURIComponent(
        [
          'Hello Livora Interior Studio,',
          '',
          `Name: ${form.name}`,
          `Phone: ${form.phone}`,
          `Project City: ${form.city}`,
          `Space Type: ${form.type}`,
          `Project Details: ${form.message}`,
          '',
          'I would like to schedule a consultation.',
        ].join('\n'),
      )

      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`, '_blank', 'noopener,noreferrer')

      setStatus('success')
      setForm({ name: '', phone: '', city: '', type: '', message: '' })
      setTimeout(() => setStatus(null), 4000)
    } catch (error) {
      console.error(error)
      setStatus('error')
      setTimeout(() => setStatus(null), 4000)
    }

    setLoading(false)
  }

  return (
    <section
      id="contact"
      className="py-20 md:py-32 lg:py-40"
      style={{ background: `linear-gradient(180deg, ${T.bgBeige} 0%, #f7f1e6 100%)` }}
    >
      <div className="container max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col items-center px-2 text-center lg:items-start lg:text-left">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.32em] text-[#111111] sm:text-[0.72rem] sm:tracking-[0.45em]">
              Inquiries
            </span>
            <h2 className="mt-5 font-['Playfair_Display'] text-[2.5rem] leading-[1.02] text-[#1b1712] sm:text-[4.4rem] lg:text-[5.3rem]">
              Let&apos;s Create
              <span className="block">Your</span>
              <span className="italic text-[#b08d57]">Masterpiece</span>
            </h2>

            <div className="mt-8 w-full space-y-5">
              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-start gap-4 text-left">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#5f564d] text-[#1b1712]">
                      <Icon size={19} />
                    </span>
                    <div>
                      <p className="text-[0.72rem] uppercase tracking-[0.34em] text-[#9e927f]">
                        {item.label}
                      </p>
                      <p className="mt-1 max-w-none text-[0.98rem] font-medium leading-7 text-[#1b1712]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )

                return item.href ? (
                  <a key={item.label} href={item.href} className="no-underline">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                )
              })}
            </div>
          </div>

          <form onSubmit={submit} className="w-full">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7">
              <label className="flex flex-col gap-3 text-left">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[#b5b0c4]">
                  Full Name
                </span>
                <input
                  type="text"
                  placeholder="E.g. Alexander Pierce"
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  className="rounded-[14px] border border-[rgba(56,54,45,0.12)] bg-white px-5 py-4 text-[1rem] text-[#1b1712] shadow-[0_2px_8px_rgba(30,26,23,0.05)] outline-none transition-all duration-300 placeholder:text-[#b4ab9f] focus:border-[rgba(176,141,87,0.28)] focus:shadow-[0_8px_18px_rgba(30,26,23,0.08)]"
                />
              </label>

              <label className="flex flex-col gap-3 text-left">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[#b5b0c4]">
                  Phone Number
                </span>
                <input
                  type="tel"
                  placeholder="+91 0000 000 000"
                  value={form.phone}
                  onChange={(event) => setForm({ ...form, phone: event.target.value })}
                  className="rounded-[14px] border border-[rgba(56,54,45,0.12)] bg-white px-5 py-4 text-[1rem] text-[#1b1712] shadow-[0_2px_8px_rgba(30,26,23,0.05)] outline-none transition-all duration-300 placeholder:text-[#b4ab9f] focus:border-[rgba(176,141,87,0.28)] focus:shadow-[0_8px_18px_rgba(30,26,23,0.08)]"
                />
              </label>

              <label className="flex flex-col gap-3 text-left">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[#b5b0c4]">
                  Project City
                </span>
                <input
                  type="text"
                  placeholder="Wayanad, Kerala"
                  value={form.city}
                  onChange={(event) => setForm({ ...form, city: event.target.value })}
                  className="rounded-[14px] border border-[rgba(56,54,45,0.12)] bg-white px-5 py-4 text-[1rem] text-[#1b1712] shadow-[0_2px_8px_rgba(30,26,23,0.05)] outline-none transition-all duration-300 placeholder:text-[#b4ab9f] focus:border-[rgba(176,141,87,0.28)] focus:shadow-[0_8px_18px_rgba(30,26,23,0.08)]"
                />
              </label>

              <label className="flex flex-col gap-3 text-left">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[#b5b0c4]">
                  Commercial/Residential
                </span>
                <select
                  value={form.type}
                  onChange={(event) => setForm({ ...form, type: event.target.value })}
                  className="rounded-[14px] border border-[rgba(56,54,45,0.12)] bg-white px-5 py-4 text-[1rem] text-[#1b1712] shadow-[0_2px_8px_rgba(30,26,23,0.05)] outline-none transition-all duration-300 focus:border-[rgba(176,141,87,0.28)] focus:shadow-[0_8px_18px_rgba(30,26,23,0.08)]"
                >
                  <option value="">Select Category</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Kitchen">Modular Kitchen</option>
                </select>
              </label>

              <label className="flex flex-col gap-3 text-left md:col-span-2">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[#b5b0c4]">
                  Your Vision
                </span>
                <textarea
                  rows="6"
                  placeholder="Briefly describe your dream space..."
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                  className="min-h-[140px] resize-none rounded-[14px] border border-[rgba(56,54,45,0.12)] bg-white px-5 py-4 text-[1rem] text-[#1b1712] shadow-[0_2px_8px_rgba(30,26,23,0.05)] outline-none transition-all duration-300 placeholder:text-[#b4ab9f] focus:border-[rgba(176,141,87,0.28)] focus:shadow-[0_8px_18px_rgba(30,26,23,0.08)]"
                />
              </label>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 pt-2 md:mt-10">
              <button
                type="submit"
                disabled={loading}
                className="group inline-flex min-h-[54px] w-full items-center justify-center gap-3 border-none bg-transparent px-2 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#f8f3ea] transition duration-300 sm:w-auto"
                style={{ color: '#f8f3ea' }}
              >
                <span className="border-b border-[#e4d2b2] pb-2 text-[#f8f3ea]">
                  {loading ? 'Opening WhatsApp...' : 'Request Consultation'}
                </span>
                <FiArrowRight className="text-[#f8f3ea]" size={16} />
              </button>

              {status === 'success' && (
                <p className="text-center text-sm text-[#7f6338]">
                  WhatsApp opened with your prefilled consultation message.
                </p>
              )}
              {status === 'error' && (
                <p className="text-center text-sm text-[#9b5b47]">
                  Please fill all fields before continuing to WhatsApp.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
