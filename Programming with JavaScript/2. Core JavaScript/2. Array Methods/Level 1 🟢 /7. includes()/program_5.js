// 2. E-Commerce Coupon Validation
let validCoupons = [
    "SAVE10",
    "WELCOME20",
    "FREESHIP",
    "MEGA50"
];

let enteredCoupon = "FREESHIP";

if (validCoupons.includes(enteredCoupon)) {
    console.log("Coupon Applied Successfully");
} else {
    console.log("Invalid Coupon Code");
}

// Coupon Applied Successfully