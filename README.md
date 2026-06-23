# Mohammad Parvej Ansari — Developer Portfolio

A premium, production-ready portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.
Dark mode by default with a light/dark toggle, glassmorphism cards, a canvas particle
background, and a signature animated "API request/response" terminal in the hero — a visual
built around the owner's real specialty (Python · FastAPI · PostgreSQL · React).

## ✨ Features

- Dark mode by default, with persistent light/dark toggle
- Animated typing effect for role titles (Python / FastAPI / React / Full Stack Developer)
- Canvas particle background + glassmorphism cards + gradient accents
- Scroll-spy navbar, smooth scrolling, scroll-reveal animation on every section
- Animated skill progress bars, GitHub-contribution-style activity grid
- Statistics counters, project showcase cards with tech tags + live/GitHub buttons
- Education timeline, experience section, contact form (opens the visitor's mail client)
- Scroll-to-top button, terminal-style boot loader
- Fully responsive (mobile-first), keyboard-accessible, respects `prefers-reduced-motion`

## 📁 Folder structure

```
portfolio/
├── public/
│   └── assets/
│       ├── favicon.svg
│       ├── profile.png                  # your headshot
│       └── Parvej_Ansari_Resume.pdf      # resume served for download
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx                # includes signature ApiTerminal component
│   │   ├── ParticleBackground.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── GithubActivity.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Loader.jsx
│   │   └── ScrollToTop.jsx
│   ├── data/
│   │   └── portfolioData.js        # ⭐ all content lives here — edit this to update the site
│   ├── hooks/
│   │   └── useTheme.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## ✏️ Editing content

Everything text-based (name, roles, about copy, skills, projects, education, experience,
contact links) lives in **`src/data/portfolioData.js`**. Update that file and every section
re-renders automatically — no need to touch component markup for routine content changes.

To swap the headshot or resume, replace the files in `public/assets/` keeping the same
filenames (or update the paths in `portfolioData.js`).

## 🚀 Getting started locally

```bash
npm install
npm run dev        # starts at http://localhost:5173
```

```bash
npm run build       # production build → dist/
npm run preview     # preview the production build locally
```

## ☁️ Deployment

### Vercel (recommended — matches your existing project)
1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy — Vercel auto-detects everything from `vite.config.js`.

### Netlify
1. Push to GitHub (or drag-and-drop the `dist/` folder after running `npm run build`).
2. New site → Import from Git.
3. Build command: `npm run build`, Publish directory: `dist`.

### GitHub Pages
1. `npm install -D gh-pages`
2. Add to `package.json` scripts: `"deploy": "vite build && gh-pages -d dist"`
3. Set `base: '/your-repo-name/'` in `vite.config.js`.
4. Run `npm run deploy`.

## 🛠️ Tech stack

React 18 · Vite 5 · Tailwind CSS 3 · Framer Motion · react-icons · react-type-animation ·
react-intersection-observer

## ♿ Accessibility & performance notes

- All interactive elements have visible focus states and `aria-label`s where needed.
- Canvas particle animation and motion respect `prefers-reduced-motion: reduce`.
- Single-file component structure keeps the production bundle small (~100 KB gzipped JS).
- Semantic landmarks (`header`, `main`, `footer`) and section `id`s support SEO and in-page linking.

---

Built for **Mohammad Parvej Ansari** — Python · FastAPI · React · Full Stack Developer.
