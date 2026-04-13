function ProgressBar({ current, total }) {
  // =========================================================
  // TODO 9: Calculate the progress percentage and use it to
  //         set the width of the inner bar.
  //
  //         Step 1: Calculate percentage
  //           const percentage = (current / total) * 100;
  //
  //         Step 2: Use it in the JSX
  //           <div className="progress-bar">
  //             <div
  //               className="progress-fill"
  //               style={{ width: `${percentage}%` }}
  //             />
  //           </div>
  // =========================================================

  return (
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: "0%" }} />
    </div>
  );
}

export default ProgressBar;
