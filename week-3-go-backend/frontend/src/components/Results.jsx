import { useState } from "react";

// =========================================================
// TODO 7: Import submitScore and fetchResults from the API client.
//
//         Hint: import { submitScore, fetchResults } from "../api/client";
// =========================================================

function Results({ score, total, onRestart }) {
  const percentage = Math.round((score / total) * 100);
  const [leaderboard, setLeaderboard] = useState(null);

  let message;
  if (percentage >= 80) {
    message = "Excellent! You really understand these issues.";
  } else if (percentage >= 50) {
    message = "Good effort! Review the explanations to learn more.";
  } else {
    message = "Keep learning! These are important topics.";
  }

  // =========================================================
  // TODO 7 (continued): When this component first appears, submit
  //         the player's score to the backend.
  //
  //         Use a useEffect to call submitScore when the component mounts.
  //
  //         Hint:
  //         useEffect(() => {
  //           submitScore("Player", score, total);
  //         }, []);
  //
  //         (You'll need to import useEffect from "react" too)
  // =========================================================

  // =========================================================
  // TODO 8: Create a function that fetches the leaderboard
  //         and displays it below the score.
  //
  //         Hint:
  //         async function handleShowLeaderboard() {
  //           const data = await fetchResults();
  //           setLeaderboard(data);
  //         }
  //
  //         Then add a button and display the results:
  //
  //         <button className="btn-start" onClick={handleShowLeaderboard}>
  //           View Leaderboard
  //         </button>
  //
  //         {leaderboard && (
  //           <div style={{ marginTop: "20px", textAlign: "left" }}>
  //             <h3>Leaderboard</h3>
  //             {leaderboard.map((entry, i) => (
  //               <p key={i}>
  //                 {entry.playerName}: {entry.score}/{entry.total} ({entry.percentage}%)
  //               </p>
  //             ))}
  //           </div>
  //         )}
  // =========================================================

  return (
    <div className="results">
      <h1>Quiz Complete!</h1>
      <div className="final-score">
        {score} / {total}
      </div>
      <p className="feedback">{message}</p>

      <button className="btn-restart" onClick={onRestart}>
        Play Again
      </button>

      {/* Add your leaderboard button and display here (TODO 8) */}
    </div>
  );
}

export default Results;
