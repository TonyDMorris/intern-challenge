package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// HandleGetQuestions returns all quiz questions as JSON.
// GET /api/questions
func HandleGetQuestions(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(GetQuestions())
	fmt.Println("  -> Sent", len(GetQuestions()), "questions")
}

// HandlePostScore accepts a score submission and stores it.
// POST /api/scores
func HandlePostScore(w http.ResponseWriter, r *http.Request) {
	var submission ScoreSubmission
	if err := json.NewDecoder(r.Body).Decode(&submission); err != nil {
		http.Error(w, "Invalid JSON body", http.StatusBadRequest)
		return
	}

	record := AddScore(submission)

	fmt.Printf("  -> Score received: %s got %d/%d (%.0f%%)\n",
		record.PlayerName, record.Score, record.Total, record.Percentage)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(record)
}

// HandleGetResults returns all stored scores as JSON.
// GET /api/results
func HandleGetResults(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	results := GetScores()
	json.NewEncoder(w).Encode(results)
	fmt.Println("  -> Sent", len(results), "score records")
}
