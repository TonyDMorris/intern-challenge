package main

// =========================================================================
// TODO (Week 5): this is the main function you'll customise for your game.
// =========================================================================
// ScoreResponse decides whether a player's answer is correct, how many points
// they earn, and what feedback to show them.
//
// The default scoring here handles multiple-choice: compare `response.Answer`
// to `item.Payload["correctAnswer"]`. Change this function to match how your
// game's content is structured.

const pointsPerCorrectAnswer = 10

func ScoreResponse(item ContentItem, response PlayerResponse) ResponseResult {
	correct := false

	// Default scoring: does the answer match the correctAnswer in the payload?
	if expected, ok := item.Payload["correctAnswer"]; ok {
		if response.Answer == expected {
			correct = true
		}
	}

	points := 0
	feedback := "Not quite — have another think!"
	if correct {
		points = pointsPerCorrectAnswer
		feedback = "Nice work!"
	}

	return ResponseResult{
		PlayerName: response.PlayerName,
		ContentID:  response.ContentID,
		Answer:     response.Answer,
		Correct:    correct,
		Points:     points,
		Feedback:   feedback,
	}
}
