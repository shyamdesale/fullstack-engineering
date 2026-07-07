// 3. Browser Back History (Stack)
let browserHistory = [
    "google.com",
    "github.com",
    "stackoverflow.com",
    "chat.openai.com"
];

console.log("Current History:", browserHistory);

let previousPage = browserHistory.pop();

console.log("Closed Page:", previousPage);
console.log("Current Page:", browserHistory[browserHistory.length - 1]);
console.log("History:", browserHistory);


// Current History:
// [
//   'google.com',
//   'github.com',
//   'stackoverflow.com',
//   'chat.openai.com'
// ]

// Closed Page: chat.openai.com
// Current Page: stackoverflow.com

// History:
// [
//   'google.com',
//   'github.com',
//   'stackoverflow.com'
// ]