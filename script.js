//console.log("hello!");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let numberPick = Math.floor(Math.random() * 3);
    let handPick;
    if (numberPick == 0) {
        handPick = "rock";
    }  else if (numberPick == 1) {
        handPick = "paper";
    } else {
        handPick = "scissors";
    }
    return handPick;
}

function getHumanChoice(){
    humanPick = window.prompt("Rock, Paper or Scissors?");
}

function playRound(humanChoice, computerChoice){
    if (humanChoice.toLowerCase() == computerChoice) {
        console.log("It's a tie!")
    } else if (humanChoice.toLowerCase() == "rock" && computerChoice == "paper") {
        console.log("You lose! Rock defeated by Paper");
    } else if (humanChoice.toLowerCase() == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors");
    } else if (humanChoice.toLowerCase() == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock");
    } else if (humanChoice.toLowerCase() == "paper" && computerChoice == "scissors") {
        console.log("You lose! Paper defeated by Scissors");
    } else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "rock") {
        console.log("You lose! Scissors defeated by Rock");
    } else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "paper") {
        console.log("You win!Scissors beat Paper");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// console.log(getComputerChoice());
// getHumanChoice();
// console.log(humanPick);