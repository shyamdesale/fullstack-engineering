let passenger = prompt("Passenger Name");

let age = Number(prompt("Age"));

let fare = 500;

if(age < 12){
    fare *= 0.5;
}
else if(age >= 60){
    fare *= 0.7;
}

alert(
`Ticket Confirmed

Passenger : ${passenger}

Fare : ₹${fare}`
);