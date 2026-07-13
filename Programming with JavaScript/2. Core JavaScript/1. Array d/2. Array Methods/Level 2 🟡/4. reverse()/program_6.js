let answeredQuestions = [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5"
];

console.log("Original Order:");
console.table(answeredQuestions);

answeredQuestions.reverse();

console.log("Review From Last Question:");
console.table(answeredQuestions);

// Original Order:
// ┌─────────┬───────────────┐
// │ (index) │    Values     │
// ├─────────┼───────────────┤
// │    0    │ 'Question 1'  │
// │    1    │ 'Question 2'  │
// │    2    │ 'Question 3'  │
// │    3    │ 'Question 4'  │
// │    4    │ 'Question 5'  │
// └─────────┴───────────────┘

// Review From Last Question:
// ┌─────────┬───────────────┐
// │ (index) │    Values     │
// ├─────────┼───────────────┤
// │    0    │ 'Question 5'  │
// │    1    │ 'Question 4'  │
// │    2    │ 'Question 3'  │
// │    3    │ 'Question 2'  │
// │    4    │ 'Question 1'  │
// └─────────┴───────────────┘