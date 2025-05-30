//background image
let b;

//variable used as inital position for flowers
let y = 0;

//variable used as initial position for petals and leaves
let x = 0;

function setup() {
  createCanvas(400, 400);
}


function preload() {
  b = loadImage("flowering-tree-willow-branches-interior-600nw-1831467112-1.jpeg");
}


function draw() {
  image(b, 0, 0, width, height);
  background(b);

  //first flower falling
  stroke(232, 153, 201);
  fill(240, 182, 217);
  circle(90, 105 + y, 18);
  circle(92, 90 + y, 18);
  circle(103, 90 + y, 18);
  circle(109, 101 + y, 18);
  circle(101, 110 + y, 18);
  stroke(196, 174, 88);
  fill(255, 229, 66);
  circle(100, 100 + y, 15);

  //second flower
  stroke(232, 153, 201);
  fill(240, 182, 217);
  circle(40, 205 + y, 22);
  circle(42, 190 + y, 22);
  circle(53, 190 + y, 22);
  circle(59, 201 + y, 22);
  circle(51, 210 + y, 22);
  stroke(196, 174, 88);
  fill(255, 229, 66);
  circle(50, 200 + y, 19);

  //third flower
  stroke(232, 153, 201);
  fill(240, 182, 217);
  circle(140, 255 + y, 22);
  circle(142, 240 + y, 22);
  circle(153, 240 + y, 22);
  circle(159, 251 + y, 22);
  circle(151, 260 + y, 22);
  stroke(196, 174, 88);
  fill(255, 229, 66);
  circle(150, 250 + y, 19);

  //forth flower
  stroke(232, 153, 201);
  fill(240, 182, 217);
  circle(90, 355 + y, 20);
  circle(92, 340 + y, 20);
  circle(103, 340 + y, 20);
  circle(109, 351 + y, 20);
  circle(101, 360 + y, 20);
  stroke(196, 174, 88);
  fill(255, 229, 66);
  circle(100, 350 + y, 15);

  //fifth flower
  stroke(232, 153, 201);
  fill(240, 182, 217);
  circle(240, 155 + y, 28);
  circle(242, 140 + y, 28);
  circle(253, 140 + y, 28);
  circle(259, 151 + y, 28);
  circle(251, 160 + y, 28);
  stroke(196, 174, 88);
  fill(255, 229, 66);
  circle(250, 150 + y, 20);

  //sixth flower
  stroke(232, 153, 201);
  fill(240, 182, 217);
  circle(340, 55 + y, 18);
  circle(342, 40 + y, 18);
  circle(353, 40 + y, 18);
  circle(359, 51 + y, 18);
  circle(351, 60 + y, 18);
  stroke(196, 174, 88);
  fill(255, 229, 66);
  circle(350, 50 + y, 15);

  //seventh flower
  stroke(232, 153, 201);
  fill(240, 182, 217);
  circle(290, 305 + y, 28);
  circle(292, 290 + y, 28);
  circle(303, 290 + y, 28);
  circle(309, 301 + y, 28);
  circle(301, 310 + y, 28);
  stroke(196, 174, 88);
  fill(255, 229, 66);
  circle(300, 300 + y, 20);

  // makes flower move down
  y += 3;

  //makes petals and leavs move down
  x += 2.5;

  //flower petals
  stroke(232, 153, 201);
  fill(240, 182, 217);
  ellipse(50, 50 + x, 10, 6);
  ellipse(150, 150 + x, 10, 6);
  ellipse(300, 50 + x, 10, 6);
  ellipse(350, 350 + x, 10, 6);

  //leaves
  stroke(155, 186, 114);
  fill(186, 230, 129);
  ellipse(300, 200 + x, 10, 6);
  ellipse(200, 300 + x, 10, 6);
  ellipse(150, 350 + x, 10, 6);
  ellipse(50, 250 + x, 10, 6);
}