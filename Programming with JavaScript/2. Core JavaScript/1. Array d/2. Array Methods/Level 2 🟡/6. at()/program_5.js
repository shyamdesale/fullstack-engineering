let messages = [
    {
        sender: "Rahul",
        text: "Hello"
    },
    {
        sender: "Amit",
        text: "How are you?"
    },
    {
        sender: "Shyam",
        text: "Let's start JavaScript."
    }
];

console.log("Chat History:");
console.table(messages);

let lastMessage = messages.at(-1);

console.log("Last Message:");
console.log(lastMessage);

// Chat History:
// ┌─────────┬────────┬───────────────────────────────┐
// │ (index) │ sender │             text              │
// ├─────────┼────────┼───────────────────────────────┤
// │    0    │ 'Rahul'│           'Hello'             │
// │    1    │ 'Amit' │       'How are you?'          │
// │    2    │ 'Shyam'│ "Let's start JavaScript."     │
// └─────────┴────────┴───────────────────────────────┘

// Last Message:
// { sender: 'Shyam', text: "Let's start JavaScript." }