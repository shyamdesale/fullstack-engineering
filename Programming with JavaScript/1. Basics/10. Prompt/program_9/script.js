const firstNumber = Number(prompt("First Number"));
const secondNumber = Number(prompt("Second Number"));

if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {

    alert("Invalid Input");

}
else if (firstNumber > secondNumber) {

    alert(`${firstNumber} is Greater`);

}
else if (secondNumber > firstNumber) {

    alert(`${secondNumber} is Greater`);

}
else {

    alert("Both Numbers Are Equal");

}