const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");

const buttons = document.querySelectorAll(".btn");

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

function getHumanChoice(button) {
  switch (button.id) {
    case "rock":
      return "rock";
    case "paper":
      return "paper";
    case "scissors":
      return "scissors";
  }
}

function playGame() {
  let round = 0;
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

  function gameOver() {
    if (humanScore > computerScore) {
      console.log(`Congrats you win! You got ${humanScore} correct answers!`);
    } else if (humanScore < computerScore) {
      console.log(
        `Computer got ${computerScore} correct answers. Try again next time!`
      );
    } else if (humanScore === computerScore) {
      console.log("It's a draw!");
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let humanSelection = getHumanChoice(button);
      let computerSelection = getComputerChoice();
      while (round < 5) {
        playRound(humanSelection, computerSelection);
        round++;
        break;
      }
      if (round >= 5) {
        gameOver();
      }
    });
  });
}

playGame();
