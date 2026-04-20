# Week 4 — Game Design and Backend Architecture

2-hour in-person session, led by Oliver. Plus ~3 hours of independent work after.

This is the week your own game starts. The first half is game design concepts; the second half is a walkthrough of the Go template you'll customise in Week 5.

## Before the Session

Make sure you've done the Week 3 → Week 4 pre-reading: [`../week-3-go-backend/PRE-READING.md`](../week-3-go-backend/PRE-READING.md)

## In the Session

### Hour 1 — Game design concepts (Oliver)

- What makes an educational game actually teach
- Feedback loops, difficulty curves, rewards
- Examples from the Beat Modules platform
- The anti-racism brief: curriculum areas and learning outcomes your game needs to hit
- You each pitch an initial game concept. Students with similar ideas are welcome to collaborate but don't have to.

### Hour 2 — Backend architecture walkthrough

Your on-site dev walks through the Go template in this folder:

[`go-template/`](go-template/) — the starter backend you'll customise in Week 5.

You'll see:

- How content is sent to the player (`GET /api/game/content`)
- How responses come back and get scored (`POST /api/game/responses`)
- How the server stores things (`store.go`)
- How scoring decisions are made (`scoring.go`)
- What you'll change in Week 5 vs what stays the same

Open [`go-template/README.md`](go-template/README.md) to follow along.

## Independent Work (~3 hours)

Produce two things to bring to the start of Week 5:

1. **Game concept document** — one page covering:
   - What the player learns (one specific thing)
   - What the player does moment-to-moment
   - How the player gets feedback
   - Who wins / how the game ends

2. **Wireframes** — rough screens showing the full user flow:
   - Start / welcome screen
   - Whatever the main play screen looks like
   - End / results screen
   - Any extras (leaderboard, replay, etc.)

Figma is fine. Pen and paper is fine. What matters is that by the end of Week 4 you know what data your backend needs to send to the frontend, and what data the frontend needs to send back. The Go template is designed to be flexible about both — but you need to know what your game's shape is before you start customising it.

## What You'll Build On Next Week

In Week 5 you'll fork the Go template and start making it yours. Don't touch the template files yet — Week 5 starts with the BM team reviewing your concept so the shape of your customisation makes sense.
