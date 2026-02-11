// 6. Access Control Program

let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
  console.log("Admin panel access");
} else if (isLoggedIn) {
  console.log("User dashboard");
} else {
  console.log("Please login");
}
