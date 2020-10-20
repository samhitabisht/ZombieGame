var player, playerImg, zombieImg1,zombieImg2, zombieGroup;

function preload(){
playerImg= loadImage("Images/NotShooting.png");
zombieImg1=loadImage("Images/zombieLeft.png");
zombieImg2= loadImage("Images/zombieRight.png")

}

function setup(){
createCanvas(displayWidth,displayHeight); 
edges= createEdgeSprites();
player=createSprite(850,850,40,40);
player.addImage(playerImg);
player.scale=2;
zombieGroup= new Group(); 
}

function draw(){
background("white");
spawnZombies();
zombieGroup.bounceOff(edges);
drawSprites();
}

function spawnZombies (){
    if (frameCount % 100 ===0){
        var zombie= createSprite(random(100,100), 150, 40, 40);
        zombie.setVelocity(random(-4,4),random(0,5))
        if (zombie.velocityX<0){
            zombie.addImage(zombieImg1);
        }
        else {
            zombie.addImage(zombieImg2);
        }
        zombieGroup.add(zombie);

    }
}
