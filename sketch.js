function setup() {
  createCanvas(800,800);
 A= createSprite(400, 200, 50, 50);
 A.shapeColor="blue"
 B=createSprite(400, 400, 50, 50);
 B.shapeColor="blue"
}

function draw() {
  background(255,255,255);
  B.x=mouseX
  B.y=mouseY
  if(B.x-A.x<=B.width/2+A.width/2 &&
    A.x-B.x<=B.width/2+A.width/2 &&
    B.y-A.y<=B.height/2+A.height/2 &&
    A.y-B.y<=B.height/2+B.height/2){
    B.shapeColor="red"
    A.shapeColor="red"
  } 
  else{
    A.shapeColor="blue"
    B.shapeColor="blue"
  }
  drawSprites();
}