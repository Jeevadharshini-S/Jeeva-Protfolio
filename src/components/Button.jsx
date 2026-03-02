import { motion } from 'framer-motion'

const Button = ({
  children,
  variant = 'primary',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  as = 'button',
  ...props
}) => {
  const base =
    'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950'

  const variants = {
    primary:
      'bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/40 hover:brightness-110',
    ghost:
      'bg-slate-900/70 text-slate-100 ring-1 ring-white/15 hover:bg-slate-800/80',
    outline:
      'bg-transparent text-slate-100 ring-1 ring-indigo-400/70 hover:bg-indigo-500/10',
  }

  const Component = motion[as] || motion.button
  const iconElement = Icon ? <Icon className="h-4 w-4" /> : null

  return (
    <Component
      whileHover={{ y: -1, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {iconPosition === 'left' && iconElement}
      <span>{children}</span>
      {iconPosition === 'right' && iconElement}
    </Component>
  )
}

export default Button

