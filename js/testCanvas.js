var drawButton = document.querySelector(".drawButton");
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function getRandomInt(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1) + min); //Stolen. Don't understand. Send help. Plz
}

function drawShape(){


ctx.fillStyle = "blue";
ctx.fillRect(getRandomInt(1,750),getRandomInt(1,900),150,75);
}

drawButton.onclick = function() {drawShape();}

