// console.log("Hello World!")

// Write function getComputerChoice so that getComputerChoice will return "Rock", "Paper" or "Scissors"


function getComputerChoice () {
    const compChoice = Math.floor(Math.random() * 3) + 1;
    if (compChoice === 1) {
        return "Rock"
    } else if (compChoice === 2 ) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

console.log(getComputerChoice());