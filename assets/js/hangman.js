// This is an array of words 
var word = ["Ocean", "Boat", "Sand", "Lifeguard", "Lotion", "Bikini", "Dolphin", "Umbrella", "Volleyball", "Towel", "Hat", "Sandals"];

// Choose word randomly
var randomNumber= Math.floor(Math.random() * word.length); 
var chosenWord =  word[randomNumber];
var rightWord = [];
var wrongWord = [];
var underScore = [];
console.log(chosenWord);

// Dom manipulation
var docUnderScore = document.getElementsByClassName("underscore");
var docRightGuess = document.getElementsByClassName("rightGuess");
var docWrongGuess = document.getElementsByClassName("wrongGuess");

// Create underscores based on length of word
var getUnderscore = () => {
    for (var i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
        docUnderScore[0].innerHtml = underScore.join('')
    }
    return underScore;
}

console.log(getUnderscore());

// Get users guess 
document.addEventListener("keypress", (event) => {
    var keyword = String.fromCharCode(event.keyCode);
    console.log(keyword);

//If Users guess is right 
    if(chosenWord.indexOf(keyword) > -1) {
        console.log(true); 

 //right words array
    rightWord.push(keyword);
    console.log(rightWord); 

//replace underscore with right letter 
    underScore[chosenWord.indexOf(keyword)] = keyword;
    docUnderScore[0].innerHTML = underScore.join('');
    docRightGuess[0].innerHTML = rightWord.join('');
    docWrongGuess[0].innherHTML = wrongWord.join('');

// confirm if user word matches guesses
    if(underScore.join('') == chosenWord); {
        alert("You got it!");
    }
}
    else {
        wrongWord.push(keyword);
        alert("Woops, keep trying!")
    }


    
});

//Check if guess is correct
// If correct push to correct array
// If wrong push to incorrect array
