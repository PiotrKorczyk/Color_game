var divsTab= [
document.querySelector("#color-box-0"),
document.querySelector("#color-box-1"),
document.querySelector("#color-box-2"),
document.querySelector("#color-box-3"),
document.querySelector("#color-box-4"),
document.querySelector("#color-box-5")];

var correctColor;

function randomizeIntegerNumber(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

function randomRGBColor(){
	var R,G,B;

	return{
		R: randomizeIntegerNumber(0,255),
		G: randomizeIntegerNumber(0,255),
		B: randomizeIntegerNumber(0,255)
	}

}


function setColorToSixDivs(divsTab){
	var rgb = randomRGBColor();
	var _divsTab = divsTab.slice();
	document.querySelector("h1").innerHTML = "RGB("+rgb.R+", "+rgb.G+", "+rgb.B+")";
	document.querySelector("#result").style.display = "none";

	_divsTab.sort(function(a, b){return 0.5 - Math.random()});
	_divsTab[0].style.background = "rgb("+rgb.R+","+rgb.G+","+rgb.B+")";
	_divsTab[0].innerHTML = "rgb("+rgb.R+","+rgb.G+","+rgb.B+")";
	_divsTab[0].style.display = "block";

	for(var i =1; i <=5; i++){
		rgb = randomRGBColor();
		_divsTab[i].style.background = "rgb("+rgb.R+","+rgb.G+","+rgb.B+")";
		_divsTab[i].style.display = "block";
	}
	return _divsTab[0].style.background;
}

function checkChoice(obj){
	if(obj.style.background === correctColor){
		document.querySelector("#result").innerHTML = "Victory!";
		document.querySelector("#result").style.display = "block";
	}
	else {
		document.querySelector("#result").innerHTML = "Try again!";
		obj.style.display = "none";	
		document.querySelector("#result").style.display = "block";
	}
}

// --- EVENT LISTENERS ---

document.querySelector("#new-colors").addEventListener("click",function(){
	correctColor = setColorToSixDivs(divsTab);
});

divsTab[0].addEventListener("click",function(){
	checkChoice(divsTab[0]);
});

divsTab[1].addEventListener("click",function(){
	checkChoice(divsTab[1]);
});

divsTab[2].addEventListener("click",function(){
	checkChoice(divsTab[2]);
});

divsTab[3].addEventListener("click",function(){
	checkChoice(divsTab[3]);
});

divsTab[4].addEventListener("click",function(){
	checkChoice(divsTab[4]);
});

divsTab[5].addEventListener("click",function(){
	checkChoice(divsTab[5]);
});


