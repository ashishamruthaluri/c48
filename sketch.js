var cat,catImage
var dog,dogImage
var water,waterImage
var milk,milkImage
var mouse,mouseImage
var gameState = "start"
var score = 0
var bg1,bg2,bg3,bg1Image,bg2Image,bg3Image
var ground
var foodGroup
var obstacleGroup

function preload(){
  catImage = loadImage("cat.png")
  dogImage = loadImage("dog.png")
  waterImage = loadImage("water.png")
  mouseImage = loadImage("mouse.png")
  milkImage = loadImage("milk.png")
  bg1Image = loadImage("bg1.jpg")
  bg2Image = loadImage("bg2.jpg")
  bg3Image = loadImage("bg3.webp")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg1 = createSprite (width/2,height/2,50,50)
  bg2 = createSprite (width/2,height/2,50,50)
  bg3 = createSprite(width/2,height/2,50,50)
  edges = createEdgeSprites()
  cat = createSprite(100, 850, 50, 50);
  
  cat.debug = false
  cat.setCollider("rectangle",0,0,100,100)
  cat.addImage(catImage)
  cat.scale = 0.6
  bg1.addImage(bg1Image)
  bg2.addImage(bg2Image)
  bg3.addImage(bg3Image)
  bg1.scale = 3
  bg2.scale = 11
  bg3.scale = 1
  cat.visible = false
  bg1.visible = false
  bg2.visible = false
  bg3.visible = false
  obstacleGroup = new Group()
  foodGroup = new Group()

  
 
}

    function draw() {

      if (gameState == "start"){
        start()
        
      }
      
    
    if (gameState == "PLAY"){
      playGame()
      
  }
  if (gameState == "end"&& gameState != "PLAY"){
    endGame()
    

    
    
  
  } 

  
  drawSprites();
  
  //if(gameState = "start"){
    //fill("black")
    //text("Life of a cat",width/2 +10,220)
//}
    //if (gameState = "PLAY"){
      //fill("black")
      //text("Score:0,50,50")


    //}
    
    
  }


  
  
  
  

function controls(){
 if (keyDown(LEFT_ARROW)){
cat.x -= 5
 }
 if (keyDown(RIGHT_ARROW)){
  cat.x += 5
   }
   if (keyDown(DOWN_ARROW)){
    cat.y += 5
     }
     if (keyDown(UP_ARROW)&& cat.y>=770){
      cat.y -= 5

       }

}
function obstacles(){
if (frameCount%200===0){
  water = createSprite(800, 800, 50, 50);
  dog = createSprite(500, 900, 50, 50);
  dog.addImage(dogImage)
  water.addImage(waterImage)
  dog.velocityX = -3
  water.velocityX = -3
  dog.scale = 0.4
  water.scale = 0.2
  dog.visible = true
  water.visible = true
  dog.debug = false
  dog.setCollider("rectangle",0,0,100,100) 
  water.debug = false
  water.setCollider("rectangle",0,0,100,100)
  dog.lifetime=1300
  water.lifetime=1300
  obstacleGroup.add(dog)
  obstacleGroup.add(water)


}
}
function food(){
if (frameCount%300===0){
  milk = createSprite(950, 950, 50, 50);
  mouse = createSprite(1400, 800, 50, 50);
  mouse.debug = false
  mouse.setCollider("rectangle",0,0,100,100) 
  milk.debug = false
  milk.setCollider("rectangle",0,0,100,100)
  milk.addImage(milkImage)
  mouse.addImage(mouseImage)
  mouse.scale = 0.2
  milk.scale = 0.4
  mouse.visible = true
  milk.visible = true
  mouse.velocityX = -3
  milk.velocityX = -3
  milk.lifetime=1300
  mouse.lifetime=1300
  foodGroup.add(milk)
  foodGroup.add(mouse)
}
}
function endGame(){
  bg3.visible = true
  bg1.visible = false
  bg2.visible = false
  cat.destroy()
  obstacleGroup.destroyEach()
  foodGroup.destroyEach()
  obstacleGroup.setLifetimeEach(-1)
  foodGroup.setLifetimeEach(-1)
  obstacleGroup.setVelocityXEach(0)
  foodGroup.setVelocityXEach(0)
  bg1.velocityX = 0
  bg1.destroy()
  
}
function playGame (){
  bg1.visible = true
    bg2.visible = false
    bg3.visible = false
    cat.collide(edges)

   
    
     bg1.velocityX = -30
    if(bg1.x < 800){
      bg1.x = width/2}

      
    cat.visible = true
    obstacles()
    food()
    
    
    if (cat.isTouching(obstacleGroup)){
     {cat.remove()
    gameState = "end"
    };
    

    }
    if (cat.isTouching(foodGroup)){
      foodGroup.destroyEach()
      score += 10
     
        };
        controls()
        
      
      

    }

  function start(){
    bg2.visible = true
    bg1.visible = false
    bg3.visible = false
    button = createButton("PLAY") 
    button.position (width/2,height/2)
    button.size (100,50)
    button.mousePressed(()=>{
      gameState = "PLAY"
      button.hide()
    
    
    
    
    })
  }
    
    
   
    



  