var canvas = new fabric.Canvas('myCanvas');
// Create canvas variable
ball_x = 0;
ball_y = 0;
hole_x = 800;
hole_y = 400;
//Set initial positions for ball and hole images.


block_image_width = 5;
block_image_height = 5;

function load_img() {
	fabric.Image.fromURL("golf-h.png", function (Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top: hole_y,
			left: hole_x
		});
		canvas.add(hole_obj);
	});
	// write code to Upload golf image on the canvas
	new_image();
}

function new_image() {
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png", function (Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top: ball_y,
			left: ball_x
		});
		canvas.add(ball_obj);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if ((ball_x == hole_x) && (ball_y == hole_y)) {
		document.getElementById("hd3").innerHTML = "you have hit the goal!!!!";
		document.getElementById("myCanvas").style.borderColor = "red";
		canvas.remove(ball_obj);


	}
	if (keyPressed == '38') {
		up();
		console.log("up");
	}
	if (keyPressed == '40') {
		down();
		console.log("down");
	}
	if (keyPressed == '37') {
		left();
		console.log("left");
	}
	if (keyPressed == '39') {
		right();
		console.log("right");
	}
}

function up() {
	console.log(ball_y);
	// Write a code to move ball upward.
	if (ball_y >= 0) {
		ball_y = ball_y - block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("when Up arrow key is pressed, X = " + ball_x + " , Y = " + ball_y);
		canvas.remove(ball_obj);
		new_image();
	}
}

function down() {
	console.log(ball_y);
	// Write a code to move ball downward.
	if (ball_y <= 450) {
		ball_y = ball_y + block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("when Down arrow key is pressed, X = " + ball_x + " , Y = " + ball_y);
		canvas.remove(ball_obj);
		new_image();
	}
}

function left() {
	if (ball_x >= 5) {
		// Write a code to move ball left side.
		ball_x = ball_x - block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("when Left arrow key is pressed, X = " + ball_x + " , Y = " + ball_y);
		canvas.remove(ball_obj);
		new_image();
	}
}

function right() {
	if (ball_x <= 1050) {
		// Write a code to move ball right side.
		ball_x = ball_x + block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("when Right arrow key is pressed, X = " + ball_x + " , Y = " + ball_y);
		canvas.remove(ball_obj);
		new_image();
	}
}

