let a = "Hello World";
console.log(a.indexOf("World"));

// =====================================================
// 1. Find Place of First Letter
// =====================================================

let fullName = prompt("Enter Your Name");

let place = fullName.indexOf("a");

alert(
`User Details

Name : ${fullName}

Place of 'a' : ${place}`
);


// =====================================================
// 2. Find @ Symbol in Email
// =====================================================

let email = prompt("Enter Your Email");

let position = email.indexOf("@");

alert(
`Email Details

Email : ${email}

@ Found At : ${position}`
);


// =====================================================
// 3. Find Space in Full Name
// =====================================================

let enterName = prompt("Enter Full Name");

let namePosition = enterName.indexOf(" ");

alert(
`User Details

Full Name : ${enterName}

Space Found At : ${namePosition}`
);


// =====================================================
// 4. Find Hyphen in Product Code
// =====================================================

let productCode = prompt("Enter Product Code");

let productCodePosition = productCode.indexOf("-");

alert(
`Product Details

Product Code : ${productCode}

Hyphen Found At : ${productCodePosition}`
);


// =====================================================
// 5. Find Dot in Website Name
// =====================================================

let website = prompt("Enter Website");

let websitePosition = website.indexOf(".");

alert(
`Website Details

Website : ${website}

Dot Found At : ${websitePosition}`
);