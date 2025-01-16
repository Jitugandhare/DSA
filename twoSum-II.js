function twoSum(a, t) {
    let ans = []
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            let sum = a[i] + a[j];
            if (sum === t) {
                return [i+1, j+1]
            }
        }
    } return ans;
}

let a = [2, 7, 11, 15]
let t = 9;
console.log(twoSum(a, t))