import { useState } from "react";
import AnswerButton from "./AnswerButton";

function QuestionCard({ question, onCorrect, onNext }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  function handleAnswer(option) {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(option);
    setShowExplanation(true);

    if (option === question.correctAnswer) {
      onCorrect();
    }
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
