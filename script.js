const signs = ['rock', 'paper', 'scissors'];
let computerPoints = 0;
let playerPoints = 0;
function getComputerChoice() {
	const randomIndex = Math.floor(Math.random() * signs.length);
	return signs[randomIndex];
}
console.log(getComputerChoice());
function playRound(playerSelection, computerSelection) {
	playerSelection.toLowerCase();
	computerSelection.toLowerCase();
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
const playerSelection = prompt(
	'Write down your selection between rock, paper and scissors!'
);
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
function game() {
	for (let i = 0; i < 5; i++) {
		playRound(playerSelection, computerSelection);
	}
	if (computerPoints < playerPoints) return 'Congratulations, you win!';
	else return 'Better luck next time!';
}
