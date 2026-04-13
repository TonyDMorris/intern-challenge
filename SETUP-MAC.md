# Mac Setup Guide

Follow these steps in order. After each install, open a **new** Terminal window to verify the installation.

---

## 1. Install VS Code

VS Code is the code editor we'll use throughout the programme.

**Option A — Download directly:**
1. Go to [https://code.visualstudio.com](https://code.visualstudio.com)
2. Click **Download for Mac**
3. Open the `.dmg` file and drag VS Code to your Applications folder

**Option B — Using Homebrew** (if you have it):
```bash
brew install --cask visual-studio-code
```

### Recommended Extensions

Open VS Code, click the Extensions icon on the left sidebar (or press `Cmd+Shift+X`), and search for and install these:

- **ES7+ React/Redux/React-Native snippets** — quick React code snippets
- **Prettier - Code formatter** — auto-formats your code
- **Go** — Go language support (for Week 3)

---

## 2. Install Git

Git is usually pre-installed on Mac. Open Terminal and check:

```bash
git --version
```

If you see a version number, you're good. If it asks you to install Xcode Command Line Tools, click **Install** and follow the prompts — this will install Git for you.

---

## 3. Install Node.js and npm

Node.js runs JavaScript outside the browser. npm is its package manager.

**Option A — Download directly:**
1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS** version (the green button on the left)
3. Run the installer

**Option B — Using Homebrew:**
```bash
brew install node
```

Verify in a **new** Terminal:

```bash
node --version
npm --version
```

You should see version numbers for both (e.g., `v20.x.x` and `10.x.x`).

---

## 4. Install Go

Go is the programming language we'll use for the backend in Week 3.

**Option A — Download directly:**
1. Go to [https://go.dev/dl/](https://go.dev/dl/)
2. Download the **macOS** installer (`.pkg` file — pick ARM64 for Apple Silicon Macs, or x86-64 for older Intel Macs)
3. Run the installer

**Option B — Using Homebrew:**
```bash
brew install go
```

Verify in a **new** Terminal:

```bash
go version
```

You should see something like `go version go1.22.x darwin/arm64`.

---

## 5. Clone the Repo

Open Terminal and run:

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
| `command not found: node` or `go` | Close Terminal and open a new one. The installer updated your PATH but the old Terminal doesn't know yet. |
| Homebrew not installed | Install it from [https://brew.sh](https://brew.sh) — paste the command from the site into Terminal |
| "Apple cannot check it for malicious software" | Go to System Settings > Privacy & Security, find the blocked app, and click Open Anyway |
| Page won't load in browser | Make sure the terminal still shows the dev server running. Check the URL is exactly `http://localhost:5173` |
