// 3. Quiz Application

let questions = [];

questions.push({
    id: 1,
    question: "What is JavaScript?",
    options: [
        "Programming Language",
        "Database",
        "Operating System",
        "Browser"
    ],
    answer: "Programming Language"
});

questions.push({
    id: 2,
    question: "Which method adds an element at the end of an array?",
    options: [
        "pop()",
        "shift()",
        "push()",
        "splice()"
    ],
    answer: "push()"
});

console.log(questions);
console.log("Total Questions:", questions.length);

// Output:
// [
//   {
//     id: 1,
//     question: 'What is JavaScript?',
//     options: [ 'Programming Language', 'Database', 'Operating System', 'Browser' ],
//     answer: 'Programming Language'
//   },
//   {
//     id: 2,
//     question: 'Which method adds an element at the end of an array?',
//     options: [ 'pop()', 'shift()', 'push()', 'splice()' ],
//     answer: 'push()'
//   }
// ]
// Total Questions: 2