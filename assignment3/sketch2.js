//vars

var player, dist1, dist2, dist3, obst_car, obst_car2, backimg, finish,win_sound,lose_sound, bump_sound;
var playerx=140;
var playery=350;
var playerSpeedx=1;
var playerSpeedy=1;
var obst_x=5;
var car1_x= 40;
var car2_x = 40;
var car3_x = 40;
var car4_x = 40;
var car1_y=40;
var car2_y=40;
var car4_y=40;
var obst_speed=3;
var angle=0;
var xPos, yPos;
var cnv;
var lose = false;
var win = false;
var endGame = false;
var lives, score;

  var gameOn = false;
  var level1=false;
  var level2=false;

   function preload() {
    player = loadImage("red_car.jpg");
    obst_car2 = loadImage("blue_car2.png");
    obst_car = loadImage("blue_car.png");
    backimg = loadImage("background.jpg");
    finish = loadImage("finish.png");
    win_screen = loadImage("win_back.jpg")
    win_sound = loadSound("bonus.wav");
    lose_sound = loadSound("lose.wav");
    bump_sound = loadSound("bump.wav");
    heart_full = loadImage("hud_heartFull.png");
  heart_empty = loadImage("hud_heartEmpty.png");
    }

function setup() {
    cnv = createCanvas(400,400);
    cnv.position(400,100);
    rectMode(CENTER);
    fill(100);
    imageMode(CENTER);
    lives = 3;

}

function mouseClicked() {

  if (gameOn == false && win == false && mouseX>75 && mouseX<165 && mouseY>265 && mouseY <295) {
  console.log("mousex: " + mouseX + ", mousey: " + mouseY);
  level1= true;
  gameOn = true;}

  if (gameOn == false && win == false && mouseX>235 && mouseX<295 && mouseY>265 && mouseY <295 ) {
    level2=true;
    gameOn = true;
  }

  if (win == true && mouseX>150 && mouseX<250 && mouseY>225 && mouseY <255) {
  location.reload();
}



  if (endGame == true) {
  location.reload();
}
}


function updateRange(range) {
  // grab the data from the range
playerSpeedy = int(range.value);
}


function draw() {

  if (gameOn == false && win == false && endGame == false) {
  //  background(190,190,250);
  image(backimg,200,200,400,400);
  fill(255,255,255,170);
  noStroke();
  rect(200,200,401,401);
  fill(40,0,0);
  stroke(0);
    textSize(40);
    text("Ultimate Driving", 60,160);
    textSize(15);
    text("press mouse to continue",120,205);
        console.log("game on false");

fill(255);
rect(120,280,90,30);
rect(280,280,90,30);
fill(0,0,40);
textSize(20);
  text("LEVEL 1",82,288);
  text("LEVEL 2",241,288);

  }

if (gameOn == true) {
  //    console.log("mouse clicked");

  textStyle(BOLD);
fill(255,0,0);

textSize(15);
background(200);


push();
translate(200,200);
angleMode(DEGREES);
rotate(90);
image(backimg,0,0,400,400);
pop();



fill(0);
rect(140,20,63,23);
fill(255);
rect(140,20,60,20);
fill(255,0,0);

text("FINISH",116,27);
//textStyle(NORMAL);
fill(0);
line(100,0,110,12);
line(180,0,170,12);


fill(100);
rect(5,200,10,400); //left border
rect(395,200,10,400); //right border

fill(0,70,100);


class CrowdCar {
  constructor() {
  }

  display(x,y){
    this.xPos = x;
    this.yPos = y;
    if (level1==true) {
    image(obst_car2, this.xPos, this.yPos,33,60);}

    if (level2== true) {

        image(obst_car,this.xPos,this.yPos,60,33);
    }
  }

  moveCar() {
    this.carSpeed = random(1,5);
  }

}

var car1 = new CrowdCar();
var car2 = new CrowdCar();
//var car3 = new CrowdCar();
var car4 = new CrowdCar();
//car1.moveCar();
//car2.moveCar();


if (level1==true) {
lose=false;
car1_y+=random(1,3);
car2_y+=random(1,3);
//car3_x+=random(1,10);
//car4_y+=2;


//console.log(car1_x);
car1.display(265,car1_y);
car2.display(145,car2_y-150);
//car3.display(car3_x-400,210);
//car4.display(255,car4_y);


if ((car1_y-70)>height) {
  car1_y=0;
}

if (car2_y-110>height) {
  car2_y=0;
}

dist1=dist(playerx,playery,265,car1_y);
dist2=dist(playerx,playery,145,car2_y-150);


if (dist1 < 10 || dist2<10) {
  console.log("collided!");
  lose = true;
}

}

// if (car4_y>height) {
//   car4_y=0;
// }

//}

if (level2==true) {
car1_x+=random(1,9);
car2_x+=random(1,5);
//car3_x+=random(1,10);
car4_x+=random(1,5);
//console.log(car1_x);
car1.display(car1_x,70);
car2.display(car2_x,150);
//car3.display(car3_x-400,210);
car4.display(car4_x,270);

if ((car1_x)>width) {
  car1_x=0;
}

if (car2_x>width) {
  car2_x=0;
}

if (car4_x>width) {
  car4_x=0;
}
dist1 =dist(playerx,playery,car1_x,70);
dist2 =dist(playerx,playery,car2_x,150);
dist3 =dist(playerx,playery,car4_x,270);

console.log("distance: " + dist(playerx,playery,car4_x,270))
if (dist1 < 30 || dist2<30 || dist3 <30 ) {
  console.log("collided!");
  lose = true;
  console.log(lose);
}
}


//push();
//angleMode(DEGREES);
//translate(200,350);
fill(0);

/*//used to be middle border - replaced with pic
rect(200,40,2,70);
rect(200,140,2,70);
rect(200,240,2,70);
rect(200,340,2,70);*/

image(player,playerx,playery,35,70);


if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
  if (playery>20) {
  playery-=playerSpeedy;
  }
}

if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {

  if(playery<400) {
  playery+=playerSpeedy;
}
}

  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
  if (playerx==140) {
  playerx=260;
}
}

