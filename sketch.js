
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, bananaGroup;
var score;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400);
  
  monkey = createSprite(80,290,20,20);
  monkey.addAnimation( "running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(350,324,1300,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();

  
}


function draw() {
  background ("white");
  
  if (ground.x <0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")) {
        monkey.velocityY = -12;
        
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
     
  
  monkey.collide(ground);
  monkey.collide(obstacleGroup);

    
  spawnBanana();
  spawnObstacles();
  
  stroke("white");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time : " + survivalTime, 100, 50)
  
  
 drawSprites();
}


function spawnBanana(){
  
  if(frameCount % 80 === 0){
    banana = createSprite(600,120,50,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.10;
    banana.velocityX = -3;
    banana.lifetime = 230;
    bananaGroup.add(banana);  
    
  }
  
}

function spawnObstacles(){
  
  if(frameCount % 300 === 0){
    obstacle = createSprite(600,285);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    obstacle.lifetime = 250;
    obstacleGroup.add(obstacle);
    
  }
  
}

