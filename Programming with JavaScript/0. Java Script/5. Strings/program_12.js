//  12. Real-world Example

// Username validation
let username = "  shyam  ";

username = username.trim();

if(username.length < 3){
  console.log("Too short");
}

// Email check
let email = "test@gmail.com";

if(email.includes("@") && email.endsWith(".com")){
  console.log("valid");
}

// Word count
let text = "I love JavaScript";

let words = text.split(" ");
console.log(words.length);
