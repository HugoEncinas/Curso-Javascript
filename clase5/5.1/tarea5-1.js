//Draws colored square pattern

var height = window.innerHeight;
var width = window.innerWidth;
var squareFig = {x: 0, y: 0, color: '#9400D3', size: 20};
var colors=['#9400D3','#4B0082','#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'];

var i = 0,
    j = 0,
    k = 0,
    numSquares = 0;


function drawSquare() {

  //loops the colors of the squares
  if (k >= 6) {
    k = 0;
  }
  else {
    k ++;
  }
  squareFig.color = colors[k];

  //actually draws the square
  square(squareFig);

  numSquares++;
  console.log(numSquares+" squares");

  //updates position of the next square
  squareFig.x += squareFig.size+1;
  if (squareFig.x >= width) {
    squareFig.x = 0;
    squareFig.y += squareFig.size+1;
  }
  if (squareFig.y >= height) {
    console.log("Finished, total squares: "+numSquares);
    return false;
  }
  setTimeout(drawSquare, 1);
}
drawSquare();
