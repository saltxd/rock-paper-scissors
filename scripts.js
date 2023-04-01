//Rock paper scissors
//
//the game will play against the computer. Begin with a function
//called getComputerChoice that returns 'Rock', 'Paper' or 'Scissors'
//
//write a function that plays a single round of Rock Paper Scissors
//it should take two parameters- the playerSelection and computerSelection
//then return a string that declares the winner: "You lose! paper beats rock"
//- Make the playerSelection parameter case-insensitive so user can input
//rock, ROCK, RocK
//
//note: you want to return the results of this function call not console.log() 
//them. You're going to use what you return later on
//
//Write a new function called game(). use the previous function inside
//of this one to play a 5 round game that keeps score and reports winner or loser
//at the end.

//global variables

let playerScore = 0;
let computerScore = 0;
let roundWinner = ""
const buttons = document.querySelectorAll('button');
const results = documents.getElementById('results');

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

function playRound(playerSelection, computerSelection) {
    
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
 
}

//checks if score === 5. disables buttons if true

function checkGameWinner(){
  if (playerScore === 5){
    results.textContent = 'You won the game!';
    disableButtons();
  } else if (computerScore ===5) {
    results.textContent = 'You lost the game!';
    disableButtons();
  }
}

function disableButtons(){
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function enableButtons() {
  buttons.forEach((button) => {
    button.disabled = false;
  });
}

function game() {
  const rockBtn = document.querySelector('#rock');
  const paperBtn = document.querySelector('#paper');
  const scissorsBtn = document.querySelector('#scissors');
  rockBtn.addEventListener('click', () => playRound('rock'));
  paperBtn.addEventListener('click', () => playRound('paper'));
  scissorsBtn.addEventListener('click', () => playRound('scissors'));
}

//game function - use a while loop to keep playing until either computer or 
//player reach a score of 5

//function game() {
   // while (playerScore < 5 && computerScore < 5) {
    //  let playerSelection = prompt('Type: rock, paper or scissors');
    //      playerSelection = playerSelection.toLowerCase(); //convert input to lowercase
    //  const computerSelection = getComputerChoice();
   //   playRound(playerSelection, computerSelection);
   //   console.log(roundWinner);
   //   console.log(`Player Score: ${playerScore}`);
   //   console.log(`Computer Score: ${computerScore}`);
  //  }
  //  if (playerScore > computerScore) {
  //    console.log('You won the game!');
 //   } else if (computerScore > playerScore) {
  //    console.log('You lost the game!');
  //  } else {
 //     console.log("It's a tie!");
 //   }
 // }




