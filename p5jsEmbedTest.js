

var factor = 0;

function setup() {
	
  createCanvas(560, 380);
  factor = 20;
  background(factor);

}


function draw() {
	
	//delay(1000);
	
	background(factor);
	
	factor += 10;
	
	if (factor > 240) {
		factor = 20;
	}
  
 }

// When we click
function mousePressed() {
  // Map mouse to the key index
  factor = 10;
}
