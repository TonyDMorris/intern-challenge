// TODO 8: Done - display score from props

function ScoreBoard({ score, total }) {
  return (
    <div className="score-board">
      Score: {score} / {total}
    </div>
  );
}

export default ScoreBoard;
