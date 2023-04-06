var a = Math.floor(Math.random()*6+1);

var b = "dice"+a+".png";

var c = "images/"+b;

var firstimg = document.querySelectorAll("img")[0];
firstimg.setAttribute("src", c);

var d = Math.floor(Math.random()*6+1);

var e = "dice"+d+".png";

var f = "images/"+e;

var secondimg = document.querySelectorAll("img")[1];
secondimg.setAttribute("src", f);

if(a>d){
  document.querySelector("h1").innerHTML="🚩Player1 Wins!";
}
else if (a<d) {
  document.querySelector("h1").innerHTML="Player2 Wins🚩!";
}else {
  document.querySelector("h1").innerHTML="DRAW😶";
}
