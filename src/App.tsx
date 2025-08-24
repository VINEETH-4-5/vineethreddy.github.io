import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import SkillsSection from './components/SkillsSection'
import Timeline from './components/Timeline'
import Recruiter from './components/Recruiter'
import './styles.css'
import { useEffect, useState } from 'react'

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
  }, [theme])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-[#06111b] dark:via-[#051025] dark:to-[#08102a] text-slate-900 dark:text-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <header className="flex items-center justify-between mb-8">
          <div>
            <a href="#" aria-label="Vineeth Reddy Yadanaparthi home" className="inline-flex items-center gap-3">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect width="24" height="24" rx="6" fill="#7C3AED" />
                <path d="M7 15.5V8.5L12 12L17 8.5V15.5" stroke="#fff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-semibold">VINEETH REDDY YADANAPARTHI</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full p-2 ring-1 ring-slate-200 dark:ring-slate-700 bg-white/60 dark:bg-black/30"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            <a href="#recruiter" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#06b6d4] text-white shadow-md hover:brightness-105">Hire Me</a>
          </div>
        </header>

        <main>
          <Hero />
          <About />
          <SkillsSection />
          <Timeline />
          <Recruiter />
        </main>

        <footer className="mt-12 text-center text-sm text-slate-400">© {new Date().getFullYear()} VINEETH REDDY YADANAPARTHI — Built with attention to scale, reliability, and clarity.</footer>
      </div>
    </div>
  )
}
