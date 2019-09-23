var crystalArray = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12];

var crystalCounter = crystalArray[Math.floor(Math.random() * crystalArray.length)];

$("#magicNumber").text(crystalArray);

$("#crystal1").on("click", function() {

crystalCounter++;
console.log(crystalCounter);



});

