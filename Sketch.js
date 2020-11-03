var player, playerImg, zombieImg1,zombieImg2, zombieGroup, health,gameState,bulletGroup,backgroundImg,wave, bulletImg, bullet;

var NoOfTotalZombies=0,speedZombies=3,timeDelay=140;


function preload(){
playerImg= loadImage("Images/NotShooting.png");
zombieImg1=loadImage("Images/zombieLeft.png");
zombieImg2= loadImage("Images/zombieRight.png")
backgroundImg= loadImage("Images/Background.jpg");
bulletImg= loadImage("Images/Bullet.png");

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
bulletGroup= new Group();
health=100;
gameState=1;
wave= 0; 
}

function draw(){
background(backgroundImg);
textSize(50);
switch(NoOfTotalZombies){
  case 0:
  text("Wave 1",displayWidth-200,200);
  break;
  case 1:
  text("Wave 1",displayWidth-200,200);
  break;
  case 2:
  text("Wave 1",displayWidth-200,200);
  break;
  case 3:
  text("Wave 1",displayWidth-200,200);
  break;
  case 4:
  text("Wave 1",displayWidth-200,200);
  break;
  case 5:
  text("Wave 1",displayWidth-200,200);
  break;
  case 6:
  text("Wave 1",displayWidth-200,200);
  break;
  case 7:
  text("Wave 1",displayWidth-200,200);
  break;
  case 8:
  text("Wave 1",displayWidth-200,200);
  break;
  case 9:
  text("Wave 1",displayWidth-200,200);
  break;
  case 10://wave 2
  speedZombies+=random(0,0.5);
  timeDelay=110;
  wave=2;
  
    break;

  case 20://wave 3
  speedZombies+=random(0,0.5);
  timeDelay=80;
  text("Wave 3",displayWidth-200,200);
    break;

  case 30://wave 4
  speedZombies+=random(0,0.5);
  timeDelay=50;
  text("Wave 4",displayWidth-200,200);
    break;

  case 40://wave 5
  speedZombies+=random(0,0.5);
  timeDelay=20;
  text("Wave 5",displayWidth-200,200);
    break;

  

}
if(wave===2){
  text("Wave 2",displayWidth-200,200);
}

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
    spawnBullet();
     if(bullet!=null){
      if(zombieGroup.isTouching(bulletGroup)){
        for (var i = 0; i < 150; i++) {       
          if(zombieGroup.get(i)!= null && zombieGroup.get(i).isTouching(bulletGroup)){
            var m=i;
            //zombieGroup.get(i).setAnimation("pop.png_1");
            zombieGroup.get(i).scale=0.1;
            //console.log(balloon3Group.get(i).lifetime); 
            setTimeout(function() {
            zombieGroup.get(m).remove(); 
            },500)
            
          }
        }
        bullet.destroy();
      }
    }

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
    if (frameCount % timeDelay ===0){
        var zombie= createSprite(random(100,100), 150, 40, 40);
        zombie.debug=true;
        zombie.setCollider("rectangle",10,0,80,80)
        zombie.setVelocity(random(-speedZombies,speedZombies),random(0,speedZombies))
        if (zombie.velocityX<0){
            zombie.addImage(zombieImg1);
            zombie.scale=1.5
        }
        else {
            zombie.addImage(zombieImg2);
            zombie.scale=1.5
        }
        zombieGroup.add(zombie);
        NoOfTotalZombies+=1;

    }
}

function spawnBullet(){
    if (keyCode===32){
        bullet= createSprite(player.x,player.y,20,20);
        bullet.velocityY= -5;
        bullet.addImage(bulletImg);
        bullet.scale=0.3;
        bulletGroup.add(bullet);
        keyCode=0;
    }
}