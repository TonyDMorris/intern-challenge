# Week 3 — Go Backend: Connecting Frontend to an API

This week you'll connect the React quiz app to a real backend server written in Go. The backend stores quiz questions and player scores.

## Learning Objectives

- **What a backend does** — stores data and serves it to frontends via HTTP
- **Running a Go server** — start a backend locally with one command
- **fetch() GET requests** — load data from an API into your React app
- **fetch() POST requests** — send data from your React app to the API
- **The full data loop** — Frontend asks Backend for data, displays it, sends results back

## How to Run

You need **two terminals** open at the same time:

### Terminal 1 — Start the Go backend

```bash
cd backend
go run .
```

You should see:
```
===========================================
  Anti-Racism Quiz API
  Backend running on http://localhost:8080
===========================================
```

Test it works by opening [http://localhost:8080/api/questions](http://localhost:8080/api/questions) in your browser — you should see JSON data.

### Terminal 2 — Start the React frontend

```bash
cd frontend
npm install        # First time only
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Tasks

Complete the TODOs in order. Each one builds on the last.

| # | File | What You'll Do |
|---|------|---------------|
| 1 | `frontend/src/api/client.js` | Write a function to GET questions from the API |
| 2 | `frontend/src/api/client.js` | Write a function to POST a score to the API |
| 3 | `frontend/src/api/client.js` | Write a function to GET all scores from the API |
| 4 | `frontend/src/App.jsx` | Import your fetchQuestions function |
| 5 | `frontend/src/App.jsx` | Use useEffect to load questions when the app starts |
| 6 | `frontend/src/App.jsx` | Show "Loading..." while questions are being fetched |
| 7 | `frontend/src/components/Results.jsx` | Submit the player's score when the quiz ends |
| 8 | `frontend/src/components/Results.jsx` | Add a leaderboard that shows all scores |

## How to Verify It Works

After each group of TODOs, check that things are working:

**After TODOs 1, 4, 5, 6:**
- Start the backend (Terminal 1), then the frontend (Terminal 2)
- Open the app — if all 10 questions load, it's working!
- Check Terminal 1 — you should see `-> Sent 10 questions`
- If the backend is off, the app should still work with 2 fallback questions

**After TODO 2 and 7:**
- Complete the quiz
- Check Terminal 1 — you should see a score like `-> Score received: Player got 7/10 (70%)`

**After TODO 3 and 8:**
- Click "View Leaderboard" on the results screen
- You should see your score listed
- Open a second browser tab, play again — both scores should appear!

## The API Endpoints

Here's what the Go backend provides:

| Method | URL | What It Does | Example Response |
|--------|-----|-------------|-----------------|
| GET | `/api/questions` | Returns all quiz questions | `[{ "id": 1, "question": "...", ... }]` |
| POST | `/api/scores` | Saves a player's score | Send: `{ "playerName": "Alex", "score": 7, "total": 10 }` |
| GET | `/api/results` | Returns all saved scores | `[{ "playerName": "Alex", "score": 7, ... }]` |

## Stretch Goals

- Add a "player name" input on the welcome screen and use it when submitting scores
- Sort the leaderboard by highest percentage
- Show the player's rank (e.g., "You placed 2nd out of 5 players")
- Add a timestamp to each score so you can see when people played
