// Get computer choice
function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3) + 1;
  switch (randomChoice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function getHumanChoice(choice) {
  choice = prompt("rock, paper, scissors???");
  if (!choice) {
    return null;
  } else {
    return choice.toLowerCase();
  }
}

function playGame() {
  let init = 0;
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanSelection, computerSelection) {
    if (humanSelection === "rock" && computerSelection === "paper") {
      computerScore++;
      console.log("You lose! Paper beats rock!");
    } else if (humanSelection === "paper" && computerSelection === "rock") {
      humanScore++;
      console.log("You win! Nice pick!");
    } else if (humanSelection === "scissors" && computerSelection === "rock") {
      computerScore++;
      console.log("You lose! Rock beats scissors!");
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
      humanScore++;
      console.log("You win! Nice pick!");
    } else if (humanSelection === "paper" && computerSelection === "scissors") {
      computerScore++;
      console.log("You lose! Scissors beats paper!");
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
      humanScore++;
      console.log("You win! Nice pick!");
    } else if (humanSelection === computerSelection) {
      console.log("It's a tie!");
    }
  }

  while (init < 5) {
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();

    if (!humanSelection) {
      break;
    }

    playRound(humanSelection, computerSelection);

    init++;
  }

  if (humanScore > computerScore) {
    console.log(`Congrats you win! You got ${humanScore} correct answers!`);
  } else if (humanScore < computerScore) {
    console.log(
      `Computer got ${computerScore} correct answers. Try again next time!`
    );
  } else {
    console.log("It's a draw!");
  }
}

playGame();
