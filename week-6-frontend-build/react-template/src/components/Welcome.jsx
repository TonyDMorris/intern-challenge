// =========================================================
// TODO 1: Welcome screen.
//
// Shows a title, short description, an input for the player's name, and a
// Start button. When Start is clicked, call `onStart(playerName)`.
//
// Replace "My Game" and the description with your actual game's branding.
// =========================================================

import { useState } from "react";

function Welcome({ onStart }) {
  const [name, setName] = useState("");

  function handleStart() {
    const finalName = name.trim() || "Player";
    onStart(finalName);
  }

  return (
    <div className="welcome">
      <h1>My Game</h1>
      <p>Short description of what your game teaches goes here.</p>

      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="name-input"
      />

      <button className="btn-start" onClick={handleStart}>
        Start
      </button>
    </div>
  );
}

export default Welcome;
