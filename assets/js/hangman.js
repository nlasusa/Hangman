// This is an array of words 
var word = ["Ocean", "Boat", "Sand", "Lifeguard", "Lotion", "Bikini", "Dolphin", "Umbrella", "Volleyball", "Towel", "Hat", "Sandals"];

// Choose word randomly
var randomNumber= Math.floor(Math.random() * word.length); 
var chosenWord =  word[randomNumber];
var underScore = [];
console.log(chosenWord);

// Create underscores based on length of word
var getUnderscore = () => {
    for (var i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

console.log(getUnderscore());

// Get users guess 
document.addEventListener("keypress", (event) => {
    var keyCode = event.keyCode;
    var keyWord = String.fromCharCode(keyCode);
    console.log(keyWord);

    if(chosenWord.indexOf(keyWord) > -1) {
        console.log(true); 
    }
});

//Check if guess is correct
// If correct push to correct array
// If wrong push to incorrect array
