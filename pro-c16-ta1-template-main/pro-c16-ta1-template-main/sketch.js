

function setup() 
{
  createCanvas(400, 400);
  box1= new Box()
  box2= new Box()
}

function draw() 
{
  background(220);
  box1.show()
  box2.show()
  box1.speed(1)
  box2.speed(2)
}


