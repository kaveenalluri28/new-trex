var trex;
var trex_image
var ground, ground_image;


function preload(){

   // preload() loads image,sounds and edia files

  //var image name = loadAnimation("image_file_name");

trex_image = loadAnimation("trex1.png","trex3.png","trex4.png");
ground_image = loadImage("ground2.png");


}

function setup(){

  // create a canvas
  createCanvas(600,200);

  //trex creation
  trex = createSprite(50,50,20,20);
  trex.addAnimation("running",trex_image);
  trex.scale = 0.6;
  
// create a ground
  ground = createSprite(300,180,600,10);
  ground.addImage(ground_image);

}

function draw(){

  background("pink");


  drawSprites();

}

