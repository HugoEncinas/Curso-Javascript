// Visualised sort
var width = window.innerWidth;
var height = window.innerHeight;

var numberElements = 0;
var maxRange = 20; //inclusive
var minRange = 1; //inclusive

var stack = {x:0, y: 10, size: 10, color: 'red'};
var padding = stack.size+2;
var baseWidth = 20;
var baseHeight = maxRange * padding + 10;

window.addEventListener('keypress',check);

function main() {
  var unsortedArray = [];
  var sortedArray= [];
  stack.x = baseWidth
  stack.y = baseHeight;
  resetCanvas();
  //Populate unsorted array with random values from a defined range
  for (var i = 0; i < numberElements; i++) {
    unsortedArray[i] = Math.floor(Math.random()*(maxRange - minRange + 1) + minRange);
  }

  //Draw unsorted array
  drawArray (unsortedArray);

  //Order array with bubble sort
  sortedArray = bubble(unsortedArray);

  //Draw sorted array
  stack.x = baseWidth + numberElements * padding + 20;
  stack.color = 'green';
  drawArray (sortedArray);
};


//draw array function
function drawArray (array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i]; j++) {
      if (j == 0){
        write(array[i],stack.x,stack.y+30);
      }
      square(stack);
      stack.y -= padding;
    }
    stack.y = baseHeight;
    stack.x += padding;
  }
};

//bubble sort function
function bubble(array) {
  for (var i = 0; i < array.length-1; i++) {
    for (var j = 0; j < array.length-1; j++) {
      if (array[j+1]<array[j]) {
        var aux = array[j];
        array[j] = array[j+1];
        array[j+1] = aux;
      }
    }
  }
  return array
};

//write the index value
function write(num, x, y) {
  context.font = "8px Arial";
  context.fillStyle = "white";
  context.fillText(num, x, y);
};

function resetCanvas() {
  context.clearRect(0,0,width,height);
  baseHeight = maxRange * padding + 10;
  stack.x = baseWidth;
  stack.y = baseHeight;
  stack.color = 'red';
};

//keypress event listener
function check(e) {
  var code = e.keyCode;
  if (code == 13 ) { //enter keyCode
    get_number();
  }
};

//draw button click event listener
function click_btn() {
    get_number();
};

function get_number() {
  numberElements = document.getElementById("number-inpt").value;
  maxRange = parseInt(document.getElementById("max-inpt").value);
  minRange = parseInt(document.getElementById("min-inpt").value);
  if (minRange > maxRange){
    alert("Invalid Range");
    return false;
  }
  // document.getElementById("number-inpt").value = ""
  main();
}

//create HTML elements

//Number of elments input
var inptNum = document.createElement("INPUT");
inptNum.setAttribute("type", "text");
inptNum.setAttribute("placeholder", "Number of elements");
inptNum.setAttribute("id", "number-inpt");
inptNum.style.margin = "10px 4px 10px 4px";
document.body.appendChild(inptNum);

//Draw button input
var btn = document.createElement("BUTTON");
btn.setAttribute("id", "number-btn");
btn.textContent  = "Draw!";
btn.addEventListener("click", click_btn);
document.body.appendChild(btn);

//Max range label
var maxLabel = document.createElement("LABEL");
maxLabel.setAttribute("for", "max-inpt");
maxLabel.textContent  = "Max Range";
maxLabel.setAttribute("id", "max-label");
maxLabel.style.margin = "0 4px 0 10px";
document.body.appendChild(maxLabel);

//Max range input
var inptMax = document.createElement("INPUT");
inptMax.setAttribute("type", "text");
inptMax.setAttribute("value", "20");
inptMax.setAttribute("id", "max-inpt");
document.body.appendChild(inptMax);

//Min range label
var minLabel = document.createElement("LABEL");
minLabel.setAttribute("for", "min-inpt");
minLabel.textContent  = "Min Range";
minLabel.setAttribute("id", "min-label");
minLabel.style.margin = "0 4px 0 10px";
document.body.appendChild(minLabel);

//Min range input
var inptMin = document.createElement("INPUT");
inptMin.setAttribute("type", "text");
inptMin.setAttribute("value", "1");
inptMin.setAttribute("id", "min-inpt");
document.body.appendChild(inptMin);

//Name label
var author = document.createElement("SPAN");
author.textContent  = "Hugo Encinas";
author.style.cssFloat  = "right";
author.style.margin  = "25px 0 0 0";
author.style.cssFloat  = "right";
author.style.fontSize   = "10px";
document.body.appendChild(author);
