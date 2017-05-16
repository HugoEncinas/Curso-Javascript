// Array de figuras
// Dibujar todas con un for

//animaciones
var figure = {x: 100, y: 100, size: 50, color: 'red'}

var velX = 3;
var velY = 3;
function drawSquare() {
  clear()
  square(figure)
  figure.x += velX;
  figure.y += velY;
  if(figure.x >= (canvas.width - figure.size) || figure.x < 0) {
    velX = -velX;
  }
  if(figure.y >= (canvas.height - figure.size) || figure.y < 0) {
    velY = -velY;
  }

  setTimeout(drawSquare, 1)
}

// setInterval(drawSquare, 1)

setTimeout(drawSquare, 1)

//eventos
var fig = {x:100, y: 100, size: 50, color: 'red'}

circle(fig)

canvas.addEventListener('mousedown', mouseDown)
canvas.addEventListener('mousemove', mouseMove)
canvas.addEventListener('mouseup', mouseUp)

var isMouseDown = false;

function mouseDown(ev){
  if(ev.clientX >= (fig.x - fig.size/2) && ev.clientX <= (fig.x + fig.size/2)){
    if(ev.clientY >= (fig.y - fig.size/2) && ev.clientY <= (fig.y + fig.size/2)){
      isMouseDown = true;
    }
  }

}

function mouseMove(ev){
  if(isMouseDown) {
    clear()
    fig.x = ev.clientX;
    fig.y = ev.clientY;
    circle(fig)
  }
}

function mouseUp(ev){
  isMouseDown = false;
}
