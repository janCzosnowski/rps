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

function playerSelection(){
    let choice = prompt("input rock, paper or scissors: ");
    
    choice = choice.toLowerCase();

    while(choice != "rock" && choice != "paper" && choice != "scissors"){
        choice = prompt("input a valid option: rock, paper or scissors");
    }

    return choice;
}

function round(player, computer){
    if(player === computer){
        return "It's a draw!";
    } else if(player == "rock"){
        if(computer == "paper"){
            return "You lost, paper beats rock."
        }else{
            return "You won, rock beats scissor!"
        }

    } else if(player == "paper"){
        if(computer == "scissors"){
            return "You lost, scissors beat paper."
        }else{
            return "You won, paper beats rock!"
        }
    } else if(player == "scissors"){
        if(computer == "rock"){
            return "You lost, paper beats scissors."
        }else{
            return "You won, scissors beat paper!"
        }

    }
}

console.log(round(playerSelection(), getComputerChoice()));