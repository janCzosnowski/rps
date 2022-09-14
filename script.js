const div = document.createElement('div');
const container = document.querySelector('#container');
const results = document.createElement('div');

results.innerHTML = "You have chosen:<div id = 'pChoice'></div><p>Enemy has chosen:</p><div id = cChoice></div><p>current score is:</p><div id = 'score'></div>";
results.setAttribute('style', 'font-weight: 800; font-size: 2em; text-align: center; font-family: sans-serif');


let pscore = 0;
let cscore = 0;

div.classList.add('content');
div.setAttribute('style', 'text-align: center; font-family: sans-serif; font-size = 28px;');
div.innerHTML = "<button id='rock'>rock</button><button id='paper'>paper</button><button id='scissors'>scissors</button>";
div.appendChild(results);
container.appendChild(div);
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    console.log(round(button.id, getComputerChoice()));
  });
});












  
  
  
  
  
  
  
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

function round(player, computer){
    const pChoice = document.querySelector('#pChoice');
    const cChoice = document.querySelector('#cChoice');
    const score = document.querySelector('#score')
    pChoice.innerHTML = player;
    cChoice.innerHTML = computer;
    if(player === computer){
        pscore += 1;
        cscore += 1;
    } else if(player == "rock"){
        if(computer == "paper"){
            cscore += 1;
        }else{
            pscore += 1;
        }

    } else if(player == "paper"){
        if(computer == "scissors"){
            cscore += 1;
        }else{
            pscore += 1;
        }
    } else if(player == "scissors"){
        if(computer == "rock"){
            cscore += 1;
        }else{
            pscore += 1;
        }

    }
    score.innerHTML = 'Player: ' + pscore + " Enemy: " + cscore;
}