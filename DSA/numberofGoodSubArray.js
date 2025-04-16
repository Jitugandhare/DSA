function numberOfGoodSubArrays(nums, k) {
    let count = 0;
    let freq = new Map(); 
    let pairs = 0; 
    let left = 0; 

    for (let right = 0; right < nums.length; right++) {
        freq.set(nums[right], (freq.get(nums[right]) || 0) + 1);
        pairs += freq.get(nums[right]) - 1;

        while (pairs >= k) { 
            pairs -= freq.get(nums[left]) - 1; 
            freq.set(nums[left], freq.get(nums[left]) - 1);
            left++;
        }

        count += left; 
    }
    
    return count;
}

let nums = [1, 1, 1, 1, 1], k = 10;
console.log(numberOfGoodSubArrays(nums, k)); 