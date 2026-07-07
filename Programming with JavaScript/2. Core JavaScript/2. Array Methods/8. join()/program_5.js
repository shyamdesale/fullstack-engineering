// 2. Build Website URL (Breadcrumb)
let path = [
    "home",
    "products",
    "laptops",
    "gaming"
];

let url = path.join("/");

console.log("Generated URL:");
console.log("https://example.com/" + url);

// Generated URL:
// https://example.com/home/products/laptops/gaming