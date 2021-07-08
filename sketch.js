var garden,rabbit,apple,Oleaf,Gleaf;
var gardenImg,rabbitImg,appleImage,OleafImage,GleafImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  OleafImage = loadImage("orangeLeaf.png");
  GleafImage = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);




  






}


function draw() {
  background(0);

  rabbit.x=World.mouseX
  edges=createEdgeSprites();
  rabbit.collide(edges);
  
  drawSprites();
var select_sprites=Math.round(random(1,3));


  if(frameCount % 80 ==0){
    if (select_sprites==1){
      createapple();
    }else if (select_sprites==2){
      createOleaf();
    }else{ 
      createGleaf(); 
    }

  }







function createapple(){
  apple = createSprite (100,10,10,10) 
  apple.addImage(appleImage);
  apple.scale=0.1
  apple.velocityY=5
  apple.depth=rabbit.depth
  rabbit.depth=rabbit.depth+1

}

function createOleaf(){

  Oleaf  = createSprite(200,10,10,10)
  Oleaf.addImage(OleafImage);
  Oleaf.scale=0.1
  Oleaf.velocityY=5
  Oleaf.depth=rabbit.depth
rabbit.depth=rabbit.depth+1


}

function createGleaf(){

  Gleaf = createSprite(300,10,10,10)
  Gleaf.addImage(GleafImage);
  Gleaf.scale=0.1
  Gleaf.velocityY=5
  Gleaf.depth=rabbit.depth
rabbit.depth=rabbit.depth+1

}




  

 



  



  
}













