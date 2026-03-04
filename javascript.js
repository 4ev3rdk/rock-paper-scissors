function getComputerChoice() {
    let ch = Math.floor(Math.random() * 3) + 1;
    if (ch == 1) {
        return "Rock";
    }
    else if (ch == 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let ch = prompt("Select Rock, Paper or Scissors").toLowerCase();
    // ch = ch.toLowerCase();
    if (ch === "rock") {
        return "Rock";
    }
    else if (ch === "paper") {
        return "Paper";
    }
    else if (ch === "scissors") {
        return "Scissors";
    }
}
// console.log(getHumanChoice());
// console.log(getComputerChoice());

let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice) {


    if (computerChoice === humanChoice) {
        console.log(`Round tied : ${computerChoice} and ${humanChoice} cuts each other  `);
        console.log(` You;${humanScore} Computer:${computerScore}`)
    }
    else if (computerChoice === "Rock" && humanChoice == "Scissors" || computerChoice === "Paper" && humanChoice === "Rock" || computerChoice === "Scissors" && humanChoice === "Paper") {
        computerScore++;
        console.log(`Computer Won: ${computerChoice} beats ${humanChoice}`);
        console.log(`You:${humanScore} Computer:${computerScore}`);

    }
    else {
        humanScore++;
        console.log(`You Won: ${humanChoice} beats ${computerChoice}`);
        console.log(`You:${humanScore} Computer:${computerScore}`);
    }
}
// playRound(getComputerChoice(), getHumanChoice());

function playGame() {
    let n = parseInt(prompt("Enter the number of rounds you want to play"));
    for (let i = 0; i < n; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }
    if (computerScore === humanScore) {
        console.log("Game tied");
        console.log(`You: ${humanScore} ${computerScore}`)
    }
    else if (computerScore > humanScore) {
        console.log("Computer Won");
        console.log(`You : ${humanScore} Computer: ${computerScore}`);
    }
    else {
        console.log("You Won");
        console.log(`You : ${humanScore} Computer: ${computerScore}`)
    }
}
playGame();