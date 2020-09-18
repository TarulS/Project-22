var fixedRect, movingRect;
function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(100, 100, 80, 30);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log(movingRect.x-fixedRect.x);
  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2) {
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  } else {
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  drawSprites();
}