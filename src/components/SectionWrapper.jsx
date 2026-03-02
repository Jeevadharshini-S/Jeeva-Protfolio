import { motion } from 'framer-motion'

const variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.22, 0.61, 0.36, 1],
    },
  },
}

const SectionWrapper = ({ id, children }) => {
  return (
    <section id={id} className="scroll-mt-24">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="relative"
      >
        {children}
      </motion.div>
    </section>
  )
}

export default SectionWrapper

