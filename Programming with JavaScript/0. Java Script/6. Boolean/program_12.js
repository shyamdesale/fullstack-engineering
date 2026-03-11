// 12. Realistic Program: Online Course Access

let isLoggedIn = true;
let hasPaid = true;

function canAccessCourse(login, payment){
  return login && payment;
}

if (canAccessCourse(isLoggedIn, hasPaid)){
  console.log("Access granted");
} else {
  console.log("Access denied");
}
