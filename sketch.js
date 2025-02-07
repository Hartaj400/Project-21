var bullet,wall;
var speed,weight;



function setup() {
   
  createCanvas(800,400);
  bullet =createSprite(10,200,50,10);
  wall =createSprite(600,200,60,height/2);
  
  speed =random(55,90);
  weight =random(400,1500);

}

function draw() {
  background(0);
  bullet.velocityX = speed;
  drawSprites();
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){ 
    bullet.velocityX =0;
    var deformation =0.5 * weight * speed * speed/22509;
    if(deformation>180){ 
      wall.shapeColor =color(255,0,0)
    }
    if(deformation<180 && deformation>100){ 
      wall.shapeColor =color(230,230,0);
    }
    if(deformation<100){ 
      wall.shapeColor =color(0,255,0);
    }
  }
}