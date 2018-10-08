//var accel = 0.01;
  var points = 0;
  var misses = 0;
  var score = 0;
  var bonus = 0;

//sounds
  var bonus_sound, bounce_sound, paddle_sound, lose_sound;

    var paddle_collision = false;

//coin positions
    var coin;
    var xPos = 200;
    var yPos = 200;

//paddle positions & speed
    var playX = 250;
    var playY = 393;

    var playSpeedX = 1;
    var play_accel = 0.01;
    var xSpeed = 0;
    var ySpeed = 0;

    var gameOn = false;

    var imageX;
    var imageY;

   function preload() {
      coin = loadImage("coin2.png");
      bonus_sound = loadSound("bonus.wav");
      bounce_sound = loadSound("wallbounce.wav");
      paddle_sound = loadSound("paddlebounce.wav");
      lose_sound = loadSound("lose.wav");
    }

function setup() {

    createCanvas(400,400);
    rectMode(CENTER);
    fill(255);
    imageMode(CENTER);
    
}

function mouseClicked() {
  gameOn = true;
  xSpeed = random(1,4);
  ySpeed = random(1,4);
  imageX = random(50,350);
  imageY = random(50,250);
}

function draw() {
fill(0);
textSize(15);
 background(255,205,120);
text("points: " + points,15,35);
text("misses: " + misses,15,50);

score = points + (bonus*10);
text("score: " + score,325,35);
image(coin,imageX,imageY,40,40);


  if (gameOn == false) {
    xSpeed = 0;
    ySpeed = 0;
    score=0;
  }

 
  rect(200,5,400,10);//top border
  rect(5,200,10,400); //left border
  rect(395,200,10,400); //right border
  fill(0,70,100);
  ellipse(xPos, yPos, 30,30);


  xPos += xSpeed;
  yPos += ySpeed;

  if (xPos > (width -20) || xPos < 20) {
    bounce_sound.play();
    xSpeed *= -1;
  }

  if (yPos<20) {
    bounce_sound.play();
    ySpeed *= -1;
  }

  if (yPos > height) {
    lose_sound.play();
    misses++;
    yPos = 200;
    xPos = 200;
gameOn = false;
  }

//move paddle left and right
  if (keyIsDown(65)) {
    playX -= 2;
    ;
  }

  if (keyIsDown(68)) {
    playX += 2;
  }

  //playX += playSpeedX;

  if (playX > (width - 50)) {
    playX = 350;
  }
  if (playX < 50) {
    playX = 50;
  }

/*
//collide with paddle
if (dist(xPos, yPos, playX, playY) < 20) {
  paddle_sound.play();
yPos=yPos-5;
ySpeed = -1*ySpeed;
points++;
}*/


if ((yPos+15)<(playY-6) || (xPos+15)<(playX-40) || (xPos+15)>(playX+40)) {
  paddle_collision = false;
}

else {

  paddle_collision = true;
  paddle_sound.play();
  points++;
  yPos=yPos-5;
  ySpeed=-1*ySpeed;

  //bounce differently each time
  ySpeed += random(-0.5,0.5);
  xSpeed += random(-0.5,0.5);

//colliding with left side
  if (xPos<playX) {
    xSpeed = -1* abs(xSpeed);
  }


//colliding with right side
  if (xPos>playX) {
xSpeed = abs(xSpeed);
  }
  
}


//collide with coin
if (dist(xPos, yPos, imageX, imageY) < 25) {
  bonus_sound.play();
  imageX = random(50,350);
  imageY = random(50,250);
  bonus++;
}

fill(100,0,0);
rect(playX,playY, 80,12);

}
