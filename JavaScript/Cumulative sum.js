//Pre-reads Cumulative sum of Array(JS)

function cumulativeSum(arr){
  var n = arr.length;
  var cumulative_arr = []
  for(let i = 0; i < n; i++){
    if(i == 0)
      cumulative_arr.push(arr[i]);
    else{
      var sum = 0;
      for(let j = i; j >=0; j--){
        sum += arr[j];
      }
      cumulative_arr.push(sum);
    }
  }
  return cumulative_arr
}
var arr = [1, 2, 3, 4];
console.log(cumulativeSum(arr));