function FourSum(arr, target) {
  arr.sort((a, b) =>a - b);
  return arr;
    
}

let arr = [2, 2, 2, 2, 2];
let target = 8;
console.log(FourSum(arr, target))

let n = [1, 0, -1, 0, -2, 2];
let t = 0;
console.log(FourSum(n, t))