//vars
var click = false;
var mole1, mole2, mole3, bump;
var time = 5;
var statecount = 0;

function preload() {

    }

function setup() {
    cnv = createCanvas(400,400);
    cnv.position(400,100);
    rectMode(CENTER);
    fill(100);
    imageMode(CENTER);

    mole1 = new Mole(200,200);
    mole2 = new Mole(100,200);
    mole3 = new Mole(300,200);
}

function mouseClicked() {
  click = true;
  console.log("mouse clicked");
}


function draw() {

background(0);

mole1.display();
mole1.update();

mole2.display();
mole2.update();

mole3.display();
mole3.update();


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
      fill(100,0,0);
      if (this.state > 1) {
      ellipse(this.posx,this.posy,90,90);
      }

      if (this.state <1) {
      rect(this.posx,this.posy,90,90);
    }
 }

update() {
if (this.statecount % 25 == 0) {
 this.state = random(0,2);
}
this.statecount++;
 }

}
