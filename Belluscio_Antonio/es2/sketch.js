let angle = 0;
let radius = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(255);
}

function draw() {
  background(0);
  angle += 0.01;
  drawRecursive(width / 2, height / 2, radius, 5);
}

function drawRecursive(x, y, size, level) {
  if (size < 10) {
    return;
  }

  // ellipse positions
  let newX = x + cos(angle) * size;
  let newY = y + sin(angle) * size;

  // positions for triangle
  let triX = x - cos(angle) * size;
  let triY = y - sin(angle) * size;

  ellipse(newX, newY, size * 2);

  // for the pulsing motion of triangle
  let pulse = abs(sin(angle)) * size;
  push();
  translate(triX, triY);
  triangle(-pulse / 2, pulse / 2, pulse / 2, pulse / 2, 0, -pulse / 2);
  pop();

  drawRecursive(x, newY, size / 1.5, level - 1);
  drawRecursive(triX, y, size / 1.5, level - 1);
}
