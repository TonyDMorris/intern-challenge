# Week 5 — Build Sprint (Start)

2-hour in-person session, led by Eman. Plus ~3 hours of independent work after.

This week you turn the Go template into your game's backend.

## Before the Session

Bring your game concept doc and wireframes from Week 4. They'll be reviewed at the start of the session to make sure the scope is realistic before you start coding.

Also do the Week 5 → Week 6 pre-reading: [`PRE-READING.md`](PRE-READING.md)

## In the Session

### Concept review (first 20 min)

Each student walks the BM team through their concept and wireframes. We check:

- Is the scope achievable in 5 weeks?
- Does the backend data structure make sense?
- Are there any design choices that will make Week 6 painful?

### Build time (remaining ~100 min)

Copy the Week 4 Go template into your own working folder and start customising it. Eman is in the room to help with Go concepts and debugging.

**Recommended approach:**

1. Copy `week-4-game-design/go-template/` to a new folder named after your game
2. Run it as-is (`go run .`) and hit the endpoints with your browser / curl to confirm it works
3. Open `store.go` — replace the placeholder `content` array with your game's actual content
4. Open `scoring.go` — change `ScoreResponse` so it scores *your* content correctly
5. Test as you go by calling the endpoints directly

You shouldn't need to touch `main.go`, `handlers.go`, or `types.go` for a standard game. If you do need to change them, flag it with Eman — usually there's a simpler way.

## Independent Work (~3 hours)

Keep building. By the end of this week, each of you should have:

- A working backend that serves *your* game content
- The backend accepts player responses and scores them correctly
- The backend stores and returns results

You should be able to run `go run .` and hit your three endpoints from a browser or curl and see the right data coming back.

Also watch the Week 5 → Week 6 pre-reading (if you haven't already) so you walk into Week 6 ready to build the frontend.

## Checklist before Week 6

- [ ] `GET /api/game/content` returns your game's content
- [ ] `POST /api/game/responses` scores a response correctly (try a right answer + a wrong answer)
- [ ] `GET /api/game/results` shows submitted responses
- [ ] No crashes or errors when you send weird input
- [ ] Pre-reading done
