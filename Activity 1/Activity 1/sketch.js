function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  strokeWeight(5);
  
  push();
translate(windowWidth / 2 - 310, windowHeight / 2 - 90);

  
  fill(49, 53, 66);
  circle(450,150,100);
  circle(230,150,100);

  fill(126, 127, 224);
  beginShape();
  vertex(100,10);
  vertex(80,100);
  vertex(80, 160);
  vertex(200,163);
  vertex(200,10);
  vertex(100,10)
  endShape();
  beginShape();
  vertex(200,10);
  vertex(300,10);
  vertex(350,100);
  vertex(350, 163);
  vertex(200,163);
  endShape();
  
  beginShape();
  vertex(300,10);
  vertex(400, 6);
  vertex(460,80);
  vertex(349,100)
  endShape();
  
  beginShape();
  vertex(460,80);
  vertex(580,95);
  vertex(600,100);
  vertex(460,120);
  vertex(349,100)
  endShape();
  
  strokeWeight(3);
  beginShape();
  vertex(608,102);
  vertex(608, 150);
  vertex(460,170);
  vertex(460, 120)
  endShape();
  
  beginShape();
  vertex(460,170);
  vertex(350,164);
  vertex(350,100);
  vertex(460, 120);
  endShape();

  strokeWeight(3.5);
  line(80,100,197,102);
  line(197,102, 350, 102);

  fill(49, 53, 66);
  circle(140,170,100);
  fill(152, 156, 171);
  circle(140,170,60);
  fill(49, 53, 66);
  circle(340,170,100);
  fill(152, 156, 171);
  circle(340,170,60);

  fill(135, 184, 245);
  beginShape();
  vertex(105,20);
  vertex(190,20);
  vertex(190,95);
  vertex(90,93);
  vertex(105,20);
  endShape();
  beginShape();
  vertex(205, 20);
  vertex(295,20);
  vertex(340,95);
  vertex(205,95);
  vertex(205,20)
  endShape();
  beginShape();
  vertex(313,20);
  vertex(397,15);
  vertex(446,75);
  vertex(355,90);
  vertex(313,20)
  endShape();

  fill(227, 201, 95);
  ellipse(475,123,40);
  ellipse(595,110,35);

  strokeWeight(1);
  line(500,140,580,130);
  line(502,143,580,133);
  line(504,137,580,127);
  line(500,134,578,124);
  line(497,146,585,136);

  fill(255, 255, 255);
  strokeWeight(3);
  beginShape();
  vertex(500,152);
  vertex(590,142);
  vertex(590,160);
  vertex(500,170);
  vertex(500,152)
  endShape();

  fill(0,0,0);
  textSize(16);
  textAlign(CENTER);
  text('1',520, 164);
  text('9',530, 163);
  text('6',540, 162);
  text('5',550, 161);
  text('1',559, 160);
  text('8',569, 159);
  
  pop();
}

