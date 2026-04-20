// =========================================================
// TODO 2: Game screen.
//
// Shows one content item at a time. The user picks an answer, the answer is
// sent to the backend via submitResponse(), and the feedback + score from the
// backend is displayed. Click "Next" to move to the next item (or finish).
//
// This template assumes multiple-choice content (item.payload.options is an
// array of strings). If your game has a different content shape, update the
// rendering below to match.
// =========================================================

import { useState } from "react";
import { submitResponse } from "../api/client";

function GameScreen({ item, playerName, onAnswered, onNext, isLast }) {
  const [result, setResult] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleAnswer(answer) {
    if (result || submitting) return;
    setSubmitting(true);

    const scored = await submitResponse({
      playerName,
      contentId: item.id,
      answer,
    });

    setResult(scored);
    setSubmitting(false);

    if (scored) {
      onAnswered(scored.points);
    }
  }

  function handleNext() {
    setResult(null);
    onNext();
  }

  const options = item.payload?.options || [];

  return (
    <div className="question-card">
      <span className="question-type">{item.type}</span>
      <h2>{item.prompt}</h2>

      <div className="options-list">
        {options.map((option) => {
          let className = "answer-btn";
          if (result) {
            if (option === result.answer) {
              className += result.correct ? " correct" : " incorrect";
            }
          }
          return (
            <button
              key={option}
              className={className}
              onClick={() => handleAnswer(option)}
              disabled={Boolean(result) || submitting}
            >
              {option}
            </button>
          );
        })}
      </div>

      {result && (
        <div className="explanation">
          <p>{result.feedback}</p>
          <button className="btn-next" onClick={handleNext}>
            {isLast ? "Finish" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
}

export default GameScreen;
