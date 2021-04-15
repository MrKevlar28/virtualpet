//Create variables here
var dog;
var dogImg1, dogImg2;
var foodStock, foodS;
function preload()
{
	//load images here
  dogImg1 = loadImage("dogImg.png");
  dogImg2 = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(800, 800);
  database = firebase.database();
  dog = createSprite(400,250,50,50);
  dog.addImage(dogImg1);
  dog.scale = 0.5;

  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
  
}


function draw() {  
  background(46,139,87);

  drawSprites();
  //add styles here
  textSize(30);
  fill("white");
  text("Note : Press the Up Arrow Key to feed Milk!", 100, 700);
  textSize(30);
  fill("White");
  text("Food remaining : " + foodS, 250, 600);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg2);

  }
}
  function readStock(data){
    foodS = data.val();
  
  }
  function writeStock(x){
  
    if(x <= 0){
      x = 0;
    }
    else{
      x = x-1;
    }
    database.ref("/").update({
      Food:x
    })
  }
  




