var Letter = require("./letter.js");

function Word(answer) {
    // array for each letter 
    this.objArray = [];

    for(var i = 0; i < answer.length; i++) {
        var letter = new Letter(answer[i]);
        this.objArray.push(letter);
    }

    this.log = function () {
        answerLog = "";
        for (var i = 0; i < this.objArray.length; i++) {
            answerLog += this.objArray[i] .getCharacter(this.objArray[i].letter)
        }
        console.log(answerLog + "\n");
        return answerLog
    }

    this.userGuess = function (input) {
        console.log("input:", input)
        for (var i = 0; i < this.objArray.length; i++) {
            this.objArray[i].checkLetter(input)
         
        }

    }
}

module.exports = Word;