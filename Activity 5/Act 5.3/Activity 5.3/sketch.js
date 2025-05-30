function setup() {
  createCanvas(windowWidth, windowHeight); // setting height and width according to the screen size
  noLoop(); // stops the draw function from looping
}

function draw() {
  background(0); // black background
  stroke(255); // outlines triangles
  strokeWeight(2); // thickness of outline
  let space = 60; // variable for spacing

  // for loops to draw the pattern
  for (let x = 0; x < width + 60; x += space) {
    for (let y = 0; y < height + 60; y += space) {
       // random colours
      fill(random(100, 255), random(100, 255), random(100, 255));
      // drawing repeated triangles in grid
      triangle(
        x, y - 15,
        x - 15, y + 15,
        x + 15, y + 15
      );
    }
  }
}


