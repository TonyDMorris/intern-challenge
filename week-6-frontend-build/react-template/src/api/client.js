// API client — these functions talk to your Go backend (the game template
// from Week 4/5). They're already written for you so you can focus on building
// your game's UI in Week 6.
//
// Vite's proxy (see vite.config.js) forwards any /api/... request to
// http://localhost:8080 where your Go server is running.

// fetchContent loads all game content items from the backend.
// Returns an array of content items, or null if the backend isn't reachable.
export async function fetchContent() {
  try {
    const response = await fetch("/api/game/content");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.warn("Could not load content from backend:", error.message);
    return null;
  }
}

// submitResponse sends a player's answer to the backend and returns the
// scored result (whether it was correct, points earned, feedback text).
export async function submitResponse({ playerName, contentId, answer }) {
  try {
    const response = await fetch("/api/game/responses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerName, contentId, answer }),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.warn("Could not submit response:", error.message);
    return null;
  }
}

// fetchResults loads every scored response since the backend started.
// Useful for showing a leaderboard or history view.
export async function fetchResults() {
  try {
    const response = await fetch("/api/game/results");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.warn("Could not load results:", error.message);
    return [];
  }
}
