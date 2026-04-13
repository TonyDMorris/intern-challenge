import { useState, useEffect } from "react";
import { questions as fallbackQuestions } from "./data/questions";
import Welcome from "./components/Welcome";
import QuestionCard from "./components/QuestionCard";
import ScoreBoard from "./components/ScoreBoard";
import ProgressBar from "./components/ProgressBar";
import Results from "./components/Results";

// =========================================================
// TODO 4: Import the fetchQuestions function from the API client.
//
//         Hint: import { fetchQuestions } from "./api/client";
// =========================================================

function App() {
  const [screen, setScreen] = useState("welcome");
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // This state holds the quiz questions.
  // Right now it uses the fallback data. Your job is to load them from the API instead.
  const [questions, setQuestions] = useState(fallbackQuestions);

  // =========================================================
  // TODO 5: Use useEffect to fetch questions from the API
  //         when the component first loads.
  //
  //         Replace the fallback questions with data from the backend!
  //
  //         Hint:
  //         useEffect(() => {
  //           fetchQuestions().then((data) => {
  //             if (data) {
  //               setQuestions(data);
  //               setLoading(false);
  //             }
  //           });
  //         }, []);
  // =========================================================

  // =========================================================
  // TODO 6: Add a loading state.
  //
  //         Step 1: Create a state variable:
  //           const [loading, setLoading] = useState(true);
  //
  //         Step 2: Set it to false after questions are fetched (in TODO 5).
  //
  //         Step 3: Show a loading message while loading:
  //           if (loading) {
  //             return (
  //               <div className="app-container">
  //                 <p style={{ textAlign: "center", color: "#aaa" }}>
  //                   Loading questions from the API...
  //                 </p>
  //               </div>
  //             );
  //           }
  // =========================================================

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
