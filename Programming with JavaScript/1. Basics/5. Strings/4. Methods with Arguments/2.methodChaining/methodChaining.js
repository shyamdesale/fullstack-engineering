let a = "      HellO      WorlD!   ";
a = a.trim().toUpperCase();
console.log(a);


let b = "heLLo World        ";
console.log(b.trim().toLowerCase());

// 1. toUpperCase() Method & trim() Method - Method Chaining

// =====================================================
// Passport Number Formatter
// =====================================================

let passportNumber = prompt("Enter Passport Number");

passportNumber = passportNumber.trim().toUpperCase();

alert(
`Passport Details

Passport Number : ${passportNumber}`
);


// =====================================================
// Employee ID Formatter
// =====================================================

let employeeId = prompt("Enter Employee ID");

employeeId = employeeId.trim().toUpperCase();

alert(
`Employee Details

Employee ID : ${employeeId}`
);


// =====================================================
// Airport Code Formatter
// =====================================================

let airportCode = prompt("Enter Airport Code");

airportCode = airportCode.trim().toUpperCase();

alert(
`Airport Information

Airport Code : ${airportCode}`
);


// =====================================================
// Blood Group Formatter
// =====================================================

let bloodGroup = prompt("Enter Blood Group");

bloodGroup = bloodGroup.trim().toUpperCase();

alert(
`Medical Record

Blood Group : ${bloodGroup}`
);


// =====================================================
// University Roll Number Formatter
// =====================================================

let rollNumber = prompt("Enter Roll Number");

rollNumber = rollNumber.trim().toUpperCase();

alert(
`Student Details

Roll Number : ${rollNumber}`
);




// 2. toLowerCase() Method & trim() Method - Method Chaining

// =====================================================
// Airport Code Formatter
// =====================================================

let airportCode = prompt("Enter Airport Code");

airportCode = airportCode.trim().toLowerCase();

alert(
`Airport Information

Airport Code : ${airportCode}`
);


// =====================================================
// Blood Group Formatter
// =====================================================

let bloodGroup = prompt("Enter Blood Group");

bloodGroup = bloodGroup.trim().toLowerCase();

alert(
`Medical Record

Blood Group : ${bloodGroup}`
);


// =====================================================
// University Roll Number Formatter
// =====================================================

let rollNumber = prompt("Enter Roll Number");

rollNumber = rollNumber.trim().toLowerCase();

alert(
`Student Details

Roll Number : ${rollNumber}`
);