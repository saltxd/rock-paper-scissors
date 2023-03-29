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

let playerScore = 0;
let computerScore = 0;
let roundWinner = ""

const computerSelection = getComputerChoice();


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
//console.log(getComputerChoice);
//main game function
let playerSelection = prompt('Type: rock, paper or scissors');

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

function game() {
    
}


function gameOver() {
    return playerScore === 5 || computerScore === 5
}

//const playerSelection = 'rock';

console.log(playRound(playerSelection, computerSelection));
console.log(roundWinner);