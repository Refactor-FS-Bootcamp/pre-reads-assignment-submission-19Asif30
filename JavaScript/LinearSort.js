//Pre-reads Linear Sort(JS)

function linearSort(arr){
  var n = arr.length;
  for(let i = 1; i < n; i++){
    var key = arr[i];
    var j = i - 1;
    while(j >= 0 && arr[j] > key){
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = key;
  }
  return arr;
}
var arr = [5, 4, 3, 1, 2]
console.log("Array before sorting: " + arr);
console.log("\nArray after linear sort: " + linearSort(arr))