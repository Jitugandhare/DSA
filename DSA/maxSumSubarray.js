// optimize approach

function maximumSumSubAray(n,a){
    let maxSum = -Infinity;  
     let currentSum = 0; 
 
     for (let i = 0; i < n; i++) {
         currentSum = Math.max(a[i], currentSum + a[i]);  
         maxSum = Math.max(maxSum, currentSum);
     }
 
     console.log(maxSum); 
 }
 

// brute force approach
function maximumSumSubAray(n, a) {
    let max = -Infinity;
    for (let i = 0; i < n; i++) {
        let bag = 0;
        for (let j = i; j < n; j++) {
            bag += a[j]
            max = Math.max(max, bag)
        }
    } return max;
}


let n = 5;
let a = [1, 2, 0, 4, 5];
console.log(maximumSumSubAray(n, a));

let n1 = 5;
let a2 = [3, -4, 1, 2, -1];
console.log(maximumSumSubAray(n1, a2));






