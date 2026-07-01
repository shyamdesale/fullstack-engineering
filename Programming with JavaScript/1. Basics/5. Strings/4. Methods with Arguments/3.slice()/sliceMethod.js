let a = "Hello, World!";
a = a.slice(1);
console.log(a);


let b = "Hello, World!";
b = b.slice(1, 5);
console.log(b);


let c = "Hello, World!";
c = c.slice(-5);
console.log(c);


let d = "Hello, World!";
d = d.slice(-5, -1);
console.log(d);


let num = 5;
let e = "Hello, World!";
e = e.slice(-num);
console.log(e);


let num1 = 2;
let num2 = 8;
let f = "Hello, World!";
f = f.slice(num1, num2);
console.log(f);


let g = "Hello, World!";
g = g.slice(7, g.length);
console.log(g);


// =====================================================
// 1. Extract First Name
// =====================================================

let fullName = prompt("Enter Your Name");

let firstPart = fullName.slice(0, 5);

alert(
`User Details

Name : ${fullName}

First Part : ${firstPart}`
);


// =====================================================
// 2. Extract Product Prefix
// =====================================================

let productCode = prompt("Enter Product Code");

let productPrefix = productCode.slice(0, 3);

alert(
`Product Details

Product Code : ${productCode}

Product Prefix : ${productPrefix}`
);


// =====================================================
// 3. Extract Country Short Name
// =====================================================

let country = prompt("Enter Country Name");

let shortName = country.slice(0, 3);

alert(
`Country Details

Country : ${country}

Short Name : ${shortName}`
);


// =====================================================
// 4. Extract Last 4 Digits of Mobile Number
// =====================================================

let mobileNumber = prompt("Enter Mobile Number");

let lastFourDigits = mobileNumber.slice(-4);

alert(
`Mobile Details

Mobile Number : ${mobileNumber}

Last 4 Digits : ${lastFourDigits}`
);


// =====================================================
// 5. Extract Domain Extension
// =====================================================

let website = prompt("Enter Website");

let extension = website.slice(-4);

alert(
`Website Details

Website : ${website}

Extension : ${extension}`
);


// =====================================================
// Credit Card Masking
// =====================================================

let cardNumber = prompt("Enter Card Number");

let lastFourDigitS = cardNumber.slice(-4);

alert(
`Card Details

Last 4 Digits : ${lastFourDigitS}`
);



// =====================================================
// File Extension
// =====================================================

let fileName = prompt("Enter File Name");

let extensioN = fileName.slice(-4);

alert(
`File Details

File Name : ${fileName}

Extension : ${extensioN}`
);



// =====================================================
// Order ID
// =====================================================

let orderId = prompt("Enter Order ID");

let shortId = orderId.slice(-6);

alert(
`Order Details

Order ID : ${orderId}

Short ID : ${shortId}`
);



// =====================================================
// Bio Preview
// =====================================================

let bio = prompt("Enter Your Bio");

let preview = bio.slice(0, 30);

alert(
`Bio Preview

${preview}`
);


// =====================================================
// Username Prefix
// =====================================================

let username = prompt("Enter Username");

let prefix = username.slice(0, 3);

alert(
`User Details

Username : ${username}

Prefix : ${prefix}`
);