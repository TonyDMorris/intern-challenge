function Welcome({ onStart }) {
  return (
    <div className="welcome">
      <h1>Myth or Fact</h1>
      <p>
        Test your knowledge about racism, stereotypes, and allyship.
        <br />
        10 questions. How much do you really know?
      </p>
      <button className="btn-start" onClick={onStart}>
        Start Quiz
      </button>
    </div>
  );
}

export default Welcome;
