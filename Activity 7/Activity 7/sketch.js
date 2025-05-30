let angle = 0; //variable angle

function setup() {
  createCanvas(windowWidth, windowHeight); //sets width and height according to the window
  
  background(0); // Clear canvas each frame
  
    textAlign(CENTER, CENTER); //alignment of the text
  textSize(40); //size of the text
      fill(255); //keeps text white
  noStroke(); // removes the stroke
  text("Please Right Click the Mouse", width / 2, height / 2); //creates text in the centre of the screen
}

function draw() {
    fill(0, 10);
  rect(0, 0, width, height);
    if (alpha < 255) {
    alpha += fadeSpeed;
    alpha = constrain(alpha, 0, 255);
  }

  translate(mouseX, mouseY);
  rotate(angle);
  //identifies if mouse is clicked or not if yes then change the colours and make triangles bigger if not keep them white and small
  if (mouseIsPressed) {
    noStroke(); //removes the stroke
    fill(random(255), random(255), random(255)); //fills with a random rbg value
    triangle(-90, 90, 90, 90, 0, -90); // Big triangles when clicked
  } else {
    noStroke(); //removes the stroke
    fill(255); //fills with white colour
    triangle(-25, 25, 25, 15, 0, -25); // smaller triangle
  }
  angle += 0.1; //rotates the triangles
}