game();

function game () {
    let playerScore = 0, computerScore = 0;
    for (let i = 0; i < 5; i++){
        const round = playRound(getPlayerSelection, getComputerChoice)
        if (round === 'playerWonRound') playerScore ++
        if (round === 'computerWonRound') computerScore ++
    }
    console.log(`Your score: ${playerScore}`);
    console.log(`Computer's score: ${computerScore}`);
    playerScore > computerScore ? console.log('YOU WIN!') : console.log('YOU LOSE!');
    if (playerScore > computerScore) return 'YOU WIN! :)'
    if (playerScore < computerScore) return 'YOU LOSE! :('
}

function playRound(playerSelection, computerChoice) {
    const player = playerSelection();
    const computer = computerChoice();
    console.log(`You chose: ${player}, computer chose: ${computer}`);
    const playerWon = [], computerWon = [], message = [];
    while (player === computer) {
        message.push('draw!')
        console.log(message[0]);
        return playRound(computerChoice, playerSelection);
    }
    checkWhoWon (player, computer, playerWon, computerWon, message)
    console.log(message[0]);
    if (playerWon[0] === true) return 'playerWonRound'
    if (computerWon[0] === true) return 'computerWonRound'
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
        selection = prompt('wrong input, please choose between rock, paper, or scissors')
        .toLowerCase();
        validateSelection();
    }
}

function checkWhoWon (player, computer, playerWon, computerWon, message) {
    checkIfRockWon(player, computer, playerWon, computerWon, message);
    checkIfPaperWon(player, computer, playerWon, computerWon, message);
    checkIfScissorsWon(player, computer, playerWon, computerWon, message);
}

function checkIfRockWon (player, computer, playerWon, computerWon, message) {
    if (player === 'rock' && computer === 'scissors'){
        message.push('You won this round! Rock beats scissors!');
        return playerWon.push(true)
    } else if (computer === 'rock' && player === 'scissors'){
        message.push('You lost this round! Rock beats scissors!');
        return computerWon.push(true)
    }
}
function checkIfPaperWon (player, computer, playerWon, computerWon, message) {
    if (player === 'paper' && computer === 'rock'){
        message.push('You won this round! Paper beats rock!');
        return playerWon.push(true)
    } else if (computer === 'paper' && player === 'rock'){
        message.push('You lost this round! Paper beats rock!');
        return computerWon.push(true)
    }
}
function checkIfScissorsWon (player, computer, playerWon, computerWon, message) {
    if (player === 'scissors' && computer === 'paper'){
        message.push('You won this round! Scissors beat paper!');
        return playerWon.push(true)
    } else if (computer === 'scissors' && player === 'paper'){
        message.push('You lost this round! Scissors beat paper!');
        return computerWon.push(true)
    }
}