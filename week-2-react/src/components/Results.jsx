function Results({ score, total, onRestart }) {
  const percentage = Math.round((score / total) * 100);

  // =========================================================
  // TODO 10: Create a variable called 'message' that changes
  //          based on the percentage score.
  //
  //          - If percentage >= 80: "Excellent! You really understand these issues."
  //          - If percentage >= 50: "Good effort! Review the explanations to learn more."
  //          - Otherwise: "Keep learning! These are important topics."
  //
  //          Hint:
  //          let message;
  //          if (percentage >= 80) {
  //            message = "Excellent! You really understand these issues.";
  //          } else if (percentage >= 50) {
  //            message = "Good effort! Review the explanations to learn more.";
  //          } else {
  //            message = "Keep learning! These are important topics.";
  //          }
  // =========================================================
  let message = "Complete TODO 10 to show your personalised feedback!";

  return (
    <div className="results">
      <h1>Quiz Complete!</h1>
      <div className="final-score">
        {score} / {total}
      </div>
      <p className="feedback">{message}</p>

      {/* =========================================================
          TODO 11: Add an onClick handler to this button that calls
                   the onRestart function (passed in as a prop).

                   This lets the player go back to the welcome screen
                   and play again.

                   Hint: <button className="btn-restart" onClick={onRestart}>
          ========================================================= */}
      <button className="btn-restart">Play Again</button>
    </div>
  );
}

export default Results;
