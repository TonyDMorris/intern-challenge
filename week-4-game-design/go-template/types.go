package main

// ContentItem is a single piece of game content — one question, one scenario,
// one card, whatever your game uses. The `Payload` field is flexible so each
// game can put whatever it needs in there (options, images, correct answers).
type ContentItem struct {
	ID      int            `json:"id"`
	Type    string         `json:"type"`
	Prompt  string         `json:"prompt"`
	Payload map[string]any `json:"payload"`
}

// PlayerResponse is what the frontend sends when a player interacts with a
// content item (picks an answer, drags a card, finishes a scenario).
type PlayerResponse struct {
	PlayerName string `json:"playerName"`
	ContentID  int    `json:"contentId"`
	Answer     any    `json:"answer"`
}

// ResponseResult is what the backend sends back after scoring a response.
// Includes whether the answer was correct, how many points were earned, and
// any feedback to show the player.
type ResponseResult struct {
	PlayerName string `json:"playerName"`
	ContentID  int    `json:"contentId"`
	Answer     any    `json:"answer"`
	Correct    bool   `json:"correct"`
	Points     int    `json:"points"`
	Feedback   string `json:"feedback"`
}
