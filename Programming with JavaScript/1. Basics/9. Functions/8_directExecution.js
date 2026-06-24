// =====================================================
// 1. Basic Direct Execution
// =====================================================

function greet() {
    console.log("Welcome to JavaScript");
}

greet();


// =====================================================
// 2. Direct Execution With Parameters
// =====================================================

function introduce(name) {
    console.log(`Hello ${name}`);
}

introduce("Shyam");


// =====================================================
// 3. Direct Execution With Return Value
// =====================================================

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));


// =====================================================
// 4. Direct Execution Inside Variable Assignment
// =====================================================

function calculateArea(length, width) {
    return length * width;
}

const area = calculateArea(10, 5);

console.log(area);


// =====================================================
// 5. Direct Execution Inside Template Literals
// =====================================================

function getFullName(first, last) {
    return `${first} ${last}`;
}

console.log(
    `Student: ${getFullName("Shyam", "Desale")}`
);


// =====================================================
// 6. Direct Execution Returning Object
// =====================================================

function createStudent(name, marks) {
    return {
        name,
        marks,
        passed: marks >= 40
    };
}

console.log(
    createStudent("Shyam", 85)
);


// =====================================================
// 7. Direct Execution Returning Array
// =====================================================

function getSubjects() {
    return [
        "JavaScript",
        "HTML",
        "CSS"
    ];
}

console.log(
    getSubjects()
);


// =====================================================
// 8. Nested Direct Function Execution
// =====================================================

function multiply(a, b) {
    return a * b;
}

function square(num) {
    return multiply(num, num);
}

console.log(
    square(8)
);


// =====================================================
// 9. Direct Execution Chain
// =====================================================

function getPrice() {
    return 1000;
}

function addGST(price) {
    return price * 1.18;
}

console.log(
    addGST(
        getPrice()
    )
);


// =====================================================
// 10. Professional Report Generator
// =====================================================

function generateReport(name, marks) {

    return {
        student: name,
        marks: marks,
        grade:
            marks >= 90 ? "A+" :
            marks >= 75 ? "A" :
            marks >= 60 ? "B" :
            "Fail"
    };
}

const report =
    generateReport(
        "Shyam",
        88
    );

console.log(report);


// =====================================================
// 11. Order Total Calculation System
// =====================================================

function calculateSubtotal() {
    return 2500;
}

function calculateTax(subtotal) {
    return subtotal * 0.18;
}

function calculateFinalAmount() {
    const subtotal = calculateSubtotal();
    const tax = calculateTax(subtotal);

    return subtotal + tax;
}

console.log(
    "Final Amount:",
    calculateFinalAmount()
);


// =====================================================
// 12. Employee Performance Evaluation
// =====================================================

function getPerformanceScore() {
    return 87;
}

function getPerformanceGrade(score) {

    if(score >= 90) return "Outstanding";
    if(score >= 75) return "Excellent";
    if(score >= 60) return "Good";

    return "Needs Improvement";
}

console.log(
    getPerformanceGrade(
        getPerformanceScore()
    )
);


// =====================================================
// 13. User Profile Builder
// =====================================================

function getUserName() {
    return "Shyam";
}

function getSkills() {
    return [
        "JavaScript",
        "HTML",
        "CSS"
    ];
}

function buildProfile() {

    return {
        name: getUserName(),
        skills: getSkills(),
        level: "Frontend Learner"
    };
}

console.log(
    buildProfile()
);


// =====================================================
// 14. Banking Eligibility Checker
// =====================================================

function getMonthlyIncome() {
    return 50000;
}

function getCreditScore() {
    return 780;
}

function checkLoanEligibility() {

    const income = getMonthlyIncome();
    const score = getCreditScore();

    return (
        income >= 30000 &&
        score >= 700
    );
}

console.log(
    "Eligible:",
    checkLoanEligibility()
);


// =====================================================
// 15. Analytics Dashboard Data Generator
// =====================================================

function getUsers() {
    return 1200;
}

function getRevenue() {
    return 75000;
}

function getConversionRate() {
    return 4.2;
}

function generateDashboard() {

    return {
        users: getUsers(),
        revenue: getRevenue(),
        conversionRate:
            getConversionRate() + "%"
    };
}

console.log(
    generateDashboard()
);