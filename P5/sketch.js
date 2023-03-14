let X, Y, W, H;
let R, G, B, A;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220)
  
  frameRate(2);

}

function draw() {

X = random(windowWidth);
Y = random(windowHeight);
W = random(10, 30);
H = random(10, 40);

R = random(255);
G = random(255);
B = random(255);
A = random(255);
  ;
  noStroke();
  
  rectMode(CENTER);
  
  fill(R, G, B, A)

  rect(X, Y, W, H);

}

function mousePressed(){
  clear();
  background(220)

}
