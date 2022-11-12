let btnSign = document.querySelectorAll('.btnSign');
let playerScore = document.querySelector('.playerScore');
let computerScore = document.querySelector('.computerScore');
let computerSign = document.querySelector('.computerSign');
let playerSign = document.querySelector('.playerSign');

const signs = ['rock', 'paper', 'scissors'];
let computerPoints = 0;
let playerPoints = 0;
let playerSelection;
let computerSelection;
for (btn of btnSign) {
	btn.addEventListener('click', (e) => {
		computerSelection = getComputerChoice();
		playerSelection = e.target.id;
		playRound(playerSelection, computerSelection);
		playerScore.textContent = `Player: ${playerPoints}`;
		computerScore.textContent = `Computer: ${computerPoints}`;
		computerSign.textContent = `${getComputerSign(computerSelection)}`;
		playerSign.textContent = `${getPlayerSign(playerSelection)}`;

		if (computerPoints === 5) {
			alert('Better luck next time');
			restartGame();
		} else if (playerPoints === 5) {
			alert('Congratulations!');
			restartGame();
		}
	});
}

function getComputerSign(computerSelection) {
	if (computerSelection === 'rock') return '✊🏼';
	else if (computerSelection === 'paper') return '✋🏼';
	else if (computerSelection === 'scissors') return '✌🏼';
}
function getPlayerSign(playerSelection) {
	if (playerSelection === 'rock') return '✊🏼';
	else if (playerSelection === 'paper') return '✋🏼';
	else if (playerSelection === 'scissors') return '✌🏼';
}

function getComputerChoice() {
	const randomIndex = Math.floor(Math.random() * signs.length);
	return signs[randomIndex];
}

function playRound(playerSelection, computerSelection) {
	let tempComputer = computerPoints;
	let tempPlayer = playerPoints;
	const msg = `It's a tie!`;
	if (playerSelection === 'rock' && computerSelection === 'paper')
		computerPoints++;
	else if (playerSelection === 'rock' && computerSelection === 'scissors')
		playerPoints++;
	else if (playerSelection === 'paper' && computerSelection === 'scissors')
		computerPoints++;
	else if (playerSelection === 'paper' && computerSelection === 'rock')
		playerPoints++;
	else if (playerSelection === 'scissors' && computerSelection === 'rock')
		computerPoints++;
	else if (playerSelection === 'scissors' && computerSelection === 'paper')
		playerPoints++;
	else if (playerSelection === computerSelection) return msg;
	if (tempComputer < computerPoints) return 'Computer wins the round';
	else if (tempPlayer < playerPoints) return 'Player wins the round';
}

function restartGame() {
	computerPoints = 0;
	playerPoints = 0;
	playerScore.textContent = `Player: ${playerPoints}`;
	computerScore.textContent = `Computer${computerPoints}`;
	computerSign.textContent = `❔`;
	playerSign.textContent = `❔`;
}
