let balance = 5000;

let choice = prompt(
`ATM MENU

1. Check Balance
2. Deposit
3. Withdraw`
);

if(choice == 1){
    alert("Balance: ₹" + balance);
}
else if(choice == 2){
    let amount = Number(prompt("Enter Deposit Amount"));
    balance += amount;
    alert("Updated Balance: ₹" + balance);
}
else if(choice == 3){
    let amount = Number(prompt("Enter Withdraw Amount"));

    if(amount <= balance){
        balance -= amount;
        alert("Remaining Balance: ₹" + balance);
    }
    else{
        alert("Insufficient Balance");
    }
}