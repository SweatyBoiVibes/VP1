
var db, stock, foodS

function preload()
{
d1=loadImage("images/dogImg.png")
d2=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(800, 700);
  
  db=firebase.database()

  var stock=db.ref("food")
  stock.on("value", read)

  
  dog=createSprite(200,200,10,10)
  dog.addImage(d1)
}


function draw() {  
background("white")
dog.scale=0.5

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(d2)
  }


  text("Press Up arrow key to feed the dog!", 80,200)
  drawSprites();

}
function read(data){
  foodS=data.val()
}

function writeStock(x){

  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }

}

