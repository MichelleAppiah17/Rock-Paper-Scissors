
    const buttons = document.querySelectorAll("button");
    const result = document.querySelector("#result");
    const userScore = document.querySelector("userScore");
    const computerScore = document.querySelector("#computerScore");
    let userScoreCount = 0;
    let computerScoreCount = 0;
    buttons.forEach((button) => {
    button.addEventListener("click", playRound);
    });


 function playRound(e){
    var userChoice = e.target.id;  
    var computerChoice = getComputerChoice();
    var resultText = getResult(userChoice, computerChoice);
    result.innerHTML=`You chose ${userChoice}, computer chose ${computerChoice}.${resultText}`;
    updateScore(resultText);
   }
 
 function getComputerChoice(){
     let choices = ["rock","paper","scissors"];
     let randomIndex = Math.floor(Math.random() * choices.length);
     return choices[randomIndex];
   }

 function getResult(user,computer){
     if (user === computer){
          return "it's a tie!";
     }else if(
         (user === "rock" && computer === "scissors") ||
         (user === "paper" && computer === "rock") ||
         (user === "scissors" && computer === "paper") 
     ) {
          return "You win!";
     }else{
          return "You lose.";
     }   
  }

function updateScore(result){
     if (result === "You win!"){
          userScoreCount++;
          userScore.innerHTML = userScoreCount;
     }else if(result === "you loose."){
          computerScoreCount++;
          computerScore.innerHTML = computerScoreCount;
     }
  }


 
