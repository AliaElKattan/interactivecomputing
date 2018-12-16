//vars
var click = false;
var ball, hand, gold, bonus;
var mole1, mole2, mole3, mole4, mole5, mole6, mole7, mole8, mole9, bump;
var statecount = 0;
var hits = 0;
var misses = 0;
var time;
var pausedTime;
var gameCount = 0;
var newTime = 0;
var gameState = 0; //0= game off; 1=game on; 2= game over

function preload() {
ball = loadImage("ball.png");
hand = loadImage("hand.png");
gold = loadImage("gold.png");
bump = loadSound("bump.wav");
bonus = loadSound("bonus.wav");
    }

function setup() {
    cnv = createCanvas(400,400);
    cnv.position(400,100);
    rectMode(CENTER);
    fill(100);
    imageMode(CENTER);

    //look into how to do this with arrays?
    mole1 = new Mole(200,80);
    mole2 = new Mole(80,80);
    mole3 = new Mole(320,80);

    mole4 = new Mole(200,200);
    mole5 = new Mole(80,200);
    mole6 = new Mole(320,200);

    mole7 = new Mole(200,320);
    mole8 = new Mole(80,320);
    mole9 = new Mole(320,320);
}

function mouseClicked() {
  click = true;
  console.log("mouse clicked");
}


function draw() {

//if game hasnt started
if  (gameState == 0) {
  pausedTime = round(millis()/1000);
  cursor();
  fill(70,0,0);
rect(200,199,402,402);
fill(255,230,230);
rect(200,199,385,385);
textSize(40);
fill(0);
textStyle(BOLD);
text("WACK-A-BALL",58,190);
textSize(20);
fill(70,0,0);
text("click mouse to start",104,230);

if (click == true) {
gameState = 1;
click = false;
}
}

if (gameState == 1) {
noCursor();
background(200);
//borders
fill(0);
ellipseMode(CENTER);
ellipse(200,80,90,90);
ellipse(80,80,90,90);
ellipse(320,80,90,90);

ellipse(200,200,90,90);
ellipse(80,200,90,90);
ellipse(320,200,90,90);

ellipse(200,320,90,90);
ellipse(80,320,90,90);
ellipse(320,320,90,90);

restart = newTime * gameCount;
time = round(millis()/1000) - restart - pausedTime;
text("Hits: " + hits, 8,16);
text("Misses:" + misses, 8, 30);
text("Time: " + time,340,16);
textSize(8);
 text("seconds",363,25);
 textSize(13);

if (time >= 30) {
  gameState = 2;
  click = false;
}

mole1.display();
mole1.update();
mole1.checkHit(mouseX,mouseY);

mole2.display();
mole2.update();
mole2.checkHit(mouseX,mouseY);

mole3.display();
mole3.update();
mole3.checkHit(mouseX,mouseY);

mole4.display();
mole4.update();
mole4.checkHit(mouseX,mouseY);

mole5.display();
mole5.update();
mole5.checkHit(mouseX,mouseY);

mole6.display();
mole6.update();
mole6.checkHit(mouseX,mouseY);

mole7.display();
mole7.update();
mole7.checkHit(mouseX,mouseY);

mole8.display();
mole8.update();
mole8.checkHit(mouseX,mouseY);

mole9.display();
mole9.update();
mole9.checkHit(mouseX,mouseY);

image(hand,mouseX,mouseY,70,70);
}

if(gameState == 2) {
newTime = time;
pausedTime = 0;
cursor();
fill(255,230,230);
rect(200,199,402,402);

  fill(50,0,0);
rect(200,199,385,385);
textSize(40);
fill(0);
textStyle(BOLD);
fill(255,230,230);
text("GAME OVER",78,190);
textSize(20);
fill(255,230,230);
text("Hits: " + hits,170,230);
text("Misses: " + misses, 155,250);

textStyle(ITALIC);
text("click to restart",135, 300);


if (click == true) {
gameState = 1;
console.log("game state = " + gameState);
hits = 0;
misses =0;
click = false;
gameCount++;
}
}


}

class Mole {
  constructor(x,y) {
    this.posx=x;
    this.posy=y;
    this.state = 1;
    this.rand = 1;
    this.statecount = 0;
  }


    display(){
      ellipseMode(CENTER);
      imageMode(CENTER);
      fill(255);

       if (this.state == 0) {
          ellipse(this.posx,this.posy,80,80);
      }
      if (this.state == 1) {
        image(ball,this.posx,this.posy,90,90);
      }

    //SPECIAL STATE
    if (this.state == 2) {
      image(gold,this.posx,this.posy,90,90);
    }
 }

update() {
if (this.statecount % 30 == 0) {
 this.state = round(random(0,1));
}

if (this.statecount > 30 && (this.statecount % 103 == 0)) {
  this.state = round(random(0,2));
}

this.statecount++;
 }

 checkHit(hitx,hity) {
   if (click == true && hitx>(this.posx-45) && hitx<(this.posx+45)&&hity>(this.posy-45) && hity<(this.posy+45)) {
     console.log("mole hit!");
     if (this.state == 1) {
       bump.play();
     this.state = 0;
     hits++;
   }

   if (this.state == 2) {
      this.state = 0;
     hits += 30;
     bonus.play();
   }

   if (this.state == 0) {
     misses++;
   }
     click = false;
   }
 }

}
