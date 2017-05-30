// Shooter Game

var height = window.innerHeight;
var width = window.innerWidth;
var magazineCapacity = 3;
var magazine = magazineCapacity;

//Assets
var shotImage = new Image();
shotImage.src = '5-3-assets/shot.png';
var gun_shot = new Audio('5-3-assets/Gun+Shot2.mp3');
var gun_empty = new Audio('5-3-assets/Gun+Cock.mp3');
var gun_reload = new Audio('5-3-assets/Gun+Reload.mp3');

//Event Listeners
canvas.addEventListener('click', click);
window.addEventListener('keydown',check);


writeHeaders();

function click(e) {
    var x = e.clientX;
    var y = e.clientY;
    context.drawImage(shotImage, x-shotImage.width/2, y-shotImage.height/2);

    if (magazine>=1){
      magazine--;
      gun_shot.play();
    }
    else {
      gun_empty.play();
    }
    writeHeaders();
}

function check(e) {
  var code = e.keyCode;
  if (code == 32 && magazine < magazineCapacity) {
    magazine = magazineCapacity
    gun_reload.play();
  }
  writeHeaders();
}


function writeHeaders() {
  //Score
  context.clearRect(width-100,0,100,30)
  context.font = "20px Arial";
  context.fillStyle = "white";
  context.fillText("Bullets: "+magazine+"",width-100,30);
}
