//Pre_Reads Bubble Sort(JS)
function bubbleSort(arr){
  var n = arr.length;
  for(let i = 0; i < n-1; i++){
    for(let j = 0; j < n-1-i; j++){
      if(arr[j] > arr[j+1]){
        var tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp;
      }
    }
  }
  return arr;
}
var arr = [5, 4, 3, 1, 2];
console.log(bubbleSort(arr));