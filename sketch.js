var runner,runner_img,path,path_img
var left_invisibleGround, right_invisibleGround
function preload(){
  //pre-load images
path_img=loadImage("path.png");
runner_img=loadAnimation("Runner-1.png","Runner-2.png");
}


function setup(){
  createCanvas(400,400);
  //create sprites here

 // creation of path and adding image to it 
  path=createSprite(200,200,400,50);
  path.addImage("path",path_img);
  path.velocityY=4;
  path.scale=1.2;
 
  //creation of runner and adding animation to it 
  runner=createSprite(200,300,150,50);
  runner.addAnimation("runner",runner_img); 
  runner.velocityX=4;
  runner.scale=0.1;

 // creating left invisibleGround 
 left_invisibleGround=createSprite(25,200,400,20);
 left_invisibleGround.visible=false;
 // creating right invisibleGround
 right_invisibleGround=createSprite(350,200,400,20);
 right_invisibleGround.visible=false;
}

function draw() {
  background(0);
 // creating an infinitely moving path
  if (path.y>400){
  path.y=height/2;
  }

  // controlling the runner using the mouse
  runner.x=mouseX;
 // colliding the runner by the invisibleGrounds whenever it touches them
 runner.collide(left_invisibleGround);
 runner.collide(right_invisibleGround);

 drawSprites();
}
