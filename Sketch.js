var player, playerImg, zombie, zombieImg;

function preload(){
playerImg= loadImage("Images/NotShooting.png");
zombieImg=loadImage("Images/Zombie.jpg");
}

function setup(){
createCanvas(displayWidth,displayHeight); 
player=createSprite(850,850,40,40);
player.addImage(playerImg);
player.scale=2;
zombie=createSprite(850,150,40,40)
zombie.addImage(zombieImg);
zombie.scale=2
}

function draw(){
background("white");
drawSprites();
}