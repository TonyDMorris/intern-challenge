# Anti-Racism Game Prototypes — Studio School Placement

Welcome to the starter repo for the Studio School placement programme. Over 9 weeks you'll learn React and Go basics, then design and build your own anti-racism game prototype.

By the end of the programme each of you will have a working full-stack game — built with React on the front end and Go on the back — and will present it at the final showcase.

## Getting Started

**First time?** Follow the setup guide for your operating system:

- [Windows Setup Guide](SETUP-WINDOWS.md)
- [Mac Setup Guide](SETUP-MAC.md)

Once your tools are installed, clone this repo:

```bash
git clone https://github.com/TonyDMorris/intern-challenge.git
cd intern-challenge
```

## Weekly Structure

Each week has a 2-hour in-person session (except Weeks 7-8, which are self-directed with an online drop-in) plus ~3 hours of independent work. Every week has pre-reading that primes you for the next session — do it so the in-person time is spent building, not catching up.

| Week | Folder | What You'll Do | Lead |
|------|--------|----------------|------|
| 1 | [`week-1-setup/`](week-1-setup/) | Meet the team, explore the Beat Modules platform, install dev tools | Oliver + Tatenda (Tony via Zoom) |
| 2 | [`week-2-react/`](week-2-react/) | React fundamentals — build an interactive quiz app | Eman |
| 3 | [`week-3-go-backend/`](week-3-go-backend/) | Connect your React app to a Go backend API | Tony |
| 4 | [`week-4-game-design/`](week-4-game-design/) | Game design principles + walkthrough of the Go template you'll customise | Oliver |
| 5 | [`week-5-backend-build/`](week-5-backend-build/) | Fork the Go template and build your own game's backend | Eman |
| 6 | [`week-6-frontend-build/`](week-6-frontend-build/) | Build the React frontend and wire it to your backend — playable prototype by end of session | Tony |
| 7-8 | [`week-7-8-self-directed/`](week-7-8-self-directed/) | Add features, polish UI, prep your 5-minute showcase pitch | Self-directed + online drop-in |
| 9 | — | Final showcase: 5-minute demo + Q&A from the full Beat Modules team | Full team |

## Key Templates

These are the scaffolds you'll customise in Weeks 5 and 6. Don't edit them directly — copy them into a new folder named after your game first.

- [`week-4-game-design/go-template/`](week-4-game-design/go-template/) — generic Go game backend. Swap in your content and scoring logic.
- [`week-6-frontend-build/react-template/`](week-6-frontend-build/react-template/) — React frontend pre-wired to the Go template's API. Swap in your game's UI.

## Pre-Reading

Each week's pre-reading lives in a `PRE-READING.md` file in the week folder. Quick list:

- [Week 1 → Week 2](week-1-setup/PRE-READING.md) — React basics
- [Week 2 → Week 3](week-2-react/PRE-READING.md) — Go and backends
- [Week 3 → Week 4](week-3-go-backend/PRE-READING.md) — educational game design
- [Week 5 → Week 6](week-5-backend-build/PRE-READING.md) — React + fetch + connecting to a custom API

## How to Get Help

- Async group chat for day-to-day questions (post code snippets and screenshots — the more detail the better)
- Online drop-in sessions with the dev team (Weeks 7 and 8, plus ad-hoc through the programme)
- Check the `solutions/` folder in Weeks 2 and 3 if you're stuck on a guided task (try first!)
