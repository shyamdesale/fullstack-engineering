/*
========================================
JavaScript Strings Examples
========================================
*/


// Example 1: Basic string
let name = "Shyam";
console.log(name);

// Output
// Shyam



// Example 2: String length
let text = "JavaScript";
console.log(text.length);

// Output
// 10



// Example 3: Access character
let language = "JavaScript";

console.log(language[0]);
console.log(language[4]);

/*
Output
J
S
*/



// Example 4: Uppercase
let city = "mumbai";

console.log(city.toUpperCase());

// Output
// MUMBAI



// Example 5: Lowercase
let country = "INDIA";

console.log(country.toLowerCase());

// Output
// india



// Example 6: Concatenation
let first = "Hello";
let second = "World";

let result = first + " " + second;

console.log(result);

// Output
// Hello World



// Example 7: Template Literal
let user = "Rahul";
let age = 21;

console.log(`My name is ${user} and I am ${age} years old`);

// Output
// My name is Rahul and I am 21 years old



// Example 8: trim()
let message = "   JavaScript   ";

console.log(message.trim());

// Output
// JavaScript



// Example 9: includes()
let sentence = "JavaScript is powerful";

console.log(sentence.includes("powerful"));

// Output
// true



// Example 10: startsWith()
let str = "JavaScript";

console.log(str.startsWith("Java"));

// Output
// true



// Example 11: endsWith()
console.log(str.endsWith("Script"));

// Output
// true



// Example 12: indexOf()
let word = "programming";

console.log(word.indexOf("g"));

// Output
// 3



// Example 13: lastIndexOf()
console.log(word.lastIndexOf("g"));

// Output
// 10



// Example 14: slice()
let text1 = "JavaScript";

console.log(text1.slice(0,4));

// Output
// Java



// Example 15: substring()
let text2 = "Programming";

console.log(text2.substring(3,7));

// Output
// gram



// Example 16: replace()
let statement = "I love Java";

let newStatement = statement.replace("Java","JavaScript");

console.log(newStatement);

// Output
// I love JavaScript



// Example 17: replaceAll()
let data = "JS is good. JS is powerful.";

console.log(data.replaceAll("JS","JavaScript"));

// Output
// JavaScript is good. JavaScript is powerful.



// Example 18: split()
let fruits = "apple,banana,mango";

let arr = fruits.split(",");

console.log(arr);

// Output
// ['apple','banana','mango']



// Example 19: repeat()
let star = "*";

console.log(star.repeat(5));

// Output
// *****



// Example 20: charAt()
let language2 = "Python";

console.log(language2.charAt(2));

// Output
// t



// Example 21: charCodeAt()
console.log(language2.charCodeAt(0));

// Output
// 80



// Example 22: concat()
let s1 = "Hello";
let s2 = "World";

console.log(s1.concat(" ",s2));

// Output
// Hello World



// Example 23: padStart()
let num = "5";

console.log(num.padStart(3,"0"));

// Output
// 005



// Example 24: padEnd()
let num2 = "5";

console.log(num2.padEnd(3,"0"));

// Output
// 500



// Example 25: String conversion
let value = 100;

let strValue = String(value);

console.log(strValue);
console.log(typeof strValue);

/*
Output
100
string
*/



// Example 26: Multi-line string
let paragraph = `
JavaScript
is
awesome
`;

console.log(paragraph);