//Snake Game

var fig = {x:100, y: 100, size: 30, color: 'DarkRed'};
var dot = {x:132, y: 132, size: 5, color: 'blue'};
var height = window.innerHeight;
var width = window.innerWidth;
var eaten = false;
var score = 0;
var snake= [fig];
var imgData = context.getImageData(snake[0].x, snake[0].y, snake[0].size, snake[0].size);
var speed = 30;
var velX = 1;
var velY = 0;
var gameover = false;
var pause = false;
var velXPause = 0;
var velYPause = 0;
var currentDirection = "right";
var color = "red";

window.addEventListener('keydown',check);


square(snake[0]);
square(dot);

//Reset canvas and redraw contents
function reset(){
  context.clearRect(0,0,width,height)
  writeHeaders();
  drawBorders();
  square(dot);
}


//Event listener for keyboard events
function check(ev) {
    var code = ev.keyCode;
    switch (code) {
        case 37: //Left arrow
          if(currentDirection!="right") {
            velX = -1,velY = 0;
            currentDirection = "left";
          }
          break;
        case 38: //Up arrow
          if(currentDirection!="down") {
            velX = 0,velY = -1;
            currentDirection = "up";
          }
          break;
        case 39: //Right arrow
          if(currentDirection!="left") {
            velX = 1,velY = 0;
            currentDirection = "right";
          }
          break;
        case 40: //Down arrow
          if(currentDirection!="up") {
            velX = 0,velY = 1;
            currentDirection = "down";
          }
          break;
        case 80: paused(); break; // P or p
        default: ;
    }
}

//Move function
function move (x,y) {

  if (pause) {
    return false;
  }
  var length = snake.length
  reset()
  var prevX = snake[0].x
  var prevY = snake[0].y
  snake[0].x += speed*velX;
  snake[0].y += speed*velY;

  if (gameover){
    over();
    return false;
  }

  for (var i=1; i<snake.length; i++){
    //Moves each body square up to its predecessor's place
    auxX = snake[i].x;
    auxY = snake[i].y;
    snake[i].x = prevX;
    snake[i].y = prevY;
    prevX = auxX;
    prevY = auxY;

    //checks for collision with the snake's own body
    if(snake[0].x==snake[i].x && snake[0].y==snake[i].y) {
      gameover = true;
      velX=0;
      velY=0;
      over();
      return false;
    }
  }

  //detect collision with dots or borders
  for (var i = 0; i < 30; i++) {
    if(eaten){
      break;
    }
    for (var j = 0; j < 30; j++) {
      imgData=context.getImageData(snake[0].x+i,snake[0].y+j,dot.size,dot.size);
      var red = imgData.data[0];
      var green = imgData.data[1];
      var blue = imgData.data[2];
      //checks for collsiion with the blue dot
      if (blue==255){
        console.log("yum");
        eaten = true;
        break;
      }
      //checks for collision with grey border
      else if (red==128) {
        console.log("bump")
        gameover = true;
        velX=0;
        velY=0;
      }
      else{
        eaten=false;
      }
    }
  }

  //If a dot is eaten, update the score and add one body square to the snake
  if(eaten){
    eaten=false;
    score++;
    var bodySize = snake.length
    newX = snake[bodySize-1].x - speed*velX
    neyY = snake[bodySize-1].y - speed*velY
    color = (color=='yellow' ? 'red' : 'yellow');
    var newBody =  {x:newX, y: neyY, size: snake[0].size, color: color};
    snake.push(newBody);

    //Randomly spawns the next blue dot, within the game borders
    dot.x = Math.floor(Math.random()*(width-40)+35)
    dot.x -= dot.x%5
    dot.y = Math.floor(Math.random()*(height-130)+90)
    dot.y -= dot.y%5

  }
  //Redraws the snake
  for (var i=0; i<snake.length; i++){
    square(snake[i]);
  }

  //Automatically move the snake in its current direction
  var func = "move("+velX+","+velY+")"
  setTimeout(func,100)
}

function writeHeaders() {
  //Score
  context.clearRect(width-100,0,100,30)
  context.font = "20px Arial";
  context.fillStyle = "white";
  context.fillText("Score: "+score+"",width-100,30);

  //Instructions
  context.clearRect(210,0,200,30)
  context.font = "18px Arial";
  context.fillStyle = "white";
  context.fillText("Arrows to move, 'p' to pause",210,30);

  //Title
  context.clearRect(10,0,200,30)
  context.font = "18px Arial";
  context.fillStyle = "white";
  context.fillText("Snake Game",10,30);
}

//draw Borders
function drawBorders(){
    rect({x: 0, y:50, color: 'grey', width: width, height: 3}); //top
    rect({x: 0, y:50, color: 'grey', width: 3, height: height}); //left
    rect({x: width-3, y:50, color: 'grey', width: 3, height: height}); //right
    rect({x: 0, y:height-3, color: 'grey', width: width, height: 3}); //bottom
}

//Pauses the game with the 'p' key
function paused() {
  if (!pause) {
    pause = true;
  }
  else {
    pause = false;
    move(velX,velY)
  }
}

//Game Over alert to reset game
function over() {
  if(alert('Game Over, score: '+score+', play again?')){}
  else    window.location.reload();
}

//Start
move(velX,velY);
