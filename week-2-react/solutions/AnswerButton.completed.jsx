// TODO 7: Done - connect props to render a button

function AnswerButton({ text, onClick, isSelected, isCorrect, showResult }) {
  let className = "answer-btn";
  if (showResult && isCorrect) className += " correct";
  if (showResult && isSelected && !isCorrect) className += " incorrect";

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export default AnswerButton;
