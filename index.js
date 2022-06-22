var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
var randomdice1 = "images/dice" + randomNumber1 + ".png";
var randomNumber2 = Math.floor((Math.random() * 6)) + 1;
var randomdice2 = "images/dice" + randomNumber2 + ".png";
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Its a TIE";
}
document.querySelector(".img1").setAttribute("src",randomdice1);
document.querySelector(".img2").setAttribute("src",randomdice2);

