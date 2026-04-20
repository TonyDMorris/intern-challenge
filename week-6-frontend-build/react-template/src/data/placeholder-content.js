// Fallback content used when the Go backend isn't running.
// Lets you develop the frontend even when you haven't started the server yet.
// The shape matches what the backend returns from GET /api/game/content.

export const placeholderContent = [
  {
    id: 1,
    type: "multiple-choice",
    prompt: "This is placeholder content — start your Go backend to see real content!",
    payload: {
      options: ["Answer A", "Answer B", "Answer C"],
      correctAnswer: "Answer B",
    },
  },
  {
    id: 2,
    type: "multiple-choice",
    prompt: "Another placeholder so you can see how multiple items flow.",
    payload: {
      options: ["Option 1", "Option 2", "Option 3"],
      correctAnswer: "Option 1",
    },
  },
];
