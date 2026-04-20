package main

import "sync"

// In-memory data store — no database needed!
// Data resets every time you restart the server.

var (
	mu      sync.Mutex
	results []ResponseResult
)

// =========================================================================
// TODO (Week 5): replace this placeholder content with your own game's data.
// =========================================================================
// You can change the shape of `Payload` to whatever suits your game:
//   - Multiple choice: "options" + "correctAnswer"
//   - Scenario: "choices" + "outcomes"
//   - Sorting: "cards" + "buckets"
//   - Anything else — it's just JSON
//
// If you change the shape, remember to update `ScoreResponse` in scoring.go
// so it knows how to score the new format.
var content = []ContentItem{
	{
		ID:     1,
		Type:   "multiple-choice",
		Prompt: "This is a placeholder question. Replace me in store.go with your own game content!",
		Payload: map[string]any{
			"options":       []string{"Answer A", "Answer B", "Answer C"},
			"correctAnswer": "Answer B",
		},
	},
	{
		ID:     2,
		Type:   "multiple-choice",
		Prompt: "Here's another placeholder so you can see how multiple items work.",
		Payload: map[string]any{
			"options":       []string{"Option 1", "Option 2", "Option 3"},
			"correctAnswer": "Option 1",
		},
	},
	{
		ID:     3,
		Type:   "multiple-choice",
		Prompt: "You'll write your real game content here when you build in Week 5.",
		Payload: map[string]any{
			"options":       []string{"Yes", "No", "Maybe"},
			"correctAnswer": "Yes",
		},
	},
}

// GetContent returns all content items. The frontend calls this at the start
// of the game to load everything it needs to play.
func GetContent() []ContentItem {
	return content
}

// FindContent looks up a single content item by ID. Used when a player
// submits a response so we can score it against the right item.
func FindContent(id int) (ContentItem, bool) {
	for _, item := range content {
		if item.ID == id {
			return item, true
		}
	}
	return ContentItem{}, false
}

// AddResult stores a scored response in memory.
func AddResult(result ResponseResult) {
	mu.Lock()
	defer mu.Unlock()
	results = append(results, result)
}

// GetResults returns every response that has been scored since the server started.
func GetResults() []ResponseResult {
	mu.Lock()
	defer mu.Unlock()

	if results == nil {
		return []ResponseResult{}
	}
	return results
}
