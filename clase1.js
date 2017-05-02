// Tarea:
// 1. Repositorio de github
// 2. hacer funcion que haga
// triangle(3)
//  *
//  **
//  ***
//
//  3. triangle2(3)
//
//  ***
//  **
//  *
//
//  4. diagonal(3)
//  0**
//  *0*
//  **0
//
//  diagonal (5)
//  0****
//  *0***
//  **0**
//  ***0*
//  ****0
//
// extra: border (3) (validar menores a 3)
//
// 000
// 0*0
// 000
//
// border (5)
//
// 00000
// 0***0
// 0***0
// 0***0
// 00000

//1
(function triangle(height){
  var rows=[height];
  for (var i=0; i<height; i++) {
    rows[i]="";
    for (var j=0; j<=i; j++) {
      rows[i]+="*";
    }
    console.log(rows[i]);
  }
}(3));

//2
(function triangle2(height){
  var rows=[height];
  for (var i=0; i<height; i++) {
    rows[i]="";
    for (var j=height; j>i; j--) {
      rows[i]+="*";
    }
    console.log(rows[i]);
  }
}(3));

//3
(function diagonal(height){
  var rows=[height];
  for (var i=0; i<height; i++) {
    rows[i]="";
    for (var j=0; j<height; j++) {
      if (i==j){
        rows[i]+="0";
      }
      else{
        rows[i]+="*";
      }
    }
    console.log(rows[i]);
  }
}(5));

//extra
(function border(height){
  if (height>=3){
    var rows=[height];
    for (var i=0; i<height; i++) {
      rows[i]="";
      for (var j=0; j<height; j++) {
        if (i==0||i==height-1||j==0||j==height-1){
          rows[i]+="0";
        }
        else{
          rows[i]+="*";
        }
      }
      console.log(rows[i]);
    }
  }
  else {
    console.log("Favor de poner un número mayor a 2");
  }
}(5));

//extra 2
(function diagonalInversa(height){
  var rows=[height];
  for (var i=0; i<height; i++) {
    rows[i]="";
    for (var j=0; j<height; j++) {
      if (i==height-1-j){
        rows[i]+="0";
      }
      else{
        rows[i]+="*";
      }
    }
    console.log(rows[i]);
  }
}(5));
