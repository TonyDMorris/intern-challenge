package main

import "sync"

// In-memory data store — no database needed!
// Data resets every time you restart the server.

var (
	mu     sync.Mutex
	scores []ScoreRecord
)

var questions = []Question{
	{
		ID:            1,
		Type:          "myth-or-fact",
		Question:      `"Racism is only about individual prejudice — it has nothing to do with systems or institutions."`,
		Options:       []string{"Myth", "Fact"},
		CorrectAnswer: "Myth",
		Explanation:   "Racism operates at multiple levels: individual, institutional, and structural. Policies, hiring practices, and justice systems can all produce unequal outcomes even without individual intent.",
	},
	{
		ID:            2,
		Type:          "multiple-choice",
		Question:      "Which of these is an example of a microaggression?",
		Options:       []string{"Telling someone 'You speak English really well' based on their appearance", "Asking a classmate what topic they chose for their essay", "Complimenting someone on their presentation skills", "Asking a friend if they want to grab lunch"},
		CorrectAnswer: "Telling someone 'You speak English really well' based on their appearance",
		Explanation:   "Microaggressions are subtle comments or actions that communicate bias, often unintentionally. This comment assumes someone is foreign based on how they look.",
	},
	{
		ID:            3,
		Type:          "myth-or-fact",
		Question:      `"People who experience racism should just ignore it and move on."`,
		Options:       []string{"Myth", "Fact"},
		CorrectAnswer: "Myth",
		Explanation:   "Ignoring racism doesn't make it go away. Research shows that repeated exposure to racism has real effects on mental and physical health. Acknowledging and addressing it is healthier for individuals and society.",
	},
	{
		ID:            4,
		Type:          "multiple-choice",
		Question:      "What does the term 'allyship' mean in the context of anti-racism?",
		Options:       []string{"Actively supporting and advocating for people from marginalised racial groups", "Treating everyone exactly the same regardless of background", "Avoiding any conversation about race", "Only speaking up when directly asked to"},
		CorrectAnswer: "Actively supporting and advocating for people from marginalised racial groups",
		Explanation:   "Allyship means using your position to actively support marginalised groups — not just being 'not racist' but taking action against racism when you see it.",
	},
	{
		ID:            5,
		Type:          "myth-or-fact",
		Question:      `"Reverse racism against white people is just as big a problem."`,
		Options:       []string{"Myth", "Fact"},
		CorrectAnswer: "Myth",
		Explanation:   "While anyone can experience prejudice, racism as a system of power disproportionately affects people of colour. Individual prejudice is not the same as systemic racism backed by institutional power.",
	},
	{
		ID:            6,
		Type:          "multiple-choice",
		Question:      "What is a 'bystander' in the context of racism?",
		Options:       []string{"Someone who witnesses a racist incident but does not intervene", "Someone who commits a racist act", "Someone who has never experienced racism", "Someone who studies racism academically"},
		CorrectAnswer: "Someone who witnesses a racist incident but does not intervene",
		Explanation:   "A bystander sees something happening but doesn't act. Anti-racism encourages people to become 'upstanders' — those who speak up or take action when they witness racism.",
	},
	{
		ID:            7,
		Type:          "myth-or-fact",
		Question:      `"Talking about race and racism makes the problem worse."`,
		Options:       []string{"Myth", "Fact"},
		CorrectAnswer: "Myth",
		Explanation:   "Avoiding the topic doesn't reduce racism — it allows it to continue unchallenged. Open, honest conversations help people understand different experiences and work toward change.",
	},
	{
		ID:            8,
		Type:          "multiple-choice",
		Question:      "Which action is an example of being an 'upstander' against racism?",
		Options:       []string{"Speaking up when a friend makes a racist joke", "Laughing along to avoid confrontation", "Changing the subject and hoping it goes away", "Posting about it on social media but not saying anything in person"},
		CorrectAnswer: "Speaking up when a friend makes a racist joke",
		Explanation:   "An upstander takes direct action. Speaking up in the moment — even if it feels awkward — challenges racist behaviour and shows others it's not acceptable.",
	},
	{
		ID:            9,
		Type:          "myth-or-fact",
		Question:      `"You can't be racist if you have friends from different racial backgrounds."`,
		Options:       []string{"Myth", "Fact"},
		CorrectAnswer: "Myth",
		Explanation:   "Having diverse friendships doesn't automatically prevent someone from holding biases or participating in systems that disadvantage certain groups. Anti-racism requires ongoing self-reflection and action.",
	},
	{
		ID:            10,
		Type:          "multiple-choice",
		Question:      "Why is representation in media, games, and technology important?",
		Options:       []string{"It helps people from all backgrounds feel seen and challenges stereotypes", "It's only important for marketing purposes", "It doesn't really matter as long as the content is good", "It's a trend that will pass"},
		CorrectAnswer: "It helps people from all backgrounds feel seen and challenges stereotypes",
		Explanation:   "When people see themselves represented accurately and positively, it builds belonging and challenges harmful stereotypes. This is especially powerful in games and interactive media.",
	},
}

// GetQuestions returns all quiz questions.
func GetQuestions() []Question {
	return questions
}

// AddScore stores a new score and returns the record with percentage calculated.
func AddScore(submission ScoreSubmission) ScoreRecord {
	mu.Lock()
	defer mu.Unlock()

	percentage := 0.0
	if submission.Total > 0 {
		percentage = float64(submission.Score) / float64(submission.Total) * 100
	}

	record := ScoreRecord{
		PlayerName: submission.PlayerName,
		Score:      submission.Score,
		Total:      submission.Total,
		Percentage: percentage,
	}

	scores = append(scores, record)
	return record
}

// GetScores returns all stored score records.
func GetScores() []ScoreRecord {
	mu.Lock()
	defer mu.Unlock()

	if scores == nil {
		return []ScoreRecord{}
	}
	return scores
}
