import { motion } from 'framer-motion'
import {
  ArrowDownCircle,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Cpu,
} from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import ProjectCard from '../components/ProjectCard'
import SkillCard from '../components/SkillCard'
import ExperienceCard from '../components/ExperienceCard'
import ContactForm from '../components/ContactForm'
import ProfileAvatar from '../components/ProfileAvatar'

const projects = [
  {
    title: 'Busense – Real-Time Bus Occupancy Monitoring System',
    badge: 'AI + IoT · Smart Mobility',
    type: 'Flagship',
    description:
      'Busense is an AI + IoT based smart transportation system that tracks real-time bus occupancy and prevents overcrowding. Camera-based people counting and GPS tracking monitor passengers and location, and when the 52-passenger limit is exceeded, authorities are alerted instantly. The platform also exposes seat availability, ticket pricing, and rich reporting for passengers and operators.',
    tech: [
      'AI-based People Counting',
      'Computer Vision',
      'IoT Integration',
      'GPS Tracking',
      'React',
      'Node.js',
    ],
    github: 'https://github.com/Jeevadharshini-S/busense',
    demo: '',
  },
  {
    title: 'Weather App – Internship Project',
    badge: 'Full-Stack · Cloud Ready',
    type: 'Project',
    description:
      'A full-stack weather application built during my Software Engineer Internship. It fetches real-time weather data through API integration and supports full CRUD with database storage so users can save, update, and manage weather reports. Users can search locations, persist favorite reports, and export data into different formats, showcasing clean API design and deployment-ready architecture.',
    tech: [
      'React',
      'REST API',
      'Node.js',
      'Express',
      'Database',
      'Tailwind CSS',
    ],
    github: 'https://github.com/Jeevadharshini-S/weather-app',
    demo: '',
  },
  {
    title: 'Hackathon Projects – Women Hackathon Experience',
    badge: 'Hackathons · Rapid Prototyping',
    type: 'Experience',
    description:
      'A collection of hackathon projects, including a Women Empowerment Hackathon where I collaborated in a cross-functional team to ship solutions under tight time constraints. These events sharpened my real-world problem-solving, rapid prototyping, and communication skills. I focused on building scalable, user-centric applications that balanced functionality, UX, and clear storytelling.',
    tech: [
      'React',
      'JavaScript',
      'Problem Solving',
      'UI/UX Design',
      'Team Collaboration',
    ],
    github: 'https://github.com/Jeevadharshini-S/hackathon-projects',
    demo: '',
  },
  {
    title: 'AI / ML Projects Portfolio',
    badge: 'Machine Learning · Data Science',
    type: 'Collection',
    description:
      'A curated set of AI and Machine Learning projects covering predictive modeling, data preprocessing, and intelligent system design. I implemented algorithms for classification, pattern recognition, and evaluation, strengthening my understanding of end-to-end data science pipelines. These projects highlight practical experience turning messy data into reliable, interpretable models.',
    tech: [
      'Python',
      'Machine Learning',
      'Data Analysis',
      'Scikit-Learn',
      'Pandas',
      'NumPy',
    ],
    github: 'https://github.com/Jeevadharshini-S/ai-ml-projects',
    demo: '',
  },
]

const experiences = [
  {
    role: 'AI & Data Science Engineer',
    company: 'Your Current Company',
    type: 'Full-time',
    period: '2024 — Present',
    location: 'Remote / India',
    summary:
      'Designing and deploying data‑driven solutions across NLP, computer vision, and predictive analytics.',
    highlights: [
      'Built end‑to‑end ML pipelines from data ingestion to deployment.',
      'Collaborated with cross‑functional teams to turn business problems into production ML systems.',
    ],
  },
  {
    role: 'Machine Learning Intern',
    company: 'Previous Company',
    type: 'Internship',
    period: '2023 — 2024',
    location: 'Hybrid',
    summary:
      'Implemented core ML components and experiments for recommendation and ranking problems.',
    highlights: [
      'Evaluated and tuned baseline models to outperform existing heuristics.',
      'Documented experiments and shared findings with senior stakeholders.',
    ],
  },
]

const skills = [
  {
    category: 'Languages & Core',
    level: 'Strong foundation',
    icon: Cpu,
    items: ['Python', 'SQL', 'JavaScript', 'Data Structures', 'Algorithms'],
  },
  {
    category: 'ML & Deep Learning',
    level: 'Hands-on',
    icon: Cpu,
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'NLP', 'Computer Vision'],
  },
  {
    category: 'Data & MLOps',
    level: 'Production aware',
    icon: Cpu,
    items: ['Pandas', 'Airflow', 'Docker', 'MLflow', 'CI/CD'],
  },
  {
    category: 'Tools & Platforms',
    level: 'Everyday use',
    icon: Cpu,
    items: ['Git', 'Linux', 'Vite + React', 'Tailwind CSS', 'Cloud (AWS/Azure)'],
  },
]

