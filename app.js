// make a function getComputerChoice that will generate a random computer choice.
// make a function playerSelection that captures the players selection.
// make a function playSingleRound that takes getComputerChoice and playerSelection as params and return the winner of the round and says what beats what.
// make a function game, where there are 5 rounds played and winner is reported.


function playRound(computerChoice, playerSelection) {
    const player = playerSelection();
    const computer = computerChoice();
    console.log(`You chose: ${player}, computer chose: ${computer}`);
    let playerScore = 0, computerScore = 0, message = '';
    while (player === computer) {
        console.log('draw!');
        return playRound(computerChoice, playerSelection);
    }
    checkIfRockWon(player, computer);
    checkIfPaperWon(player, computer);
    checkIfScissorsWon(player, computer);
    let result = [playerScore, computerScore, message]
    return result;
    function checkIfRockWon (player, computer) {
        if (player === 'rock' && computer === 'scissors'){
            message = 'You won this round! Rock beats scissors!';
            return playerScore ++
        } else if (computer === 'rock' && player === 'scissors'){
            message = 'You lost this round! Rock beats scissors!';
            return computerScore ++
        }
    }
    function checkIfPaperWon (player, computer) {
        if (player === 'paper' && computer === 'rock'){
            message = 'You won this round! Paper beats rock!';
            return playerScore ++
        } else if (computer === 'paper' && player === 'rock'){
            message = 'You lost this round! Paper beats rock!';
            return computerScore ++
        }
    }
    function checkIfScissorsWon (player, computer) {
        if (player === 'scissors' && computer === 'paper'){
            message = 'You won this round! Scissors beat paper!';
            return playerScore ++
        } else if (computer === 'scissors' && player === 'paper'){
            message = 'You lost this round! Scissors beat paper!';
            return computerScore ++
        }
    }
}




function getComputerChoice() {
    const possibleChoices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * 3);
    return possibleChoices[random];
}

function getPlayerSelection() {
    let selection = prompt('please choose: rock, paper, or scissors?')
    .toLowerCase();
    validateSelection();
    if (validateSelection) return selection;
    function validateSelection() {
        selection === 'rock' || selection === 'paper' || selection === 'scissors'
        ? true
        : invalidSelection()
    }
    function invalidSelection() {
        selection = prompt('wrong input, please choose between rock, paper, or scissors');
        validateSelection();
    }
}

