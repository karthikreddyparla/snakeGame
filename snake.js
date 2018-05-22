
function Snake(){ 
    this.snakeX = 0;// starting X point of snake head
this.snakeY = 40;   // starting Y point of snake head
// Direction and speed with which the snake travels 
this.snakeSpeedX = 1; 
this.snakeSpeedY = 0; 
// # of time the food was eaten by the snake 
this.total =0;
// Array to store the position of the snake body 
this.body = [];
// saving highest score
this.HS = 0;

this.selfKill=false

// function to define when the game ends 
this.gameEnd = function(){
    for(var i=0; i<this.total-1;i++){ 
var d = dist(this.snakeX,this.snakeY,this.body[i].x,this.body[i].y)
if(d<1){
    this.selfKill = true;
    break;
    // this.total=0;
    // this.body=[];
}
// else{
//     return false;
// }    
}

}
// function to check whether the snake ate the food 
this.eat = function(loc){
var d = dist(this.snakeX,this.snakeY,loc.x,loc.y)
    if(d<1){
        this.total++
        return true;
    }else{
        return false;
    }
}

// function to assign the direction in which snake should move.
this.dir = function(x,y){
    if(x!=this.snakeSpeedX && y!=this.snakeSpeedY )
    {
        console.log(x,y);
    // this.snakeX=this.snakeX+x*unit;
    // this.snakeY=this.snakeY+y*unit; 
    // this.snakeGrowth()   
    this.snakeSpeedX = x;   
    this.snakeSpeedY = y;
    // this.update()
    }
}
// function to track the snake length and its position 
this.snakeGrowth = function(){
    if(this.total!=0)
    {
    if(this.total === this.body.length){
    for(var i=0; i<this.total-1;i++){
        this.body[i]=this.body[i+1];
    }}
    this.body[this.total-1]=createVector(this.snakeX,this.snakeY)
    }
    // console.log(this.body)
}

//function to update the position of snake for each iteration 
this.update = function(){
    this.snakeGrowth();
    this.snakeX =  this.snakeX + this.snakeSpeedX*unit;
    this.snakeY =  this.snakeY + this.snakeSpeedY*unit;
    if(this.snakeX >=600){
        this.snakeX =0; 
    }
    if(this.snakeX <0){
        this.snakeX =600; 
    }
    if(this.snakeY >=640){
        this.snakeY =40; 
    }
    if(this.snakeY <40){
        this.snakeY =640; 
    }

    if(this.total>this.HS)
    {
        this.HS=this.total;
    }
}

//function to display the snake that is updated in update function 
this.show = function(){
    fill(255);
    for(var i=0; i<this.total;i++){
        rect(this.body[i].x,this.body[i].y,unit,unit)
    }
    rect(this.snakeX,this.snakeY,unit,unit)
}
}