// 2. News Feed (Breaking News)
let newsFeed = [
    {
        id: 2,
        title: "India Wins Cricket Match"
    },
    {
        id: 3,
        title: "Weather Update"
    }
];

console.table(newsFeed);

let breakingNews = {
    id: 1,
    title: "Breaking: Earthquake Reported"
};

newsFeed.unshift(breakingNews);

console.log("Latest News Feed:");
console.table(newsFeed);


// Output:
// ┌─────────┬────┬───────────────────────────────┐
// │ (index) │ id │            title              │
// ├─────────┼────┼───────────────────────────────┤
// │    0    │ 1  │'Breaking: Earthquake Reported'│
// │    1    │ 2  │  'India Wins Cricket Match'   │
// │    2    │ 3  │       'Weather Update'        │
// └─────────┴────┴───────────────────────────────┘