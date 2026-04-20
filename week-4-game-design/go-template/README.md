# Game Template — Go Backend

This is the starter Go backend you'll customise in Week 5 to become your own game's server. It already runs out of the box with placeholder content — your job in Week 5 is to swap in your game's actual content and scoring logic.

## How to Run

Open a terminal inside this folder (`week-4-game-design/go-template`).

**Mac** (Terminal):
```bash
go run .
```

**Windows** (Command Prompt or PowerShell):
```bash
go run .
```

You should see:
```
===========================================
  Game Template API
  Backend running on http://localhost:8080
===========================================
```

Open [http://localhost:8080/api/game/content](http://localhost:8080/api/game/content) in your browser — you should see JSON with three placeholder questions.

Press `Ctrl+C` in the terminal to stop the server.

## API Endpoints

| Method | URL | What it does |
|--------|-----|--------------|
| GET | `/api/game/content` | Returns all game content items |
| POST | `/api/game/responses` | Submits a player response, returns a scored result |
| GET | `/api/game/results` | Returns every result since the server started |

### Example request to `/api/game/responses`

```json
{
  "playerName": "Alex",
  "contentId": 1,
  "answer": "Answer B"
}
```

Example response:

```json
{
  "playerName": "Alex",
  "contentId": 1,
  "answer": "Answer B",
  "correct": true,
  "points": 10,
  "feedback": "Nice work!"
}
```

## Files

| File | What's in it | Do you edit this in Week 5? |
|------|-------------|----------------------------|
| `main.go` | Server setup, routes, CORS | No |
| `handlers.go` | HTTP handlers for each endpoint | No |
| `types.go` | Data shapes (ContentItem, PlayerResponse, ResponseResult) | Only if your game needs new fields |
| `store.go` | In-memory data + placeholder content | **Yes — replace content with your own** |
| `scoring.go` | `ScoreResponse` function | **Yes — customise for your game mechanic** |

## Customising for Your Game (Week 5 preview)

You really only need to touch two files:

### 1. `store.go` — your game's content

The `content` variable is an array of `ContentItem`. Each item has an `ID`, a `Type` (whatever you want to call it), a `Prompt`, and a flexible `Payload` map that can hold anything.

For a multiple-choice game, a payload looks like:
```go
Payload: map[string]any{
  "options":       []string{"A", "B", "C"},
  "correctAnswer": "B",
}
```

For a branching-scenario game, it might look like:
```go
Payload: map[string]any{
  "choices": []string{"Intervene", "Walk away", "Tell a teacher"},
  "outcomes": map[string]string{
    "Intervene":    "The situation de-escalates...",
    "Walk away":    "The situation gets worse...",
    "Tell a teacher": "An adult steps in...",
  },
}
```

Whatever shape you use, just make sure `scoring.go` knows how to read it.

### 2. `scoring.go` — your game's rules

The default `ScoreResponse` function works for multiple-choice: it compares `response.Answer` to `item.Payload["correctAnswer"]`. Rewrite it to match how your game decides what's "correct" and how many points a response earns.

That's it. Everything else in the template stays as-is.
