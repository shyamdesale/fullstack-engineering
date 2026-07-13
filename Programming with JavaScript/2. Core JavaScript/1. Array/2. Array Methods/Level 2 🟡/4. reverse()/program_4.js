let chatMessages = [
    {
        id: 1,
        message: "Hello"
    },
    {
        id: 2,
        message: "How are you?"
    },
    {
        id: 3,
        message: "I'm fine."
    },
    {
        id: 4,
        message: "Let's start coding!"
    }
];

console.log("Oldest to Latest:");
console.table(chatMessages);

chatMessages.reverse();

console.log("Latest to Oldest:");
console.table(chatMessages);

// Oldest to Latest:
// ┌─────────┬───────┬──────────────────────┐
// │ (index) │  id   │       message        │
// ├─────────┼───────┼──────────────────────┤
// │    0    │   1   │       'Hello'        │
// │    1    │   2   │   'How are you?'     │
// │    2    │   3   │      "I'm fine."     │
// │    3    │   4   │ "Let's start coding!"│
// └─────────┴───────┴──────────────────────┘

// Latest to Oldest:
// ┌─────────┬───────┬──────────────────────┐
// │ (index) │  id   │       message        │
// ├─────────┼───────┼──────────────────────┤
// │    0    │   4   │ "Let's start coding!"│
// │    1    │   3   │      "I'm fine."     │
// │    2    │   2   │   'How are you?'     │
// │    3    │   1   │       'Hello'        │
// └─────────┴───────┴──────────────────────┘