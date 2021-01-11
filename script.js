let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {

    return Math.floor(Math.random() * 10);
}


function compareGuesses(human_guess, computer_guess, target) {

    let human_diff = Math.abs(human_guess - target);
    let computer_diff = Math.abs(computer_guess - target);

    res = false
    if (human_diff < computer_diff) {
        res = true;
    }
    return res
}


function updateScore(winner) {

    if (winner === 'human') {
        humanScore = humanScore + 1;
    } else if (winner === 'computer') {
        computerScore = computerScore + 1;
    }
}


function advanceRound() {

    currentRoundNumber = currentRoundNumber + 1;
}