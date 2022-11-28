

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}





function playRound(playerSelection, computerSelection) {
  const playerSelectionLowerCase = playerSelection.toLowerCase();

  if (playerSelectionLowerCase === computerSelection) {
    console.log("It's a tie! The same was selected.");
    return "tie";
  }
  else if (playerSelectionLowerCase === "scissors" && computerSelection === "paper") {
    console.log("You Won! Scissors beats Paper.");
    return "player";
  }
  else if (playerSelectionLowerCase === "rock" && computerSelection === "scissors") {
    console.log("You Won! Rock beats Scissors.");
    return "player";
  }
  else if (playerSelectionLowerCase === "paper" && computerSelection === "rock") {
    console.log("You Won! Paper beats Rock.");
    return "player";
  }
  else {
    console.log(`You Lose! ${computerSelection} beats ${playerSelectionLowerCase}.`);
    return "computer";
  }
}



function game() {
  let playerCount = 0;
  let computerCount = 0;

  for (let i = 0; i < 5; i++) {
    const player = prompt("Rock, Paper or Scissors?");
    const computer = getComputerChoice();

    const result = playRound(player, computer);
    
    switch (result) {
      case "player":
        playerCount++;
        break;
      case "computer":
        computerCount++;
        break;
      case "tie":
        break;
    }
  }

  if (playerCount > computerCount) {
    console.log(`You won with ${playerCount} to ${computerCount}`);
  }
  else {
    console.log(`You lost with ${playerCount} to ${computerCount}`)
  }
}

game();