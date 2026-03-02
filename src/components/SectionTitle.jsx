const SectionTitle = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="mb-8 space-y-3">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/80">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-sm text-slate-400 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionTitle

