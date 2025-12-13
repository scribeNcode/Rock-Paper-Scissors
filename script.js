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

console.log(getComputerChoice())

// logic to get the human choice

function getHumanChoice(){
  let userInput = prompt('Choose between rock, paper, and scissors')  
  return userInput.toLowerCase()
}

console.log(getHumanChoice())


// Declare the players score variables
let humanScore = 0;
let computerScore = 0;

