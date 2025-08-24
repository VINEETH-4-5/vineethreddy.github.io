import React, { useEffect, useState } from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

const ROLES = ['Backend Engineer', 'Full Stack Developer', 'Workflow Automator', 'Problem Solver']

function Typewriter() {
  const [i, setI] = useState(0)
  const [sub, setSub] = useState(0)
  const [blink, setBlink] = useState(true)
  const [rev, setRev] = useState(false)

  useEffect(() => {
    const bt = setInterval(() => setBlink(b => !b), 500)
    return () => clearInterval(bt)
  }, [])

  useEffect(() => {
    const current = ROLES[i]
    if (!rev && sub === current.length + 1) {
      setRev(true)
      setTimeout(() => setRev(true), 700)
      return
    }

    if (rev && sub === 0) {
      setRev(false)
      setI((p) => (p + 1) % ROLES.length)
      return
    }

    const t = setTimeout(() => setSub(s => s + (rev ? -1 : 1)), rev ? 40 : 80)
    return () => clearTimeout(t)
  }, [sub, i, rev])

  return (
    <span aria-live="polite">
      {ROLES[i].substring(0, sub)}<span style={{ opacity: blink ? 0 : 1 }} aria-hidden>|</span>
    </span>
  )
}

export default function Hero() {
  const { scrollY } = useViewportScroll()
  const y = useTransform(scrollY, [0, 400], [0, 40])

  return (
    <section aria-labelledby="hero-title" className="relative pt-6 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1 id="hero-title" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Building Resilient, Scalable, and High-Performance Systems
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }} className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Java • Spring Boot • React • PostgreSQL • Microservices
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }} className="mt-6 text-lg">
            <span className="text-slate-600 dark:text-slate-300">I am </span>
            <span className="font-medium text-slate-900 dark:text-white"><Typewriter /></span>
          </motion.div>

          <div className="mt-8 flex gap-3">
            <a href="#recruiter" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#06b6d4] text-white shadow hover:scale-[1.02]">Hire Me</a>
            <a href="/vineeth_resume.pdf" download className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700">Download Resume</a>
          </div>

          <div className="mt-6 text-sm text-slate-500 dark:text-slate-400">Associate Consultant @ Infosys • Bangalore, India</div>
        </div>

        <div className="relative">
          <motion.div style={{ y }} className="w-full h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-[#071025] to-[#07102a] shadow-lg">
            <svg viewBox="0 0 800 600" className="w-full h-full opacity-30">
              <defs>
                <linearGradient id="lg" x1="0" x2="1">
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <g fill="none" stroke="url(#lg)" strokeWidth="1.5">
                <path d="M0 200 C150 100 350 300 800 120" />
                <path d="M0 320 C200 220 400 420 800 260" />
              </g>
            </svg>

            <div className="absolute inset-0 p-6 pointer-events-none">
              <pre className="text-xs font-mono text-green-300/90 select-none leading-snug">{`// resilient pattern
public record Asset { long id; String status; }
@Service
class Validator {
  void validate(Asset a) { /* idempotent, observable */ }
}`}</pre>

              <div className="absolute right-6 bottom-6 text-xs font-mono text-pink-300/80 select-none">&lt;Service status="healthy" /&gt;</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
