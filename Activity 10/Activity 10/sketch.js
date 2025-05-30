  const numStars = 500; //number of the stars
let stars = []; //array of existing stars
let blackLayer;

let font;
let points =  []; //array 
let msg = "Bath Spa University"; //string of displayable text
let size = 150;
let r = 15; let angle = 0; let t = 0; 

//Preloads a custom font
function preload(){
  font = loadFont("fonts/PoetsenOne-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  blackLayer = createGraphics(width, height); //graphical layer displayed above 
  blackLayer.background(255); 
  
  //a for loop between a 0 and a number of stars, which will push new stars into the list, with random locations
  for(let i = 0; i < numStars; i ++){
    stars.push(new Star(random(width), random(height)))
  }
  
    //creates points 
  //finds the array of the points throught the text string
  points = font.textToPoints(msg, 0, 0, size, {
    sampleFactor: 0.5, //increases amount of points
    simplifyThreshold: 0.0
  });
  angleMode(DEGREES); //sets angle to degrees
  
}

function draw() {
  background(0,50);

  //calculates the accelerator
  const acc = map(mouseX, 0, width, 0.0005, 0.09);
  
  //Filter function that helps to sort out the stars, if it returns true we it keeps it else it removes the object
  stars = stars.filter(star => {
    star.draw();
    star.update(acc);
    return star.isActive();
  });
  
  while(stars.length < numStars){
    stars.push(new Star(random(width), random(height)));
  }
  //loops each object in the list using forEach function, and updates the acceleration value for the each new star.
  stars.forEach(star => {
    star.draw();
    star.update(acc);
  })
  
  blackLayer.erase();
  blackLayer.ellipse(mouseX, mouseY, 200, 200);
  
  image(blackLayer, 0, 0);
  push();
  translate(windowWidth/2 - 700, windowHeight/2 + 50); // translates the text to a different position
  stroke(255); //changes colour of strokes
  let x = r*cos(angle); //determines the movement of x 
  let y = r*sin(angle); //movement of y
  
  //for loop that creates the amount of the points
  for (let i = 0; i < points.length; i++) {
    line(points[i].x, points[i].y, points[i].x + x, points[i].y + y);
  }
  
  //specifications of the text
  fill(255, 100);
  textSize(size);
  textFont(font);
  text(msg, x, y);
  pop();
  let increment = 5*sin(t);
  t++
  angle += increment; //moves degrees according to increment
}

//Class that stores information about every star
class Star{
  constructor(x,y) {
    this.pos = createVector(x,y);
    this.prevPos = createVector(x,y);
    
    this.vel = createVector(0,0); //Giving it an initial velocity
    
    this.ang = atan2(y - (height/2), x - (width/2)); //Finds the angle between the center of the screen and the point.
  }
  //Helps to detect if the previous position is still in the bounds of the screen 
  isActive() {
    return onScreen(this.prevPos.x, this.prevPos.y);
  }
    //Helps to update a position of the star
    update(acc){
      //using same angle as calculated in the constructor and using cos and sin to know how far the star shall move on the x and y axis
      this.vel.x += cos(this.ang) * acc; 
      this.vel.y += sin(this.ang) * acc;
      
      //saves previous positions of star according to x and y coordinates
      this.prevPos.x = this.pos.x;
      this.prevPos.y = this.pos.y;
      
      //updates the current x and y position by adding a velocity
      this.pos.x += this.vel.x;
      this.pos.y += this.vel.y;
    }
  
      draw(){
        //calculating the alpha value in order to make fade effect for the star
        const alpha = map (this.vel.mag(), 0, 3, 0, 255);
        stroke(255, alpha);
        //draws a line between current position and previous.
        line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
      }
}

//Helps to detect when star is off the screen, if the x and y coordinate is in the bounds of the screen it will return true else returns as false.
function onScreen( x , y) {
  return x >= 0 && x <= width && y >= 0 && y <= height;
}