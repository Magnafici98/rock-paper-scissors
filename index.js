let running = true;
let gamesPlayed = 0;
let result;
let userScore = 0;
let computerScore = 0;
let draws = 0;
let playAgain;
let winner;

while(running){
    // Asking the player to make a selection
    playerSelection = prompt("Rock, Paper, or Scissors?");

    // Playing a game of Rock, Paper, Scissors and getting the result
    result = playRound(playerSelection, computerPlay());

    // Adds to point total depending on who won the current game
    if(result.startsWith("You win")){
        userScore++;
        winner = "Human";
    }else if(result.startsWith("You lose")){
        computerScore++;
        winner = "Robot";
    }else{
        winner = "Draw";
        draws++;
    }

    // Increment the games played by 1.
    gamesPlayed++;

    // Displays winner of the round, games played, and scores
    alert("Games Played: " + gamesPlayed + "\nResult: " + winner +
            "\nHuman Score: " + userScore + "\tRobot Score: " + computerScore);

    // If 5 games have been played, signal the end of the game to function handleEnd()
    if(gamesPlayed == 5){
        handleEnd(userScore, computerScore);
    }
}

/* This function will look at the array of possible options
    and return a random choice using Math.random */
function computerPlay(){
    let playOptions = ["Rock", "Paper", "Scissors"]
    let play = Math.floor(Math.random() * 3);
    return playOptions[play];
}

/* This function will play a round of Rock, Paper, Scissors using the user's choice as
well as the computer's random choice */
function playRound(playerSelection, computerSelection){
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();
    
    // If the choices are the same, the result is a tie
    if(ps == cs){
        return "It's a tie!";
    }

    // The following code will evaluate the different results given the two choices
    if(ps == "rock"){
        if(cs == "paper"){
            return "You lose! Paper beats Rock!";
        }else if(cs == "scissors"){
            return "You win! Rock beats Scissors!";
        }
    }else if(ps == "paper"){
        if(cs == "scissors"){
            return "You lose! Scissors beats Paper!";
        }else if(cs == "rock"){
            return "You win! Paper beats Rock!";
        }
    }else if(ps == "scissors"){
        if(cs == "rock"){
            return "You lose! Rock beats Scissors!";
        }else if(cs == "paper"){
            return "You win! Scissors beats Paper!";
        }
    }
}

// This function will determine when a game will end and what to do when it does
function handleEnd(userScore, computerScore){
    // Display the final scores and who won the game
    if(userScore > computerScore){
        alert("Final score" +
        "\nHuman: " + userScore.toString() +
        "\nComputer: " + computerScore.toString() +
        "\nDraws: " + draws.toString() +
        "\nYou beat the Computer!");
    }else if(userScore < computerScore){
        alert("Final score\n" +
        "\nHuman: " + userScore.toString() +
        "\nComputer: " + computerScore.toString() +
        "\nDraws: " + draws.toString() +
        "\nThe Computer beat you!");
    }else{
        alert("Final score\n" +
        "\nHuman: " + userScore.toString() +
        "\nComputer: " + computerScore.toString() +
        "\nDraws: " + draws.toString() +
        "\nYou tied with the Computer!");
    }

    // Ask the user if they would like to play the game again
    playAgain = prompt("Play again?").toLowerCase();

    if(playAgain == "yes"){ // If the user responds yes, reset the game state
        reset();
    }else{ // If the user responds no, do not play any more games
        running = false;
    }
}

// Resets the game state so that another game can be played
function reset(){
    gamesPlayed = 0;
    result = null;
    userScore = 0;
    computerScore = 0;
    draws = 0;
}