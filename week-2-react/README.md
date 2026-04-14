# Week 2 — React Fundamentals: Anti-Racism Quiz

Build an interactive "Myth or Fact" quiz app using React. You'll learn the core concepts of React by completing guided tasks.

## Learning Objectives

- **Components** — building blocks of a React app (like LEGO bricks for UI)
- **Props** — passing data from a parent component to a child component
- **State (useState)** — managing data that changes over time (like the score)
- **Event handlers** — responding to user actions (clicks, etc.)
- **Conditional rendering** — showing different content based on conditions
- **Mapping arrays** — turning a list of data into a list of components

## How to Run

First, open a terminal and navigate to this folder (`week-2-react`).

### Step 1 — Install dependencies (first time only)

`npm install` downloads all the libraries the app needs (React, Vite, etc.) into a `node_modules` folder. You only need to run this **once**, or again if you pull new changes from GitHub.

**Mac** (Terminal):
```bash
cd week-2-react
npm install
```

**Windows** (Command Prompt or PowerShell):
```bash
cd week-2-react
npm install
```

You'll see a progress bar while it downloads. When it finishes you'll see something like `added 200 packages`. This is normal.

### Step 2 — Start the app

`npm run dev` starts a local development server on your machine so you can view the app in your browser.

**Mac** (Terminal):
```bash
npm run dev
```

**Windows** (Command Prompt or PowerShell):
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. You should see the quiz app.

The app will **auto-reload** when you save changes to any file — so you can edit code, save, and see the result instantly in the browser.

### Stopping the server

Press `Ctrl+C` in the terminal to stop the server. You'll need to run `npm run dev` again to restart it.

## Tasks

Complete the TODOs in order. Each one builds on the last.

| # | File | What You'll Do |
|---|------|---------------|
| 1 | `src/App.jsx` | Create `screen` state with useState |
| 2 | `src/App.jsx` | Create `score` and `currentQuestion` state |
| 3 | `src/App.jsx` | Conditional rendering — show the right screen |
| 4 | `src/components/Welcome.jsx` | Add an onClick handler to the Start button |
| 5 | `src/components/QuestionCard.jsx` | Map over options to render AnswerButtons |
| 6 | `src/components/QuestionCard.jsx` | Check if the answer is correct |
| 7 | `src/components/AnswerButton.jsx` | Connect props to render a clickable button |
| 8 | `src/components/ScoreBoard.jsx` | Display the score from props |
| 9 | `src/components/ProgressBar.jsx` | Calculate and display progress percentage |
| 10 | `src/components/Results.jsx` | Show different messages based on the score |
| 11 | `src/components/Results.jsx` | Add a Play Again button |

## How to Check Your Progress

After completing TODOs 1-4, you should be able to:
- See the welcome screen and click Start

After completing TODOs 5-7, you should be able to:
- See questions with clickable answer buttons
- See correct/incorrect highlighting after answering

After completing TODOs 8-9:
- Score counter updates as you answer
- Progress bar fills up as you go

After completing TODOs 10-11:
- Results screen shows personalised feedback
- Play Again button takes you back to the start

## Stuck?

1. Re-read the TODO comment — every hint you need is there
2. Check the browser console for errors (right-click > Inspect > Console)
3. Ask your session lead
4. Look in the `solutions/` folder as a last resort

## Stretch Goals

Finished all 11 TODOs? Try these:

- Add a timer that counts down for each question
- Show the explanation text after each answer (it's already in the data!)
- Track which questions were answered wrong and show a review at the end
- Add simple animations when transitioning between questions
