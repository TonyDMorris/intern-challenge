import { useState } from "react";
import AnswerButton from "./AnswerButton";

function QuestionCard({ question, onCorrect, onNext }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  function handleAnswer(option) {
    if (selectedAnswer !== null) return; // Already answered

    setSelectedAnswer(option);
    setShowExplanation(true);

    // =========================================================
    // TODO 6: Check if the selected answer is correct.
    //         If option === question.correctAnswer, call onCorrect().
    //
    //         Hint: if (option === question.correctAnswer) {
    //                 onCorrect();
    //               }
    // =========================================================
  }

  function handleClickNext() {
    setSelectedAnswer(null);
    setShowExplanation(false);
    onNext();
  }

  return (
    <div className="question-card">
      <span className="question-type">{question.type}</span>
      <h2>{question.question}</h2>

      <div className="options-list">
        {/* =========================================================
            TODO 5: Map over question.options to render an <AnswerButton>
                    for each option.

                    Each AnswerButton needs these props:
                    - key={option}
                    - text={option}
                    - onClick={() => handleAnswer(option)}
                    - isSelected={option === selectedAnswer}
                    - isCorrect={option === question.correctAnswer}
                    - showResult={selectedAnswer !== null}

                    Hint:
                    {question.options.map((option) => (
                      <AnswerButton
                        key={option}
                        text={option}
                        onClick={() => handleAnswer(option)}
                        isSelected={option === selectedAnswer}
                        isCorrect={option === question.correctAnswer}
                        showResult={selectedAnswer !== null}
                      />
                    ))}
            ========================================================= */}
        <p style={{ color: "#aaa" }}>Complete TODO 5 to show answer options here</p>
      </div>

      {showExplanation && (
        <div className="explanation">
          <p>{question.explanation}</p>
          <button className="btn-next" onClick={handleClickNext}>
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}

export default QuestionCard;
