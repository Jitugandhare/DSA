function TwoSum(a, t) {
    a.sort((a, b) => a - b)
    let l = 0;
    let r = a.length - 1;
    while (l < r) {
        let sum = a[l] + a[r];
        if (sum === t) {
            return [l, r]
        } else if (sum < t) {
            l++
        } else {
            r--
        }
    }
    return []
}



let a = [2, 7, 11, 15]
let t = 9;
console.log(TwoSum(a, t))