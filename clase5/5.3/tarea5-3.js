// Shooter Game

//Assets
var shotImage = new Image();
shotImage.src = '5-3-assets/shot.png';
var monsterImage = new Image();
monsterImage.src = '5-3-assets/monster.png';

var gun_shot = new Audio('5-3-assets/Gun+Shot2.mp3');
var gun_empty = new Audio('5-3-assets/Gun+Cock.mp3');
var gun_reload = new Audio('5-3-assets/Gun+Reload.mp3');
var squish = new Audio('5-3-assets/squish.mp3')

//Event Listeners
canvas.addEventListener('click', click);
window.addEventListener('keydown',check);

//Other Variables
var height = window.innerHeight;
var width = window.innerWidth;
var backcolor = "SkyBlue"
var magazineCapacity = 7;
var magazine = magazineCapacity;
var maxMonsters = 3;
var posX = 0;
var posY = 0;
var mWidth = 49;
var mHeight = 35;
var arrayMonster = [];
var canvasLoaded = false;
var score = 0;

rect({ x: 0, y: 50, width: width, height: height-50, color: backcolor});
writeHeaders();

function init() {

  canvasLoaded = document.body.contains(document.getElementById("canvas"));
  if (arrayMonster.length < maxMonsters && canvasLoaded){
    posX =  Math.floor(Math.random()*(width - 80) + 20);
    posY =  Math.floor(Math.random()*(height - 80) + 20);
    context.drawImage(monsterImage, posX, posY);
    arrayMonster.push({x: posX, y: posY, width: mWidth, height: mHeight});
  }
  setTimeout(init, 500);
}
init();

function click(e) {
    var x = e.clientX;
    var y = e.clientY;

    if (magazine >= 1) {
      var shotX = x - shotImage.width / 2;
      var shotY = y - shotImage.height / 2;
      context.drawImage(shotImage, shotX, shotY);
      magazine--;
      gun_shot.play();

      for (var i = 0; i < arrayMonster.length; i++) {
        var inst = arrayMonster[i];
        if ((x > inst.x && x < inst.x + inst.width) && (y > inst.y && y < inst.y + inst.height)) {
          console.log("hit");
          score++;
          squish.play();
          context.clearRect(inst.x, inst.y, mWidth, mHeight);
          rect({ x: inst.x, y: inst.y, width: mWidth, height: mHeight, color: backcolor});
          rect({ x: shotX, y: shotY, width: 30, height: 26, color: backcolor});
          arrayMonster.splice(i, 1);

        }
        // console.log(x+", "+y);
      }

    }
    else {
      gun_empty.play();
    }
    writeHeaders();
}

function check(e) {
  var code = e.keyCode;
  if (code == 32 && magazine < magazineCapacity) {
    magazine = magazineCapacity;
    gun_reload.play();
  }
  writeHeaders();
}


function writeHeaders() {
  //Instructions
  context.clearRect(10,10,320,30)
  context.font = "18px Arial";
  context.fillStyle = "white";
  context.fillText("Click to shoot, press spacebar to reload",10,30);

  //Bullets
  context.clearRect(width-200,10,100,30)
  context.font = "20px Arial";
  context.fillStyle = "white";
  context.fillText("Bullets: "+magazine+"",width-200,30);

  //Score
  context.clearRect(width-100,10,100,30)
  context.font = "20px Arial";
  context.fillStyle = "white";
  context.fillText("Score: "+score+"",width-100,30);
}
