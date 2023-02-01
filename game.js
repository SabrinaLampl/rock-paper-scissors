function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    result.textContent = "It's a tie! The same was selected.";
    return "tie";
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    result.textContent = "You Won! Scissors beats Paper.";
    return "player";
  }
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    result.textContent = "You Won! Rock beats Scissors.";
    return "player";
  }
  else if (playerSelection === "paper" && computerSelection === "rock") {
    result.textContent = "You Won! Paper beats Rock.";
    return "player";
  }
  else {
    result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    return "computer";
  }
}

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

let playerCount = 0;
let computerCount = 0;

const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
const score = document.querySelector('#score');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
  
    const playerSelection = button.id;
    const computer = getComputerChoice();

    const winner = playRound(playerSelection, computer);
    
    switch (winner) {
      case "player":
        playerCount++;
        break;
      case "computer":
        computerCount++;
        break;
      case "tie":
        break;
    }

    score.textContent = `You: ${playerCount} Computer: ${computerCount}`;

    if (playerCount === 5) {
      score.textContent = `You won with ${playerCount} to ${computerCount}`;
      playerCount = 0;
      computerCount = 0;
    }
    if (computerCount === 5) {
      score.textContent = `You lost with ${playerCount} to ${computerCount}`;
      playerCount = 0;
      computerCount = 0;
    }
  })
})
