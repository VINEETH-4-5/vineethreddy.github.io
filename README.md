# VINEETH REDDY YADANAPARTHI — Portfolio

Production-ready React portfolio built with Vite, Tailwind CSS, and Framer Motion. Designed to be recruiter-first, accessible, and performance-minded.

Quick start

1. Install dependencies

```powershell
npm install
```

2. Run development server

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build
```

Deploy

- Deploy `/dist` to Vercel, Netlify, or GitHub Pages. This project includes an `index.html`, `manifest.webmanifest`, and `favicon.svg` for production readiness.

GitHub Pages automatic deploy

1. Push this repository to GitHub and ensure the default branch is `main`.
2. The repository contains a GitHub Actions workflow at `.github/workflows/deploy.yml` which will build and deploy `dist` to the `gh-pages` branch on every push to `main`.
3. Vite `base` is set to `./` in `vite.config.ts` to ensure relative paths work on GitHub Pages.

If you prefer manual deploy: run `npm run build` and push the `dist` contents to `gh-pages` branch.

Recruiter assets

- Place ATS-optimized resume at `public/resume.pdf`. It is already linked in the recruiter section.

Notes

- Uses modern visual language and an interactive skill galaxy (no bars/lines). Prioritizes clarity, motion, and recruiter workflows.

Vineeth Reddy Yadanaparthi — Professional Portfolio

This is a production-ready React + Vite + Tailwind + Framer Motion portfolio scaffold built to showcase the professional profile of VINEETH REDDY YADANAPARTHI.

Features:
- Hero with animated typewriter roles and interactive background
- About section with professional summary and contact
- Interactive Skills visualization
- Smooth animated Career Timeline
- Recruiter-focused section with ATS resume
- Dark/light theme toggle

Quick start

1. Install dependencies:

```powershell
npm install
```

2. Run dev server:

```powershell
npm run dev
```

3. Build for production:

```powershell
npm run build
```

Notes
- Add your ATS resume PDF to `public/resume.pdf` when available.
- This scaffold intentionally excludes project pages per requirements but is structured to add them later.
