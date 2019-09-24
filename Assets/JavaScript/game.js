var crystalArray = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12];

var crystalCounter = crystalArray[Math.floor(Math.random() * crystalArray.length)];

var magicNumArray = [19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58, 61, 64, 67, 70, 73, 76, 79, 82, 85, 88, 91, 94, 97, 100, 103, 106, 109, 112, 115, 118, 120]

var magicNumCount = magicNumArray[Math.floor(Math.random() * magicNumArray.length)];

$("#crystal1").append(crystalCounter);

$("#magicNumber").text(magicNumCount);

$("#crystal1").on("click", function() {

if (playerScore === crystalCounter)
    
    playerScore++;
    console.log(crystalCounter);



});





