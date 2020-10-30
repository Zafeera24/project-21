var bullet1, bullet2, bullet3;
var wall1, wall2, wall3;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  
  bullet1 = createSprite(400, 100, 33, 33);
  bullet1.shapeColor = "white";
  bullet1.velocityX = 2;
  
  bullet2 = createSprite(400, 200, 33, 33);
  bullet2.shapeColor = "white";
  bullet2.velocityX = 2;
  
  bullet3 = createSprite(400, 300, 33, 33);
  bullet3.shapeColor = "white";
  bullet3.velocityX = 2;

  wall1 = createSprite(1500, 100, thickness, 66);
  wall2 = createSprite(1500, 200, thickness, 66);
  wall3 = createSprite(1500, 300, thickness, 66);

  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);
}

function draw() {
  background("black");  

if(wall1.x - bullet1.x < (bullet1.width + wall1.width) /2){
  bullet1.velocityX = 0;
  bullet1.shapeColor = "red";
}

if(wall2.x - bullet2.x < (bullet2.width + wall2.width) /2){
  bullet2.velocityX = 0;
  bullet2.shapeColor = "green";
}

if(wall3.x - bullet3.x < (bullet3.width + wall3.width) /2){
  bullet3.velocityX = 0;
  bullet3.shapeColor = "yellow";
}
  
  if(hasCollided(bullet1, wall1)){
    bullet1.velocity = 0;
  var damage = 0.5*weight*speed*speed / (thickness*thickness*thickness);
  if(damage > 10){
    wall1.shapeColor = ("red");
  }else if(damage < 10){
    wall1.shapeColor = ("green");
   }
  }

  if(hasCollided(bullet2, wall2)){
    bullet2.velocity = 0;
  var damage = 0.5*weight*speed*speed / (thickness*thickness*thickness);
  if(damage > 10){
    wall2.shapeColor = ("red");
  }else if(damage < 10){
    wall2.shapeColor = ("green");
   }
  }

  if(hasCollided(bullet3, wall3)){
    bullet3.velocity = 0;
  var damage = 0.5*weight*speed*speed / (thickness*thickness*thickness);
  if(damage > 10){
    wall3.shapeColor = ("red");
  }else if(damage < 10){
    wall3.shapeColor = ("green");
   }
  }
  drawSprites();
}


function hasCollided(lbullet1, lwall1){
  bullet1RightEdge = lbullet1.x + lbullet1.width;
  wall1LeftEdge = lwall1.x;
if(bullet1RightEdge >= wall1LeftEdge){
  return true
}else{
  return false
}
}

function hasCollided(lbullet2, lwall2){
  bullet2RightEdge = lbullet2.x + lbullet2.width;
  wall2LeftEdge = lwall2.x;
if(bullet2RightEdge >= wall2LeftEdge){
  return true
}else{
  return false
}
}

function hasCollided(lbullet3, lwall3){
  bullet3RightEdge = lbullet3.x + lbullet3.width;
  wall3LeftEdge = lwall3.x;
if(bullet3RightEdge >= wall3LeftEdge){
  return true
}else{
  return false
}
}


