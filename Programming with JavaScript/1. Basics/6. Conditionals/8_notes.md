# JavaScript Conditionals

JavaScript conditionals are used to **control the flow of execution** in a program.  
They allow programs to make decisions and execute different blocks of code depending on conditions.

In real applications, conditionals are commonly used for:

- authentication systems
- validation logic
- feature control
- business rules
- error handling

Main conditional structures in JavaScript:

- if
- if...else
- nested if
- else if ladder
- switch
- ternary operator


## 1. if Statement

The `if` statement executes a block of code **only when the condition is true**.

### Syntax

```javascript
if (condition) {
  // code executes if condition is true
}


## 2. if...else Statement

The `if...else` statement is used when a program needs **two possible execution paths**.

- If the condition evaluates to **true**, the `if` block executes.
- If the condition evaluates to **false**, the `else` block executes.

This structure is commonly used in real applications for:

- login validation
- input validation
- permission checks
- decision making logic

### Syntax

```javascript
if (condition) {
  // code executes if condition is true
} else {
  // code executes if condition is false
}


## 3. Nested if

A **nested if** means placing an `if` statement **inside another `if` statement**.

It is used when **multiple conditions must be checked step by step** before executing a block of code.

Nested conditions are commonly used in real applications such as:

- login systems with role verification
- payment processing checks
- permission and access control
- multi-level validation logic

### Syntax

```javascript
if (condition1) {

  if (condition2) {
    // code executes if both conditions are true
  }
}


## 4. Else If Ladder

The **else if ladder** is used when a program needs to check **multiple conditions sequentially**.

JavaScript evaluates conditions **from top to bottom**.  
As soon as one condition becomes **true**, its block executes and the remaining conditions are skipped.

This structure is commonly used in real-world applications such as:

- grading systems
- salary classification
- temperature analysis
- application status handling

### Syntax

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


## 5. switch

The `switch` statement is used when a variable must be compared against **multiple possible values**.

It is often used as a **clean alternative to long `else if` ladders** when many conditions depend on the same variable.

Common real-world uses:

- menu selection systems
- role based access control
- day or month mapping
- command based programs

### Syntax

```javascript
switch (expression) {

  case value1:
    // code executes if expression === value1
    break;

  case value2:
    // code executes if expression === value2
    break;

  default:
    // executes if none of the cases match

}


## 6. ternary

The **ternary operator** is a **short and concise form of the `if...else` statement**.

It is used when a condition needs to return **one of two possible values**.

The ternary operator is commonly used in:

- conditional assignments
- simple validation logic
- UI rendering conditions
- inline decision making

### Syntax

```javascript
condition ? expression_if_true : expression_if_false