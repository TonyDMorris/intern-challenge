// =========================================================
// TODO 7: This component receives these props:
//         - text: the answer text to display
//         - onClick: function to call when the button is clicked
//         - isSelected: whether this option was chosen
//         - isCorrect: whether this option is the right answer
//         - showResult: whether to reveal correct/incorrect styling
//
//         Your job: Render a <button> that displays the text
//         and calls onClick when clicked.
//
//         The className logic below handles the styling for you —
//         you just need to put it all together.
//
//         Hint:
//         let className = "answer-btn";
//         if (showResult && isCorrect) className += " correct";
//         if (showResult && isSelected && !isCorrect) className += " incorrect";
//
//         return (
//           <button className={className} onClick={onClick}>
//             {text}
//           </button>
//         );
// =========================================================

function AnswerButton({ text, onClick, isSelected, isCorrect, showResult }) {
  // Replace this placeholder with your code from the hint above
  return <button className="answer-btn">Answer button placeholder</button>;
}

export default AnswerButton;
