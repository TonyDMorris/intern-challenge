function Welcome({ onStart }) {
  return (
    <div className="welcome">
      <h1>Myth or Fact</h1>
      <p>
        Test your knowledge about racism, stereotypes, and allyship.
        <br />
        10 questions. How much do you really know?
      </p>

      {/* =========================================================== */}
      {/* TODO 4: Add an onClick handler to this button.               */}
      {/*         When clicked, it should call the onStart function    */}
      {/*         that was passed in as a prop.                        */}
      {/*                                                              */}
      {/*         Hint: <button className="btn-start" onClick={onStart}> */}
      {/* =========================================================== */}
      <button className="btn-start">Start Quiz</button>
    </div>
  );
}

export default Welcome;
