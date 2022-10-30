//Pre-reads Quick Sort(JS)
function quickSort(arr){
  if(arr.length < 2)
    return arr;
  else{
    var pivot = arr[0];
    var less = [];
    var great = [];
    for(let i = 1; i < arr.length; i++){
      if(arr[i] <= pivot)
        less.push(arr[i]);
      else
        great.push(arr[i]);
    }
    return [quickSort(less)] + [pivot] + [quickSort(great)];
  }
}
var arr = [5, 4, 3, 1, 2];
console.log(quickSort(arr));
