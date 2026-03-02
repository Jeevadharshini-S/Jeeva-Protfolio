import { motion } from 'framer-motion'

const SkillCard = ({ skill }) => {
  const Icon = skill.icon

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-900/60 p-4 shadow-lg shadow-slate-950/40 backdrop-blur-2xl"
    >
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-800/80 text-indigo-300 ring-1 ring-white/10">
          {Icon && <Icon className="h-4 w-4" />}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-50">
            {skill.category}
          </p>
          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
            {skill.level}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 text-xs text-slate-300">
        {skill.items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-800/80 px-2 py-1 ring-1 ring-white/5"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default SkillCard

