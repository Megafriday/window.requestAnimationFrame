const imgAngel = document.getElementById("imgAngel");
const result = document.getElementById("result");
let callbackId;
let scale = 1;

function mainLoop(timeStamp) {
	imgAngel.width += scale;

	if (imgAngel.width > 200 || 50 > imgAngel.width) {
		scale *= -1;
	}

	callbackId = requestAnimationFrame(mainLoop);

	result.textContent = "経過秒数: " + timeStamp + "\n";
	result.textContent += "返り値: " + callbackId + "\n";
}

mainLoop();

document.getElementById("start").onclick = function () {
	cancelAnimationFrame(callbackId);
	mainLoop();
}

document.getElementById("cancel").onclick = function () {
	cancelAnimationFrame(callbackId);
}

