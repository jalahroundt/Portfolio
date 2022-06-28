let starting_pointX = 0;
let starting_pointY = 0;
let multiplier = 1;
let numMult = 1;
let color = 'red';
let hexColor = '#ff0000';

/*-- Resets ball to initial position and color --*/
function reset(){
    document.getElementById("ball").style.backgroundColor = 'red';
    document.getElementById("ball").style.transform = "translate(0px , 0px)";
    starting_pointX = 0;
    starting_pointY = 0;
}
/*-- Decrease translate y value --*/
function moveUp() {
    starting_pointY = starting_pointY - multiplier;
    document.getElementById("ball").style.transform = "translate("+starting_pointX+"px , "+starting_pointY+"px)";
}

/*-- Increase translate y value --*/
function moveDown() {
    starting_pointY = starting_pointY + multiplier;
    document.getElementById("ball").style.transform = "translate("+starting_pointX+"px , "+starting_pointY+"px)";
}

/*-- Decrease translate x value --*/
function moveLeft() {
    starting_pointX = starting_pointX - multiplier;
    document.getElementById("ball").style.transform = "translate("+starting_pointX+"px , "+starting_pointY+"px)";
}

/*-- Increase translate x value --*/
function moveRight() {
    starting_pointX = starting_pointX + multiplier;
    document.getElementById("ball").style.transform = "translate("+starting_pointX+"px , "+starting_pointY+"px)";
}

/*-- Take in button value as parameter, changes the multiplier for movement range --*/
function setMultiplier(numMult) {
    multiplier = numMult;
}

/*-- Takes in dropdown menu value as parameter, changes ball color --*/
function changeBallColor(color) {
    document.getElementById("ball").style.backgroundColor = color;
}

/*-- Takes in input text value as parameter, changes ball color --*/
function changeBallColorHex (){
    hexColor = document.getElementById("hex-code").value;
    document.getElementById("ball").style.backgroundColor = "#"+hexColor;
}