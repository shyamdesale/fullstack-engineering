let secret = 7;

for(let i=1;i<=3;i++){

    let guess = Number(
        prompt("Guess Number")
    );

    if(guess === secret){
        alert("You Won");
        break;
    }

    if(i===3){
        alert("Game Over");
    }
}