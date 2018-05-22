
var snake;  // creating a object for snake
var unit =20 ;  // this value is used to divide the canvas into segments
var food;
var end=0;  
function setup(){  // runs only one time when program starts 
    createCanvas(600,640);
    frameRate(10);
    snake =  new Snake(); // defining snake object
  
    foodLocation(); // placing food at random place
}


function draw(){ // this function runs continuously until program stops 
    if(end==0){
    background(51);
    scoreboard();  
    if(snake.eat(food)){  // condition to check whether snake ate the food
        foodLocation();  // reassigning locaion  for food 
    }
    fill(255,0,100);
    rect(food.x,food.y,unit,unit);
    snake.update()
    snake.show();
    snake.gameEnd()
    if(snake.selfKill){  
        end++;
        finalScoreboard();  

    }
}
    // snake.gameEnd();
}


// To diplay score board 
function scoreboard() {
    fill(0);
    rect(0, 0, 600, 40);
    fill(255);
    textFont("Georgia");
    textSize(18);
    text("Score: ", 10, 25);
    text("Highscore: ", 350, 25)
    text(snake.total, 70, 25);
    text(snake.HS, 440, 25)
  }
  function finalScoreboard() {
    fill(0);
    rect(0, 0, 600, 40);
    fill(255);
    textFont("Georgia");
    textSize(18);
    text("Game over! you score was : ", 10, 25);
    // text("Highscore: ", 450, 25)
    text(snake.total, 250, 25);
    button = createButton('restart');
  button.position(500, 25);
  button.mousePressed(restart);
    // text(snake.HS, 540, 25)
  }
function restart(){
    end=0;
    snake.selfKill=false;
    snake.total=0;
    snake.body=[];
}

// function that runs when keyboard keys are pressed 
function keyPressed(){
    if(keyCode === UP_ARROW){
        snake.dir(0,-1)
    } else if(keyCode === DOWN_ARROW){
        snake.dir(0,1)
    } else if(keyCode === RIGHT_ARROW){
        snake.dir(1,0)
    } else if(keyCode === LEFT_ARROW){
        snake.dir(-1,0)
    } 

}
// function to generate food at ramdom location
function foodLocation(){
    var foodX = floor((canvas.width/unit))
    var foodY = floor((canvas.height/unit))
    food = createVector(floor(random(foodX)),floor(random(foodY)))
    // console.log(food);
    food.mult(unit);
    if(food.x>580 || food.y>620 || food.y<40){
        foodLocation()
    }
    for(var i=0; i<snake.total-1;i++){ 
        var d = dist(food.x,food.y,snake.body[i].x,snake.body[i].y)
        if(d<1){
            foodLocation()
        }    
        }
}  