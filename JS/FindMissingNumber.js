//Pre-reads JavaScript Finding the Missing Number
function findMissingNumber(arr) {
  var n = arr.length;
  var missing = 0;
  for (let i = 1; i <= n; i++) {
    if(i != arr[i-1]){
      missing = i;
      break;
    }
  }
  return missing;
}

var arr = [];
for(let i = 0; i < 100; i++){
  if(i == 49)
    continue;
  arr.push(i+1);
}
console.log(findMissingNumber(arr));
