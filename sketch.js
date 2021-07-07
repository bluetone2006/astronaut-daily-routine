var bath;
var brush;
var drinkAnim;
var eatAnim;
var gymAnim;
var iss, issSprite;
var move;
var sleep;
var astronaut;
var restAnim;


function preload(){
  bath = loadAnimation("./assets/bath1.png", "./assets/bath2.png");
  brush = loadImage ("./assets/brush.png");
  drinkAnim = loadAnimation ("./assets/drink1.png", "./assets/drink2.png");
  eatAnim = loadAnimation ("./assets/eat1.png", "./assets/eat2.png");
  gymAnim = loadAnimation ("./assets/gym1.png", "./assets/gym2.png", "./assets/gym11.png", "./assets/gym12.png")
  iss = loadImage ("./assets/iss.png");
  move = loadAnimation ("./assets/move.png");
  sleep = loadImage ("./assets/sleep.png");
}


function setup() {
  
  createCanvas(400,400);
  
  

  issSprite = createSprite (200,200);
  issSprite.addImage ("iss", iss)
  issSprite.scale = 0.10;


  astronaut = createSprite(200,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
  
}

function draw() {  
  background(255,255,255);  
  
 
 

  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation ("brushing");
    astronaut.y = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation ("gym", gymAnim);
    astronaut.changeAnimation ("gym", gymAnim);
    astronaut.y = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation ("bathing", bath);
    astronaut.changeAnimation ("bathing");
    astronaut.y = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation ("eating", eatAnim);
    astronaut.changeAnimation ("eating");
    astronaut.y = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if (keyDown ("M")){
    astronaut.addAnimation ("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.y = 200;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }
  drawSprites();
}