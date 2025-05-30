//variables
let stats;
let angles = [];
let labels = [];
let colors = [];
let diameter;

//loads the CSV file
function preload() {
  stats = loadTable("Economy_Indicators.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight); //window size canvas
  diameter = min(windowWidth, windowHeight) * 0.6;

  let rows = [];
  for (let r = 0; r < stats.getRowCount(); r++) {
    let gdp = stats.getNum(r, "GDP"); //gets number of GDP
    let country = stats.getString(r, "Country"); //Gets the string of Country
    rows.push({ country, gdp }); //puts each item into an array variable
  }
  rows = rows.slice(0, 10); //allows only top 10 countries

  //calculates total for 10 countries by using loop
  let total = 0;
  for (let row of rows) {
    total += row.gdp;
  }

  //loop that creates each piece in the pie chart
  for (let row of rows) {
    //calculates size of each angle by taking each gdp value and dividing it by the total then multiplying it by a 100 to get the percentage
    angles.push((row.gdp / total) * 100);
    //takes the name of each country
    labels.push(row.country);
    //gives a random colour to each piece
    colors.push(color(random(255), random(255), random(255)));
  }
}

function draw() {
  background(0);
  let lastAngle = 0; //variable crucial to draw each piece after another one

  //loop to draw each piece
  for (let i = 0; i < angles.length; i++) {
    let angle = map(angles[i], 0, 100, 0, TWO_PI); // Convert the percentage to an angle
    fill(colors[i]); //fills the colour of the chart
    stroke(3); //stroke size
    //draws each piece on the canvas creating the chart
    arc(
      width / 2,
      height / 2,
      diameter,
      diameter,
      lastAngle,
      lastAngle + angle,
      PIE
    );

    // calculates the distance from the centre
    let labelDistance = diameter / 2 + 35;

    // calculate the middle angle of the piece
    let middleAngle = lastAngle + angle / 2;

    // calculates position of the label
    let labelX = width / 2 + cos(middleAngle) * labelDistance;
    let labelY = height / 2 + sin(middleAngle) * labelDistance;

    // Draw the label text centered at calculated position
    textAlign(CENTER, CENTER);
    fill(255); // white color
    noStroke();
    text(labels[i], labelX, labelY);

    //updates the starting point
    lastAngle += angle;
  }
}
