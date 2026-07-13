// 1. Undo Feature (Text Editor)
let actions = [
    "Typed Hello",
    "Typed World",
    "Deleted Word",
    "Changed Font"
];

console.log("Action History:", actions);

let lastAction = actions.pop();

console.log("Undo Action:", lastAction);
console.log("Current History:", actions);


// Action History: [ 'Typed Hello', 'Typed World', 'Deleted Word', 'Changed Font' ]
// Undo Action: Changed Font
// Current History: [ 'Typed Hello', 'Typed World', 'Deleted Word' ]