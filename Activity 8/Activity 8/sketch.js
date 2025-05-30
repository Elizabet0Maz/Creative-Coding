//Global Variables
var Shchedryk;
var fft;
var buildings;

//variables for the array
let snowflakes = [];
let stars = [];

//preload function which includes the image and audio
function preload() {
  Shchedryk = loadSound("Shchedryk.mp3");
  buildings = loadImage("Buildings.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT(); //analyses the music

  //creates a for loop of the snowflakes which work with array of snowflakes
  for (let i = 0; i < 60; i++) {
    snowflakes.push({
      //pushes every new snowflake into the array
      //places new snowflake on random place in the canvas
      x: random(width),
      y: random(height),
      size: random(10, 30), //allows to set random sizes
    });
  }
  // Creates stars
  for (let c = 0; c < 100; c++) {
    //for loop that is responsible for creation of stars.
    stars.push({
      //pushes a new star into an array
      //places new star on random place in the canvas
      x: random(width),
      y: random(height),
      starSize: random(10, 30), //sets random size
    });
  }
}

function draw() {
  background(0, 0, 50);
  let AudioControls = fft.analyze(); //analyses the audio

  let bass = fft.getEnergy("bass"); // gets the bass energy

  //stars
  noStroke(); //removes the stroke
  for (let star of stars) {
    //loops grabbing each one star from stars array
    //mapping the size of each outer and inner star according to bass
    let outerSize = star.starSize + map(bass, 0, 255, 0, 60);
    let innerSize = star.starSize / 2 + map(bass, 0, 255, 0, 20);

    fill(255, 255, 0, 30); // outer colour
    ellipse(star.x, star.y, outerSize); //outer star

    fill(255, 255, 0, 100); // inner colour
    ellipse(star.x, star.y, innerSize); //inner star
  }
  //adds the image to fit full screen
  image(buildings, 0, 0, width, height);

  stroke(0, 70, 0);
  strokeWeight(6);
  //One loop for two Audio spectrums which loops 300 times
  for (let i = 0; i < 300; i++) {
    let Left = map(i, 0, 300 - 1, 0, width); //From left to right
    let Right = map(i, 0, 300 - 1, width, 0); //from right to left
    let index = floor(map(i, 0, 300 - 1, 0, AudioControls.length - 1)); //helps to convert AudioControls array to suitable format
    //mapping setting height of each line according to AudioControls
    let h = map(AudioControls[index], 0, 255, 0, height / 1.3);

    //position of each line
    line(Left, height - 50, Left, height - 50 - h);
    line(Right, height - 50, Right, height - 50 - h);
  }

  //Snow Flakes
  // Map bass value to circle size
  let speed = map(bass, 0, 255, 1, 10); //speed depending on bass

  fill(255, 255, 255, 200);
  noStroke();

  for (let flake of snowflakes) {
    flake.y += speed; // Move down by speed

    //if statement which controls placement of snowflakes
    if (flake.y > height) {
      flake.y = 0; // sets them back to the top
      flake.x = random(width); // gives random x position
    }

    ellipse(flake.x, flake.y, flake.size); //draws the snowflakes 
  }

  //The snow wave
  let amplifier = map(bass, 0, 255, 20, 150); //creates amplifier so if the bass is high then the wave is higher
  let baseHeight = height; //sets the base height which is according to the screen

  noStroke(); //removes the stroke
  fill(255); //fills it with white
  beginShape(); //vertex shape, the start of the shape.
  
  //creates the wave from one side till the other at the botton
  for (let x = 0; x <= width; x += 10) { 
    //creates the movement of the wave the bigger value of amplifier the higher the wave 
    let y = baseHeight - amplifier + sin(x * 0.02 + frameCount * 0.1) * 20;
    vertex(x, y); //adds the curves
  }
  //positions the wave at the bottom of the canvas
  vertex(width, height); 
  vertex(0, height);
  endShape(CLOSE);

  noStroke(); //removes the stroke
  fill(255);//fills with white
  rect(0, height - 50, width, 150); //adds a rectangle at the bottom
}

function mouseClicked() { //new function which determines if the mouse was clicked
  if (Shchedryk.isPlaying()) { //if function checking if song is playing
    Shchedryk.pause(); //if playing pause the song
  } else {
    Shchedryk.play();  //otherwise plays
  }
}
