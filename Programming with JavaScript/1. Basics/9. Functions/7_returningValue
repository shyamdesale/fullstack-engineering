// =====================================================
// 1. Return Sum
// =====================================================

function add(a, b) {
    return a + b;
}

console.log("Addition:", add(10, 20));


// =====================================================
// 2. Return Difference
// =====================================================

function subtract(a, b) {
    return a - b;
}

console.log("Subtraction:", subtract(50, 20));


// =====================================================
// 3. Return Multiplication
// =====================================================

function multiply(a, b) {
    return a * b;
}

console.log("Multiplication:", multiply(5, 6));


// =====================================================
// 4. Return Division
// =====================================================

function divide(a, b) {
    return a / b;
}

console.log("Division:", divide(20, 5));


// =====================================================
// 5. Return Full Name
// =====================================================

function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(
    "Full Name:",
    getFullName("Shyam", "Desale")
);


// =====================================================
// 6. Return Even or Odd
// =====================================================

function isEven(number) {
    return number % 2 === 0;
}

console.log("Is Even:", isEven(8));
console.log("Is Even:", isEven(7));


// =====================================================
// 7. Return Grade
// =====================================================

function getGrade(marks) {

    if (marks >= 90) {
        return "A+";
    }

    if (marks >= 75) {
        return "A";
    }

    if (marks >= 60) {
        return "B";
    }

    return "Fail";
}

console.log("Grade:", getGrade(82));


// =====================================================
// 8. Return Largest Number
// =====================================================

function findLargest(a, b, c) {

    if (a >= b && a >= c) {
        return a;
    }

    if (b >= a && b >= c) {
        return b;
    }

    return c;
}

console.log(
    "Largest:",
    findLargest(10, 50, 30)
);


// =====================================================
// 9. Return Student Result Object
// =====================================================

function createStudent(name, marks) {

    return {
        studentName: name,
        studentMarks: marks,
        passed: marks >= 40
    };
}

console.log(
    createStudent("Shyam", 85)
);


// =====================================================
// 10. Professional Salary Calculator
// =====================================================

function calculateSalary(basicSalary) {

    const hra = basicSalary * 0.20;
    const da = basicSalary * 0.10;
    const bonus = basicSalary * 0.05;

    return basicSalary + hra + da + bonus;
}

console.log(
    "Total Salary:",
    calculateSalary(50000)
);



// =====================================================
// 11. Return Factorial
// =====================================================

function factorial(number) {

    let result = 1;

    for(let i = 1; i <= number; i++) {
        result *= i;
    }

    return result;
}

console.log("Factorial:", factorial(5));


// =====================================================
// 12. Return Prime Number Status
// =====================================================

function isPrime(number) {

    if(number < 2) {
        return false;
    }

    for(let i = 2; i < number; i++) {

        if(number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log("Prime:", isPrime(17));


// =====================================================
// 13. Return Highest Marks Student
// =====================================================

function getTopStudent(students) {

    let topStudent = students[0];

    for(let i = 1; i < students.length; i++) {

        if(students[i].marks > topStudent.marks) {
            topStudent = students[i];
        }
    }

    return topStudent;
}

const students = [
    { name: "Shyam", marks: 85 },
    { name: "Rahul", marks: 92 },
    { name: "Amit", marks: 78 }
];

console.log(getTopStudent(students));


// =====================================================
// 14. Return Complete Report Card Object
// =====================================================

function generateReportCard(name, marks) {

    let total = 0;

    for(let mark of marks) {
        total += mark;
    }

    const percentage = total / marks.length;

    return {
        studentName: name,
        totalMarks: total,
        percentage: percentage,
        grade:
            percentage >= 90 ? "A+" :
            percentage >= 75 ? "A" :
            percentage >= 60 ? "B" :
            "Fail"
    };
}

console.log(
    generateReportCard(
        "Shyam",
        [88, 91, 85, 79, 92]
    )
);


// =====================================================
// 15. Return Bank Account Summary
// =====================================================

function createBankSummary(
    accountHolder,
    balance,
    deposits,
    withdrawals
) {

    return {
        accountHolder,

        currentBalance: balance,

        totalDeposits:
            deposits.reduce(
                (sum, amount) => sum + amount,
                0
            ),

        totalWithdrawals:
            withdrawals.reduce(
                (sum, amount) => sum + amount,
                0
            ),

        accountStatus:
            balance > 0
            ? "Active"
            : "Inactive"
    };
}

console.log(
    createBankSummary(
        "Shyam",
        25000,
        [1000, 2000, 3000],
        [500, 800]
    )
);