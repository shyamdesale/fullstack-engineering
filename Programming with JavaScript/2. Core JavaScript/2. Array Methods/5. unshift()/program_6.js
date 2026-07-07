// 3. Browser History
let browserHistory = [
    "github.com",
    "stackoverflow.com",
    "developer.mozilla.org"
];

console.log("History Before:");
console.table(browserHistory);

browserHistory.unshift("chat.openai.com");

console.log("History After:");
console.table(browserHistory);

console.log("Current Page:", browserHistory[0]);


// Before:
// ┌─────────┬───────────────────────────────┐
// │ (index) │             Values            │
// ├─────────┼───────────────────────────────┤
// │    0    │         'github.com'          │
// │    1    │     'stackoverflow.com'       │
// │    2    │ 'developer.mozilla.org'       │
// └─────────┴───────────────────────────────┘

// After:
// ┌─────────┬───────────────────────────────┐
// │ (index) │             Values            │
// ├─────────┼───────────────────────────────┤
// │    0    │      'chat.openai.com'        │
// │    1    │         'github.com'          │
// │    2    │     'stackoverflow.com'       │
// │    3    │ 'developer.mozilla.org'       │
// └─────────┴───────────────────────────────┘

// Current Page: chat.openai.com