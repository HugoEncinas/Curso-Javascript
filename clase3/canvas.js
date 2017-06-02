var canvas = document.createElement('canvas');
canvas.id = "canvas";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = '#000000';
canvas.style.display = 'block'

document.body.style.margin = 0
document.body.style.padding = 0
document.getElementsByTagName('html')[0].style.width = '100%'
document.getElementsByTagName('html')[0].style.height = '100%'
document.getElementsByTagName('body')[0].style.width = '100%'
document.getElementsByTagName('body')[0].style.height = '100%'

window.onload = function() {
  document.body.appendChild(canvas);
}

var context = canvas.getContext('2d')

function clear() {
  context.clearRect(0,0, canvas.width, canvas.height)
}

function square(obj) {
  context.fillStyle = obj.color;
  context.fillRect(obj.x, obj.y, obj.size, obj.size);
}

function triangle(obj) {
  context.beginPath();
  context.fillStyle = obj.color;
  context.moveTo(obj.x - (obj.size / 2), obj.y + (obj.size / 2))
  context.lineTo(obj.x, obj.y - (obj.size / 2))
  context.lineTo(obj.x + (obj.size / 2), obj.y + (obj.size / 2))
  context.lineTo(obj.x - (obj.size / 2), obj.y + (obj.size / 2))
  context.closePath()
  context.fill()
}

function triangle2(obj) {
  context.beginPath();
  context.fillStyle = obj.color;
  context.moveTo(obj.x - (obj.size / 2), obj.y - (obj.size / 2))
  context.lineTo(obj.x + (obj.size / 2), obj.y)
  context.lineTo(obj.x - (obj.size / 2), obj.y + (obj.size / 2))
  context.lineTo(obj.x - (obj.size / 2), obj.y - (obj.size / 2))
  context.closePath()
  context.fill()
}

function rect(obj) {
  context.fillStyle = obj.color;
  context.fillRect(obj.x, obj.y, obj.width, obj.height);
}

function circle(obj) {
  context.beginPath();
  context.arc(obj.x, obj.y, obj.size, 0, 2 * Math.PI, false);
  context.fillStyle = obj.color;
  context.closePath()
  context.fill();
}
