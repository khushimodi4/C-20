var rect1, rect2;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(100,100,30,50);
  rect1.shapeColor = "red";
  rect2 = createSprite(200,250,30,60);
  rect2.shapeColor = "yellow";
  }

function draw() {
  background("blue"); 
  rect1.x = World.mouseX;
  rect1.y = World.mouseY; 

  console.log(rect1.x);
  console.log(rect2.x);
  if (rect2.x-rect1.x<(rect1.width+rect2.width)/2
      && rect1.x-rect2.x<(rect1.width+rect2.width)/2 
      && rect2.y-rect1.y<(rect1.height+rect2.height)/2
      && rect1.y-rect2.y<(rect1.height+rect2.height)/2){
    rect1.shapeColor = "orange";
    rect2.shapeColor = "orange";
  }
  else {
    rect1.shapeColor = "red";
    rect2.shapeColor = "yellow";
  }
  drawSprites();
}