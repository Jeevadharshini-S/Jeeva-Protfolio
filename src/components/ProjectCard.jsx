import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import Button from './Button'

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className="group flex flex-col rounded-3xl border border-white/10 bg-slate-900/60 p-5 shadow-xl shadow-slate-950/40 backdrop-blur-2xl transition hover:border-indigo-400/70 hover:bg-slate-900/80"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-slate-50">
            {project.title}
          </h3>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-indigo-300/80">
            {project.badge}
          </p>
        </div>
        <div className="rounded-2xl bg-gradient-to-tr from-indigo-500/30 via-fuchsia-500/30 to-cyan-400/30 px-3 py-1 text-[11px] font-medium text-indigo-50 ring-1 ring-indigo-300/50">
          {project.type}
        </div>
      </div>
      <p className="mb-4 text-sm text-slate-300">{project.description}</p>
      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-slate-800/80 px-2.5 py-1 text-[11px] text-slate-200 ring-1 ring-white/10"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap gap-3">
        {project.github && (
          <Button
            as="a"
            href={project.github}
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            icon={Github}
            iconPosition="left"
          >
            GitHub
          </Button>
        )}
        {project.demo && (
          <Button
            as="a"
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            icon={ExternalLink}
          >
            Live Demo
          </Button>
        )}
      </div>
    </motion.article>
  )
}

export default ProjectCard

