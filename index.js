// This code will perform when a selection is made
function selectionMade(element, selectedPokemon){
    clear(); // Clear selections
    selectedPokemon = selectedPokemon.toLowerCase();

    colorUserSelection(selectedPokemon);

    let computerChoice = getComputerChoice().toLowerCase();
    colorComputerSelection(computerChoice);

    let winner = getWinner(selectedPokemon, computerChoice);

    currentScore = getCurrentScore(winner);

    setScore(winner, currentScore);

    displayMessage(winner);
}

// Clears any selections made in the prior round
function clear(){
    document.getElementById("left-char").style.backgroundColor = "white";
    document.getElementById("left-bulb").style.backgroundColor = "white";
    document.getElementById("left-squi").style.backgroundColor = "white";

    document.getElementById("right-char").style.backgroundColor = "white";
    document.getElementById("right-bulb").style.backgroundColor = "white";
    document.getElementById("right-squi").style.backgroundColor = "white";
}

// Generates a choice for the computer, returns choice
function getComputerChoice(){
    let choices = ["Charmander", "Bulbasaur", "Squirtle"];

    let choiceNum = Math.floor(Math.random() * 3);

    return choices[choiceNum];
}

// Finds and returns the winner of the round
function getWinner(selectedPokemon, computerChoice){
    if(selectedPokemon == "charmander"){
        if(computerChoice == "bulbasaur"){
            return "Player";
        }else if(computerChoice == "squirtle"){
            return "Computer";
        }
    }else if(selectedPokemon == "bulbasaur"){
        if(computerChoice == "squirtle"){
            return "Player";
        }else if(computerChoice == "charmander"){
            return "Computer";
        }
    }else if(selectedPokemon == "squirtle"){
        if(computerChoice == "charmander"){
            return "Player";
        }else if(computerChoice == "bulbasaur"){
            return "Computer";
        }
    }

    return "Draw";
}

// Colors the background of the user's selected Pokemon
function colorUserSelection(selectedPokemon){
    if(selectedPokemon == "charmander"){
        document.getElementById("left-char").style.backgroundColor = "red";
    }else if(selectedPokemon == "bulbasaur"){
        document.getElementById("left-bulb").style.backgroundColor = "red";
    }else{
        document.getElementById("left-squi").style.backgroundColor = "red";
    }
}

// Colors the background of the computer's selected Pokemon
function colorComputerSelection(selectedPokemon){
    if(selectedPokemon == "charmander"){
        document.getElementById("right-char").style.backgroundColor = "red";
    }else if(selectedPokemon == "bulbasaur"){
        document.getElementById("right-bulb").style.backgroundColor = "red";
    }else{
        document.getElementById("right-squi").style.backgroundColor = "red";
    }
}

// Replaces the text in the middle text box after a winner is found
function displayMessage(winner){
    if(winner == "Draw"){
        document.getElementById("round-text-label").textContent = "It's a draw!";
    }else{
        document.getElementById("round-text-label").textContent = winner + " wins!";
    }
}

// Updates the text on the webpage that displays the current score
function setScore(winner, currentScore){
    if(winner == "Player"){
        document.getElementById("user-score-label").textContent = "Score: " + (currentScore + 1).toString();
    }else if(winner == "Computer"){
        document.getElementById("computer-score-label").textContent = "Score: " + (currentScore + 1).toString();
    }
}

// Returns the current score for a player when called
function getCurrentScore(winner, currentScore){
    if(winner == "Player"){
        text = document.getElementById("user-score-label").textContent.toString(); // Get value as text
        text = text.replace(/\D/g, ""); // Remove all non-digits
        currentScore = parseInt(text); // Store the score as an integer
        return currentScore;
    }else{
        text = document.getElementById("computer-score-label").textContent.toString();
        text = text.replace(/\D/g, "");
        currentScore = parseInt(text);
        return currentScore;
    }
}