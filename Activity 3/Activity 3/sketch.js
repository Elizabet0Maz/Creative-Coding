function setup() {
  createCanvas(600, 600);
  noStroke();
  strokeWeight(2);

}

function draw() {
  background(0);

  //alien body
  fill("yellowgreen");
  ellipse(300, 250, 100, 150);

  // left ear 
fill("yellowgreen");
triangle(240, 170, 220, 120, 260, 150);

// right ear 
triangle(360, 170, 380, 120, 340, 150);

  //alien head (moderately narrow and tall)
  fill("yellowgreen");
  stroke(50);
  beginShape();
  vertex(220, 180); // slightly wider than before
  bezierVertex(265, 110, 335, 110, 380, 180); // tall top curve
  bezierVertex(335, 230, 265, 230, 220, 180); // tall bottom curve
  endShape(CLOSE);
  
  
fill(0); // black
noStroke();

// left eye 
push();
translate(270, 180);
rotate(radians(15));
ellipse(0, 0, 35, 25);
pop();

// middle eye 
ellipse(300, 155, 35, 25);

// right eye
push();
translate(330, 180);
rotate(radians(-15));
ellipse(0, 0, 35, 25);
pop();

    // Cat nose 
  fill(255, 105, 180);
  triangle(295, 190, 305, 190, 300, 200);

  // Cat mouth
  noFill();
stroke(255, 105, 180); 
  strokeWeight(2);
  arc(300, 205, 20, 10, 0, PI);
  beginShape();
  vertex(300,200);
  vertex(300,210);
  endShape();
  
  //alien plate window
  noStroke();
  fill(0, 100, 255, 100); 
  ellipse(300, 190, 220, 300); 
  
  //alien plate triangle light
noStroke();
fill(255, 255, 0, 80);
triangle(300, 300, 150, 580, 450, 580);
  
  //alien plate base
  fill(120);
  stroke(50);
  beginShape();
  vertex(150, 300);
  bezierVertex(225, 250, 375, 250, 450, 300);
  bezierVertex(375, 350, 225, 350, 150, 300);
  endShape(CLOSE);

  //the lamps
  fill("yellow");
  ellipse(160, 300, 20, 20);
  ellipse(200, 300, 20, 20);
  ellipse(240, 300, 20, 20);
  ellipse(280, 300, 20, 20);
  ellipse(320, 300, 20, 20);
  ellipse(360, 300, 20, 20);
  ellipse(400, 300, 20, 20);
  ellipse(440, 300, 20, 20);
}
