console.log("hello!");

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

console.log(getComputerChoice());