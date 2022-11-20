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
        return "lost";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "lost";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "lost";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "won";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "won";
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return "won";
    }
    else if (playerSelection===computerSelection){
        return "tie";
    }
}

const result = document.querySelector('#result');
let score = document.createElement('p');
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let buttons = document.querySelectorAll('button');
console.log(buttons)
buttons.forEach(button => {
    button.addEventListener('click', function(){
        playerSelection = (button.innerText);
        console.log(playerSelection);

        let scoreCard = playRound(playerSelection,getComputerChoice());
        console.log(scoreCard)
        if (scoreCard==="won"){
            playerScore+=1;
        }
        else if(scoreCard === "lost") {
            computerScore+=1;
        }
        score.textContent = `Player ${playerScore} : ${computerScore} Computer`;
        result.appendChild(score);

        if (playerScore === 5){
            let winner = document.createElement('p');
            winner.textContent = "You win!";
            winner.style.cssText = 'font-weight:bold; color:blue;';
            result.appendChild(winner);
            playerScore = 0;
            computerScore = 0;
        }
        else if(computerScore === 5){
            let winner = document.createElement('p');
            winner.textContent = "You lose!";
            winner.style.cssText = 'font-weight:bold; color:red;';
            result.appendChild(winner);
            playerScore = 0;
            computerScore = 0;
        }
            }
        )
    }
)


