let a = "Hello, World!";
a = a.replace("World", "JavaScript");
console.log(a);

let b = "Hello, World!";
b = b.replace(/o/g, "0");
console.log(b);

let c = "Hello, World! ";
c = c.repeat(3);
console.log(c);


// 1. Replace First Name
let fullName = prompt("Enter Your Name");

let updatedName = fullName.replace("Shyam", "Rahul");

alert(
`User Details

Old Name : ${fullName}

New Name : ${updatedName}`
);


// 2. Replace Country Name
let country = prompt("Enter Country Name");

let updatedCountry = country.replace("India", "Japan");

alert(
`Country Details

Old Country : ${country}

New Country : ${updatedCountry}`
);


// 3. Replace Product Brand
let product = prompt("Enter Product Name");

let updatedProduct = product.replace("Samsung", "Apple");

alert(
`Product Details

Old Product : ${product}

New Product : ${updatedProduct}`
);


// 4. Replace Email Domain
let email = prompt("Enter Email");

let updatedEmail = email.replace("gmail.com", "outlook.com");

alert(
`Email Details

Old Email : ${email}

New Email : ${updatedEmail}`
);


// 5. Replace Website Protocol
let website = prompt("Enter Website URL");

let secureWebsite = website.replace("http://", "https://");

alert(
`Website Details

Old URL : ${website}

Secure URL : ${secureWebsite}`
);


// 6. Replace Currency Symbol
let price = prompt("Enter Price");
let updatedPrice = price.replace("$", "₹");

alert(
`Price Details

Old Price : ${price}

New Price : ${updatedPrice}`
);


// 7. Replace File Extension
let fileName = prompt("Enter File Name");
let pdfFile = fileName.replace(".docx", ".pdf");

alert(
`File Details

Original File : ${fileName}

Converted File : ${pdfFile}`
);


// 8. Replace Version Number
let version = prompt("Enter Version");

let latestVersion = version.replace("1.0", "2.0");

alert(
`Software Details

Old Version : ${version}

Latest Version : ${latestVersion}`
);


// 9. Replace City Name
let address = prompt("Enter Address");

let updatedAddress = address.replace("Nagpur", "Pune");

alert(
`Address Details

Old Address : ${address}

New Address : ${updatedAddress}`
);


// 10. Replace Status
let orderStatus = prompt("Enter Order Status");

let updatedStatus = orderStatus.replace("Pending", "Delivered");

alert(
`Order Details

Old Status : ${orderStatus}

New Status : ${updatedStatus}`
);


// 11. Phone Number Formatter
let phoneNumber = prompt("Enter Phone Number");

let formattedNumber = phoneNumber.replace("+91 ", "");

alert(
`Phone Details

Original Number : ${phoneNumber}

Formatted Number : ${formattedNumber}`
);


// 12. File Path Formatter
let filePath = prompt("Enter File Path");

let webPath = filePath.replace("\\", "/");

alert(
`File Path

Original : ${filePath}

Formatted : ${webPath}`
);


// 13. Username Formatter
let username = prompt("Enter Username");

let formattedUsername = username.replace(" ", "_");

alert(
`User Details

Original Username : ${username}

Formatted Username : ${formattedUsername}`
);