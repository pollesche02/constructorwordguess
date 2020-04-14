var Word = require("./word.js");
var inquirer = require("inquirer");

//letters for all the words
var letterArray = "abcdefghijklmnopqrstuvwxyz";

//different words that people can guess from
var Flowers = ["Sunflower", "Jasmine", "Iris", "Lily", "Rose", "Daisey"];

var randomIndex = Math.floor(Math.random() * Flowers.length);
var randomWord = Flowers[randomIndex];

computerWord = new Word(randomWord);

//Now I need to show all the guessed words
var incorrectLetters = [];
var correctLetters = [];

var remainingGuesses = 10;

function knowledge() {
    if (requireNewWord) {
        var randomIndex = Math.floor(Math.random() * Flowers.length);
        var randomWord = Flowers[randomIndex];
        computerWord = new Word(randomWord);

        requireNewWord = false;
    }

 var wordComplete = [];
computerWord.objArray.forEach(completeCheck);
if (wordComplete.includes(false)) {
    inquirer
    .prompt([
        {
            type: "input",
            message: "Guess Your Next Letter Now",
            name: "userinput"
        }
    ])
    .then(function (input) {
        if (!letterArray.includes(input.userinput) || input.userinput.length >1) {
            console.log("\nPlease Try Again!.RED\n");
            knowledge();
        } else {
            if (incorrectLetters.includes(input.userinput) || correctLetters.includes(input.userinput) || input.userinput === "") {
                console.log("\Already Guessed or Nothing Entered\n");
                knowledge();
            } else {
                
                var wordCheckArray = [];
            computerWord.userGuess(input.userinput);

            computerWord.objArray.forEach(wordCheck);
            if(wordCheckArray.join (' ') === wordComplete.join(' ')) {
                console.log("\nIncorrect.RED\n)");

                incorrectLetters.push(input.userinput);
                remainingGuesses--;
            } else {
                console.log("\nCorrect!.Purple\n");

                correctLetters.push(input.userinput);
            }
            
            computerWord.log();

            console.log("Your Guesses: " + incorrectLetters.join(" ") + "\n");

            if (guessesLeft > 0) {
                knowledge();
            } else {
                console.log(" :-( You Lost !");

                restartGame();
            }

            function wordCheck(key) {
                wordCheckArray.push(key.guessed);
            }

        }
    }
    
    })
  } else {
      console.log(":-) You Won !!");

      restartGame();
  }


  function completeCheck(key) {
      wordComplete.push(key.guessed);
  }

}

function restartGame() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Do You Want To Play Againm ?? ",
                choices: ["Yes", "No"],
                name: "Play Again"
            }
        ])

        .then(function (input) {
            if (input.restart === "Play Again") {
                requireNewWord = true;
                incorrectLetters = [];
                correctLetters = [];
                guessesLeft = 10;
                knowledge();
            } else {
                return
            }
        })
}

knowledge();