import { motion } from 'framer-motion'
import { CalendarDays, MapPin } from 'lucide-react'

const ExperienceCard = ({ item }) => {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="relative flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-900/60 p-5 shadow-lg shadow-slate-950/40 backdrop-blur-2xl"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-slate-50">
            {item.role}
          </h3>
          <p className="text-xs text-slate-300">{item.company}</p>
        </div>
        <span className="rounded-full bg-slate-800/80 px-2.5 py-1 text-[11px] font-medium text-indigo-200 ring-1 ring-indigo-400/40">
          {item.type}
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays className="h-3.5 w-3.5" />
          {item.period}
        </span>
        {item.location && (
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {item.location}
          </span>
        )}
      </div>
      <p className="text-sm text-slate-300">{item.summary}</p>
      {item.highlights && (
        <ul className="mt-1 list-disc space-y-1 pl-4 text-xs text-slate-400">
          {item.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
    </motion.article>
  )
}

export default ExperienceCard

