# Week 6 — Build Sprint (Refinement)

2-hour in-person session, led by Tony. Plus ~3 hours of independent work after.

This is the session where the frontend and backend meet. By the end you should have a playable prototype.

## Before the Session

- Your Week 5 Go backend should be running without errors (`go run .` → hit the endpoints → see your data)
- Week 5 → Week 6 pre-reading done: [`../week-5-backend-build/PRE-READING.md`](../week-5-backend-build/PRE-READING.md)
- Skim the [React template README](react-template/README.md) so you know what's already wired up

## In the Session

### Backend review (first 20 min)

Tony walks round each of you and confirms your Week 5 backend works correctly. Any outstanding issues get fixed now — you can't build a frontend against a broken backend.

### Frontend build (remaining ~100 min)

Copy the React template in [`react-template/`](react-template/) into your own working folder. Then:

1. `npm install` once
2. `npm run dev` to see the template running against your backend
3. Update `Welcome.jsx` — your game's title, description, branding
4. Update `GameScreen.jsx` — render *your* content shape (if it's not multiple-choice)
5. Update `Results.jsx` — final score screen
6. Update `App.css` — make it look like your game, not the template

The fetch wiring (in `src/api/client.js`) is already done. You don't need to write fetch calls from scratch — you just call the functions that are already there.

Tony is in the room for full-stack debugging: anything that breaks between the backend and the frontend.

## Independent Work (~3 hours)

Keep building. By the end of this week, each of you should have a **playable prototype** — frontend and backend talking to each other, a player can start, play, and see results. Add more content, more scenarios, expand the core loop.

## Checklist — working full-stack prototype

- [ ] `go run .` starts your backend
- [ ] `npm run dev` starts your frontend
- [ ] Opening the browser shows your welcome screen
- [ ] You can play the game end-to-end without a crash
- [ ] Final score shows correctly
- [ ] If you stop the backend mid-game, the app doesn't completely break (it should at least fall back to placeholder content or show an error, not a white screen)

## Next: Weeks 7-8

Weeks 7-8 are self-directed. You'll have a working prototype and be polishing and expanding it. See [`../week-7-8-self-directed/README.md`](../week-7-8-self-directed/README.md).
