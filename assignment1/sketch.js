var lb1=255;
var lb2=236;
var lb3=198;

var db1=100;
var db2=80;
var db3=60;

function setup() {
  createCanvas(500,300);
  stroke(0);
  strokeWeight(1);

  //strokeWeight(10);
  

}

function draw() {
//background(0,0,0,10);

fill(255,236,198);


//sides

//left sidewall
beginShape();
vertex(101,20);
vertex(90,45);
vertex(90,150);
vertex(101,110);
vertex(101,20);
endShape();



//right sidewall
beginShape()
vertex(350,20);
vertex(360,45);
vertex(360,140);
vertex(350,110);
vertex(350,20);
endShape();


rect(100,30,250,80);


//top shelf
beginShape();
vertex(100,20);
vertex(350,20);
vertex(360,45);
vertex(90,45);
vertex(100,20);
endShape();
fill(db1,db2,db3);
rect(90,45,270,4);
fill(lb1,lb2,lb3);


//middle shelf
beginShape();
vertex(100,65);
vertex(350,65);
vertex(360,80);
vertex(90,80);
vertex(100,65);
endShape();

//books
strokeWeight(.5);
fill(50,5,5);
rect(92,50,7,30);
fill(15,70,15);
rect(99,50,7,30);
fill(55,45,100);
rect(106,50,6,30);
fill(34,100,90);
rect(112,50,6,30);
fill(120,120,70);
rect(118,50,6,30);
fill(55,100,90);
rect(124,50,6,30);

beginShape();
vertex(130,50);
vertex(135.5,50);
vertex(135.5,65);
vertex(130,80);
vertex(130,50);
endShape();

strokeWeight(1);
fill(db1,db2,db3);
rect(90,80,270,4);

//desk space


rect(85,170,285,7);

fill(lb1,lb2,lb3);

beginShape();
vertex(85,170);
vertex(370,170);
vertex(350,110);
vertex(100,110);
vertex(85,170);
endShape();


//legs
rect(85,177,10,90); //left leg

beginShape();
vertex(110,178);
vertex(110,247);
vertex(95,267);
vertex(95,178);
vertex(110,178);
endShape();


rect(360,177,10,90);//right leg


//bottom right drawers

rect(302,177,55,90);//bottom right drawer container

beginShape();
vertex(290,178);
vertex(290,250);
vertex(302,267);
vertex(302,178);
vertex(290,178);
endShape();

fill(lb1,lb2,lb3);

rect(304,179,51,27);//top
rect(304,208.5,51,27);//middle
rect(304,238,51,27);//bottom

fill(100,80,60);
rect(325,190,10,5);//top handle
rect(325,219.5,10,5);//middle handle
rect(325,249,10,5);//bottom handle


//notebook

fill(200);
rect(250,120,31,37);
fill(200,50,50);
rect(249,118,31,37);

//laptop
fill(230,230,230);
rect(160,99,50,32);
textSize(8);
fill(235-mouseX,215-mouseY,245-mouseY);
rect(160,100,50,30); //screen


//maybe lerp color?
fill(mouseX-20,mouseY-40,mouseY-10);
noStroke();
text("interactive",165,117);
fill(mouseX-40,mouseY-50,mouseY-20);
text("computing",170,123);
noFill();

stroke(0);
fill(240);

//keyboard area
fill(220);
beginShape();
vertex(210,132);
vertex(214,150);
vertex(156,150);
vertex(160,132);
vertex(210,132);
endShape();


stroke(0.5);

fill(0);
rect(178,142,14,6);

//pencil


fill (250,200,0);
rect(293,130,3,25);
fill(255);
rect(293,155,3,3);

fill(200);

triangle(293.5,130,295,125,296.5,130);
fill(255);
stroke(1);
//bin

fill(50);
ellipse(420,265,45,10);//bottom
rect(397,215,45,50);

fill(150);
ellipse(420,215,45,10);//top

fill(255);
stroke(50);
line(398,265,441,265);
stroke(0);
}