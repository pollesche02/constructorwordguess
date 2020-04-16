var Word = require("./word.js");
var inquirer = require("inquirer");

//letters for all the words
var letterArray = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v", "w","x","y","z",];

//different words that people can guess from
var Flowers = ["sunflower", "lilac", "iris", "lily", "rose", "daisey"];

var randomIndex = Math.floor(Math.random() * Flowers.length);
var randomWord = Flowers[randomIndex];

computerWord = new Word(randomWord);
// console.log("word", computerWord);

var wordtoshow = computerWord.log();
console.log("wordtoshow", wordtoshow.split(""));

var requireNewWord = false;
//Now I need to show all the guessed words
var incorrectLetters = [];
var correctLetters = [];

var remainingGuesses = 10;

var colors = require("colors");

function knowledge(requireNewWord) {
  if (requireNewWord) {
    var randomIndex = Math.floor(Math.random() * Flowers.length);
    var randomWord = Flowers[randomIndex];
    computerWord = new Word(randomWord);
    requireNewWord = false;
    console.log("requireNewWord:", requireNewWord);
  }

  var wordComplete = [];
  console.log("wordComplete:", wordComplete);
 // computerWord.objArray.forEach(completeCheck);
 // if (wordComplete.includes(false)) {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Guess Your Next Letter Now",
          name: "userinput",
        },
      ])
      .then(function (input) {
        // verify the letter using the method checkletter
        //loop and call the checkletter for every letter in the array passing the input
        computerWord.userGuess(input.userinput);
        wordtoshow = computerWord.log();
        console.log("-->", wordtoshow.split(""));
      //  console.log(computerWord)
        if (wordtoshow.includes("_")) {
          console.log("keepgoing");
          // verify the attemps
          // if more than 10 lost and call restart game else call knowledg()
          knowledge();
        } else {
          function alert(win) {;
      restart ()
          }
        }
      });
  
}
knowledge();

//         if (!letterArray.includes(input.userinput) || input.userinput.length >1) {
//             console.log("Please Try Again!".RED);
//             knowledge();
//         } else {
//             if (incorrectLetters.includes(input.userinput) || correctLetters.includes(input.userinput) || input.userinput === "") {
//                 console.log("Already Guessed or Nothing Entered".blue);
//                 knowledge();
//             } else {

//                 var wordCheckArray = [];
//             computerWord.userGuess(input.userinput);

//             computerWord.objArray.forEach(wordCheck);
//             if(wordCheckArray.join (' ') === wordComplete.join(' ')) {
//                 console.log("Incorrect.RED");

//                 incorrectLetters.push(input.userinput);
//                 remainingGuesses--;
//             } else {
//                 console.log("Correct!".Purple);

//                 correctLetters.push(input.userinput);
//             }

//             computerWord.log();

//             console.log("Your Guesses: " + incorrectLetters.join(" ") + " ");

//             if (guessesLeft > 0) {
//                 knowledge();
//             } else {
//                 console.log(" :-( You Lost !".red);

//                 restartGame();
//             }

//             function wordCheck(key) {
//                 wordCheckArray.push(key.guessed);
//             }

//         }
//     }

//     })
//   } else {
//       console.log(":-) You Won !!".green);

//       restartGame();
//   }

//   function completeCheck(key) {
//       wordComplete.push(key.guessed);
//   }

// }

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
                knowledge(true);
            } else {
                return
            }
        })
}
knowledge();
