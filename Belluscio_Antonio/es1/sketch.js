let previousX;
let previousY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cursor(CROSS);
  background(0);
  stroke(0, 20);
  strokeWeight(20);
  previousX = mouseX;
  previousY = mouseY;
}

function draw() {
  if (mouseIsPressed) {
    let r = random(10, 255);
    let g = random(10, 255);
    let b = random(10, 255);
    stroke(r, g, b,100);

   translate(mouseX+5, mouseY+5);
    
 let shapeType = int(random(3)); 
// Randomly choose a shape type (0, 1, 2)

    noFill(); 
// No fill for shapes, only strokes

    if (shapeType === 0) {
      
// Draw a triangle
      
      let j = random(1, 10);
      let k = random(1, 10);
      let l = random(1, 10);
      let m = random(1, 10);
      triangle(previousX - mouseX, previousY - mouseY, j, k, l, m);
    } else if (shapeType === 1) {
      // Draw a square
      let side = random(10, 60);
      rect(previousX - mouseX, previousY - mouseY, side, side);
    } else if (shapeType === 2) {
      
      // Draw a line
      
      let x1 = random(-30, 30);
      let y1 = random(-30, 30);
      let x2 = random(-30, 30);
      let y2 = random(-30, 30);
      line(previousX - mouseX + x1, previousY - mouseY + y1, x2, y2);
    }
  }
  previousX = mouseX;
  previousY = mouseY;
}

function doubleClicked() {
  background(0);
}
