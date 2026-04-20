import { useState, useEffect } from "react";
import { fetchContent } from "./api/client";
import { placeholderContent } from "./data/placeholder-content";
import Welcome from "./components/Welcome";
import GameScreen from "./components/GameScreen";
import Results from "./components/Results";

function App() {
  const [screen, setScreen] = useState("welcome");
  const [playerName, setPlayerName] = useState("Player");
  const [content, setContent] = useState(placeholderContent);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  // Load game content from the Go backend when the app first opens.
  // If the backend isn't running, the placeholderContent fallback is used.
  useEffect(() => {
    fetchContent().then((data) => {
      if (data && data.length > 0) {
        setContent(data);
      }
      setLoading(false);
    });
  }, []);

  function handleStart(name) {
    setPlayerName(name);
    setScore(0);
    setCurrentIndex(0);
    setScreen("game");
  }

  function handleAnswered(pointsEarned) {
    setScore((s) => s + pointsEarned);
  }

  function handleNext() {
    if (currentIndex + 1 < content.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setScreen("results");
    }
  }

  function handleRestart() {
    setScreen("welcome");
  }

  if (loading) {
    return (
      <div className="app-container">
        <p style={{ textAlign: "center", color: "#aaa" }}>Loading game...</p>
      </div>
    );
  }

  if (screen === "welcome") {
    return (
      <div className="app-container">
        <Welcome onStart={handleStart} />
      </div>
    );
  }

  if (screen === "game") {
    return (
      <div className="app-container">
        <GameScreen
          item={content[currentIndex]}
          playerName={playerName}
          onAnswered={handleAnswered}
          onNext={handleNext}
          isLast={currentIndex + 1 === content.length}
        />
      </div>
    );
  }

  return (
    <div className="app-container">
      <Results
        playerName={playerName}
        score={score}
        total={content.length}
        onRestart={handleRestart}
      />
    </div>
  );
}

export default App;
