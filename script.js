const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
const result = document.getElementById("result");
const endResult = document.getElementById("end-result");
const humScore = document.getElementById("human-score");
const compScore = document.getElementById("computer-score");
const modal = document.querySelector(".modal");
const modalHum = document.getElementById("modal-human");
const modalComp = document.getElementById("modal-computer");
const btnPlay = document.querySelector("button");
const modalResult = document.querySelector(".modal-result");
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

let humanScore;
let computerScore;

function init() {
  humanScore = 0;
  computerScore = 0;

  humScore.textContent = 0;
  compScore.textContent = 0;
  result.textContent = "";

  buttons.forEach((button) => {
    button.style.pointerEvents = "initial";
  });

  modal.classList.add("hidden");
}

function playGame() {
  function playRound(humanSelection, computerSelection) {
    if (humanSelection === "rock" && computerSelection === "paper") {
      computerScore++;
      result.textContent = "You lose! Paper beats rock!";
    } else if (humanSelection === "paper" && computerSelection === "rock") {
      humanScore++;
      result.textContent = "You win! Nice pick!";
    } else if (humanSelection === "scissors" && computerSelection === "rock") {
      computerScore++;
      result.textContent = "You lose! Rock beats scissors!";
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
      humanScore++;
      result.textContent = "You win! Nice pick!";
    } else if (humanSelection === "paper" && computerSelection === "scissors") {
      computerScore++;
      result.textContent = "You lose! Scissors beats paper!";
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
      humanScore++;
      result.textContent = "You win! Nice pick!";
    } else if (humanSelection === computerSelection) {
      result.textContent = "It's a tie!";
    }
  }

  function gameOver() {
    buttons.forEach((button) => {
      button.style.pointerEvents = "none";
    });

    if (humanScore > computerScore) {
      modal.classList.remove("hidden");
      modalResult.textContent = "Congrats! You beat the computer! 🎉";
    } else if (humanScore < computerScore) {
      modal.classList.remove("hidden");
      modalResult.textContent = "Computer wins this round. 💻";
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let humanSelection = getHumanChoice(button);
      let computerSelection = getComputerChoice();

      while (humanScore !== 5 || computerScore !== 5) {
        playRound(humanSelection, computerSelection);

        humScore.textContent = humanScore;
        compScore.textContent = computerScore;
        break;
      }

      if (humanScore === 5 || computerScore === 5) {
        gameOver();
      }
    });
  });
}

init();
playGame();

btnPlay.addEventListener("click", init);
