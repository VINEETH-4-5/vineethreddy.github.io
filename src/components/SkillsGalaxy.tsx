import React from 'react'
import { motion } from 'framer-motion'

const SKILLS = [
  { name: 'Java', area: 'Backend', url: 'https://github.com/search?q=Java' },
  { name: 'Spring Boot', area: 'Backend', url: 'https://github.com/search?q=Spring+Boot' },
  { name: 'Microservices', area: 'Backend', url: 'https://github.com/search?q=Microservices' },
  { name: 'Resilience4j', area: 'Backend', url: 'https://github.com/search?q=Resilience4j' },
  { name: 'Eureka', area: 'Backend', url: 'https://github.com/search?q=Eureka' },
  { name: 'API Gateway', area: 'Backend', url: 'https://github.com/search?q=API+Gateway' },
  { name: 'PostgreSQL', area: 'Databases', url: 'https://github.com/search?q=PostgreSQL' },
  { name: 'MySQL', area: 'Databases', url: 'https://github.com/search?q=MySQL' },
  { name: 'React', area: 'Frontend', url: 'https://github.com/search?q=React' },
  { name: 'TypeScript', area: 'Frontend', url: 'https://github.com/search?q=TypeScript' },
  { name: 'Redux Toolkit', area: 'Frontend', url: 'https://github.com/search?q=Redux+Toolkit' },
  { name: 'Camunda BPM', area: 'Workflow', url: 'https://github.com/search?q=Camunda' },
  { name: 'Git', area: 'Tools', url: 'https://github.com/search?q=Git' },
  { name: 'Maven', area: 'Tools', url: 'https://github.com/search?q=Maven' },
  { name: 'Postman', area: 'Tools', url: 'https://github.com/search?q=Postman' }
]

function polar(i: number, n: number, radius = 140) {
  const angle = (i / n) * Math.PI * 2
  const r = radius * (0.45 + (i % 5) * 0.11)
  return { x: Math.cos(angle) * r, y: Math.sin(angle) * r }
}

export default function SkillsGalaxy() {
  const [active, setActive] = React.useState<string | null>(null)

  return (
    <section aria-labelledby="skills-title" className="mt-14">
      <h2 id="skills-title" className="text-2xl font-semibold">Skills</h2>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2 flex justify-center">
          <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-white/50 dark:from-black/40 to-white/30 dark:to-black/20 flex items-center justify-center">
            <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 80, ease: 'linear' }} className="absolute inset-0">
              {SKILLS.map((s, i) => {
                const pos = polar(i, SKILLS.length)
                return (
                  <motion.button
                    key={s.name}
                    onMouseEnter={() => setActive(s.name)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(s.name)}
                    onBlur={() => setActive(null)}
                    onClick={() => window.open(s.url, '_blank')}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    style={{ left: '50%', top: '50%', transform: `translate(${pos.x}px, ${pos.y}px)` }}
                    className={`absolute px-3 py-1 rounded-full text-sm font-medium transition-shadow duration-200 ${active === s.name ? 'bg-gradient-to-r from-[#7C3AED] to-[#06b6d4] text-white shadow-lg' : 'bg-white/80 dark:bg-black/30 text-slate-800 dark:text-slate-100 ring-1 ring-slate-200 dark:ring-slate-700'}`}
                    aria-label={`${s.name} — ${s.area}`}
                  >
                    {s.name}
                  </motion.button>
                )
              })}
            </motion.div>

            <div className="relative z-10 text-center text-sm">
              <div className="text-slate-700 dark:text-slate-200 font-semibold">Core</div>
              <div className="text-xs mt-1 text-slate-500 dark:text-slate-400">Interactive skill galaxy — hover or tap a node for details. Click to view examples.</div>
            </div>
          </div>
        </div>

        <div>
          <div className="p-4 bg-white/80 dark:bg-black/30 rounded-lg shadow">
            <h3 className="font-medium">Details</h3>
            <div className="mt-3 text-sm text-slate-700 dark:text-slate-200">
              {active ? (
                (() => {
                  const s = SKILLS.find(k => k.name === active)!
                  return (
                    <div>
                      <strong className="block text-slate-900 dark:text-white">{s.name}</strong>
                      <p className="mt-2 text-xs">Area: {s.area}. Click the node to open curated code examples and references.</p>
                      <a className="mt-3 inline-block text-sm text-[#06b6d4]" href={s.url} target="_blank" rel="noreferrer">Open examples</a>
                    </div>
                  )
                })()
              ) : (
                <p className="text-xs">This visualization shows hierarchical focus and fluency through motion and spatial grouping rather than static scores.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
