let widgets = [
    "Sales Report",
    "Revenue",
    "Orders",
    "Customers",
    "Analytics",
    "Notifications",
    "Settings"
];

let dashboardWidgets = widgets.slice(0, 4);

console.log("Dashboard Widgets:");
console.table(dashboardWidgets);

console.log("Remaining Widgets:");
console.table(widgets.slice(4));

// Dashboard Widgets:
// ┌─────────┬───────────────┐
// │ (index) │    Values     │
// ├─────────┼───────────────┤
// │    0    │ 'Sales Report'│
// │    1    │   'Revenue'   │
// │    2    │    'Orders'   │
// │    3    │  'Customers'  │
// └─────────┴───────────────┘

// Remaining Widgets:
// ┌─────────┬───────────────┐
// │ (index) │    Values     │
// ├─────────┼───────────────┤
// │    0    │  'Analytics'  │
// │    1    │'Notifications'│
// │    2    │   'Settings'  │
// └─────────┴───────────────┘