# JavaScript Conditionals

Conditionals in JavaScript are used to **control the flow of execution** in a program.
They allow programs to make decisions and execute different blocks of code depending on specific conditions.

In real-world applications, conditionals are widely used in:

* Authentication systems
* Input validation
* Feature control
* Business rules
* Error handling

---

# Conditional Structures in JavaScript

JavaScript provides several conditional constructs:

* `if`
* `if...else`
* `nested if`
* `else if ladder`
* `switch`
* `ternary operator`

---

# 1. if Statement

The **`if` statement** executes a block of code **only when the condition evaluates to `true`**.

## Syntax

```javascript
if (condition) {
  // code executes if condition is true
}
```

## Example

```javascript
let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
}
```

Output

```
You are eligible to vote.
```

---

# 2. if...else Statement

The **`if...else` statement** is used when a program needs **two possible execution paths**.

* If the condition is **true**, the `if` block executes.
* If the condition is **false**, the `else` block executes.

This structure is commonly used in:

* Login validation
* Input validation
* Permission checks
* Decision-making logic

## Syntax

```javascript
if (condition) {
  // executes when condition is true
} else {
  // executes when condition is false
}
```

## Example

```javascript
let marks = 40;

if (marks >= 35) {
  console.log("Student Passed");
} else {
  console.log("Student Failed");
}
```

Output

```
Student Passed
```

---

# 3. Nested if

A **nested `if` statement** means placing an `if` statement **inside another `if` statement**.

This approach is useful when **multiple conditions must be verified sequentially**.

Common real-world use cases:

* Authentication with role verification
* Payment authorization checks
* Permission systems
* Multi-level validation

## Syntax

```javascript
if (condition1) {

  if (condition2) {
    // executes if both conditions are true
  }

}
```

## Example

```javascript
let isLoggedIn = true;
let isAdmin = true;

if (isLoggedIn) {
  if (isAdmin) {
    console.log("Access granted to admin dashboard");
  }
}
```

Output

```
Access granted to admin dashboard
```

---

# 4. Else If Ladder

The **else if ladder** is used when a program needs to evaluate **multiple conditions sequentially**.

JavaScript checks conditions **from top to bottom**.
As soon as a condition becomes **true**, its corresponding block executes and the remaining conditions are skipped.

Real-world use cases:

* Grading systems
* Salary classification
* Temperature analysis
* Application status management

## Syntax

```javascript
if (condition1) {
  // code
}
else if (condition2) {
  // code
}
else if (condition3) {
  // code
}
else {
  // default code
}
```

## Example

```javascript
let marks = 85;

if (marks >= 90) {
  console.log("Grade A");
}
else if (marks >= 75) {
  console.log("Grade B");
}
else if (marks >= 60) {
  console.log("Grade C");
}
else {
  console.log("Grade D");
}
```

Output

```
Grade B
```

---

# 5. switch Statement

The **`switch` statement** is used when a variable needs to be compared against **multiple possible values**.

It is often used as a **clean alternative to long `else if` ladders** when many conditions depend on the same variable.

Common use cases include:

* Menu selection systems
* Role-based access control
* Day or month mapping
* Command-based programs

## Syntax

```javascript
switch (expression) {

  case value1:
    // code executes if expression === value1
    break;

  case value2:
    // code executes if expression === value2
    break;

  default:
    // executes if no case matches
}
```

## Example

```javascript
let day = 3;

switch (day) {

  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid day");
}
```

Output

```
Wednesday
```

---

# 6. Ternary Operator

The **ternary operator** is a **concise alternative to the `if...else` statement**.

It is typically used when a condition must return **one of two values**.

Common usage scenarios:

* Conditional assignments
* UI rendering logic
* Inline decision making
* Simple validations

## Syntax

```javascript
condition ? expression_if_true : expression_if_false;
```

## Example

```javascript
let age = 20;

let result = age >= 18
  ? "Eligible to vote"
  : "Not eligible to vote";

console.log(result);
```

Output

```
Eligible to vote
```

---

# Summary

| Conditional Type | Purpose                                        |
| ---------------- | ---------------------------------------------- |
| `if`             | Executes code when condition is true           |
| `if...else`      | Provides two execution paths                   |
| `nested if`      | Handles multi-level conditions                 |
| `else if ladder` | Evaluates multiple conditions                  |
| `switch`         | Cleaner alternative for many value comparisons |
| `ternary`        | Short form of if...else                        |