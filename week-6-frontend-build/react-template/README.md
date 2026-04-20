# Game Template — React Frontend

This is the starter React frontend you'll build on in Week 6. It's pre-wired to the Go game template from Weeks 4-5, so when you run both at once you get a working full-stack prototype out of the box.

Your Week 6 job is to replace the placeholder rendering with your own game's UI.

## How to Run

You need **two terminal windows open at the same time** — one for your Go backend, one for this React frontend.

### Terminal 1 — Start your Go backend

This should be your customised Go template from Week 5 (or `week-4-game-design/go-template` if you just want to see the fresh template running).

**Mac** (Terminal):
```bash
cd week-4-game-design/go-template
go run .
```

**Windows** (Command Prompt or PowerShell):
```bash
cd week-4-game-design/go-template
go run .
```

You should see the backend running on `http://localhost:8080`.

### Terminal 2 — Install frontend dependencies and start React

Open a **new/second** terminal window. Navigate into this folder.

**Mac** (Terminal):
```bash
cd week-6-frontend-build/react-template
npm install
npm run dev
```

**Windows** (Command Prompt or PowerShell):
```bash
cd week-6-frontend-build/react-template
npm install
npm run dev
```

`npm install` downloads React and Vite — you only need to run it the first time, or after pulling new changes.

Open [http://localhost:5173](http://localhost:5173) in your browser. You should see the game.

Press `Ctrl+C` in each terminal to stop.

**Note:** If the Go backend isn't running, the app still works using placeholder content in `src/data/placeholder-content.js` — handy for frontend-only development.

## Files

| File | What's in it | Do you edit this in Week 6? |
|------|-------------|----------------------------|
| `src/api/client.js` | fetch helpers for the three backend endpoints | No — already wired up |
| `src/App.jsx` | Top-level screen switching (welcome / game / results) | Maybe — depends on your game flow |
| `src/components/Welcome.jsx` | Start screen + name input | **Yes — customise branding** |
| `src/components/GameScreen.jsx` | Renders one content item, handles answers | **Yes — match your content shape** |
| `src/components/Results.jsx` | Final score display | Yes — polish and add leaderboard |
| `src/data/placeholder-content.js` | Fallback content for offline dev | No — this is just a safety net |
| `src/App.css` | All the styling | **Yes — make it look like your game** |

## Customising the GameScreen

`GameScreen.jsx` assumes multiple-choice content: `item.payload.options` is an array of strings, the player clicks one, and it gets submitted. If your game uses a different shape (branching scenarios, drag-and-drop, sorting, etc.), rewrite the rendering inside `GameScreen.jsx` to match.

The wiring (calling `submitResponse()`, showing feedback from the backend, moving to the next item) stays the same — you only change what gets rendered.

## API it calls

These three functions in `src/api/client.js` talk to your Go backend:

- `fetchContent()` — called on app start to load the game's content
- `submitResponse({ playerName, contentId, answer })` — called when a player answers
- `fetchResults()` — available for leaderboard (Week 7-8 stretch)
