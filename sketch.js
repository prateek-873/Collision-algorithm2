var fixedRect, movingRect;
var car1,car2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car1=createSprite(300,100,60,60);
  car1.shapeColor = "orange";
  car2=createSprite(600,100,60,60);
  car2.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,car1)||isTouching(movingRect,car2)||isTouching(movingRect,fixedRect)){
  text("isTouching",400,400)
}else{
 text("notTouching",400,400)
}
  drawSprites();
}
