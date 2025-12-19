// get all buttons
let rockBtn = document.querySelector('#rock-btn');

let paperBtn = document.querySelector('#paper');

let scissorsBtn = document.querySelector('#scissors');

let playBtn = document.querySelector('#play');

// get result div
let resultWrapper = document.querySelector('#rps-result')

// get scoreboard
let humanCount = document.querySelector('#humanCount')
let computerCount = document.querySelector('#computerCount')


// get gameWinnerAnnouncer
let gameWinnerAnnouncer = document.querySelector('#gameWinnerAnnouncer')



// Declare the players score variables
let humanScore = 0;
let computerScore = 0;


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

function getHumanChoice(humanSelection){
  let userInput =  humanSelection
  console.log(userInput)
  return userInput
}

// console.log(getHumanChoice())



// logic to play a single round
function playRound(humanChoice, computerChoice){
  if(humanChoice === 'rock' && computerChoice === 'scissors'){
    console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    handleHumanCount()
    humanCount.textContent = humanScore
    resultWrapper.textContent = `You win! ${humanChoice} beats ${computerChoice}`
  }else if(humanChoice === 'scissors' && computerChoice === 'paper'){
    console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    handleHumanCount()
    humanCount.textContent = humanScore
    resultWrapper.textContent = `You win! ${humanChoice} beats ${computerChoice}`
  }else if(humanChoice === 'paper' && computerChoice === 'rock'){
    console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    handleHumanCount()
    humanCount.textContent = humanScore
    resultWrapper.textContent = `You win! ${humanChoice} beats ${computerChoice}`
  }else if(humanChoice === computerChoice){
    console.log(`You had a tie`)
    resultWrapper.textContent = `You had a tie`
  }else{
    console.log(`You loose! ${computerChoice} beats ${humanChoice}`)
        handleComputerCount()
    computerCount.textContent = computerScore
    resultWrapper.textContent = `You loose! ${computerChoice} beats ${humanChoice}`
  }
}


// Handle computer counter
function handleComputerCount(){
  if(computerScore <= 4){
      computerScore += 1
}
}

function handleHumanCount(){
     if(humanScore <= 4){
      humanScore += 1
}
}

function handleGameWinner(){
  if(computerScore == 5 && humanScore < 5){
    console.log('Computer Wins')
    gameWinnerAnnouncer.textContent = 'Computer Wins'
  }else if(humanScore === 5 && computerScore < 5){
     console.log('Human Wins')
      gameWinnerAnnouncer.textContent = 'Human Wins' 
  }
}


  

rockBtn.addEventListener('click', ()=>{
  playRound(getHumanChoice('rock'), getComputerChoice())
  handleGameWinner()
})

paperBtn.addEventListener('click', ()=>{
  playRound(getHumanChoice('paper'), getComputerChoice())
  handleGameWinner()
})

scissorsBtn.addEventListener('click', ()=>{
  playRound(getHumanChoice('scissors'), getComputerChoice())
  handleGameWinner()
})







   