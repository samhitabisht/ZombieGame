var player, playerImg, zombieImg1,zombieImg2, zombieGroup, health,gameState;

function preload(){
playerImg= loadImage("Images/NotShooting.png");
zombieImg1=loadImage("Images/zombieLeft.png");
zombieImg2= loadImage("Images/zombieRight.png")

}

function setup(){
createCanvas(displayWidth,displayHeight); 
edges= createEdgeSprites();
player=createSprite(displayWidth/2,displayHeight,40,40);
player.addImage(playerImg);
player.scale=2;
player.debug=true;
player.setCollider("rectangle",0,0,100,100)
zombieGroup= new Group(); 
health=100;
gameState=1;
}

function draw(){
background("white");
if (gameState===1){
    if (keyWentDown("Left")){
    player.velocityX= -4;
    }
    if (keyWentDown("Right")){
        player.velocityX= 4;
    }
    if (keyWentUp("Left")){
        player.velocityX=0;
    }
    if (keyWentUp("Right")){
        player.velocityX=0;
    }
    spawnZombies();
    if (zombieGroup.isTouching(player)){
        health=health-10;
    }
    textSize(30)
    text("Health:"+health,displayWidth-200,200);
    if (health===0){
    gameState=2;
}
}
 if (gameState===2){
    zombieGroup.setVelocityXEach(0);
    zombieGroup.setVelocityYEach(0);

 }



zombieGroup.bounceOff(edges);
zombieGroup.bounceOff(player);
drawSprites();
}

function spawnZombies (){
    if (frameCount % 100 ===0){
        var zombie= createSprite(random(100,100), 150, 40, 40);
        zombie.debug=true;
        zombie.setCollider("rectangle",10,0,80,80)
        zombie.setVelocity(random(-4,4),random(0,5))
        if (zombie.velocityX<0){
            zombie.addImage(zombieImg1);
            zombie.scale=1.5
        }
        else {
            zombie.addImage(zombieImg2);
            zombie.scale=1.5
        }
        zombieGroup.add(zombie);
    }
}


