let IMG; // variable for selected image

function preload() {
  IMG = loadImage("20250523_184820.jpg"); //preloading the image in variable IMG
}

function setup() {
  createCanvas(windowWidth, windowHeight); //setting height and width of the canvas
  background(255); //colour of the background
}

function draw() {
  for (i = 0; i < 150; i++) { //for loop that helps to run the function 50 times in order to increase the speed of the process
     //allows to create circles in random places of the canvas
    let x = random(0, width);
    let y = random(0, height);

    //creating new variables in order to correctly get position of each pixel by using map
    let imgex = map(x, 0, width, 0, IMG.width);
    let imgey = map(y, 0, height, 0, IMG.height);

    //colour variable that will be used to fill the ellipses colours
    let colour = IMG.get(imgex, imgey);

    fill(colour); //changes colour according to colour
    noStroke(); //removes the stroke
    ellipse(x, y, 5, 5); //places ellipses in random places according to variables x & y.
  }
}
