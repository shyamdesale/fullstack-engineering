const productPrice = Number(prompt("Enter Product Price"));
const discountPercentage = Number(prompt("Enter Discount (%)"));

if (Number.isNaN(productPrice) || Number.isNaN(discountPercentage)) {
    alert("Invalid Input");
}
else {

    const discountAmount = (productPrice * discountPercentage) / 100;
    const finalPrice = productPrice - discountAmount;

    alert(
`Bill Summary

Original Price : ₹${productPrice}

Discount : ₹${discountAmount}

Final Price : ₹${finalPrice}`
    );

}