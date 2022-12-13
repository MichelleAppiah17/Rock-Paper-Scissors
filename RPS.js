 function getComputerChoice(arr){
    let randomValue= Math.floor(Math.random() * arr.length);
    return arr[randomValue];
 }
    const choices=["Rock","Paper","Scissors"]; 
    console.log(getComputerChoice(choices));
    var computerScore = 0;
    var playerScore = 0;
    var score = 0;

 function playRound(){
    var playerSelection =  prompt("select an option");  
    var computerSelection = getComputerChoice(choices);
    if(playerSelection === "Paper" && computerSelection === "Rock"){
          playerScore ++
          console.log("You win! Paper beats Rock");
          console.log("scores =" + playerScore + ":" + computerScore);
    }else if(playerSelection === "Scissors" && computerSelection === "Paper"){
         playerScore ++
         console.log("You win! Scissors beats Paper");
         console.log("scores =" + playerScore + ":" + computerScore);
    }else if(playerSelection === "Rock" && computerSelection == "Scissors"){
         playerScore ++
         console.log("you win! Rock beats scissors");
         console.log("scores =" + playerScore + ":" + computerScore);
    }else if(playerSelection === computerSelection){
         console.log("tie");
         console.log("scores =" + playerScore + ":" + computerScore);
    }else{
         console.log("You loose");
         computerScore ++
         console.log("scores =" + playerScore + ":" + computerScore);
    }
    
 } 

 function game(){
    for ( let i = 0; i < 5; i++){
      playRound();
   }
}
  game();
 if( playerScore > computerScore){
   console.log("You win the game");
}else if(playerScore < computerScore){
   console.log("You lost the game");
}else{
   console.log("A tie game");
}

  
 
