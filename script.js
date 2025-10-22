// console.log("Hello World!")

// Write function getComputerChoice so that getComputerChoice will return "Rock", "Paper" or "Scissors"


function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3) + 1;
    if (compChoice === 1) {
        return "Rock"
    } else if (compChoice === 2 ) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

// console.log(getComputerChoice());

// Write function getHumanChoice so that the user is prompted to enter either "Rock", "Paper" or "Scissors", and the function returns the choice
// Make getHumanChoice case-insensitive

function getHumanChoice() {
    let humChoice = prompt("Rock, Paper, or Scissors?", "Rock");
    humChoice = humChoice.toLowerCase();
    return humChoice;
}

// console.log(getHumanChoice());

// Declare the players' score variables with an initial value of 0

let humanScore = 0;
let computerScore = 0;

// Write the logic to play a single round
// Declare a new function called playRound
// Log a string value for playRound such as "You lose! Paper beats Rock!"
// Increment the ___Score variable based on the winner

function playRound() {
    if (humanSelection === "rock" && computerSelection === "Rock") {
        return "You both chose Rock! Try again!";
    } else if (humanSelection === "rock" && computerSelection === "Paper") {
        computerScore += 1;
        return "The computer chose Paper, you lose. :(";
    } else if (humanSelection === "rock" && computerSelection === "Scissors") {
        humanScore += 1;
        return "The computer chose Scissors, you win!!!";
    } else if (humanSelection === "paper" && computerSelection === "Rock") {
        humanScore += 1;
        return "The computer chose Rock, you win!!!";
    } else if (humanSelection === "paper" && computerSelection === "Paper") {
        return "You both chose Paper! Try Again!";
    } else if (humanSelection === "paper" && computerSelection === "Scissors") {
        computerScore += 1;
        return "The computer chose Scissors, you lose. :(";
    } else if (humanSelection === "scissors" && computerSelection === "Rock") {
        computerScore += 1;
        return "The computer chose Rock, you lose. :(";
    } else if (humanSelection === "scissors" && computerSelection === "Paper") {
        humanScore += 1;
        return "The computer chose Paper, you win!!!";
    } else if (humanSelection === "scissors" && computerSelection === "Scissors") {
        return "You both chose Scissors, try again!";
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        // playRound(humanSelection, computerSelection);
        console.log(playRound(humanSelection, computerSelection));
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }
}

// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take both choices as arguments

let humanSelection;
let computerSelection;

// console.log(playRound(humanSelection, computerSelection));

console.log(playGame());