const Home = () => {
  return (
    <div className="space-y-16 sm:space-y-20">
      {/* Hero */}
      <SectionWrapper id="hero">
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] md:items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10 backdrop-blur-xl"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400 text-[10px] text-white shadow-md">
                <Sparkles className="h-3 w-3" />
              </span>
              <span>AI &amp; Data Science Engineer</span>
              <span className="h-1 w-1 rounded-full bg-emerald-400" />
              <span className="text-emerald-300">Open to opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
            >
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                Jeevadharshini
              </span>
              . I craft intelligent data‑driven systems.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-2xl text-sm text-slate-300 sm:text-base"
            >
              I specialize in transforming raw data into impactful AI solutions—from
              exploratory analysis and model design to scalable deployment. I love
              building reliable, explainable systems that deliver real value for
              people and products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button
                as="a"
                href="/Jeevadharshini_Resume.pdf"
                download="Jeevadharshini_Resume.pdf"
                variant="primary"
                icon={ArrowDownCircle}
              >
                Download Resume
              </Button>
              <Button
                as="button"
                type="button"
                variant="ghost"
                icon={Mail}
                iconPosition="left"
                onClick={() => {
                  const el = document.getElementById('contact')
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
              >
                Let&apos;s Connect
              </Button>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Jeevadharshini-S"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-indigo-500/80 hover:text-white hover:ring-indigo-400/60"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/in/jeevadharshini-s-740153299"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-indigo-500/80 hover:text-white hover:ring-indigo-400/60"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/15 to-cyan-400/20 opacity-70 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-5 shadow-2xl shadow-slate-950/60 backdrop-blur-2xl">
              <ProfileAvatar />
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-medium text-slate-300">
                    AI Profile Snapshot
                  </p>
                  <p className="text-[11px] text-slate-500">
                    What I focus on day to day
                  </p>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-400/40">
                  Currently building
                </span>
              </div>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center justify-between rounded-2xl bg-slate-950/60 px-3 py-2">
                  <span className="text-slate-200">ML systems</span>
                  <span className="text-slate-400">from idea → production</span>
                </div>
                <div className="rounded-2xl bg-slate-950/60 p-3">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                    CURRENT STACK
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {['PyTorch', 'Transformers', 'Python', 'SQL', 'Vite + React'].map(
                      (chip) => (
                        <span
                          key={chip}
                          className="rounded-full bg-slate-900/80 px-2 py-1 text-[11px] text-slate-200 ring-1 ring-white/10"
                        >
                          {chip}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* About */}
      <SectionWrapper id="about">
        <SectionTitle
          eyebrow="About"
          title="A quick snapshot of who I am"
          subtitle="Blending strong fundamentals in machine learning with a product mindset, I enjoy working across the full lifecycle of AI solutions."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3 text-sm text-slate-300 sm:text-base">
            <p>
              I&apos;m an AI &amp; Data Science Engineer with experience building models
              for NLP, time‑series forecasting, and computer vision. I care deeply about
              clean experimentation, reproducible pipelines, and clear communication of
              results.
            </p>
            <p>
              My work spans exploratory data analysis, model design, evaluation, and
              deployment. I enjoy collaborating with product and engineering teams to
              translate ambiguous real‑world problems into robust, measurable AI
              solutions.
            </p>
          </div>
          <div className="space-y-3 text-sm text-slate-300 sm:text-base">
            <p>
              When I&apos;m not training models, you&apos;ll find me exploring new
              research papers, refining side projects, or learning about system design
              and MLOps best practices.
            </p>
            <p>
              I&apos;m actively looking for opportunities where I can contribute to
              thoughtful AI products, work with strong teams, and keep growing as a
              practitioner.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Skills */}
      <SectionWrapper id="skills">
        <SectionTitle
          eyebrow="Skills"
          title="Technical toolkit"
          subtitle="A focused set of tools I use to design, train, and ship AI systems."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill) => (
            <SkillCard key={skill.category} skill={skill} />
          ))}
        </div>
      </SectionWrapper>

      {/* Projects */}
      <SectionWrapper id="projects">
        <SectionTitle
          eyebrow="Projects"
          title="Selected work"
          subtitle="A selection of projects and experiences that reflect how I apply AI, full‑stack development, and rapid prototyping to real‑world problems."
        />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </SectionWrapper>

      {/* Experience */}
      <SectionWrapper id="experience">
        <SectionTitle
          eyebrow="Experience"
          title="Where I&apos;ve been so far"
          subtitle="Roles that shaped my thinking about building reliable, human‑centered AI systems."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {experiences.map((item) => (
            <ExperienceCard key={item.role + item.company} item={item} />
          ))}
        </div>
      </SectionWrapper>

      {/* Contact */}
      <SectionWrapper id="contact">
        <SectionTitle
          eyebrow="Contact"
          title="Let&apos;s build something together"
          subtitle="Share a bit about your project, team, or idea—and I&apos;ll get back to you as soon as I can."
        />
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)] md:items-start">
          <div className="space-y-4 text-sm text-slate-300 sm:text-base">
            <p>
              Whether you&apos;re exploring an early‑stage idea or scaling an existing
              product, I&apos;d love to hear about the challenges you&apos;re working on.
            </p>
            <p>
              You can reach me directly at{' '}
              <a
                href="mailto:jeevasekar1005@gmail.com"
                className="font-medium text-indigo-300 underline-offset-4 hover:underline"
              >
                jeevasekar1005@gmail.com
              </a>{' '}
              or via the form.
            </p>
          </div>
          <ContactForm />
        </div>
      </SectionWrapper>
    </div>
  )
}

export default Home

