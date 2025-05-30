let IMG; // variable for selected image

function preload() {
  IMG = loadImage("20250523_184820.jpg"); //preloading the image in variable IMG
}

function setup() {
createCanvas(windowWidth, windowHeight); //setting height and width of the canvas
}

function draw() {
  background(220);
  image(IMG, 0, 0, windowWidth, windowHeight); //adding image to the canva
  
  //variable x and y that get the coordinates of the original image in order to not mess up the pixel colours
  let x = map(mouseX, 0, height, 0, IMG.height); 
  let y = map(mouseY, 0, height, 0, IMG.height);
  
  let colour = IMG.get(x, y); //getting pixel colours and putting it into variable colour
  fill(colour); //filling up the ellipse with whatever is inside colour variable
  
  //creates an ellipse which user can move around
  ellipse(mouseX, mouseY, 50, 50); 
}