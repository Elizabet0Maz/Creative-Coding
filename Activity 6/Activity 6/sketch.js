let myfont;

//preloading the font
function preload() {
  myfont = loadFont('RubikBubbles-Regular.ttf'); 
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER); //aligns text to the centre
  textFont(myfont);//applying preloaded font
  textSize(50); //size of the text
}

function draw() {
  // rectangle that is makes background fade
  fill(0, 50);
  rect(0, 0, width, height);

  // keeps the text in the centre
  translate(width / 2, height / 2);
  
  //rotation of the text
  rotate(tan(frameCount * 0.01));
  //increase and decrease in size effect
  scale(1 + 0.1 * sin(frameCount * 0.1));

  // changing colours 
  let r = 128 + 127 * tan(frameCount * 0.03);
  let g = 128 + 127 * tan(frameCount * 0.03 + TWO_PI / 3);
  let b = 128 + 127 * tan(frameCount * 0.03 + (2 * TWO_PI) / 3);
  fill(r, g, b);
  stroke(0);
  
    stroke(255);//white outline
  strokeWeight(4); //outline size
  //the string
  text('creative coding', 0, 0);
}
