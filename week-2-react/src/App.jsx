import { useState } from "react";
import { questions } from "./data/questions";
import Welcome from "./components/Welcome";
import QuestionCard from "./components/QuestionCard";
import ScoreBoard from "./components/ScoreBoard";
import ProgressBar from "./components/ProgressBar";
import Results from "./components/Results";

function App() {
  // =============================================================
  // TODO 1: Create a state variable called 'screen' using useState.
  //         It should start as "welcome".
  //
  //         Hint: const [screen, setScreen] = useState("welcome");
  // =============================================================

  // =============================================================
  // TODO 2: Create a state variable called 'score' starting at 0,
  //         and one called 'currentQuestion' starting at 0.
  //
  //         Hint: const [score, setScore] = useState(0);
  //               const [currentQuestion, setCurrentQuestion] = useState(0);
  // =============================================================

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

  // =============================================================
  // TODO 3: Use conditional rendering to show the right screen.
  //
  //         If screen === "welcome", return the <Welcome /> block below.
  //         If screen === "quiz", return the quiz block below.
  //         If screen === "results", return the <Results /> block below.
  //
  //         Hint: Use if/else statements, like:
  //
  //         if (screen === "welcome") {
  //           return (
  //             <div className="app-container">
  //               <Welcome onStart={handleStart} />
  //             </div>
  //           );
  //         }
  // =============================================================

  // Once you complete TODO 3, replace this placeholder return
  // with your conditional rendering code.
  return (
    <div className="app-container">
      <p style={{ color: "#aaa", textAlign: "center" }}>
        Complete TODOs 1-3 in App.jsx to get started!
      </p>
    </div>
  );

  // Below are the JSX blocks you'll need for TODO 3.
  // Copy these into your if/else conditions:
  //
  // Welcome screen:
  //   <div className="app-container">
  //     <Welcome onStart={handleStart} />
  //   </div>
  //
  // Quiz screen:
  //   <div className="app-container">
  //     <ProgressBar current={currentQuestion + 1} total={questions.length} />
  //     <ScoreBoard score={score} total={questions.length} />
  //     <QuestionCard
  //       question={questions[currentQuestion]}
  //       onCorrect={handleCorrect}
  //       onNext={handleNext}
  //     />
  //   </div>
  //
  // Results screen:
  //   <div className="app-container">
  //     <Results
  //       score={score}
  //       total={questions.length}
  //       onRestart={handleRestart}
  //     />
  //   </div>
}

export default App;
