const units = Number(prompt("Enter Units Consumed"));

if (Number.isNaN(units)) {

    alert("Invalid Input");

}
else {

    const billAmount = units * 8;

    alert(
`Electricity Bill

Units : ${units}

Rate : ₹8 / Unit

Total Bill : ₹${billAmount}`
    );

}