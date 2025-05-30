function setup() {
  createCanvas(windowWidth, windowHeight); //setting height and width according to the screen size.

}

function draw() {
  background(255);
    fill(0);
  strokeWeight(1.5);
  rectMode(CENTER);
  let space = 50; // Variable that helps to decide the size of the grid
  //for loops to draw the pattern
  for(x = 0; x < width + 50; x += space){
     for(y = 0; y < height + 50; y += space){
       // drawing the grid by putting the lines inside the for loop
       //line(x, y, x + space, y);
       line(x, y, x, y + space);
       
       ellipse(x, y, 15, 15); //ellipses which get repeated in a for loop
       rect(x * 1.5, y * 1.5, 10, 10); // rectangles which get repeated in the for loop
     }
  }
}