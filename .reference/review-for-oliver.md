# Weeks 4-6 Review — Notes for Oliver & Sam

Oliver, picked through the updated brief. Weeks 2-3 with pre-reading is fine — no changes needed to the existing repo structure, just adding a `PRE-READING.md` in each week folder with curated links. Weeks 4-6 progression works technically but there are a few things to flag before this goes to Amanda.

## Overall verdict on Weeks 4-6

The shape is right: Week 4 design + template walkthrough → Week 5 backend customise → Week 6 frontend + wire-up. It's the inverse of the Weeks 2-3 learning order (React first, Go second) which is deliberate and good — backend gets settled before UI work starts, and the most complex session (full-stack wiring) is at the end when students have the most context.

## Things to fix in the doc before Amanda sign-off

1. **"Two teams / two prototypes" contradicts "each student / five prototypes".** The overview says students split into two teams producing two prototypes. Week 4 says "each student designs their own game concept individually", Week 9 says "each student presents", and your Slack message says "every student should have a working full-stack prototype". Five students = five prototypes. Recommend dropping the "two teams" framing entirely and committing to five individual prototypes (Week 4 already allows optional collaboration, which covers the social side). Sam — this is the main thing to tidy up.

2. **Week 5 goal is achievable only if the Go template does most of the heavy lifting.** Two in-session hours plus ~3 independent, after one week of Go exposure, to produce "a working backend that serves content, accepts responses and returns results" — that's only realistic if customisation is limited to swapping content data and scoring logic. I'm building it as a fresh generic template (not a refactor of the Week 3 quiz backend) so the surface area students touch is small.

3. **Week 6 is the tightest session of the programme.** Two hours to build a React frontend *and* wire it to a Go backend is aggressive even with a template. I'm also shipping a **React frontend starter** alongside the Go template so Week 6 is fill-in-the-blanks (components, routing, pre-filled API wiring) rather than from-scratch. With that in place the "working full-stack prototype by end of Week 6" goal is credible. Without it, it isn't.

4. **Pre-reading gap between Weeks 4 and 5.** Every other week has pre-material between it and the next (Wk1→2 React, Wk2→3 Go, Wk3→4 game mechanics, Wk5→6 React+APIs). Nothing between Wk4 and Wk5. Students will walk into the backend build cold after a week of design thinking. Recommend a short "revisit Go basics + look at the template" primer — I'll add this to the repo.

5. **Game design exposure question still open.** You flagged Amanda for this already — worth pinning down before Week 4 so we know whether Oliver's hour needs to be 101 gamification or can assume some baseline.

## Repo work I'm doing

- Week 4 Go game template (generic, students swap content + scoring)
- Week 6 React frontend template matching the Go template's API
- Week 4, 5, 6, 7-8 folder READMEs mirroring the weekly detail in the brief
- `PRE-READING.md` in weeks 1, 2, 3, 5 with curated links
- Root README updated for the 9-week structure

All stylistically consistent with Weeks 2-3 so students aren't learning a new pattern mid-programme. I'll ping you when it's pushed for review.

— Tony
