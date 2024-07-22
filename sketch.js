var bgImg
var bg
var player
var playerImg
var bottomGround
var topGround
var obstacleBottom, obsBottom1, obsBottom2, obsBottom3
var obstacleTop, obsTop1, obsTop2
//var obsTopGroup, obsBottomGroup




function preload(){
bgImg=loadImage("assets/bg.png");
playerImg=loadImage("assets/Player.png");
obsTop1=loadImage("assets/obsTop1.png");
obsTop2=loadImage("assets/obsTop2.png");
obsBottom1=loadImage("assets/obsBottom1.png");
obsBottom2=loadImage("assets/obsBottom2.png");
obsBottom3=loadImage("assets/obsBottom3.png");
}

function setup(){
createCanvas(600,600);
// bg=createSprite(165,485,1,1);
// bg.addImage(bgImg);
// bg.scale=1.3

player=createSprite(100,200,20,50);
player.addImage("Player", playerImg)
player.scale=0.2

bottomGround = createSprite(200,520,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;

// obsTopGroup=new Group()
// obsBottomGroup=new Group()
      

}

function draw(){
background(bgImg)

if(keyDown("space") && player.y > 200) {
    player.velocityY = -12 ;
    
  }
player.velocityY = player.velocityY + 2;
player.collide(bottomGround);
player.collide(topGround);
spawnObstaclesTop();
spawnObstaclesBottom();
// if (player.isTouching(obsBottomGroup) || player.isTouching(obsTopGroup))
// {
//   obsBottomGroup.setVelocityXEach(0)
// }

drawSprites()
}

function spawnObstaclesTop(){
  if(World.frameCount % 80 === 0) {
    obstacleTop = createSprite(400,50,40,50);

obstacleTop.scale = 0.4;
obstacleTop.velocityX = -4;
obstacleTop.y = Math.round(random (100,340));
var rand = Math.round(random(1,2)); 
switch(rand){
  case 1: obstacleTop.addImage(obsTop1);
  break;
case 2: obstacleTop.addImage(obsTop2);
  break;
default: break;
}}
//obsTopGroup.add(obstacleTop)
}
  function spawnObstaclesBottom(){
    if(World.frameCount % 100 === 0) {
      obstacleBottom = createSprite(400,500,40,50);
  
  obstacleBottom.scale = 0.4;
  obstacleBottom.velocityX = -4;
  obstacleBottom.y = Math.round(random (400,460));
  var rand = Math.round(random(1,3)); 
  switch(rand){
    case 1: obstacleBottom.addImage(obsBottom1);
    break;
  case 2: obstacleBottom.addImage(obsBottom2);
    break;
  case 3: obstacleBottom.addImage(obsBottom3);
    break;
  default: break;
  }}
  //obsBottomGroup.add(obstacleBottom)
  }