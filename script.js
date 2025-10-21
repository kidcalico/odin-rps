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

// Declare the players' score variables with an initial value of 0

let humanScore = 0;
let computerScore = 0;

// Write the logic to play a single round
// Declare a new function called playRound
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take both choices as arguments
// Make humanChoice case-insensitive
// Log a string value for playRound such as "You lose! Paper beats Rock!"
// Increment the ___Score variable based on the winner