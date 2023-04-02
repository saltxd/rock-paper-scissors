//Rock paper scissors

let playerScore = 0;
let computerScore = 0;
let roundWinner = ""
const resultsDiv = document.querySelector('#results');


//generates the computerChoice to return rock, paper or scissors

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == "0") {
        return "rock";
    } 
    else if (randomNumber == "1") {
        return "paper";
    } 
    else {
        return "scissors";
    }
}

//playRound function - will be called on later in code 
//it takes 2 arguments and checks if the two selections are the same and sets
//roundWinner to indicate the winner

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let roundWinner;
    if (playerSelection === computerSelection) {
        roundWinner = `It's a tie. you both chose ${playerSelection}`;
    } else if (
       (playerSelection === 'rock' && computerSelection === 'scissors') ||
       (playerSelection === 'scissors' && computerSelection === 'paper') ||
       (playerSelection === 'paper' && computerSelection === 'rock') 
    ) {
        playerScore++
        roundWinner = `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++
        roundWinner = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    displayResults(roundWinner);
    
    if (playerScore === 5 || computerScore === 5) {
      announceWinner();
    }
}

//displays results in DOM

function displayResults(roundWinner) {
  const resultParagraph = document.createElement('p');
  resultParagraph.textContent = roundWinner;
  const scoreParagraph = document.createElement('p');
  scoreParagraph.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;

  // clear the contents of the results div before appending new content
  resultsDiv.innerHTML = '';

  resultsDiv.appendChild(resultParagraph);
  resultsDiv.appendChild(scoreParagraph);
}

//announces game winner & resets score to 0

function announceWinner() {
  let winner = "";
  if (playerScore > computerScore) {
      winner = "You won the game!";
  } else {
    winner = "You lost the game!";
  }
  const winnerParagraph = document.createElement('p');
    winnerParagraph.textContent = winner;
    resultsDiv.appendChild(winnerParagraph);
    playerScore = 0;
    computerScore = 0;
}

function game() {
  const rockBtn = document.querySelector('#rock');
  const paperBtn = document.querySelector('#paper');
  const scissorsBtn = document.querySelector('#scissors');
  rockBtn.addEventListener('click', () => playRound('rock'));
  paperBtn.addEventListener('click', () => playRound('paper'));
  scissorsBtn.addEventListener('click', () => playRound('scissors'));
}

game();




