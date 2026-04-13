// TODOs 10-11: Done - conditional messages and restart button

function Results({ score, total, onRestart }) {
  const percentage = Math.round((score / total) * 100);

  // TODO 10: Done - conditional feedback message
  let message;
  if (percentage >= 80) {
    message = "Excellent! You really understand these issues.";
  } else if (percentage >= 50) {
    message = "Good effort! Review the explanations to learn more.";
  } else {
    message = "Keep learning! These are important topics.";
  }

  return (
    <div className="results">
      <h1>Quiz Complete!</h1>
      <div className="final-score">
        {score} / {total}
      </div>
      <p className="feedback">{message}</p>

      {/* TODO 11: Done - onClick handler for restart */}
      <button className="btn-restart" onClick={onRestart}>
        Play Again
      </button>
    </div>
  );
}

export default Results;
