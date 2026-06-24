let balance = 10000;

while(true){

    let choice = prompt(
`1 Balance
2 Deposit
3 Exit`
);

    if(choice == 1){
        alert(balance);
    }

    else if(choice == 2){

        let amount =
        Number(prompt("Amount"));

        balance += amount;

        alert(balance);
    }

    else if(choice == 3){
        alert("Thank You");
        break;
    }
}