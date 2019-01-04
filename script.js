var css = document.querySelector("h3");
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient");
var input1= document.getElementsByTagName("input")[0].value = color1.value; 


function setGradient() {
	body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";"
}

window.onload = setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);