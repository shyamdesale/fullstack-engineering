const totalQuestions = 10;

let answers = new Array(totalQuestions).fill("Not Answered");

console.log("Exam Answers:");
console.table(answers);

console.log("Total Questions:", answers.length);

// Exam Answers:
// ┌─────────┬───────────────┐
// │ (index) │     Values    │
// ├─────────┼───────────────┤
// │    0    │ 'Not Answered'│
// │    1    │ 'Not Answered'│
// │    2    │ 'Not Answered'│
// │    3    │ 'Not Answered'│
// │    4    │ 'Not Answered'│
// │    5    │ 'Not Answered'│
// │    6    │ 'Not Answered'│
// │    7    │ 'Not Answered'│
// │    8    │ 'Not Answered'│
// │    9    │ 'Not Answered'│
// └─────────┴───────────────┘

// Total Questions: 10