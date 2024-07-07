// let playerSelection = "";
// let computerSelection = "";

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

// console.log(getComputerChoice());

function getHumanChoice(choice) {
  choice = prompt("rock, paper, scissors???");
  if (!choice) {
    return "Invalid input";
  } else {
    return choice.toLowerCase();
  }
}

// console.log(getHumanChoice());

// function playRound(playerSelection, computerSelection) {
//   playerSelection = prompt("rock, paper, scissors???").toLowerCase();
//   computerSelection = getComputerChoice();

//   if (playerSelection === "rock" && computerSelection === "paper") {
//     return "You lose! Paper beats rock!";
//   } else if (playerSelection === "paper" && computerSelection === "rock") {
//     return "You win! Nice pick!";
//   } else if (playerSelection === "scissors" && computerSelection === "rock") {
//     return "You lose! Rock beats scissors!";
//   } else if (playerSelection === "rock" && computerSelection === "scissors") {
//     return "You win! Nice pick!";
//   } else if (playerSelection === "paper" && computerSelection === "scissors") {
//     return "You lose! Scissors beats paper!";
//   } else if (playerSelection === "scissors" && computerSelection === "paper") {
//     return "You win! Nice pick!";
//   } else if (playerSelection === computerSelection) {
//     return "It's a tie!";
//   } else {
//     return "Invalid input";
//   }
// }

// function playGame() {
//   // let i = 0;
//   let userScore = 0;
//   let computerScore = 0;

//   // while (i < 5) {
//   //   let playRoundResult = playRound(playerSelection, computerSelection);
//   //   console.log(playRoundResult);

//   //   if (/win/.test(playRoundResult)) {
//   //     userScore += 1;
//   //   } else if (/lose/.test(playRoundResult)) {
//   //     computerScore += 1;
//   //   }
//   //   ++i;
//   // }

//   for (i = 0; i < 5; i++) {
//     let playRoundResult = playRound(playerSelection, computerSelection);
//     console.log(playRoundResult);

//     if (/win/.test(playRoundResult)) {
//       userScore += 1;
//     } else if (/lose/.test(playRoundResult)) {
//       computerScore += 1;
//     }
//   }

//   if (userScore > computerScore) {
//     return `Congrats you win! You got ${userScore} correct answers!`;
//   } else if (userScore === computerScore) {
//     return "draw!";
//     return computerScore;
//   } else {
//     return `Computer got ${computerScore} correct answers. Try again next time!`;
//   }
// }

// console.log(playGame());
