function maxProductSubarray(arr) {
    let n = arr.length;
    
    let max=-Infinity;
    for (let i = 0; i < n; i++) {
        let prod=1;
        for (let j = i ; j < n; j++) {
            prod*=arr[j];
            max=Math.max(max,prod)
            
        }
    }console.log(max)

}

let arr = [2, 3, -2, 4];
maxProductSubarray(arr);
let a1=[-2,0,-1];
maxProductSubarray(a1)