const Bodies = Matter.Bodies;
const Engine =Matter.Engine;
const World = Matter.World;

var myengine,myworld;
var object;
function setup() {
  createCanvas(800,400);

  myengine = Engine.create();
  myworld = myengine.world;

  var object_options = {
    restitution : 0.8
  }
  object = Bodies.rectangle(300,50,50,50,object_options);
  World.add(myworld,object);


  console.log(object.position.x);
  console.log(object.position.y);

 
}

function draw() {
  background(239,126,13);  
  Engine.update(myengine);
  rect(object.position.x,object.position.y,50,50);
}