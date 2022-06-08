var ship, shipImg1;
var sea, seaImg;



function preload() {
  shipImg1 = loadAnimation("ship1.png","ship2.png");
  seaImg = loadImage("sea.png");
}


function setup(){
  createCanvas(1500,700);

  
  ship = createSprite(50,150,20,50);
                      
  ship.addAnimation("ship", shipImg1);
  ship.scale = 1.0;

  
  sea = createSprite(300,175,600,10);
  sea.addImage("sea.png", seaImg);
  sea.velocityX = -0.8;




}

function draw(){
  background(220);
  drawSprites();

  infinity();


}


function infinity() {
  if(sea.x < 0){
    sea.x = chao.width/4;
  }
}