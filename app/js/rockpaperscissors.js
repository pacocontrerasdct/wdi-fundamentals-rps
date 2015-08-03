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
    
    if((move == "rock") || (move == "paper") || (move == "scissors")){
        //playerMove = move;
        return move;
    }
    else{
        console.log('Word unknown, Try it again!');
        move = '';
        return getPlayerMove();
    }  
}

function getComputerMove() {
    // Write an expression that operates on a variable called `move`
    var move;
    var computerMove;
    move = randomPlay();
    if (move === null) {// However, if `move` is not specified/null, your expression should equal `randomPlay()`
        computerMove = randomPlay();
    }
    else {//If a `move` has a value, your expression should evaluate to that value
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
        if((playerMove == 'rock' && computerMove == 'scissors')
            || (playerMove == 'paper' && computerMove == 'rock')
            || (playerMove == 'scissors' && computerMove == 'paper'))
        {
            winner = "player";            
        }
        else if((playerMove == 'rock' && computerMove == 'paper')
            || (playerMove == 'paper' && computerMove == 'scissors')
            || (playerMove == 'scissors' && computerMove == 'rock'))
        {
            winner = "computer";
        }
        else{
            winner = "tie";
        }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var tie = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    // After each 'round', display some text in the console indicating who played what, who won, and what the current scoreboard looks like.
      // For example,
      //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
      //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    /* YOUR CODE HERE */

    var i = 5;
    
    while (playerWins <= i || computerWins <= i)
    {
        var p1;
        var p2;
        p1 = getPlayerMove();
        p2 = getComputerMove();
        
        var winner;
        winner = getWinner(p1,p2);
        
        if(winner === "player"){
            playerWins += 1;  
        }
        else if(winner === "computer"){
            computerWins += 1;
        }
        else if(winner === "tie"){
            tie += 1;
        }
        else{}
        
        console.log('Player chose ' + p1 + ' while Computer chose ' + p2);
        console.log('The score is currently player ' + playerWins + ' - computer ' + computerWins + '. Tie: ' + tie + '.\n');
        
        if(playerWins === i){
            return console.log('You won to the Computer ' + playerWins + ' times');
        }
        else if(computerWins === i){
            return console.log('Computer won you ' + computerWins + ' times');
        }
    }
}

playToFive();
