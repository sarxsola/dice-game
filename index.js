/* DICE 1 NUMBER GENERATOR */

function randomNumber1(){
    return Math.floor((Math.random() * 6) + 1);
}

var dice1 = '/images/dice' + randomNumber1() + '.png';

document.querySelector(".img1").setAttribute("src", dice1);



/* DICE 2 NUMBER GENERATOR */

function randomNumber2(){
    return Math.floor((Math.random() * 6) + 1);
}

var dice2 = '/images/dice' + randomNumber1() + '.png';

document.querySelector(".img2").setAttribute("src", dice2);



/* CHANGE THE TITLE TO WINNER OR DRAW */

if(dice1 > dice2) {
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS 🚩"
}
else if(dice1 < dice2) {
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS 🚩"
}
else {
    document.querySelector("h1").innerHTML = "🚩 DRAW 🚩"
}