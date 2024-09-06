        //Decalracion de variables para el juego :)
var path, boy, cash, diamonds, jwellery, policeman, policecar, jaja;
var pathImg, boyImg, cashImg, diamondsImg, jwelleryImg, policemanImg, policecarImg, jajaImg;
var cashG, diamondsG, jwelleryG, policemanG, policecarG;
var tresureCollection = 0;
        //Declaración de estados del juego

var PLAY = 1;
var END = 0;
var Gamestate = 1;
        //Creación de función preload para cargar imágenes al juego

function preload(){
    pathImg = loadImage("Road.png");
    boyImg = loadAnimation("Man_run_1.png", "Man_run_2.png");
    cashImg = loadImage("Money_bag.png");
    diamondsImg = loadImage("Some_bills.png");
    jwelleryImg = loadImage("Just_a_coin.png");
    policemanImg = loadImage("police.png");
    policecarImg = loadAnimation("Car_1.png", "Car_2.png");
    jajaImg = loadImage("jaja.png");
}

function setup(){
    createCanvas(400,600);
    path = createSprite(200,200);
    path.addImage(pathImg);
    path.velocityY = 9;

    //Creando al mono que corre
    boy = createSprite(170,530,20,20);
    boy.addAnimation("SahilRunning", boyImg);
    boy.scale = 1.5;

    //Creando grupos de generación
    cashG = new Group();
    diamondsG = new Group();
    jwelleryG = new Group();
    policemanG = new Group();
    policecarG = new Group();
}

function draw(){

    if(Gamestate === PLAY){
        background(0);
        boy.x = World.mouseX;
        edges = createEdgeSprites();
        boy.collide(edges);

    }

    if (path.y >2000) {
        path.y = height/2;
    }

    createCash();
    createDiamonds();
    createJwellery();
    createPoliceman();
    createPolicecar();

    if(cashG.isTouching(boy)){
        cashG.destroyEach();
        tresureCollection = tresureCollection + 20;
    }
    else if(diamondsG.isTouching(boy)){
        diamondsG.destroyEach();
        tresureCollection = tresureCollection + 5;
    }
    else if(jwelleryG.isTouching(boy)){
        jwelleryG.destroyEach();
        tresureCollection = tresureCollection + 1;
    }else{
        if(policemanG.isTouching(boy)){
            Gamestate = END;
            boy.addAnimation("SahilRunning", jajaImg);
            boy.x = 200;
            boy.y = 300;
            boy.scale = 2.5;
            cashG.destroyEach();
            diamondsG.destroyEach();
            jwelleryG.destroyEach();
            policemanG.destroyEach();
            policecarG.destroyEach();

            cashG.setVelocityYEach(0);
            diamondsG.setVelocityYEach(0);
            jwelleryG.setVelocityYEach(0);
            policemanG.setVelocityYEach(0);
            policecarG.setVelocityYEach(0);
        }
    else if(policecarG.isTouching(boy)){
            Gamestate = END;
            boy.addAnimation("SahilRunning", jajaImg);
            boy.x = 200;
            boy.y = 300;
            boy.scale = 2.5;
            cashG.destroyEach();
            diamondsG.destroyEach();
            jwelleryG.destroyEach();
            policemanG.destroyEach();
            policecarG.destroyEach();
            
            cashG.setVelocityYEach(0);
            diamondsG.setVelocityYEach(0);
            jwelleryG.setVelocityYEach(0);
            policemanG.setVelocityYEach(0);
            policecarG.setVelocityYEach(0);

    }
    }
    


    drawSprites();

    textSize(22);
    fill(255, 0, 0);
    text("Plata Robada: " + tresureCollection, 200, 590)
}

function createCash(){
    if(World.frameCount % 200 == 0){
        var cash = createSprite(Math.round(random(50,350), 40, 10, 10));
        cash.addImage(cashImg);
        cash.scale = 1;
        cash.velocityY = 9;
        cash.lifetime = 150;
        cashG.add(cash);
    }
}

function createDiamonds(){
    if(World.frameCount % 320 == 0){
        var diamonds = createSprite(Math.round(random(50,350), 40, 10, 10));
        diamonds.addImage(diamondsImg);
        diamonds.scale = 1;
        diamonds.velocityY = 9;
        diamonds.lifetime = 150;
        diamondsG.add(diamonds);
    }
}

function createJwellery(){
    if(World.frameCount % 410 == 0){
        var jwellery = createSprite(Math.round(random(50,350), 40, 10, 10));
        jwellery.addImage(jwelleryImg);
        jwellery.scale = 0.5;
        jwellery.velocityY = 9;
        jwellery.lifetime = 150;
        jwelleryG.add(jwellery);
    }
}

function createPoliceman(){
    if(World.frameCount % 530 == 0){
        var policeman = createSprite(Math.round(random(50,350), 40, 10, 10));
        policeman.addImage(policemanImg);
        policeman.scale = 1.5;
        policeman.velocityY = 9;
        policeman.lifetime = 150;
        policemanG.add(policeman);
    }
}

function createPolicecar(){
    if(World.frameCount % 580 == 0){
        var policecar = createSprite(Math.round(random(50,350), 40, 10, 10));
        policecar.addAnimation("police", policecarImg);
        policecar.scale = 1.2;
        policecar.velocityY = 9;
        policecar.lifetime = 150;
        policecarG.add(policecar);
    }
}