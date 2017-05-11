// Tarea 3
// Dibujar una playita, ciudad
//
// var circle={}
// var rect = {}
//
// circle(circle1)
// rect(rect1)

// sería onda que para la tarea usen for para dibujar cosas repetitivas como un césped de triangulitos o tierra de cuadritos
// inténtenlo por favor, si se la rifan vemos algo de animación el próximo viernes

//
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

//square({x,y,size,color})
//circle({x,y,size,color})
// triangle({x: 50, y: 50, color: 'yellow', size: 20})
// var rect1 = { x: 200, y: 100, width: 30, height: 50, color: 'blue'}
// rect(rect1)

var height = window.innerHeight;
var width = window.innerWidth;

//cielo
rect({ x: 0, y: 0, width: width, height: height, color: 'SkyBlue'})

//sol
circle({x: 0, y: 0, color: 'orange', size: 76})
circle({x: 0, y: 0, color: 'yellow', size: 72})

//rainbow
var colors=['#9400D3','#4B0082','#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000', 'SkyBlue']
for (var i = 0, j=0, size=width*.6, thick=40; i <= thick; i++, j++, size-=1) {
  if (size<0) {
    size=0
  }
  if (j==6){
    j=0
  }
  if (i==thick-1){
    j=7
  }
  circle({x: width/2, y: height-100, color: colors[j], size: size})

}

//cesped
for (var i = 0, color='brown', size=10; i < 100; i+=2) {
  for(var j = 0; j<width; j+=size){
    square({x: j, y: height-i-size, color: color, size: size})
    if (i==98){
      triangle({x: j, y: height-i-size, color: color, size: size})
    }
  }
  color = (color=='brown' ? 'green' : 'brown');
}

//tronco
for (var i = 100, color='brown', size=10; i < 200; i+=2) {
  for(var j = 10; j<width; j+=size*10){
    square({x: j, y: height-i-size, color: color, size: 4})
    triangle({x: j, y: height-i-size+2, color: color, size: 4})
    triangle({x: j+4, y: height-i-size+2, color: color, size: 4})
  }
  color = (color=='brown' ? 'green' : 'brown');
}

//hojas
for (var i = 300, k=0, color='Chartreuse ', size=50; i > 200; i--, k++) {
  for(var j = 12-k/3; j<width; j+=size*2){
    for (var l=0; l<k/(3/2); l++){
      triangle({x: j+l, y: height-i, color: color, size: 5})
      color = (color=='Chartreuse ' ? 'DarkGreen ' : 'Chartreuse ');
    }
  }

}

//manzanas
for (var i = 300, k=0, color='red ', size=50; i > 200; i-=10, k++) {
  for(var j = 12-k*2; j<width; j+=size*2){
    for (var l=0; l<5*k; l+=5){
      circle({x: j+l, y: height-i, color: color, size: 1.6})
    }
  }
}

//firma
var signature={
  0:{"0":1,"1":0,"2":0,"3":1,"4":0,"5":1,"6":0,"7":0,"8":1,"9":0,"10":1,"11":1,"12":1,"13":1,"14":0,"15":1,"16":1,"17":1,"18":1},
  1:{"0":1,"1":0,"2":0,"3":1,"4":0,"5":1,"6":0,"7":0,"8":1,"9":0,"10":1,"11":0,"12":0,"13":0,"14":0,"15":1,"16":0,"17":0,"18":1},
  2:{"0":1,"1":1,"2":1,"3":1,"4":0,"5":1,"6":0,"7":0,"8":1,"9":0,"10":1,"11":0,"12":1,"13":1,"14":0,"15":1,"16":0,"17":0,"18":1},
  3:{"0":1,"1":0,"2":0,"3":1,"4":0,"5":1,"6":0,"7":0,"8":1,"9":0,"10":1,"11":0,"12":0,"13":1,"14":0,"15":1,"16":0,"17":0,"18":1},
  4:{"0":1,"1":0,"2":0,"3":1,"4":0,"5":1,"6":1,"7":1,"8":1,"9":0,"10":1,"11":1,"12":1,"13":1,"14":0,"15":1,"16":1,"17":1,"18":1},
}

//marco
for (var i = 0, color='black', size=Object.keys(signature).length+10; i < size; i++) {
  for(var j = 0; j<Object.keys(signature[0]).length+10; j++){
      if (i==0||i==14||j==0||j==28){
          square({x: width-30+j, y: height-16+i, color: color, size: 1})
      }
      else{
        square({x: width-30+j, y: height-16+i, color: 'white', size: 1})
      }
    }
}

//letras
for (var i = 0, color='black', size=Object.keys(signature).length; i < size; i++) {
  for(var j = 0; j<Object.keys(signature[0]).length; j++){
      if (signature[i][j]==1){
        square({x: width-25+j, y: height-10+i, color: color, size: 1})
      }
    }
}
