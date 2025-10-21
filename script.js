// console.log("Hello World!")

// Write function getComputerChoice so that getComputerChoice will return "Rock", "Paper" or "Scissors"


function getComputerChoice () {
    let compChoice = Math.floor(Math.random() * 3) + 1;
    if (compChoice === 1) {
        return "Rock"
    } else if (compChoice === 2 ) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

console.log(getComputerChoice());

// Write function getHumanChoice so that the user is prompted to enter either "Rock", "Paper" or "Scissors", and the function returns the choice

function getHumanChoice() {
    let humChoice = prompt("Rock, Paper, or Scissors?", "Rock");
    return humChoice;
}

console.log(getHumanChoice());

// Declare the players' score variables
