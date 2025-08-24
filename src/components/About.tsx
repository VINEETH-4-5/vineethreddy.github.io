import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section aria-labelledby="about-title" className="mt-14">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 id="about-title" className="text-2xl font-semibold">About</h2>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white/80 dark:bg-black/30 p-6 rounded-lg shadow">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img src="/vineeth-profile.jpg" alt="Vineeth Reddy Yadanaparthi" className="w-36 h-36 rounded-full object-cover shadow-md" />

              <div>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  I am a backend-focused full-stack developer with 4+ years of experience in <strong>Java, Spring Boot, Microservices, and PostgreSQL</strong>. I design and implement resilient enterprise architectures, automate workflows with <strong>Camunda BPM</strong>, and build modern frontend applications with <strong>React + TypeScript</strong>. My work has improved scalability, performance, and reliability in banking and fintech solutions. I thrive on solving complex problems and delivering clean, production-grade systems.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <div><strong>Location:</strong> Bangalore, India</div>
                  <div><strong>Email:</strong> <a href="mailto:yadanaparthivineethreddy@gmail.com" className="text-slate-700 dark:text-slate-200">yadanaparthivineethreddy@gmail.com</a></div>
                  <div><strong>Phone:</strong> +91 7036546590</div>
                  <div><strong>LinkedIn:</strong> <a className="text-slate-700 dark:text-slate-200" href="https://linkedin.com/in/vineeth-reddy-y">linkedin.com/in/vineeth-reddy-y</a></div>
                </div>
              </div>
            </div>
          </div>

          <aside className="bg-gradient-to-br from-[#071025] to-[#08102a] text-white p-6 rounded-lg">
            <h3 className="text-lg font-medium">Professional Summary</h3>
            <p className="mt-3 text-sm text-slate-100">Backend-focused engineer skilled at building resilient microservices, modernizing platforms for stability, and delivering measurable performance improvements in production systems.</p>

            <div className="mt-4">
              <h4 className="text-sm font-medium text-slate-100">Core Technologies</h4>
              <ul className="mt-2 text-sm text-slate-200 space-y-1">
                <li>Java • Spring Boot • Microservices • Resilience4j</li>
                <li>PostgreSQL • MySQL • Schema Design</li>
                <li>React • TypeScript • Redux Toolkit</li>
                <li>Camunda BPM • Git • Maven • Postman</li>
              </ul>
            </div>
          </aside>
        </div>
      </motion.div>
    </section>
  )
}
