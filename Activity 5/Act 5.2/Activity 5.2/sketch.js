function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  fill(0);
  noStroke();

  let space = 10; // spacing between squares

  //x and y variables are created and used directly inside the for loop
  for (let x = 0; x < width; x += space) {
    for (let y = 0; y < height; y += space) {
      //the amount of times the squares would be generated
      if (random() < 0.5) {
        rect(x, y, 11, 11); // creating random rectangles by using it inside the for loop.
      }
    }
  }
}

function draw() {

}