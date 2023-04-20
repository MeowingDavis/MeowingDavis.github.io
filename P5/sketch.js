//sketch for random squares and circles
var song;
var slider;

let X, X2, Y, Y2, R, G, B, S, A;

function preload() {
  song = loadSound("arpLoop.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(R, G, B);
  
  frameRate(10);
  
  
  slider = createSlider(0, 1, 0.5, 0.01)
  song.loop();

  print(
    "HALLO! Double click to randomly change background colour/clear. The slider changes the framerate"
  );
}

function draw() {
  noStroke();
  //randomise!!
  X = random(windowWidth);
  Y2 = random(windowHeight);
  X2 = random(windowWidth);
  Y = random(windowHeight);
  R = random(255);
  B = random(255);
  G = random(255);
  S = random(10, 50);
  A = random(1, 255);
  
  song.setVolume(slider.value());

  rectMode(CENTER);

  fill(R, G, B, A);
  rect(X, Y, S);

  circle(X2, Y2, S);
}
//i used double click cause using the slider counts as a mouse press
function doubleClicked() {
  clear();
  background(R, G, B);
  print("background reset");
}
