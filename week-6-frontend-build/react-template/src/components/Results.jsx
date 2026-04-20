// =========================================================
// TODO 3: Results screen.
//
// Shows the final score and a Play Again button. Optional stretch: fetch
// all results from the backend (via fetchResults()) and show a leaderboard.
// =========================================================

function Results({ playerName, score, total, onRestart }) {
  return (
    <div className="results">
      <h1>Nice one, {playerName}!</h1>
      <p className="final-score">
        {score} / {total}
      </p>
      <p className="feedback">
        You've finished the game. Play again to try for a higher score.
      </p>
      <button className="btn-restart" onClick={onRestart}>
        Play Again
      </button>
    </div>
  );
}

export default Results;
