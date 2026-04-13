package main

// Question represents a single quiz question.
type Question struct {
	ID            int      `json:"id"`
	Type          string   `json:"type"`
	Question      string   `json:"question"`
	Options       []string `json:"options"`
	CorrectAnswer string   `json:"correctAnswer"`
	Explanation   string   `json:"explanation"`
}

// ScoreSubmission is what the frontend sends when a player finishes the quiz.
type ScoreSubmission struct {
	PlayerName string `json:"playerName"`
	Score      int    `json:"score"`
	Total      int    `json:"total"`
}

// ScoreRecord is what gets stored and returned — includes the calculated percentage.
type ScoreRecord struct {
	PlayerName string  `json:"playerName"`
	Score      int     `json:"score"`
	Total      int     `json:"total"`
	Percentage float64 `json:"percentage"`
}
