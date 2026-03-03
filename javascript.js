function getComputerChoice() {
    let ch = Math.floor(Math.random() * 3) + 1;
    if (ch == 1) {
        return "Computer : Rock";
    }
    else if (ch == 2) {
        return "Computer: Paper";
    }
    else {
        return "Computer:Scissors";
    }
}

function getHumanChoice() {
    let ch = prompt("Select Rock, Paper or Scissors");

    if (ch === "Rock" || ch === "rock") {
        return "You : Rock";
    }
    else if (ch === "Paper" || ch === "paper") {
        return "You: Paper";
    }
    else if (ch === "Scissors" || ch === "scissors") {
        return "You:Scissors";
    }
}
console.log(getHumanChoice());

console.log(getComputerChoice());