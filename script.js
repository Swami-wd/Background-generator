var css = document.querySelector("h3");
var color1 = document.querySelector(".color1"); 
// JUST like CSS class indentifier .css = quesrySelector (".color1")
var color2 = document.querySelector(".color2"); 
var body = document.getElementById("gradient");

// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);

//to change : body.style.background = "red" ;

function setGradient(){ 
		body.style.background = 
		   "linear-gradient(to right, " 
		   + color1.value 
		   + ", "
		   + color2.value 
		   + ")";

		   css.textContent = body.style.background + ";";
	       // will display color values on body
	  }; 

// color1.addEventListener("input",setGradient);
// // we don't need to setGradient() call a function 
// //b coz input will trigger event auto
// color2.addEventListener("input",setGradient);