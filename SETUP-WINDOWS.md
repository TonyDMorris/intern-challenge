# Windows Setup Guide

Follow these steps in order. After each install, open a **new** terminal window (Command Prompt or PowerShell) to verify the installation.

---

## 1. Install VS Code

VS Code is the code editor we'll use throughout the programme.

1. Go to [https://code.visualstudio.com](https://code.visualstudio.com)
2. Click the big blue **Download for Windows** button
3. Run the installer — accept all the defaults
4. Open VS Code to confirm it works

### Recommended Extensions

Open VS Code, click the Extensions icon on the left sidebar (or press `Ctrl+Shift+X`), and search for and install these:

- **ES7+ React/Redux/React-Native snippets** — quick React code snippets
- **Prettier - Code formatter** — auto-formats your code
- **Go** — Go language support (for Week 3)

---

## 2. Install Git

Git lets you download and track changes to code.

1. Go to [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Download and run the installer
3. Use the default settings throughout — just click Next until it finishes
4. Open a **new** terminal and verify:

```bash
git --version
```

You should see something like `git version 2.x.x`.

---

## 3. Install Node.js and npm

Node.js runs JavaScript outside the browser. npm is its package manager.

1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS** version (the green button on the left)
3. Run the installer — accept the defaults
4. Open a **new** terminal and verify:

```bash
node --version
npm --version
```

You should see version numbers for both (e.g., `v20.x.x` and `10.x.x`).

---

## 4. Install Go

Go is the programming language we'll use for the backend in Week 3.

1. Go to [https://go.dev/dl/](https://go.dev/dl/)
2. Download the **Windows** installer (the `.msi` file)
3. Run the installer — accept the defaults
4. Open a **new** terminal and verify:

```bash
go version
```

You should see something like `go version go1.22.x windows/amd64`.

---

## 5. Clone the Repo

Open a terminal and run:

```bash
git clone https://github.com/TonyDMorris/intern-challenge.git
cd intern-challenge
```

---

## 6. Test Everything Works

```bash
cd week-2-react
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. You should see the quiz app.

Press `Ctrl+C` in the terminal to stop the server when you're done.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `git` / `node` / `go` not recognised | Close your terminal and open a new one. The installer updated your PATH but the old terminal doesn't know yet. |
| `npm install` fails with permissions | Try running the terminal as Administrator (right-click > Run as administrator) |
| Page won't load in browser | Make sure the terminal still shows the dev server running. Check the URL is exactly `http://localhost:5173` |
