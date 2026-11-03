# Streaks: Habit Tracker

[![CI](https://github.com/YOUR-USERNAME/habit-tracker/actions/workflows/ci.yml/badge.svg)](https://github.com/YOUR-USERNAME/habit-tracker/actions)
![License](https://img.shields.io/badge/license-MIT-green)

A fast, dependency-free habit tracker. Add habits, tap squares to log days, and watch your streaks grow on a 5-week heatmap. Works offline, follows your system light/dark theme, and keeps all data in your browser.

**Live demo:** https://YOUR-USERNAME.github.io/habit-tracker/

## Features
- Unlimited habits with a tap-to-toggle 5-week heatmap
- Current streak and best streak per habit (an unchecked today doesn't break your streak until the day ends)
- Persistent storage via `localStorage`, no account or server
- Responsive layout, automatic dark mode, keyboard-accessible controls
- Streak logic is separated from the UI and unit tested

## Run locally
Open `index.html` in a browser. No build step.

## Test
```bash
npm test
```
Requires Node 18+. Tests cover empty history, streaks across month boundaries, gaps, and duplicate entries.

## Deploy to GitHub Pages
Repo **Settings → Pages → Deploy from a branch → `main` / root**.

## Project structure
| File | Purpose |
|---|---|
| `index.html` | UI, styles, and rendering |
| `logic.js` | Pure date and streak functions (shared by browser and tests) |
| `test/logic.test.js` | Unit tests using Node's built-in runner |

## Roadmap
- Export/import data as JSON
- Per-habit weekly goals
- Installable PWA

## License
MIT, see [LICENSE](LICENSE).
