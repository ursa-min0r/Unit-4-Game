//Variables//
var crystalArray = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12];
var crystalCounter1 = [crystalArray[Math.floor(Math.random() * crystalArray.length)]];
var crystalCounter2 = [crystalArray[Math.floor(Math.random() * crystalArray.length)]];
var crystalCounter3 = [crystalArray[Math.floor(Math.random() * crystalArray.length)]];
var crystalCounter4 = [crystalArray[Math.floor(Math.random() * crystalArray.length)]];
var magicNumArray = [19, 22, 25, 28, 31, 34, 37, 
    40, 43, 46, 49, 52, 55, 58, 61, 64, 67, 
    70, 73, 76, 79, 82, 85, 88, 91, 94, 97, 
    100, 103, 106, 109, 112, 115, 118, 120]
var magicNumCount = magicNumArray[Math.floor(Math.random() * magicNumArray.length)];
var playerScore = 0;
var score = 0;
var wins = 0;
var losses = 0;
//Functions//
$("#magicNumber").text(magicNumCount);
$("#crystal1").attr("data-value", crystalCounter1);
$("#crystal2").attr("data-value", crystalCounter2);
$("#crystal3").attr("data-value", crystalCounter3);
$("#crystal4").attr("data-value", crystalCounter4);
$("#yourTotal").text(playerScore);
$("#crystalWins").text(wins);
$("#crystalLosses").text(losses);
$("#crystal1").on("click", function() {
    score = $(this).attr("data-value");
    
    playerScore += parseInt(score);
    check();
});
$("#crystal2").on("click", function() {
    score = $(this).attr("data-value");
    
    playerScore += parseInt(score);
    check();
});
$("#crystal3").on("click", function() {
    score = $(this).attr("data-value");
    
    playerScore += parseInt(score);
    check();
});
$("#crystal4").on("click", function() {
    score = $(this).attr("data-value");
    
    playerScore += parseInt(score);
    
    check();
});
function check() {
    if (playerScore === magicNumCount) {
        
        wins++;
        
        $("#crystalWins").text(wins);
        
        console.log("Wins: " + wins);
        
        playerScore = 0;
        
    }
    else if (playerScore > magicNumCount) {
        
        losses++;
        $("#crystalLosses").text(losses);
        
        console.log("Losses: " + losses);
        
        playerScore = 0;
        
    } else {
        console.log("player score is less than count");
        $("#yourTotal").text(playerScore);
        console.log(score, playerScore);
    }
};