function getComputerChoice(){
    let v = Math.floor(Math.random()*3);
    if (v===1){
        return "rock";
    }
    else if (v===2){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === "rock" && computerSelection === "paper"){
        return "You lost, Paper beats Rock"
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "You lost, Scissors beats Paper"
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "You lost, Rock beats Scissors"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You won, Rock beats Scissors"
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You won, Scissors beats Paper"
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You won, Paper beats Rock"
    }
    else if (playerSelection===computerSelection){
        return `It's a tie! You both chose ${playerSelection}`
    }
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Rock, paper, scissors, shoot!")
console.log(playRound(playerSelection, computerSelection))