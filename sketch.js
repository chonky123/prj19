var jakeImg, pathImg, path, jake, leftboundry , rightboundry, coin , coinImg , song , slider ;
function preload(){

    jakeImg=loadAnimation("1.png","2.png");
    pathImg=loadImage("path.png");
    coin.Img=loadImage("coin.png");
}
 

function setup(){
    createCanvas(400,400);
    path=createSprite(200,200);
    path.addImage(pathImg);
    path.velocityY=5;
    path.y=path.height/30;
    jake=createSprite(180,340,50,170);
    jake.addAnimation("running",jakeImg);
    coin=creayeSprite(200,200,80,90);
    coin.addImage(coinImg);
    coin.scale=0.3
    coin=createSprite(100,200,80,90);
    coin.addImage(coinImg);
    coin.scale=0.3
    coin=createSprite(300,200,80,90);
    coin.addImage(coinImg);
    coin.scale=0.3;
    leftboundry=createSprite(0,300,100,600);
    rightboundry=createSprite(390,300,80,600);
    leftboundry.visible=false;
    rightboundry.visible=false
}

function draw(){
    background(0);
    path.velocityY=5;
    jake.x=World.mouseX;
    if(path.y>400){
        path.y=height/2;
    }
    jake.collide(leftboundry);
    jake.collide(rightboundry);
    edges=createEdgesSprites();
    jake.collide(edges[3]);
    drawSprites();
}






















































































































































































































































































































































































































































































































































































































































































































































































































































     


















































































































































































