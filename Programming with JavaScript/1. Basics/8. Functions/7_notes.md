# JavaScript Functions

A **function** is a reusable block of code designed to perform a specific task.  
Functions help break complex programs into smaller, manageable units.

## Benefits of Functions

- Code reusability
- Better organization
- Easier debugging
- Improved maintainability

---

# 1. Function Declaration

A **function declaration** defines a named function using the `function` keyword.

```javascript
function greet() {
  console.log("Hello World");
}

greet();
```

### Output
```
Hello World
```

### Characteristics

- Hoisted
- Named function
- Can be called before declaration

### Example

```javascript
sayHi();

function sayHi() {
  console.log("Hi");
}
```

---

# 2. Function with Parameters

Functions can accept **parameters** to receive input values.

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(5, 3));
```

### Output
```
8
```

### Terminology

| Term | Meaning |
|-----|------|
| Parameter | Variable inside function definition |
| Argument | Actual value passed to function |

### Example

```javascript
function multiply(x, y) {
  return x * y;
}

console.log(multiply(4, 6));
```

### Output
```
24
```

---

# 3. Return Statement

The `return` keyword sends a result back to the caller.

```javascript
function square(n) {
  return n * n;
}

let result = square(5);

console.log(result);
```

### Output
```
25
```

### Important Points

- `return` stops function execution
- Multiple returns possible
- Without `return` → function returns `undefined`

### Example

```javascript
function check(num) {
  if (num > 0) return "Positive";
  return "Negative";
}

console.log(check(-2));
```

---

# 4. Function Expression

Functions can be stored inside variables.

```javascript
const greet = function() {
  console.log("Hello User");
};

greet();
```

### Output
```
Hello User
```

### Characteristics

- Not hoisted
- Anonymous or named
- Frequently used in callbacks

### Example

```javascript
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(3,4));
```

---

# 5. Arrow Functions

Arrow functions were introduced in **ES6**.

They provide a shorter syntax for writing functions.

```javascript
const add = (a, b) => a + b;

console.log(add(5,3));
```

### Output
```
8
```

### Block Body Example

```javascript
const square = (n) => {
  return n * n;
};
```

### Advantages

- Concise syntax
- Cleaner functional code
- Widely used in modern frameworks

### Limitations

- No own `this`
- Cannot be used as constructor
- No `arguments` object

---

# 6. Default Parameters

Default parameters allow functions to use fallback values.

```javascript
function greet(name = "Guest") {
  console.log("Hello", name);
}

greet();
greet("Shyam");
```

### Output
```
Hello Guest
Hello Shyam
```

### Example

```javascript
function power(base, exp = 2){
  return base ** exp;
}

console.log(power(3));
```

### Output
```
9
```

---

# 7. Rest Parameters

Rest parameters allow a function to accept **multiple arguments**.

```javascript
function sum(...numbers){

  let total = 0;

  for(let n of numbers){
    total += n;
  }

  return total;
}

console.log(sum(5,10,15));
```

### Output
```
30
```

### Example

```javascript
console.log(sum(1,2,3,4,5));
```

### Output
```
15
```

---

# 8. Callback Functions

A **callback function** is a function passed as an argument to another function.

```javascript
function process(num, callback){
  return callback(num);
}

console.log(process(5, x => x * x));
```

### Output
```
25
```

### Common Use Cases

- Event handling
- Array methods
- Asynchronous operations

### Example

```javascript
function calculate(a,b,operation){
  return operation(a,b);
}

console.log(calculate(4,5,(x,y)=>x+y));
```

### Output
```
9
```

---

# 9. Higher Order Functions

A **higher-order function** either:

- Takes a function as argument
- Returns a function

```javascript
function multiplier(factor){

  return function(num){
    return num * factor;
  }

}

const double = multiplier(2);

console.log(double(5));
```

### Output
```
10
```

---

# 10. Immediately Invoked Function (IIFE)

An IIFE runs immediately after it is defined.

```javascript
(function(){
  console.log("IIFE executed");
})();
```

### Output
```
IIFE executed
```

### Use Cases

- Avoid global scope pollution
- Initialization logic

---

# 11. Real World Example

Shopping cart calculation.

```javascript
function cartTotal(items){

  let total = 0;

  for(let price of items){
    total += price;
  }

  return total;
}

console.log(cartTotal([500,200,300]));
```

### Output
```
1000
```

### Discount Calculation Example

```javascript
function applyDiscount(total, discount){
  return total - (total * discount);
}

console.log(applyDiscount(1000,0.1));
```

### Output
```
900
```