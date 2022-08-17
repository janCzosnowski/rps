function getComputerChoice(){
    let number = Math.floor(Math.random() * 3) + 1;
    let choice;
    if(number == 1){
        choice = "rock";
    } else if(number == 2){
        choice = "scissors";
    } else{
        choice = "paper";
    }

    return choice;
}
console.log(getComputerChoice());