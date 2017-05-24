var ship = {x: 0,
  y: 0, size: 20, color: 'white'}

var dir = 0;
var rotLeft = false;
var rotRight = false;
var shipPos = {x: canvas.width /2, y: canvas.height /2}

function drawShip() {
  clear()
  context.save();
  context.translate(shipPos.x, shipPos.y)
  if(rotLeft) {
    context.rotate(dir);
  }
  triangle(ship)
  context.restore()
  dir-=.01;
  setTimeout(drawShip, 1);
}
drawShip()

window.addEventListener('keydown', function(ev) {
  if(ev.keyCode == 37) {
    rotLeft = true;
  }else if(ev.keyCode == 39) {
    //rotar der

  }else if(ev.keyCode == 38) {
    //avanzar

  }else {
    //nothing
  }
})

window.addEventListener('keyup', function(ev) {
  rotLeft = false;
})

//
//
// var c = {x: canvas.width /2, y: canvas.height/2, size: 40, color: 'red'}
//
// var dir = 0;
// var centerX = c.x;
// var centerY = c.y;
// var r = 1;
//
//
// function moveCircle(){
//   clear()
//   circle(c)
//   c.x = Math.cos(dir  Math.PI / 180)  r + centerX;
//   c.y = Math.sin(dir  Math.PI / 180)  r + centerY;
//   r++;
//   setTimeout(moveCircle, 1);
// }
//
// // moveCircl
()
