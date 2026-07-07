// 1. User Role Verification
let userRoles = [
    "Admin",
    "Editor",
    "Moderator",
    "User"
];

let currentUserRole = "Admin";

if (userRoles.includes(currentUserRole)) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

// Access Granted