const canvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

let x = 600;
let y = 450;
let vxl = 0;
let vxr = 0;
let vyu = 0;
let vyd = 0;

function update() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	x += vxl;
	x += vxr;
	y += vyu;
	y += vyd;
	ctx.fillRect(x, y, 30, 30);
	requestAnimationFrame(update);
}
update();

addEventListener("keydown", function(e){
	if (e.code == "KeyD" || e.code == "ArrowRight")
		vxr = 5;
	if (e.code == "KeyA" || e.code == "ArrowLeft")
		vxl = -5;
	if (e.code == "KeyW" || e.code == "ArrowUp")
		vyu = -5;
	if (e.code == "KeyS" || e.code == "ArrowDown")
		vyd = 5;
})

addEventListener("keyup", function(e){
	if (e.code == "KeyD" || e.code == "ArrowRight")
		vxr = 0;
	if (e.code == "KeyA" || e.code == "ArrowLeft")
		vxl = 0;
	if (e.code == "KeyW" || e.code == "ArrowUp")
		vyu = 0;
	if (e.code == "KeyS" || e.code == "ArrowDown")
		vyd = 0;
	
})