var hour, minute, second;
var hourAngle, minuteAngle, secondAngle;

function setup() {
  createCanvas(800,400);
  hour= hour();
  minute= minute();
  second= second();
  angleMode(DEGREES)
}

function draw() {
  background(255,255,255);  
  
  secondAngle= map(second,0,60,0,360);
  hourAngle= map(hour,0,12,0,360);
  minuteAngle= map(minute,0,60,0,360);
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(secondAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(400,200,0,0);
  pop();
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(minuteAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(400,200,0,0);
  pop();
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(hourAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(400,200,0,0);
  pop();

  drawSprites();
}