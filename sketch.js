var bgImg, sleep, brush, gym, gym2;
var eat, drink, move, bath;
var astronaut, bg;

//Game States
var START=2;
var PLAY=1;
var END=0;
var gameState=START;

function preload() {
  bgImg = loadImage("iss.png");
  sleep = loadImage("sleep.png");
  brush = loadImage("brush.png");
  gym = loadAnimation("gym1.png","gym2.png");
  gym2 = loadAnimation("gym11.png","gym12.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move.png","move1.png");
  bath = loadAnimation("bath1.png","bath2.png");
}

function setup() {
  createCanvas(400, 400);

  //background - space shuttle
  bg = createSprite(200,200,400,400);
  bg.addImage("bgSpaceShuttle",bgImg)

  //craeting the astronaut
  astronaut = createSprite(300,230);
  astronaut.addImage("sleeping",sleep);
  astronaut.scale = 0.01;


}

function draw() {
  background(220);
  edges = createEdgeSprites();
  astronaut.bounceOff(edges);
  if(gameState === START) {
    //welcome text
  textSize(15);
  fill("black");
  text("Up Arrow for Brushing",50,50);
  text("Down Arrow for Gym",50,100);
  text("Left Arrow for Eating",50,150);
  text("Right Arrow for Bathing",50,200);
  text("Press m for Moving",50,250);

  if(keyDown("UP_ARROW")||keyDown("DOWN_ARROW")||keyDown("LEFT_ARROW")||keyDown("RIGHT_ARROW")||keyDown("m")){
    gameState = PLAY;
  }

  } else 
  if(gameState === PLAY) {
  //up key pressed - brushing
  if(keyDown("UP_ARROW")) {
    astronaut.addImage("brushing", brush);
    //astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velcoityY = 0;
  }
  //down key pressed - Gym
  if(keyDown("DOWN_ARROW")) {
    var select_image = Math.round(random(1,2));
    switch(select_image){
      case 1: astronaut.addImage("gym1", gym);
      break;
      case 2: astronaut.addImage("gym2", gym2);
      break;
      default: break;
    }
    //astronaut.changeAnimation("gym1");
    //astronaut.changeAnimation("gym2");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velcoityY = 0;
  }
  //left key pressed - bathing
  if(keyDown("LEFT_ARROW")) {
    astronaut.addImage("bathing", bath);
    //astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velcoityY = 0;
  }
  //right key pressed - eating
  if(keyDown("RIGHT_ARROW")) {
    astronaut.addImage("eating", eat);
    //astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velcoityY = 0;
  }
  //m key pressed - moving
  if(keyDown("m")) {
    astronaut.addImage("moving", move);
    //astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 3;
    astronaut.velcoityY = 3;
  }

  if(keyDown("UP_ARROW")&&keyDown("DOWN_ARROW")&&keyDown("LEFT_ARROW")&&keyDown("RIGHT_ARROW")&&keyDown("m")){
    gameState = END;
  }

  } else
  if(gameState === END) {
    background("black");
    textSize(20);
    fill("turquoise");
    text("THE END!",150,200);
    text("PRESS SPACE TO RESET",50,250);
    if(keyDown("space")){
      gameState = START;
    }

  }
  
  drawSprites;
}