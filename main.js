// Create a reference for the canvas
canvas = document.getElementById('myCanvas')
ctx = canvas.getContext("2d")

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if ((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)) {
		aplhabetkey();
			document.getElementById("di").innerHTML = "The pressed key is a Alphebet key";
            console.log("aplhabetkey");
	} else {
		otherkey();
		    document.getElementById("d1").innerHTML = "The pressed key is a symbol or another key";
			console.log("otherkey")
	}

	if ((keyPressed >=48 && keyPressed<=57)) {
		numberkey();
			document.getElementById("di").innerHTML = "The pressed key is a Number key";
            console.log("numberkey");
	} else {
		otherkey();
		    document.getElementById("d1").innerHTML = "The pressed key is a symbol or another key";
			console.log("otherkey")
	}

	if ((keyPressed >=37 && keyPressed<=40)) {
		arrowkey();
			document.getElementById("di").innerHTML = "The pressed key is a Arrow key";
            console.log("arrowkey");
	} else {
	    otherkey();
		    document.getElementById("d1").innerHTML = "The pressed key is a symbol or another key";
			console.log("otherkey")	
	}

	if ((keyPressed = 17) && (keyPressed = 18) && (keyPressed = 27)) {
		specialkey();
			document.getElementById("di").innerHTML = "The pressed key is a Special key";
            console.log("specialkey");
	} else {
		otherkey();
		    document.getElementById("d1").innerHTML = "The pressed key is a symbol or another key";
			console.log("otherkey");
	}

}

function aplhabetkey()
{
	img_image="Alphabet.jpg";
	add();
}
function numberkey()
{
	img_image="Number.jpg";
	add();
}
function arrowkey()
{
	img_image="Arrow.jpg";
	add();
}
function specialkey()
{
	img_image="Special.jpg";
	add();
}
function otherkey()
{
	img_image="Other.jpg";
	add();
}
	
