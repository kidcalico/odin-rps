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

// Declare the players' score variables with an initial value of 0

let humanScore = 0;
let computerScore = 0;

// Write the logic to play a single round

function playRound(humanSelection) {
    if ((humanScore < 5) && (computerScore < 5)) {
        const computerSelection = getComputerChoice();
        if ((humanSelection === "rock" && computerSelection === "Rock") ||
        (humanSelection === "paper" && computerSelection === "Paper") ||
        (humanSelection === "scissors" && computerSelection === "Scissors")) {
            announcer.textContent = `You both chose ${computerSelection}! Try again!`;
        } else if ((humanSelection === "rock" && computerSelection === "Paper") ||
        (humanSelection === "paper" && computerSelection === "Scissors") ||
        (humanSelection === "scissors" && computerSelection === "Rock")) {
            computerScore += 1;
            if (computerScore < 5) {
                announcer.textContent = `The computer chose ${computerSelection}, you lose. :(`;
            } else {
                announcer.textContent = "The computer wins, try again.";
                scoreBoard.appendChild(refBtn);
            }
        } else {
            humanScore += 1;
            if (humanScore < 5) {
                announcer.textContent = `The computer chose ${computerSelection}, you win!!!`;
            } else {
                announcer.textContent = "You are the winner!!!";
                scoreBoard.appendChild(refBtn);
            }
        }
        scoreDiv.textContent = `You: ${humanScore} Computer: ${computerScore}`;
    } 
}
  
// Create constants and add text to the buttons

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";
    
// Create results section

const scoreBoard = document.querySelector("#results");
scoreBoard.style.cssText = "padding: 20px; text-align: center; font-weight: bold";
scoreBoard.textContent = "Score";

const scoreDiv = document.createElement("div");
scoreBoard.appendChild(scoreDiv);
scoreDiv.textContent = `You: ${humanScore} Computer: ${computerScore}`;

const announcer = document.createElement("div");
scoreBoard.appendChild(announcer);

// Create button that refreshes the page

const refBtn = document.createElement("button");
refBtn.textContent = "Try Again";
refBtn.addEventListener('click', () => window.location.reload());

// Add an event listener to the buttons that call playRound function with the correct playerSelection when clicked

rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));