(function() {
var player;

function startGame() {
	player = new component(30, 30, "red", 225, 225);
}


var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');

window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
	canvas.width = document.body.clientWidth - 50;
	canvas.height = document.body.clientHeight - 50;
	
	//drawing goes inside this function
	// vvvvvv
	draw();
}	
resizeCanvas();

function component(width, height, color, x, y) {
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	context = canvas.context;
	context.fillStyle = color;
	context.fillRect(this.x, this.y, this.width, this.height);
}
function draw() {
	context.beginPath();
	context.fillStyle = "blue";
	context.fillRect(20, 20, 150, 100);
	context.fillStyle = "red";
	context.fillRect(200, 50, 100, 100);
	context.fillRect((canvas.width / 2) - 50, 75, 100, 100);
	context.stroke();
	context.closePath();
	
}

})();