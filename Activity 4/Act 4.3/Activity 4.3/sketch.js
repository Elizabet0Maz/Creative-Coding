let IMG; // variable for selected image

function preload() {
  IMG = loadImage("20250523_184820.jpg"); //preloading the image in variable IMG
}

function setup() {
createCanvas(windowWidth, windowHeight); //setting height and width of the canvas
}

function draw() {
  background(220);

  // Draw image and apply posterize filter
  image(IMG, 0, 0, windowWidth, windowHeight); //adding image to the canva
  filter(POSTERIZE, 4); //adding posterize filter and setting the scale
}