if (keyIsDown(ENTER)) {
  playerSpeedy++;
  console.log("playerspeedy: " + playerSpeedy);
}


if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
  console.log("key down");
 if (playerx==260) {
  playerx=140;
}}
/*
  if(playerx>-175) {
  playerx-=playerSpeedx;
}*/

//angle--;

//pop();

textSize(20);

if (lives >0) {
image(heart_full,35,40,17,15); }

if (lives > 1) {
  image(heart_full,55,40,17,15);
}

if (lives > 2) {
  image(heart_full,75,40,17,15);
}

if (lives <3) {
  image(heart_empty,75,40,17,15);
}

if (lives <2) {
  image(heart_empty,55,40,17,15);
}


if (lose == true) {
  playerx=140;
  playery=350;

  if (level1==true) {
    car1_y=0;
    car2_y=-110;
  }

  console.log("lose = true");

  if (lives>0 && gameOn == true) {
  bump_sound.play();
  lives--;
  lose = false;
}

  if (lives == 0) {
    textSize(20);
    lose = false;
    lose_sound.play();
    endGame = true;
  }

    console.log("lives: " + lives);

}

textSize(15);
textStyle(NORMAL);
text("lives: " + lives,25,25);
  console.log("lives: " + lives);

playerSpeedx=1;
//playerSpeedy=1;

if (playerx==140 && playery <30 && win == false) {
  win_sound.play();
  win = true;
}

//car1.display();
//image(car2,xPos,yPos,80,40);
//triangle(x1,y1,x2,y1,x3,y1);
}


if (endGame == true) {
  gameOn=false;
  background(20,0,0);
  textSize(40);
  fill(255);
  text("You lose!", 115,160);
  textSize(15);
  text("press mouse to start over",115,200);
  console.log("game on false");
  lives=3;
  lose=false;
}

if (win == true) {
  //background(200,100,100);
gameOn=false;
  lives=3;
  image(win_screen,200,200,400,400);
  noStroke();
  fill(255,255,255,170);
  rect(200,200,401,401);
  stroke(0);
  textSize(40);
  fill(70,0,0);
  textStyle(BOLD);
  text("YOU WIN!", 105,160);
  textStyle(NORMAL);
  textSize(15);
  rect(200,240,100,30);

  score = 1000 + (lives * 100);
        text("score: " + score, 160,200);
  fill(255);
  textSize(15);
  //text("click below to play again",110,200)
  textSize(20);
    text("RESTART",155,248);



  console.log("game on false");
  lives=3;
  lose=false;
}

}
