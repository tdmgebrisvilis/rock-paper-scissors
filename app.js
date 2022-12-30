const { log } = console;
let playerScore = 0;
let computerScore = 0;
const gameOutcome = game();
if (gameOutcome === 'playerWonGame') alert ('you win!')
if (gameOutcome === 'computerWonGame') alert ('you lose!')

function game () {
    for (let i = 0; i < 5; i++){
        const roundOutcome = playRound(getPlayerSelection, getComputerChoice);
        if (roundOutcome === 'playerWonRound') playerScore ++
        if (roundOutcome === 'computerWonRound') computerScore ++
    }
    log(`Your score: ${playerScore}`);
    log(`Computer's score: ${computerScore}`);
    if (playerScore > computerScore) return 'playerWonGame'
    if (playerScore < computerScore) return 'computerWonGame'
}

function playRound (playerSelection, computerChoice) {
    const player = playerSelection();
    const computer = computerChoice();
    if (player === computer) {
        log('Draw!');
        return playRound(playerSelection, computerChoice);
    }
    if (
        player === 'rock' && computer === 'scissors' ||
        player === 'paper' && computer === 'rock' ||
        player === 'scissors' && computer === 'paper' 
    )   return 'playerWonRound'
    if (
        computer === 'rock' && player === 'scissors' ||
        computer === 'paper' && player === 'rock' ||
        computer === 'scissors' && player === 'paper' 
    )   return 'computerWonRound'
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