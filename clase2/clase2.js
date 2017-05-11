//
// var myArray = ['pepe', 'tito', 'tete', 'toto']
//
// function existsInArray(value, array) {
//   for (var i = 0; i < array.length; i++) {
//     if(array[i] == value){
//       return true
//     }
//   }
//   return false
// }
//
//
// var client = 'BGHG'
// if(existsInArray(client, myArray)) {
//   console.log('SIIIII');
// }
// else {
//   console.log('NOOOO');
// }
//
// Tarea:
// 1. Array Revert
//
// revert(array)
// input: [2,4,1]
// result: [1,4,2]
//
// 2. Array  modify
// function removeFromArray(value, array){
//
// }
// var x = ['apple', 'orange']
// removeFromArray('apple', x)
// ['orange']
//
// var y = ['a', 'b']
// y.splice(1,1)
// console.log(y);
// //
// 3. bubblesort
//
// input: [2,5,8,0,1]
//
// result: [0,1,2,5,8]
//
// function bubble(array) {
//   //code
//   return orderedArray
// }
//
// var x = bubble([5,3,0]);
// console.log(x); // [0,3,5]
// //


//1 Revert array
(function revert(array){
  var arrayReversed = [];
  for (var i = 0; i < array.length; i++) {
    arrayReversed[i]=array[array.length-1-i];
  }
  return arrayReversed
})(['1','2','3']);

//2 Modify array
(function removeFromArray(value, array){
  var index = array.indexOf(value);
  if (index!=-1){
    array.splice(index,1);
    return array;
  }
  else {
    return "Value not found on array"
  }
})('orange',['apple', 'orange', 'banana']);

//3 Bubble Sort
(function bubble(array) {
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
})([8,5,2,1,1,0]);
