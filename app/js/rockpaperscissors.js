////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove() {
    // Write an expression that operates on a variable called `move`
    var move;
    var playerMove;
    move = getInput();

    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move === null) {
        getInput();
    }
    // If a `move` has a value, your expression should evaluate to that value.
    else {
        playerMove = move;
    }

    return playerMove;
}

function getComputerMove() {
    
    // Write an expression that operates on a variable called `move`
    var move;
    var computerMove;
    move = randomPlay();

    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move === null) {
        computerMove = randomPlay();
    }
    // If a `move` has a value, your expression should evaluate to that value.
    else {
        computerMove = move;
    }
    
    return computerMove;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    // console.log("player has " + playerMove);
    // console.log("computer has " + computerMove);
    
    if ((playerMove == "rock") || (playerMove == "paper") || (playerMove == "scissors"))
    {
        if ((playerMove == "rock") && (computerMove == "scissors"))     {
            winner = "player" + " wins en 1!!!!";            
        }
        else if ((playerMove == "paper") && (computerMove == "rock"))
        {
            winner = "player" + " wins en 2!!!!";
        }
        else if ((playerMove == "scissors") && (computerMove == "paper"))
        {
            winner = "player" + " wins en 3!!!!";
        }
        else if ((playerMove == "rock") && (computerMove == "paper"))
        {
            winner = "computer" + " wins en 4!!!!";
        }
        else if ((playerMove == "paper") && (computerMove == "scissors"))
        {
            winner = "computer" + " wins en 5!!!!";
        }
        else if ((playerMove == "scissors") && (computerMove == "rock"))
        {
            winner = "computer" + " wins en 6!!!!";
        }
        else{
            winner = "tie" + " wins en 7!!!!";
        }
    }
    else{
        winner = "Wrong choice! Try again!";
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

var p1;
var p2;
p1 = getPlayerMove();
p2 = getComputerMove();

var winner;
winner = getWinner(p1,p2);
console.log(winner);
