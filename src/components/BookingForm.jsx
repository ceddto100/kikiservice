import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Mail, Phone, User, CalendarDays, MessageSquare, Building2 } from 'lucide-react'
import Reveal from './Reveal.jsx'
import Button from './Button.jsx'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  type: 'Airbnb Turnover',
  date: '',
  message: '',
}

export default function BookingForm() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="book" className="hero-section py-24 sm:py-28">
      <div className="drift pointer-events-none absolute -bottom-20 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Book Your Cleanup
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
            Let&apos;s get your space sorted
          </h2>
          <p className="mt-4 text-lg text-fog">
            Fill out the details below and we&apos;ll follow up with a quote
            within the hour.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="vibe-card rounded-3xl p-6 shadow-2xl shadow-blue-900/20 sm:p-10">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center py-10 text-center"
                >
                  <CheckCircle2 size={48} className="text-blue-400" />
                  <h3 className="mt-4 font-display text-2xl font-bold text-paper">
                    Request received!
                  </h3>
                  <p className="mt-2 max-w-sm text-fog">
                    Thanks, {form.name.split(' ')[0] || 'there'}. We&apos;ll
                    email you a quote and confirm a time shortly.
                  </p>
                  <Button
                    as="button"
                    type="button"
                    variant="ghost"
                    className="mt-6"
                    onClick={() => {
                      setForm(initialForm)
                      setSubmitted(false)
                    }}
                  >
                    Submit another request
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="grid gap-6 sm:grid-cols-2"
                >
                  <Field label="Full name" icon={User}>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Jane Doe"
                      className="form-input"
                    />
                  </Field>

                  <Field label="Email" icon={Mail}>
                    <input
                      required
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="jane@email.com"
                      className="form-input"
                    />
                  </Field>

                  <Field label="Phone" icon={Phone}>
                    <input
                      required
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="form-input"
                    />
                  </Field>

                  <Field label="Property or event type" icon={Building2}>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option>Airbnb Turnover</option>
                      <option>Post-Party Cleanup</option>
                      <option>Other</option>
                    </select>
                  </Field>

                  <Field label="Preferred date" icon={CalendarDays}>
                    <input
                      required
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      type="date"
                      className="form-input"
                    />
                  </Field>

                  <Field label="Anything we should know?" icon={MessageSquare} className="sm:col-span-2">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Square footage, number of rooms, special requests..."
                      className="form-input resize-none"
                    />
                  </Field>

                  <Button as="button" type="submit" className="sm:col-span-2 mt-2">
                    Request My Cleanup
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, icon: Icon, children, className = '' }) {
  return (
    <label className={`flex flex-col gap-2 text-left ${className}`}>
      <span className="flex items-center gap-1.5 text-sm font-semibold text-paper">
        <Icon size={14} className="text-blue-400" />
        {label}
      </span>
      {children}
    </label>
  )
}
