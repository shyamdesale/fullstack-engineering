// 3. Notification System
let notifications = [
    {
        id: 1,
        message: "Welcome to our website!"
    },
    {
        id: 2,
        message: "Your order has been shipped."
    },
    {
        id: 3,
        message: "Payment Successful."
    }
];

console.log("All Notifications:");
console.table(notifications);

let shownNotification = notifications.shift();

console.log("Displayed Notification:");
console.log(shownNotification);

console.log("Remaining Notifications:");
console.table(notifications);

// Output:
// All Notifications:
// ┌─────────┬────┬───────────────────────────────┐
// │ (index) │ id │           message             │
// ├─────────┼────┼───────────────────────────────┤
// │    0    │ 1  │ 'Welcome to our website!'     │
// │    1    │ 2  │ 'Your order has been shipped.'│
// │    2    │ 3  │ 'Payment Successful.'         │
// └─────────┴────┴───────────────────────────────┘
// Displayed Notification:
// { id: 1, message: 'Welcome to our website!' }
// Remaining Notifications:
// ┌─────────┬────┬───────────────────────────────┐
// │ (index) │ id │           message             │
// ├─────────┼────┼───────────────────────────────┤
// │    0    │ 2  │ 'Your order has been shipped.'│
// │    1    │ 3  │ 'Payment Successful.'         │
// └─────────┴────┴───────────────────────────────┘   