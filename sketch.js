var ob1 , ob2 , ob3 , ob4 , ob5 , ob6 , on7 , ob8 , ob9 , ob10  ;
var ob11 , ob12 , ob13 , ob14 , ob15 , ob16 , ob17 , ob18 , ob19 , ob20 ;
var ob21 , ob22 , ob23 , ob24 , ob25 , ob26 , ob27 , ob28 , ob29 , ob30 ;
var pacman , pacman_img;

function preload(){
pacman_img=loadImage("pacman.png");
}

function setup() {
  createCanvas(800,500);
  background("black");  
}

function draw() {
  pacman=createSprite(400,250,20,20);
  pacman.addImage(pacman_img);
  pacman.scale=0.20;
  //BOTTOM
  ob1=createSprite(500,499,1000,10);
  ob1.shapeColor="blue";

  //TOP
  ob2=createSprite(500,1,1000,10)
  ob2.shapeColor="blue";

  //LHS
  ob3=createSprite(1,200,10,1000);
  ob3.shapeColor="blue";

  //RHS
  ob4=createSprite(799,200,10,1000);
  ob4.shapeColor="blue";

  ob5=createSprite(395,300,150,10);
  ob5.shapeColor="blue";

  ob6=createSprite(320,255,10,100);
  ob6.shapeColor="blue";

  //ob7=createSprite(395,159,100,10);
  //ob7.shapeColor="blue";

  ob8=createSprite(474,255,10,100);
  ob8.shapeColor="blue";

  ob9=createSprite(100,300,10,100);
  ob9.shapeColor="blue";

  ob10=createSprite(145,350,100,10);
  ob10.shapeColor="blue";

  ob11=createSprite(100,150,10,100);
  ob11.shapeColor="blue";

  ob12=createSprite(145,100,100,10);
  ob12.shapeColor="blue";

  ob13=createSprite(700,150,10,100);
  ob13.shapeColor="blue";
  
  ob14=createSprite(655,100,100,10);
  ob14.shapeColor="blue";

  ob15=createSprite(700,300,10,100);
  ob15.shapeColor="blue";

  ob16=createSprite(655,350,100,10);
  ob16.shapeColor="blue";

  ob17=createSprite(300,450,10,100);
  ob17.shapeColor="blue";

  ob18=createSprite(300,50,10,100);
  ob18.shapeColor="blue";

  ob19=createSprite(500,450,10,100);
  ob19.shapeColor="blue";

  ob20=createSprite(500,50,10,100);
  ob20.shapeColor="blue";

  ob21=createSprite(340,210,35,10);
  ob21.shapeColor="blue";

  ob22=createSprite(455,210,35,10);
  ob22.shapeColor="blue";

  ob23=createSprite(200,230,50,10);
  ob23.shapeColor="blue";

  ob24=createSprite(600,230,50,10);
  ob24.shapeColor="blue";

  ob25=createSprite(400,400,100,10);
  ob25.shapeColor="blue";

  ob26=createSprite(400,100,100,10);
  ob26.shapeColor="blue";

  if(keyDown("RIGHT_ARROW")){
    pacman.velocityX=5; 
    }
    if(keyDown("LEFT_ARROW")){
      pacman.velocityX=-5; 
      }
    if(keyDown("DOWN_ARROW")){
        pacman.velocityY=5;
        }
    if(keyDown("UP_ARROW")){
          pacman.velocityY=-5; 
          } 
  drawSprites();
}