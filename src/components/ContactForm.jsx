import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Loader2, Mail } from 'lucide-react'
import Button from './Button'

const SERVICE_ID = 'service_8fu1bxe'
const TEMPLATE_ID = 'template_oakiqc9'
const PUBLIC_KEY = 'Tuq9kBeoBj9tGdvCw'

const ContactForm = () => {
  const formRef = useRef(null)
  const [status, setStatus] = useState({ loading: false, message: '', type: '' })

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!formRef.current) return

    setStatus({ loading: true, message: '', type: '' })

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })

      setStatus({
        loading: false,
        message: 'Thank you! Your message has been sent.',
        type: 'success',
      })
      formRef.current.reset()
    } catch (_error) {
      setStatus({
        loading: false,
        message:
          'Something went wrong while sending your message. Please try again or reach out via email.',
        type: 'error',
      })
    }
  }

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/60 p-5 shadow-xl shadow-slate-950/40 backdrop-blur-2xl sm:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label
            htmlFor="name"
            className="block text-xs font-medium text-slate-200"
          >
            Name
          </label>
          <input
            id="name"
            name="user_name"
            required
            placeholder="Your full name"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/40"
          />
        </div>
        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="block text-xs font-medium text-slate-200"
          >
            Email
          </label>
          <input
            id="email"
            name="user_email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/40"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="subject"
          className="block text-xs font-medium text-slate-200"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          required
          placeholder="How can I help you?"
          className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/40"
        />
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="message"
          className="block text-xs font-medium text-slate-200"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Share a brief overview of your project or opportunity..."
          className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/40"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          variant="primary"
          icon={status.loading ? Loader2 : Mail}
          className={status.loading ? 'cursor-wait' : ''}
        >
          {status.loading ? 'Sending...' : 'Send Message'}
        </Button>
        {status.message && (
          <p
            className={`text-xs sm:text-sm ${
              status.type === 'success' ? 'text-emerald-300' : 'text-rose-300'
            }`}
          >
            {status.message}
          </p>
        )}
      </div>
    </motion.form>
  )
}

export default ContactForm

