import React from 'react'
import { motion } from 'framer-motion'

const EVENTS = [
  { year: '2024–Present', role: 'Associate Consultant', org: 'Infosys', desc: 'Danske Bank — led asset validation, Java platform modernization and performance tuning that reduced latency and improved reliability.' },
  { year: '2021–2024', role: 'Java Full Stack Developer', org: 'DBQ', desc: 'Built crypto trading automation and workflow systems; owned end-to-end features and operational improvements.' },
  { year: '2021', role: 'Intern', org: 'DBQ', desc: 'Java + React foundations; improved UI maintainability and developer experience.' }
]

export default function Timeline() {
  return (
    <section aria-labelledby="timeline-title" className="mt-14">
      <h2 id="timeline-title" className="text-2xl font-semibold">Career Journey</h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 relative">
          <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#7C3AED] to-[#06b6d4] opacity-30 hidden md:block" />
          <div className="space-y-6 pl-8 md:pl-12">
            {EVENTS.map((e, i) => (
              <motion.article key={e.year + '-' + i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative p-4 bg-white/90 dark:bg-black/30 rounded-2xl shadow-lg ring-1 ring-white/5">
                <div className="absolute -left-8 top-6 w-12 h-12 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06b6d4] flex items-center justify-center text-white font-semibold shadow-md">{e.year.split('–')[0]}</div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{e.year}</div>
                    <div className="font-semibold text-slate-900 dark:text-white">{e.role} <span className="text-slate-500 font-medium">@ {e.org}</span></div>
                  </div>
                </div>

                <p className="mt-3 text-sm text-slate-700 dark:text-slate-200 leading-relaxed">{e.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <aside className="p-6 rounded-2xl bg-gradient-to-br from-[#071025] to-[#08102a] text-white shadow-lg">
          <h3 className="font-semibold text-lg">Professional Growth</h3>
          <p className="mt-3 text-sm text-slate-100">Rapid technical progression and ownership: from intern to associate consultant with clear impact in platform modernization, resilience engineering, and production performance.</p>
          <ul className="mt-4 text-sm space-y-2">
            <li>Platform modernization and technical leadership</li>
            <li>Resilient microservice patterns (Resilience4j, circuit breakers)</li>
            <li>Workflow automation with Camunda BPM</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}
