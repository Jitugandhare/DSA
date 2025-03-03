// Trapping Rain Water
// Given n non - negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.

// Example 1:
// Input: height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
// Output: 6

// Explanation: The above elevation map(black section) is represented by array[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1].In this case, 6 units of rain water(blue section) are being trapped.
// Example 2:

// Input: height = [4, 2, 0, 3, 2, 5]
// Output: 9


function trap(n, a) {
    let l = 0;
    let r = n - 1;
    let lmax = a[l];
    let rmax = a[r];
    let trappedWater = 0;
    while (l <= r) {
        if (a[l] <= a[r]) {
            if (a[l] < lmax) {
                trappedWater += lmax - a[l]
            } else {
                lmax = a[l]
            }
            l++;
        } else {
            if (a[r] < rmax) {
                trappedWater += rmax - a[r];
            } else {
                rmax = a[r]
            }
            r--;
        }
    } return trappedWater;
}


let n = 7;
let a = [
    7, 0, 3, 6,
    2, 3, 5
]
    ;
console.log(trap(n, a))