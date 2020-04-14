function Letter(letter) {
    this.letter = letter;
    this.guessed = false;

    this.getCharacter = function() {
        if(!this.guessed) {
            return "_";
        } else {
            return this.letter
        }
    }

    this.checkLetter = function(guess) {
    //    console.log("guess", guess, this.letter)
        if(guess === this.letter) {
            this.guessed = true;
       
        }
    }
}

module.exports = Letter;