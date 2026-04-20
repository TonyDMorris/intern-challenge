package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// HandleGetContent returns all game content as JSON.
// GET /api/game/content
func HandleGetContent(w http.ResponseWriter, r *http.Request) {
	items := GetContent()
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(items)
	fmt.Println("  -> Sent", len(items), "content items")
}

// HandlePostResponse accepts a player's response, scores it, stores the result,
// and returns the scored result to the frontend.
// POST /api/game/responses
func HandlePostResponse(w http.ResponseWriter, r *http.Request) {
	var response PlayerResponse
	if err := json.NewDecoder(r.Body).Decode(&response); err != nil {
		http.Error(w, "Invalid JSON body", http.StatusBadRequest)
		return
	}

	item, found := FindContent(response.ContentID)
	if !found {
		http.Error(w, "Content item not found", http.StatusNotFound)
		return
	}

	result := ScoreResponse(item, response)
	AddResult(result)

	fmt.Printf("  -> Response from %s on item %d: correct=%v, points=%d\n",
		result.PlayerName, result.ContentID, result.Correct, result.Points)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(result)
}

// HandleGetResults returns every scored response since the server started.
// GET /api/game/results
func HandleGetResults(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	items := GetResults()
	json.NewEncoder(w).Encode(items)
	fmt.Println("  -> Sent", len(items), "result records")
}
