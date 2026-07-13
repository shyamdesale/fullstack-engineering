// 3. Social Media Feed
let yesterdayPosts = [
    {
        id: 1,
        content: "Learning JavaScript"
    },
    {
        id: 2,
        content: "Completed React Project"
    }
];

let todayPosts = [
    {
        id: 3,
        content: "Started Node.js"
    },
    {
        id: 4,
        content: "Learning MongoDB"
    }
];

let newsFeed = todayPosts.concat(yesterdayPosts);

console.table(newsFeed);

console.log("Total Posts:", newsFeed.length);

// Output:
// ┌─────────┬─────┬───────────────────────┐
// │ (index) │ id  │        content        │
// ├─────────┼─────┼───────────────────────┤
// │    0    │  3  │   'Started Node.js'   │
// │    1    │  4  │ 'Learning MongoDB'    │
// │    2    │  1  │ 'Learning JavaScript' │
// │    3    │  2  │'Completed React Project'│
// └─────────┴─────┴───────────────────────┘
// Total Posts: 4  