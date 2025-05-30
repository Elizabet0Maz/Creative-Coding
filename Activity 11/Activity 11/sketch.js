//variable array
let squares = []; 
//variables
let rad = 1;
let a = 0;

function setup() {
  //height according to window size
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER); //rectangle mode centre
  background(0); //background black
}

//variable
let start;

//function that detects if mouse is pressed
function mousePressed() {
  start = createVector(mouseX, mouseY); //store mouse position
}

function addInk(x, y, r) {
  //create colourful value based on frame and square count
  let colour1 = (frameCount * 3) % 256;
  let colour2 = (frameCount * 5 + squares.length * 10) % 256;
  let colour3 = (frameCount * 7) % 256;

  let colour = color(colour1, colour2, colour3); //combine into one colour
  let square = new Square(x, y, r, colour); //create new square
  squares.push(square); //add to array
}

function draw() {
  //if mouse is pressed, create a square
  if (mouseIsPressed) {
    let d = dist(mouseX, mouseY, pmouseX, pmouseY); //check distance moved
    addInk(mouseX, mouseY, d); //add ink at that spot
  }

  rectMode(CORNER);
  fill(0, 10); // fade effect
  rect(0, 0, width, height); //draw see-through black rect to fade trails
  rectMode(CENTER);

  //update and show each square
  for (let square of squares) {
    square.update();
    square.show();
  }
}

class Square {
  constructor(x, y, size, colour) {
    this.pos = createVector(x, y); //position of square
    this.vel = p5.Vector.random2D().mult(random(0.5, 2)); //random movement direction
    this.size = size * 5; //scale size a bit
    this.colour = colour; //store colour
  }

  update() {
    this.pos.add(this.vel); //move square

    //bounce back if hits edge
    let edge = this.size / 2;
    if (this.pos.x < edge || this.pos.x > width - edge) this.vel.x *= -1;
    if (this.pos.y < edge || this.pos.y > height - edge) this.vel.y *= -1;
  }

  show() {
    noStroke();
    fill(this.colour); //set fill to square's colour
    rect(this.pos.x, this.pos.y, this.size, this.size); //draw square
  }
}



