const buttons = document.querySelectorAll('.button');
const message = document.querySelector('#message');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const playAgainButton = document.createElement('button');
const body = document.querySelector('body')

const player = {
    score: 0,
    wonGame: false,
};
const computer = {
    score: 0,
    wonGame: false,
};

buttons.forEach(button => button.addEventListener('click', play));  
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));

function play(e) {
    e.target.classList.add('pressedButton');
    const playerSelection = e.target.innerText.toLowerCase();
    const computerChoice = getComputerChoice();
    checkWhoWonRound(playerSelection, computerChoice)
    playerScore.innerText = player.score;
    computerScore.innerText = computer.score;
    checkIfGameOver()
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip it if it's not a transform;
    this.classList.remove('pressedButton'); // "this" will be whatever goes before the event listener
}
function checkWhoWonRound(playerSelection, computerChoice){
    if (playerSelection === computerChoice) {
        message.innerText = `You chose ${playerSelection}, computer chose ${computerChoice}. It's a draw!`
    }   else if (playerSelection === 'rock' && computerChoice === 'scissors'){
        message.innerText = `You chose ${playerSelection}, computer chose ${computerChoice}.`
        player.score ++
    }   else if (playerSelection === 'paper' && computerChoice === 'rock'){
        message.innerText = `You chose ${playerSelection}, computer chose ${computerChoice}.`
        player.score ++
    }   else if (playerSelection === 'scissors' && computerChoice === 'paper'){
        message.innerText = `You chose ${playerSelection}, computer chose ${computerChoice}.`
        player.score ++
    }   else if (computerChoice === 'rock' && playerSelection === 'scissors'){
        message.innerText = `You chose ${playerSelection}, computer chose ${computerChoice}.`
        computer.score ++
    }   else if (computerChoice === 'paper' && playerSelection === 'rock'){
        message.innerText = `You chose ${playerSelection}, computer chose ${computerChoice}.`
        computer.score ++
    }   else if (computerChoice === 'scissors' && playerSelection === 'paper'){
        message.innerText = `You chose ${playerSelection}, computer chose ${computerChoice}.`
        computer.score ++
    }
}

function checkIfGameOver(){
    if (player.score === 5) {
        player.wonGame = true;
        message.innerText = 'YOU WON!'
    }
    if (computer.score === 5) {
        computer.wonGame = true;
        message.innerText = 'YOU LOST!'
    }
    if (player.wonGame === true || computer.wonGame === true){
        buttons.forEach(button => button.disabled = true)
        body.appendChild(playAgainButton)
        playAgainButton.innerText = 'PLAY AGAIN';
        playAgainButton.addEventListener('click', () => {
            body.removeChild(playAgainButton);
            buttons.forEach(button => button.disabled = false)
            player.score = 0;
            computer.score = 0;
            player.wonGame = false;
            computer.wonGame = false;
            playerScore.innerText = player.score;
            computerScore.innerText = computer.score;
            message.innerText = "Let's see if luck is on your side..."
        })
    }

}

function getComputerChoice() {
    const possibleChoices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * 3);
    return possibleChoices[random];
}
