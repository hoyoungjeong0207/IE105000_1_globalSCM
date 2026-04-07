# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

IO-LAB Web is the website for Seoul National University's Intelligent Optimization Laboratory. It combines a static lab website with interactive Streamlit-based educational apps for Operations Research courses.

## Architecture

```
Root/
├── index.html, styles.css, script.js   — Main lab website (static)
├── news.html, projects.html, publications.html — Dedicated content pages
├── learningmaterials/                  — Course portal
│   ├── index.html                      — Portal landing page
│   ├── IE105000_1_globalSCM/           — HTML/JS game + Python leaderboard
│   ├── IE105000_2_VRP/                 — Streamlit VRP solver
│   ├── IE315000_1_FLP/                 — Streamlit FLP submission platform (SQLite)
│   └── IE315000_2_NPV/                 — Streamlit NPV decision-tree game
└── orlab---operations-research-laboratory/  — React/Vite rewrite (WIP)
```

**Main site** is pure HTML/CSS/JS with no build step. Each `learningmaterials/` subdirectory is a self-contained Streamlit app. The React subproject is a work-in-progress modernization.

## Commands

### Main static site
No build required — open `index.html` directly in a browser or serve with any static server.

### Streamlit learning apps (run from each app's directory)
```bash
pip install -r requirements.txt
streamlit run app.py
```

### React/Vite subproject (`orlab---operations-research-laboratory/`)
```bash
npm install
npm run dev       # dev server on 0.0.0.0:3000
npm run build     # production build
npm run preview   # preview production build
```
Requires `GEMINI_API_KEY` in `.env.local`.

## Key Patterns

### Static site navigation
Pages are linked via `<a href="...">` — there's no client-side router. Smooth scroll and mobile hamburger menu are handled in `script.js`. The navbar appears identically across all HTML pages.

### Streamlit app structure
Each app follows the same module layout:
- `app.py` — Streamlit UI with tabs
- `scenario.py` / `config.py` — Problem instance data
- `engine.py` — Core calculation logic
- `solver.py` — Algorithm implementation
- `db.py` — Persistence (Google Sheets or SQLite)

### Leaderboard backends
- **Google Sheets**: Apps use `gspread` + a service account JSON stored in `googlesheet/`. Credentials are injected via Streamlit secrets (`gcp_json`, `sheet.id`).
- **SQLite**: IE315000_1_FLP uses a local `data/submissions.db` for storing student submissions.

### Figures/assets
- Publication journal covers: `figures/journal-covers/` (200×260px)
- Publisher logos: `figures/logos/` (max 240×160px)
- Team member photos: `figures/` root

### rules
- if there is change, make it both in English and Korean version. 