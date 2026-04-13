import { useState } from "react";
import { questions } from "../data/questions";
import Welcome from "../components/Welcome";
import QuestionCard from "../components/QuestionCard";
import ScoreBoard from "../components/ScoreBoard";
import ProgressBar from "../components/ProgressBar";
import Results from "../components/Results";

function App() {
  // TODO 1: Done - screen state
  const [screen, setScreen] = useState("welcome");

  // TODO 2: Done - score and currentQuestion state
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleStart() {
    setScreen("quiz");
    setScore(0);
    setCurrentQuestion(0);
  }

  function handleCorrect() {
    setScore(score + 1);
  }

  function handleNext() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScreen("results");
    }
  }

  function handleRestart() {
    setScreen("welcome");
  }

  // TODO 3: Done - conditional rendering
  if (screen === "welcome") {
    return (
      <div className="app-container">
        <Welcome onStart={handleStart} />
      </div>
    );
  }

  if (screen === "quiz") {
    return (
      <div className="app-container">
        <ProgressBar current={currentQuestion + 1} total={questions.length} />
        <ScoreBoard score={score} total={questions.length} />
        <QuestionCard
          question={questions[currentQuestion]}
          onCorrect={handleCorrect}
          onNext={handleNext}
        />
      </div>
    );
  }

  if (screen === "results") {
    return (
      <div className="app-container">
        <Results
          score={score}
          total={questions.length}
          onRestart={handleRestart}
        />
      </div>
    );
  }
}

export default App;
