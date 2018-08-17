
//list of possible choices for computer
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

//variable to hold count of wins/losses/leftGuesses/userChoices
var wins = 0;
var losses = 0;
var leftGuesses = 9;
var userChoices = [];

//grab a reference to the html element I will be interfacing with
var $gameElement = document.getElementById("game");

//Whenever a key is pressed, alert "pressed a button"
document.onkeyup = function (event) {


    // set userGuess from event 
    var userGuess = event.key;

    // get computerChoice at random 
    var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // list of possible choices for user
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    if (options.indexOf(userGuess) > -1) {
        if (userGuess === computerChoice) {
            wins++;
            leftGuesses = 9;
            userChoices = [];
        }

        if (userGuess != computerChoice) {
            leftGuesses--;
            userChoices.push(userGuess);
        }

        if (leftGuesses === 0) {

            leftGuesses = 9;
            losses++;
            userChoices = [];

        }
        //adding the HTML body 
        document.body.innerHTML = ("<h1> The Psychic Game " + "</h1>") + ("<p>Guess what letter I'm thinking of " + "</p>") + ("<p>Wins: " + wins + "</p>") + ("<p>Losses: " + losses + "</p>") + ("<p>Guesses Left: " + leftGuesses + "</p>") + "<p>Your Guesses so far: " + userChoices + "</p>";

        $gameElement.textContent = gameHTML;
    }
}

