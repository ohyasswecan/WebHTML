const canvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

const numberOfBugs = 0;
const bugArray = [];

const player = {
	width: 30,
	height: 60,
	x: 600,
	y: 450,
	speed: 5,
	dxl: 0,
	dxr: 0,
	dyu: 0,
	dyd: 0
};

class Bug {
	constructor() {
		this.x = Math.random() * canvas.width;
		this.y = 0;
		this.width = 10;
		this.height = 10;
		this.speed = Math.random() * 2 + 1;
		this.angle = 0;
		this.angleSpeed = Math.random() * 0.2;
		this.curve = Math.random() * 6;
		this.bugs = [];
		this.bugTimer = 0;
		this.bugInterval = 1000;
	}
	update() {
		this.x += this.curve * Math.sin(this.angle);
		this.y -= this.speed;
		this.angle += this.angleSpeed;
		if(this.y + this.height < 0) this.y = canvas.height;
		if(this.x + this.width < 0) this.x = canvas.width;
		
		if (this.bugTimer > this.bugInterval)	{
			this.addBug();
			this.bugTimer = 0;
		}
	}
	
	draw() {
		ctx.strokeRect(this.x, this.y, this.width, this.height);
	}
	
	addBug() {
		this.bugs.push(new Bug());
	}
}

for (let i = 0; i < numberOfBugs; i++) {
	bugArray.push(new Bug());
}

function drawPlayer() {
	ctx.fillRect(player.x, player.y, player.width, player.height);
}

function clear() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function newPos() {
	player.x += player.dxl;
	player.x += player.dxr;
	player.y += player.dyu;
	player.y += player.dyd;
	
	detectEdge();
}

function detectEdge() {
	//Left canvas edge
	if (player.x < 0) {
		player.x = 0;
	}
	
	//Right canvas edge
	if (player.x + player.width > canvas.width) {
		player.x = canvas.width - player.width;
	}
	
	//Top canvas edge
	if (player.y < 0) {
		player.y = 0;
	}
	
	//Bottom canvas edge
	if (player.y + player.height > canvas.height) {
		player.y = canvas.height - player.height;
	}
}

function update() {
	clear();

	drawPlayer();
	
	newPos();
	
	bugArray.forEach(bug => {
		bug.update();
		bug.draw();
	});
	
	requestAnimationFrame(update);
}

function moveRight() {
	player.dxr = player.speed;
}

function moveLeft() {
	player.dxl = -player.speed;
}

function moveUp() {
	player.dyu = -player.speed;
}

function moveDown() {
	player.dyd = player.speed;
}

function keyDown(e) {
	if (e.key == "ArrowRight") {
		moveRight();
	} else if (e.key == "ArrowLeft") {
		moveLeft();
	} else if (e.key == "ArrowUp") {
		moveUp();
	} else if (e.key == "ArrowDown") {
		moveDown();
	}
	
}

function keyUp(e) {
	if (e.key =="ArrowRight") {
		player.dxr = 0;
	} else if (e.key == "ArrowLeft") {
		player.dxl = 0;
	} else if (e.key == "ArrowUp") {
		player.dyu = 0;
	} else if (e.key == "ArrowDown") {
		player.dyd = 0;
	}
}

update();

addEventListener("keydown", keyDown);
addEventListener("keyup", keyUp);
