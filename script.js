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
        return "You lost"
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "You lost"
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "You lost"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You won"
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You won"
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You won"
    }
    else if (playerSelection===computerSelection){
        return "It's a tie!"
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i=0;i<5;i++){
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Rock, paper, scissors, shoot!");
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result === "You lost"){
            computerScore++;
        }
        else if (result === "You won"){
            playerScore++;
        }
        else if (result === "It's a tie!"){
            playerScore = playerScore;
            computerScore = computerScore;
        }
        console.log(`Player ${playerScore} : ${computerScore} Computer`)
    }
    if (playerScore > computerScore){
        console.log("Congratulations, you win!")
    }
    else if (computerScore > playerScore){
        console.log("Sorry, you lost :\()")
    }
    else{
        console.log("We have a tie")
    }
}

game();