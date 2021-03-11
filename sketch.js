function setup(){
  
  createCanvas(400,400);
  angleMode(DEGREES);
}
function draw(){
  background(0);

  strokeWeight(7)

  translate(200,200);
  rotate(-90);
  var hr=hour();
  var mn=minute();
  var sc=second();

  var hr12 = hr%12;

  noFill();
  stroke("red");
  var scmap=map(sc, 0,60, 0,360);
  arc(0,0,300,300,0,scmap);

  stroke(0, 230, 0);
  var mnmap=map(mn,0,60,0,360);
  arc(0,0,250,250,0,mnmap);

  stroke(255, 255, 0);
  var hrmap = map(hr12,0,12,0,360);
  arc(0,0,200,200,0,hrmap);

  //Lines
  push();
  stroke("red");
  rotate(scmap);
  line(0,0,80,0)
  pop();

  push();
  stroke(0, 230, 0);
  rotate(mnmap);
  line(0, 0, 60, 0);
  pop()

  push();
  stroke(255, 255, 0);
  rotate(hrmap);
  line(0, 0, 50, 0);
  pop();


}