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
