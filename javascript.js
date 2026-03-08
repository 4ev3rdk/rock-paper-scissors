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

// function getHumanChoice() {
//     let ch = prompt("Select Rock, Paper or Scissors").toLowerCase();
//     ch = ch.toLowerCase();
//     if (ch === "rock") {
//         return "Rock";
//     }
//     else if (ch === "paper") {
//         return "Paper";
//     }
//     else if (ch === "scissors") {
//         return "Scissors";
//     }
// }
// console.log(getHumanChoice());
// console.log(getComputerChoice());

let computerScore = 0;
let humanScore = 0;

//event listener to play round for each button
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");


rock.addEventListener("click", () => {
    let playerSelection = "Rock";
    playRound(getComputerChoice(), playerSelection); ///let computeChoice= getcomputerchoice() then write computerChoice
});
paper.addEventListener("click", () => {
    let playerSelection = "Paper";
    playRound(getComputerChoice(), playerSelection);
});
scissors.addEventListener("click", () => {
    let playerSelection = "Scissors";
    playRound(getComputerChoice(), playerSelection)
});




const round = document.querySelector("#round");
const score = document.querySelector("#score");
const result = document.querySelector("#result");



function playRound(computerChoice, humanChoice) {
    if (humanScore >= 5 || computerScore >= 5) {

        return;
    }

    if (computerChoice === humanChoice) {


        round.textContent = `${computerChoice} and ${humanChoice} cuts each other`;
        score.textContent = `You:${humanScore} Computer:${computerScore}`;


    }
    else if (computerChoice === "Rock" && humanChoice == "Scissors" || computerChoice === "Paper" && humanChoice === "Rock" || computerChoice === "Scissors" && humanChoice === "Paper") {
        computerScore++;

        round.textContent = `${computerChoice} beats ${humanChoice}`;
        score.textContent = `You:${humanScore} Computer:${computerScore}`;


    }
    else {
        humanScore++;

        round.textContent = `${humanChoice} beats ${computerChoice}`;
        score.textContent = `You:${humanScore} Computer:${computerScore}`;

    }

    if (humanScore === 5) {

        result.textContent = ` You Won the game  You:${humanScore}  Computer:${computerScore} `;


    }
    else if (computerScore === 5) {

        result.textContent = `Computer Won the game You:${humanScore} Computer:${computerScore} `;

    }

}




// playRound(getComputerChoice(), getHumanChoice());


