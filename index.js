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
}