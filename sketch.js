var car;
var wall;
var speed;
var weight;



function setup() {
  createCanvas(1600,400);
 car=createSprite(50, 200, 50, 50);
 wall=createSprite(1600,200,60,height/2);

 speed=random(55,90);
 weight=random(1200,1500);




}

function draw() {

  background("black"); 
 

  car.velocityX=speed/4;
  
  if(wall.x-car.x<(car.width+wall.width)/2){
 car .velocityX=0;

var deforamation=0.5 * weight * speed * speed/22509;
if(deforamation>180){
  car.shapeColor=color(255,0,0);

}
if(deforamation<180 && deforamation>100){
  car.shapeColor=color(230,230,0);

}
if(deforamation<100){
  car.shapeColor=color(0,255,0);

}
  } 




drawSprites();

}