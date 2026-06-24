// =====================================================
// 1. setTimeout
// =====================================================

function showReminder() {
    console.log("Reminder Triggered");
}

setTimeout(showReminder, 3000);


// =====================================================
// 2. setInterval
// =====================================================

let count = 0;

const intervalId = setInterval(() => {

    count++;

    console.log("Tracking...", count);

    if(count === 5) {
        clearInterval(intervalId);
    }

}, 1000);


// =====================================================
// 3. Callback
// =====================================================

function processData(callback) {

    console.log("Processing Data");

    callback();
}

function finishProcess() {
    console.log("Completed");
}

processData(finishProcess);


// =====================================================
// 4. Higher Order Function
// =====================================================

function executeTask(task) {
    task();
}

function sendEmail() {
    console.log("Email Sent");
}

executeTask(sendEmail);


// =====================================================
// 5. forEach
// =====================================================

const skills = [
    "HTML",
    "CSS",
    "JavaScript"
];

skills.forEach(function(skill) {
    console.log(skill);
});


// =====================================================
// 6. map
// =====================================================

const marks = [80, 90, 70];

const updatedMarks =
    marks.map(mark => mark + 5);

console.log(updatedMarks);


// =====================================================
// 7. filter
// =====================================================

const evenNumbers =
    [10,15,20,25,30]
    .filter(num => num % 2 === 0);

console.log(evenNumbers);


// =====================================================
// 8. reduce
// =====================================================

const total =
    [100,200,300]
    .reduce((sum,val) => sum + val, 0);

console.log(total);


// =====================================================
// 9. Login Flow
// =====================================================

function authenticate(callback) {

    const isValid = true;

    if(isValid) {
        callback();
    }
}

authenticate(() => {
    console.log("Login Successful");
});


// =====================================================
// 10. Dashboard Loader
// =====================================================

function loadDashboard(callback) {

    console.log("Loading Dashboard");

    callback();
}

loadDashboard(() => {
    console.log("Dashboard Ready");
});