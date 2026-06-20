import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Send } from 'lucide-react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  serviceType: 'Airbnb Turnover',
  date: '',
  message: '',
}

export default function BookingForm() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="booking" className="bg-cream py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get Started"
          title="Book your cleanup"
          subtitle="Tell us a bit about your space and we'll follow up with a quote within a few hours."
        />

        <Reveal delay={0.1} className="mt-12">
          <div className="rounded-3xl border border-charcoal/10 bg-white p-8 sm:p-10">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center py-10 text-center"
                >
                  <CheckCircle2 size={48} className="text-teal-600" />
                  <h3 className="mt-4 text-xl font-semibold text-charcoal">
                    Thanks, {form.name.split(' ')[0] || 'there'}!
                  </h3>
                  <p className="mt-2 max-w-sm text-charcoal-soft">
                    We received your request and will reach out shortly to confirm your
                    cleanup date and final quote.
                  </p>
                  <button
                    onClick={() => {
                      setForm(INITIAL_FORM)
                      setSubmitted(false)
                    }}
                    className="mt-6 text-sm font-semibold text-teal-700 hover:underline"
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                >
                  <Field label="Full Name" name="name" value={form.name} onChange={handleChange} required />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="serviceType" className="text-sm font-medium text-charcoal">
                      Service Type
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={form.serviceType}
                      onChange={handleChange}
                      className="rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-teal-600"
                    >
                      <option>Airbnb Turnover</option>
                      <option>Post-Party Cleanup</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </div>
                  <Field
                    label="Preferred Date"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                  />
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="text-sm font-medium text-charcoal">
                      Tell us about the space or event
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="e.g. 2BR Airbnb, checkout at 11am, next guest at 4pm..."
                      className="mt-1.5 w-full resize-none rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal-soft/50 focus:border-teal-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-6 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-teal-900/15 transition-all hover:-translate-y-0.5 hover:bg-teal-700 sm:col-span-2"
                  >
                    <Send size={16} /> Request Booking
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, required = false }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-charcoal">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-teal-600"
      />
    </div>
  )
}
