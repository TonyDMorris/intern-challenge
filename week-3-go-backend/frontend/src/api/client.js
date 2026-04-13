// API Client — connects the frontend to the Go backend
//
// The Go backend runs on http://localhost:8080
// The Vite proxy (in vite.config.js) forwards /api requests to it,
// so we just use "/api/..." as the URL — no need to type the full address.

const API_BASE = "/api";

// =========================================================
// TODO 1: Complete the fetchQuestions function.
//
//         This function should:
//         1. Use fetch() to GET data from `${API_BASE}/questions`
//         2. Convert the response to JSON
//         3. Return the data
//
//         Hint:
//         const response = await fetch(`${API_BASE}/questions`);
//         const data = await response.json();
//         return data;
// =========================================================
export async function fetchQuestions() {
  // YOUR CODE HERE
}

// =========================================================
// TODO 2: Complete the submitScore function.
//
//         This function should:
//         1. Use fetch() to POST data to `${API_BASE}/scores`
//         2. Set the Content-Type header to "application/json"
//         3. Send the playerName, score, and total as JSON in the body
//         4. Return the response as JSON
//
//         Hint:
//         const response = await fetch(`${API_BASE}/scores`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ playerName, score, total }),
//         });
//         const data = await response.json();
//         return data;
// =========================================================
export async function submitScore(playerName, score, total) {
  // YOUR CODE HERE
}

// =========================================================
// TODO 3: Complete the fetchResults function.
//
//         Same pattern as fetchQuestions — but hit a different endpoint.
//         GET from `${API_BASE}/results`
//
//         Hint:
//         const response = await fetch(`${API_BASE}/results`);
//         const data = await response.json();
//         return data;
// =========================================================
export async function fetchResults() {
  // YOUR CODE HERE
}
