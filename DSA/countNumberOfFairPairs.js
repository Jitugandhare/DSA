// 2563. Count the Number of Fair Pairs
// Given a 0-indexed integer array nums of size n and two integers lower and upper, return the number of fair pairs.

// A pair (i, j) is fair if:

// 0 <= i < j < n, and
// lower <= nums[i] + nums[j] <= upper
 

// Example 1:

// Input: nums = [0,1,7,4,4,5], lower = 3, upper = 6
// Output: 6
// Explanation: There are 6 fair pairs: (0,3), (0,4), (0,5), (1,3), (1,4), and (1,5).
// Example 2:

// Input: nums = [1,7,9,2,5], lower = 11, upper = 11
// Output: 1
// Explanation: There is a single fair pair: (2,3).
 




var countFairPairs = function (nums, lower, upper) {
    nums.sort((a, b) => a - b);
    let upperPairs = findPairs(nums, upper + 1);
    let lowerPairs = findPairs(nums, lower);
    console.log("Valid pairs:", upperPairs.filter(pair => !lowerPairs.includes(pair)));
    return upperPairs.length - lowerPairs.length;
};

function findPairs(nums, value) {
    let pairs = [];
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum < value) {
            for (let i = right; i > left; i--) {
                pairs.push([nums[left], nums[i]]);
            }
            left++;
        } else {
            right--;
        }
    }
    return pairs;
}


let nums = [0,1,7,4,4,5], lower = 3, upper = 6;
console.log(countFairPairs(nums,lower,upper))