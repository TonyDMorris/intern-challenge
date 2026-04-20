package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	mux := http.NewServeMux()

	// Register our API routes
	mux.HandleFunc("GET /api/game/content", HandleGetContent)
	mux.HandleFunc("POST /api/game/responses", HandlePostResponse)
	mux.HandleFunc("GET /api/game/results", HandleGetResults)

	fmt.Println("===========================================")
	fmt.Println("  Game Template API")
	fmt.Println("  Backend running on http://localhost:8080")
	fmt.Println("===========================================")
	fmt.Println()
	fmt.Println("Available endpoints:")
	fmt.Println("  GET  /api/game/content    — load the game's content")
	fmt.Println("  POST /api/game/responses  — submit a player response, get scored result")
	fmt.Println("  GET  /api/game/results    — view all past results")
	fmt.Println()
	fmt.Println("Waiting for requests...")
	fmt.Println()

	log.Fatal(http.ListenAndServe(":8080", enableCORS(mux)))
}

// enableCORS wraps a handler to allow cross-origin requests from the frontend.
// This lets the React app (on port 5173) talk to this server (on port 8080).
func enableCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}
