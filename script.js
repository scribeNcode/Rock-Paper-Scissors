// logic to get the computer choice
function getComputerChoice(){
   let randomNum = Math.floor(Math.random()*3)
   if(randomNum === 0){
    return 'rock'
   }else if(randomNum === 1){
    return 'paper'
   }else if(randomNum === 2){
    return 'scissors'
   }else{
    return 'error'
   }
}

// console.log(getComputerChoice())

// logic to get the human choice

function getHumanChoice(){
  let userInput = prompt('Choose between rock, paper, and scissors')  
  return userInput.toLowerCase()
}

// console.log(getHumanChoice())


// Declare the players score variables
let humanScore = 0;
let computerScore = 0;

// logic to play a single round
function playRound(humanChoice, computerChoice){
  if(humanChoice === 'rock' && computerChoice === 'scissors'){
    console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    humanScore += 1
  }else if(humanChoice === 'scissors' && computerChoice === 'paper'){
    console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    humanScore += 1
  }else if(humanChoice === 'paper' && computerChoice === 'rock'){
    console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    humanScore += 1
  }else if(humanChoice === computerChoice){
    console.log(`You had a tie`)
  }else{
    console.log(`You loose! ${computerChoice} beats ${humanChoice}`)
    computerScore += 1
  }
}

// playRound(getHumanChoice(), getComputerChoice())

//  Write the logic to play the entire game

function playGame(human, computer){
  for(let i = 0; i <= 4; i++){
    playRound(human(), computer())
  }
  console.log(`HumanScore = ${humanScore} | ComputerScore ${computerScore}`)
}

playGame(getHumanChoice, getComputerChoice)