// Fallback questions — used if the API is not running.
// Once you complete the API TODOs, the app will fetch questions from the Go backend instead.
export const questions = [
  {
    id: 1,
    type: "myth-or-fact",
    question:
      '"Racism is only about individual prejudice — it has nothing to do with systems or institutions."',
    options: ["Myth", "Fact"],
    correctAnswer: "Myth",
    explanation:
      "Racism operates at multiple levels: individual, institutional, and structural. Policies, hiring practices, and justice systems can all produce unequal outcomes even without individual intent.",
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "Which of these is an example of a microaggression?",
    options: [
      "Telling someone 'You speak English really well' based on their appearance",
      "Asking a classmate what topic they chose for their essay",
      "Complimenting someone on their presentation skills",
      "Asking a friend if they want to grab lunch",
    ],
    correctAnswer:
      "Telling someone 'You speak English really well' based on their appearance",
    explanation:
      "Microaggressions are subtle comments or actions that communicate bias, often unintentionally. This comment assumes someone is foreign based on how they look.",
  },
];
