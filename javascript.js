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



const sign = document.querySelector("#player-sign");
const round = document.querySelector("#round");
const roundWin = document.querySelector("#round-win");
const score = document.querySelector("#score");
const result = document.querySelector("#result");

function playerSign(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Rock") {
        sign.textContent = `✊    ✊`;
    }
    else if (humanChoice === "Paper" && computerChoice === "Paper") {
        sign.textContent = `✋    ✋`;
    }
    else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
        sign.textContent = `✌️    ✌️`;
    }

    if (humanChoice === "Rock" && computerChoice === "Paper") {
        sign.textContent = `✊      ✋`;
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        sign.textContent = `✊      ✌️`;

    }
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        sign.textContent = `✋      ✊ `;
    }
    else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        sign.textContent = `✋      ✌️ `;
    }
    else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        sign.textContent = `✌️      ✊ `;
    }
    else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        sign.textContent = `✌️      ✋ `;
    }
}
function playRound(computerChoice, humanChoice) {
    if (humanScore >= 5 || computerScore >= 5) {

        return;
    }

    if (computerChoice === humanChoice) {


        roundWin.textContent = `Round tied !`;
        playerSign(humanChoice, computerChoice);
        round.textContent = `${computerChoice} and ${humanChoice} cuts each other`;
        score.textContent = `You:${humanScore}     Dev:${computerScore}`;


    }
    else if (computerChoice === "Rock" && humanChoice == "Scissors" || computerChoice === "Paper" && humanChoice === "Rock" || computerChoice === "Scissors" && humanChoice === "Paper") {
        computerScore++;

        roundWin.textContent = `You lost !`;
        playerSign(humanChoice, computerChoice);


        round.textContent = `${computerChoice} beats ${humanChoice}`;
        score.textContent = `You:${humanScore}     Dev:${computerScore}`;


    }
    else {
        humanScore++;

        roundWin.textContent = `You Won!`;
        playerSign(humanChoice, computerChoice);


        round.textContent = `${humanChoice} beats ${computerChoice}`;
        score.textContent = `You:${humanScore}      Dev:${computerScore}`;

    }

    if (humanScore === 5) {

        result.textContent = `Congratulations ! You Won the game  `;
        result.textContent += "You owe Dev a Coffee ☕"
        result.style.color = "green";
        result.style.border = "2px solid #b0ab8f";
        result.style.background = "#b0ab8f";
        result.style.borderRadius = "6px";
        result.style.padding = "4px";


    }
    else if (computerScore === 5) {

        result.textContent = `Oops ! You lost the game  `;
        result.textContent += "You owe Dev a Coffee ☕ "


        result.style.color = "red";

        result.style.border = "2px solid #b0ab8f";
        result.style.background = "#b0ab8f";
        result.style.borderRadius = "6px";
        result.style.padding = "4px";





    }
}






// playRound(getComputerChoice(), getHumanChoice());


