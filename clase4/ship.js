var ship = {x: 0,
  y: 0, size: 20, color: 'white'}

var dir = 270 * Math.PI/180;
var rotLeft = false;
var rotRight = false;
var move = false;
var movingRadio = 0;
var currentCenterX;
var currentCenterY;
var shipPos = {x: canvas.width /2, y: canvas.height /2}
var bullets = []

function drawShip() {
  clear()
  context.save();
  context.translate(shipPos.x, shipPos.y)
  context.rotate(dir);

  if(rotLeft) {
    dir-=.01;
  }
  if(rotRight) {
    dir+=.01;
  }
  if(move) {
    movingRadio ++;
    shipPos.x = Math.cos(dir) * movingRadio + currentCenterX;
    shipPos.y = Math.sin(dir) * movingRadio + currentCenterY;
  }

  triangle2(ship)

  context.restore()

  bullets.forEach(function(bullet, index) {
    context.save();
    bullet.initRadio ++;
    bullet.obj.x = Math.cos(bullet.initDir) * bullet.initRadio + bullet.centerX;
    bullet.obj.y = Math.sin(bullet.initDir) * bullet.initRadio + bullet.centerY;
    circle(bullet.obj)
    if(bullet.initRadio > canvas.width) {
      bullets.splice(index, 1)
    }
  })
  setTimeout(drawShip, 1);
}

function shoot(){
  var bullet = {
    centerX: shipPos.x,
    centerY: shipPos.y,
    initRadio: 0,
    initDir: dir,
    obj: {x: 0, y: 0, size: 3, color: 'blue'}
  }

  bullets.push(bullet)
}

drawShip()

window.addEventListener('keydown', function(ev) {
  if(ev.keyCode == 37) {
    rotLeft = true;
  }else if(ev.keyCode == 39) {
    rotRight = true;

  }else if(ev.keyCode == 38) {
    move = true;
    movingRadio=0;
    currentCenterX = shipPos.x;
    currentCenterY = shipPos.y;
  }else if(ev.keyCode == 32) {
    shoot();
  }else {
    //nothing
  }
})

window.addEventListener('keyup', function(ev) {
  rotLeft = false;
  rotRight = false;
  move = false;
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
// // moveCircle()
