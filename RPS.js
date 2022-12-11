function getComputerChoice(arr){
  let randomValue= Math.floor(Math.random() * arr.length);
  return arr[randomValue];
}
    const computerChoice=["Rock","Paper","Scissors"]; 
   console.log(getComputerChoice(computerChoice));


    function playRound(playerSelection, computerSelection){
       if(playerSelection === "Rock" && computerSelection === "Paper"){
         return "You loose! Paper beats Rock";
        }  
    }

   const playerSelection = "Rock";
    const computerSelection = getComputerChoice(computerChoice);
    console.log(playRound(playerSelection, computerSelection));
      

    var computerScore = 0;
    var playerScore = 0;
   for ( let i = 0; i < 5; i++){
    var playerChoice = prompt("select an option");  
    var score = 0;

        function game(){

        playRound(playerSelection, computerSelection);
        if(playerChoice === "Paper" && computerChoice === "Rock"){
             playerScore ++
             console.log("You win! Paper beats Rock");
             console.log("scores =" + playerScore + ":" + computerScore);
        }else if(playerChoice === "Scissors" && computerChoice === "Paper"){
             playerScore ++
             console.log("You win! Scissors beats Paper");
             console.log("scores =" + playerScore + ":" + computerScore);
        }else if(playerChoice === "Rock" && computerChoice == "Scissors"){
             playerScore ++
             console.log("you win! Rock beats scissors");
             console.log("scores =" + playerScore + ":" + computerScore);
        }else if(playerChoice === computerChoice){
             console.log("tie");
             console.log("scores =" + playerScore + ":" + computerScore);
        }else{
             console.log("You loose");
             computerScore ++
             console.log("scores =" + playerScore + ":" + computerScore);
        }
     } 
    };

       
       if( playerScore > computerScore){
          console.log("winner");
       }else{
          console.log("looser");
     }
    