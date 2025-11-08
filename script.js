// console.log("Hello World!")
// const interface = document.querySelector("#interface");
// interface.style.cssText = "color: blue; margin: auto; width; 500px;";

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

// function getHumanChoice() {
//     let humChoice = prompt("Rock, Paper, or Scissors?", "Rock");
//     humChoice = humChoice.toLowerCase();
//     return humChoice;
// }
// console.log(getHumanChoice());

// Declare the players' score variables with an initial value of 0

let humanScore = 0;
let computerScore = 0;

// Write the logic to play a single round
// Declare a new function called playRound
// Log a string value for playRound such as "You lose! Paper beats Rock!"
// Increment the ___Score variable based on the winner

function playRound(humanSelection) {
    if ((humanScore < 5) && (computerScore < 5)) {
        const computerSelection = getComputerChoice();
        if ((humanSelection === "rock" && computerSelection === "Rock") ||
        (humanSelection === "paper" && computerSelection === "Paper") ||
        (humanSelection === "scissors" && computerSelection === "Scissors")) {
            console.log(`You both chose ${computerSelection}! Try again!\nyou: ${humanScore} computer: ${computerScore}`);
            announcer.textContent = `You both chose ${computerSelection}! Try again!`;
        } else if ((humanSelection === "rock" && computerSelection === "Paper") ||
        (humanSelection === "paper" && computerSelection === "Scissors") ||
        (humanSelection === "scissors" && computerSelection === "Rock")) {
            computerScore += 1;
            if (computerScore < 5) {
                console.log(`The computer chose ${computerSelection}, you lose. :(\nyou: ${humanScore} computer: ${computerScore}`);
                announcer.textContent = `The computer chose ${computerSelection}, you lose. :(`;
            } else {
                announcer.textContent = "The computer wins, try again.";
                scoreBoard.appendChild(refBtn);
            }
        } else {
            humanScore += 1;
            if (humanScore < 5) {
                console.log(`The computer chose ${computerSelection}, you win!!!\nyou: ${humanScore} computer: ${computerScore}`);
                announcer.textContent = `The computer chose ${computerSelection}, you win!!!`;
            } else {
                announcer.textContent = "You are the winner!!!";
                scoreBoard.appendChild(refBtn);
            }
        }
        scoreDiv.textContent = `You: ${humanScore} Computer: ${computerScore}`;
    } 
    // else if ((humanScore === 5) || (computerScore === 5)) {
    // }
}

// function playGame(humanSelection) {
//     if ((humanScore && computerScore) < 5) {
//         playRound(humanSelection);
//     } else if (humanScore === 5) {
//         announcer.textContent = "You are the winner!!!";
//     } else {
//         announcer.textContent = "The computer wins, try again.";
//     }
// }

// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take both choices as arguments

// let humanSelection;
// let computerSelection;

// for(let i = 0; i < 5; i++) {
    //     // const humanSelection;
    //     // playRound(humanSelection, computerSelection);
    //     // console.log(playRound(humanSelection, computerSelection));
    //     console.log("Human Score: " + humanScore);
    //     console.log("Computer Score: " + computerScore);
    // }
    
    
    
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
// if ((computerScore && humanScore) < 5) {
    rock.addEventListener('click', () => playRound('rock'));
    paper.addEventListener('click', () => playRound('paper'));
    scissors.addEventListener('click', () => playRound('scissors'));
// } else {
//     rock.addEventListener('click', () => (announcer.textContent = "The game is over, refresh to restart."));
//     paper.addEventListener('click', () => (announcer.textContent = "The game is over, refresh to restart."));
//     scissors.addEventListener('click', () => (announcer.textContent = "The game is over, refresh to restart."));
// }

// console.log(playGame());