var bola;

function setup() 
{
  createCanvas(600, 400);

  bola = createSprite(20,20,20,20);
  bola.shapeColor = "black";
  
}

function draw() 
{
  background(150,100,200);
  
//se você  quiser pode adicionar anotações ao seu editor
  if (keyIsDown(RIGHT_ARROW))
  {
    bola.position.x = bola.position.x+5;
  }
  
  if(keyIsDown(LEFT_ARROW))
  {
    bola.position.x = bola.position.x-5;
  }


  if(keyIsDown(UP_ARROW))
  {
    bola.position.y = bola.position.y-5;
  }

  if(keyIsDown(DOWN_ARROW))
  {
    bola.position.y = bola.position.y+5;

  }
  drawSprites();
}