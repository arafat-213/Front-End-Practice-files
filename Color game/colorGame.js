var colors = generateRandomColors(6);

var pickedColor = pickColor();

var squares = document.querySelectorAll(".square");

var colorDisplay = document.getElementById("colorDisplay");

var message = document.querySelector("#message");

var h1 = document.querySelector("h1");

var resetButton = document.querySelector("#resetButton");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor) {
			message.textContent = "Correct";
			changeColor(pickedColor);
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again?"
		} else {
			this.style.backgroundColor = "#232323";
			message.textContent = "Try again";
		}
	});
}

function changeColor(color) {
	for(var i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor())
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b +")";
}

resetButton.addEventListener("click", function() {
	colors = generateRandomColors(6);

	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
	 squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
});