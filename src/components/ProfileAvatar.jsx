import { motion } from 'framer-motion'

const ProfileAvatar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
      className="mb-4 flex justify-center"
    >
      <div className="relative h-32 w-32 overflow-hidden rounded-3xl border border-white/15 bg-slate-900/70 shadow-2xl shadow-slate-950/70 ring-2 ring-pink-400/40">
        <img
          src="/avatar.jpg"
          alt="Jeevadharshini"
          className="h-full w-full object-cover"
        />
      </div>
    </motion.div>
  )
}

export default ProfileAvatar

